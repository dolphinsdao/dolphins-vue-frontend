<template>
    <section class="nft">
        <div class="container">
            <div class="nft-border">
                <div class="nft-wrap">
                    <div class="nft-block">
                        <div class="nft-title">
                            NFT Portfolio
                        </div>
                        <div class="nft-block-wrap mobile-only">
                            <div class="nft-block-wrap">
                                <div class="nft-block-other" v-for="(item, index) in groupsPercentage" :key="index">
                                    <button :class="{'nft-pressed': selectedGroupIndex === index }"
                                            class="nft-button nft-hover" @click="selectNftGroup(index )">
                                        <span class="nft-span" :style="{color: colorsPalette[Math.round(index % colorsPalette.length)]}">{{item.percentage}}%</span>{{item.group}}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="nft-block-wrap desktop-only">
                            <div class="nft-block-block" v-if="groupsPercentage.length > 0">
                                <button :class="{'nft-pressed': selectedGroupIndex === 0}"
                                        class="nft-button nft-hover" @click="selectNftGroup(0)">
                                    <span class="nft-span">{{groupsPercentage[0].percentage}}%</span>{{groupsPercentage[0].group}}
                                </button>
                            </div>
                            <div class="nft-block-block" v-if="groupsPercentage.length > 1">
                                <button :class="{'nft-pressed': selectedGroupIndex === 1}"
                                        class="nft-button nft-hover2" @click="selectNftGroup(1)">
                                    <span class="nft-span2">{{groupsPercentage[1].percentage}}%</span>{{groupsPercentage[1].group}}
                                </button>
                            </div>
                            <div class="nft-block-block" v-if="groupsPercentage.length > 2">
                                <button :class="{'nft-pressed': selectedGroupIndex === 2}"
                                        class="nft-button nft-hover3" @click="selectNftGroup(2)">
                                    <span class="nft-span3">{{groupsPercentage[2].percentage}}%</span>{{groupsPercentage[2].group}}
                                </button>
                            </div>
                            <div class="nft-block-block" v-if="groupsPercentage.length > 3">
                                <button :class="{'nft-pressed': selectedGroupIndex === 3}"
                                        class="nft-button nft-hover4" @click="selectNftGroup(3)">
                                    <span class="nft-span4">{{groupsPercentage[3].percentage}}%</span>{{groupsPercentage[3].group}}
                                </button>
                            </div>
                            <div class="nft-block-block" v-if="groupsPercentage.length > 4">
                                <button :class="{'nft-pressed': selectedGroupIndex === 4}"
                                        class="nft-button nft-hover5" @click="selectNftGroup(4)">
                                    <span class="nft-span5">{{groupsPercentage[4].percentage}}%</span>{{groupsPercentage[4].group}}
                                </button>
                            </div>
                            <div class="nft-block-block" v-if="groupsPercentage.length > 5">
                                <button :class="{'nft-pressed': selectedGroupIndex === 5}"
                                        class="nft-button nft-hover6" @click="selectNftGroup(5)">
                                    <span class="nft-span6">{{groupsPercentage[5].percentage}}%</span>{{groupsPercentage[5].group}}
                                </button>
                            </div>
                            <div class="nft-block-block" v-if="groupsPercentage.length > 6">
                                <button :class="{'nft-pressed': selectedGroupIndex === 6}"
                                        class="nft-button nft-hover7" @click="selectNftGroup(6)">
                                    <span class="nft-span7">{{groupsPercentage[6].percentage}}%</span>{{groupsPercentage[6].group}}
                                </button>
                            </div>
                            <div class="nft-block-block" v-if="groupsPercentage.length > 8 && !expanded">
                                <button :class="{'nft-pressed': selectedGroupIndex === 7}"
                                        class="nft-button nft-hover8" @click="expandOther">
                                    <span class="nft-span8">Expand other</span>
                                </button>
                            </div>
                            <div class="nft-block-block" v-if="groupsPercentage.length === 7 || expanded">
                                <button :class="{'nft-pressed': selectedGroupIndex === 7}"
                                        class="nft-button nft-hover8" @click="selectNftGroup(7)">
                                    <span class="nft-span8">{{groupsPercentage[7].percentage}}%</span>{{groupsPercentage[7].group}}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="nft-block2">
                        <div class="nft-img">
                            <Carousel ref="carousel" :wrap-around="false" :pause-autoplay-on-hover="true"
                                      v-if="selectedGroup && selectedGroup.length">
                                <Slide v-for="nft in selectedGroup" :key="nft.address">
                                    <a :href="'https://explorer.solana.com/address/' + nft.address" target="_blank">
                                        <img class="auctions-img-border" :src="nft.image" alt="">
                                    </a>
                                </Slide>
                                <template #addons="{slidesCount}">
                                    <Navigation v-if="slidesCount > 1"/>
                                </template>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div class="desktop-only">
                    <div class="nft-wrap" v-if="expanded">
                        <div class="nft-block-wrap" style="padding: 0">
                            <div class="nft-block-other" v-for="(item, index) in groupsPercentage.slice(8)" :key="index + 8">
                                <button :class="{'nft-pressed': selectedGroupIndex === index + 8}"
                                        class="nft-button nft-hover" @click="selectNftGroup(index + 8)">
                                    <span class="nft-span" :style="{color: colorsPalette[Math.round(index % colorsPalette.length)]}">{{item.percentage}}%</span>{{item.group}}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { Carousel, Navigation, Slide } from 'vue3-carousel';
    import axios from "axios";

    export default {
        name: "NftComponent",
        components: {
            Carousel,
            Slide,
            Navigation,
        },
        inject: ["colorsPalette"],
        data: function () {
            return {
                tokens: [],
                selectedGroupIndex: null,
                selectedGroup: null,
                expanded: false
            }
        },
        methods: {
            expandOther: function () {
                this.expanded = true;
            },
            selectNftGroup: function(index) {
                console.log("selectNftGroup", index);
                this.selectedGroupIndex = index;
                this.selectedGroup = this.groups[this.groupsPercentage[index].group];
                this.$refs.carousel.slideTo(0);
                // this.$refs.carousel.updateSlidesData();
                // this.$refs.carousel.updateSlidesBuffer();
                // this.$refs.carousel.restartCarousel();
            }
        },
        computed: {
            groups: function () {
                var result = {};
                this.tokens.forEach(value => {
                    let existingGroup = result[value.project];
                    if (!existingGroup)
                        result[value.project] = [value];
                    else
                        existingGroup.push(value);
                });
                return result;
            },
            groupsPercentage: function () {
                var result = [];
                const sum = this.tokens.map(value => value.floor).reduce((partial, value) => partial + value, 0);

                for (const [key, value] of Object.entries(this.groups)) {
                    const sumGroup = value.map(value => value.floor).reduce((partial, value) => partial + value, 0);
                    result.push({group: key, percentage: Math.round(sumGroup / sum * 100 * 100) / 100});
                }
                result = result.sort((a, b) => b.percentage - a.percentage);
                return result;
            }
        },
        created: async function () {
            await axios.get("/api/v1/tokens").then((value) => {
                this.tokens = value.data.tokens;
            });
            if (this.groupsPercentage.length > 0) {
                this.selectedGroup = this.groups[this.groupsPercentage[0].group];
                this.selectedGroupIndex = 0;
            }
            console.log("selectedGroup", this.selectedGroup);
        }
    }
</script>

<style scoped>

</style>