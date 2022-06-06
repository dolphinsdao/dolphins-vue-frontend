<template>
    <section class="portfolio" id="portfolio">
        <div class="container">
            <div class="portfolio-title">
                Portfolio
            </div>
            <div class="portfolio-wrap">
                <div class="portfolio-wrap-block">
                    <div class="portfolio-wrap-border">
                        <div class="portfolio-wrap-title">Auction Proceeds</div>
                        <div class="portfolio-wrap-number">◎ {{balance.auctionsProceeds}} SOL</div>
                    </div>
                </div>
                <div class="portfolio-wrap-block">
                    <div class="portfolio-wrap-border">
                        <div class="portfolio-wrap-title">Treasury Value</div>
                        <div class="portfolio-wrap-number2">◎ {{balance.treasuryValue}} SOL</div>
                    </div>
                </div>
                <div class="portfolio-wrap-block">
                    <div class="portfolio-wrap-border">
                        <div class="portfolio-wrap-title">Profit</div>
                        <div class="portfolio-wrap-number3">+{{balance.profit}}%</div>
                    </div>
                </div>
            </div>
            <div>
                <Line :chartData="chartData"
                :chartOptions="chartOptions"/>
            </div>
        </div>
    </section>
</template>

<script>
    import { Line } from 'vue-chartjs'
    import axios from 'axios';
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale,
    } from 'chart.js'

    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale
    );

    export default {
        name: "PortfolioComponent",
        components: {
            Line
        },
        data: function () {
            return {
                chartData: {
                    labels: [],
                    datasets: []
                },
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false
                },
                balance: {}
            }
        },
        created: function () {
            var self = this;
            axios.get("/api/v1/treasury-graph").then(value => {
                const result = value.data;
                self.chartData.labels = result.titles;
                self.chartData.datasets = [{
                    label: 'Treasury Value',
                    data: result.value,
                    fill: false,
                    borderColor: 'rgb(100, 100, 205)',
                    tension: 0.1
                }]
            });
            axios.get("/api/v1/balance", {}).then(value => {
                self.balance = value.data;
            })
        }
    }
</script>

<style scoped>

</style>