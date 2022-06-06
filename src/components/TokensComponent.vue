<template>
    <section class="token">
        <div class="container">
            <div class="token-border">
                <div class="token-title">
                    Token Portfolio
                </div>
                <div class="token-wrap">
                    <div class="token-block">

                        <div class="token-block-wrap">
                            <div class="token-block-wrap-blok">
                                <div class="token-block-block" v-for="(coin, index) in coins" :key="coin.title">
                                    <button class="token-button circle-button" :class="{'nft-pressed': selectedCoinIndex === index}" @click="selectCoin(index)">
                                        <span class="token-span" :style="{'color': coinColors[index]}">{{coin.percentage}}%</span>{{coin.title}}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="token-wrap-mb">
                            <div class="token-block-block" v-for="(coin, index) in coins" :key="'mb' + coin.title">
                                <button class="token-button circle-button" :class="{'nft-pressed': selectedCoinIndex === index}" @click="selectCoin(index)">
                                    <span class="token-span" :style="{'color': coinColors[index]}">{{coin.percentage}}%</span>{{coin.title}}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="nft-inner-mb">
                        <div class="nft-inner">
                            <div class="nft-inner-block">
                                <div class="nft-inner-border">
                                    <div class="nft-inner-title">
                                        Tokens
                                    </div>
                                    <div class="nft-inner-suptitle" v-if="selectedCoinIndex >= 0">
                                        {{coins[selectedCoinIndex].title}}
                                    </div>
                                </div>
                            </div>
                            <div class="nft-inner-block">
                                <div class="nft-inner-border">
                                    <div class="nft-inner-title">
                                        Amount
                                    </div>
                                    <div class="nft-inner-suptitle" v-if="selectedCoinIndex >= 0">
                                        {{coins[selectedCoinIndex].balance}}
                                    </div>
                                </div>
                            </div>
                            <div class="nft-inner-block">
                                <div class="nft-inner-border">
                                    <div class="nft-inner-title">
                                        SOL value
                                    </div>
                                    <div class="nft-inner-suptitle" v-if="selectedCoinIndex >= 0">
                                        {{coins[selectedCoinIndex].sol}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="token-block2">
                        <Doughnut
                             :chart-options="chartOptions"
                             :chart-data="chartData"
                             :chart-id="chartId"
                             :dataset-id-key="datasetIdKey"
                             :plugins="plugins"
                             :css-classes="cssClasses"
                             :styles="styles"
                             :width="width"/>
                    </div>
                </div>

                <div class="nft-inner-full">
                    <div class="nft-inner">
                        <div class="nft-inner-block">
                            <div class="nft-inner-border">
                                <div class="nft-inner-title">
                                    Tokens
                                </div>
                                <div class="nft-inner-suptitle" v-if="selectedCoinIndex >= 0">
                                    {{coins[selectedCoinIndex].title}}
                                </div>
                            </div>
                        </div>
                        <div class="nft-inner-block">
                            <div class="nft-inner-border">
                                <div class="nft-inner-title">
                                    Amount
                                </div>
                                <div class="nft-inner-suptitle" v-if="selectedCoinIndex >= 0">
                                    {{coins[selectedCoinIndex].balance}}
                                </div>
                            </div>
                        </div>
                        <div class="nft-inner-block">
                            <div class="nft-inner-border">
                                <div class="nft-inner-title">
                                    SOL value
                                </div>
                                <div class="nft-inner-suptitle" v-if="selectedCoinIndex >= 0">
                                    {{coins[selectedCoinIndex].sol}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {Doughnut} from 'vue-chartjs'
    import {ArcElement, CategoryScale, Chart as ChartJS, Legend, Title, Tooltip} from 'chart.js';
    import axios from "axios";

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

    export default {
        name: "TokensComponent",
        components: {
            Doughnut
        },
        inject: ["colorsPalette"],
        data: function () {
            return {
                selectedCoinIndex: -1,
                coins: [],
                coinColors: [],
                chartData: {
                    labels: [],
                    datasets: [{
                        backgroundColor: [],
                        data: []
                    }]
                },
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        methods: {
            colors: function (count) {
                let result = [];
                for (let i = 0; i < Math.floor(count / this.colorsPalette.length); ++i)
                    result = result.concat(this.colorsPalette);
                result = result.concat(this.colorsPalette.slice(0, count % this.colorsPalette.length));
                return result;
            },
            selectCoin(index) {
                this.selectedCoinIndex = index;
            }
        },
        created: function () {
            var self = this;
            axios.get("/api/v1/coins").then((value) => {
                console.log("coins", value.data);
                var coins = value.data.coins;

                const sum = coins.map(value => value.sol).reduce((partial, value) => partial + value, 0);
                console.log("coins sum", sum);
                let labels = [];
                let data = [];
                var updated = [];
                coins.forEach((value) => {
                    updated.push({
                        title: value.title,
                        percentage: Math.round(value.sol / sum * 100 * 100) / 100,
                        balance: value.balance,
                        sol: value.sol
                    });
                    data.push(value.sol);
                    labels.push(value.title);
                });
                updated = updated.sort((a, b) => (b.percentage - a.percentage));
                self.coins = updated;
                self.coinColors = self.colors(data.length);
                self.selectedCoinIndex = self.coins.length > 0 ? 0 : 1;

                self.chartData = {
                    labels: labels,
                    datasets: [{
                        backgroundColor: self.coinColors,
                        data: data
                    }]
                };
            });
        }
    }
</script>

<style scoped>

</style>