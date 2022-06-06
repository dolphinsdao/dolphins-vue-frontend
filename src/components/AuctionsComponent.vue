<template>
    <section class="auctions">
        <div class="container">
            <div class="auctions-border">
                <div class="auctions-block">
                    <div class="auctions-img" @click="showImageDialog(auctions.length > 0 ? auctions[0] : null)" style="cursor: pointer">
                        <img class="auctions-img-border" :src="auctions.length > 0 && auctions[0].imageS ? auctions[0].imageS : 'images/auctions-img.png'" alt="">
                    </div>
                    <div class="auctions-info">
                        <!--<div class="auctions-title">
                            Live Auction
                        </div>-->
                        <div class="auctions-number">
                            <div class="auctions-number-border">
                                {{auctions.length > 0 ? '#' + auctions[0].num : ""}}
                            </div>
                        </div>
                        <div class="auctions-link">
                            <a href="https://magiceden.io/marketplace/dolphins_dao" v-if="auctions.length > 0 && auctions[0].link" target="_blank" style="cursor: pointer">
                                Buy on Magic Eden
                            </a>
                        </div>
                    </div>
                </div>
                <div class="auctions-block2">
                    <div class="auctions-past">
                        Past Auctions
                    </div>
                    <div class="auctions-slayder">
                        <Carousel ref="carousel" :items-to-show="5.5" :wrap-around="false" v-if="auctions && auctions.length">
                            <Slide v-for="auction in auctions.slice(1)" :key="auction.address" @click="showImageDialog(auction)" style="cursor: pointer">
                                <div class="auctions-slayder-block">
                                    <div class="auctions-slayder-number">
                                        <div class="auctions-slayder-number-border">
                                            #{{auction.num}}
                                        </div>
                                    </div>
                                    <div class="auctions-slayder-img">
                                        <img class="auctions-img-border" :src="auction.imageS" alt="">
                                    </div>
                                </div>
                            </Slide>

                            <template #addons>
                                <Navigation />
                            </template>
                        </Carousel>
                    </div>
                </div>
                <button class="next-arrow desktop-only" type="button" @click="nextSlide"></button>
            </div>
        </div>
        <div class="auctions-container">
            <div class="auctions-past">
                Past Auctions
            </div>
            <div class="auctions-slayder">
                <div class="slider auctions-sl2">
                    <Carousel ref="carouselMobile" :items-to-show="4.5" :wrap-around="false"
                              v-if="auctions && auctions.length">
                        <Slide v-for="auction in auctions" :key="auction.address" @click="showImageDialog(auction)" style="cursor: pointer">
                            <div class="auctions-slayder-block">
                                <div class="auctions-slayder-number">
                                    <div class="auctions-slayder-number-border">
                                        #{{auction.num}}
                                    </div>
                                </div>
                                <div class="auctions-slayder-img">
                                    <img class="auctions-img-border" :src="auction.imageS" alt="">
                                </div>
                            </div>
                        </Slide>
                    </Carousel>
                </div>
            </div>
        </div>

        <GDialog v-model="showDialog" class="nft-preview-dialog" content-class="nft-preview-dialog">
            <div class="">
                <div style="background-color: rgb(196, 230, 243); overflow-x: hidden;">
                    <img style="min-height: 30vh"
                         class="loadable-image" :src="selectedAuction.image"/>
                </div>
                <div class="auctions-img-description-border" :style="{'padding' : !descriptionExpanded ? '20px 20px 0 20px' : null}">
                    <div class="auctions-img-description" v-html="description"
                         @click="descriptionExpanded = !descriptionExpanded"
                         style="overflow: hidden; cursor: pointer"
                         :class="{'nft-preview-description-collapsed': !descriptionExpanded}"></div>
                </div>
                <div class="icon-wrap" v-if="!descriptionExpanded" @click="descriptionExpanded = !descriptionExpanded"
                     style="cursor: pointer; margin-left: 20px">
                    <div class="icon-text">More</div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14.5L17 9.5H7L12 14.5Z" fill="#F4A051"></path>
                    </svg>
                </div>
                <div class="nft-preview-portfolio-wrap" style="justify-content: center;">
                    <div class="portfolio-wrap-block" style="width: 50%">
                        <div class="portfolio-wrap-border" style="width: 100%">
                            <div class="portfolio-wrap-title">Date</div>
                            <div class="portfolio-wrap-number">{{selectedAuction.date}}</div>
                        </div>
                    </div>
                    <div class="portfolio-wrap-block" style="width: 45%">
                        <div class="portfolio-wrap-border" style="width: 100%" >
                            <div class="portfolio-wrap-title">Winner Bid</div>
                            <div class="portfolio-wrap-number3" v-if="selectedAuction.state == 'TEAM'"
                                 @click="showDisclaimerDialog = true" style="cursor: pointer;">TEAM
                                <img src="@/assets/info.svg" style="vertical-align: bottom; height: 1.2em"/>
                            </div>
                            <div class="portfolio-wrap-number3" v-else>◎ {{selectedAuction.winnerBid}} SOL</div>
                        </div>
                    </div>
                </div>
            </div>
        </GDialog>

        <GDialog v-model="showDisclaimerDialog" class="nft-preview-dialog" content-class="nft-preview-dialog">
            <div class="container">
                <p>100% of proceeds from Dolphins auctions go to the treasury wallet mutually managed by Dolphins DAO members.<br/>
                    Founders team is compensated with Dolphins. Every 10th Dolphin is sent to our wallet.<br/>
                    This allows us to receive governance rights in DolphinsDAO and to cover some of the costs: design, development, etc.
                </p>
            </div>
        </GDialog>
    </section>
</template>

<script>
    import axios from "axios";
    import { Carousel, Slide } from 'vue3-carousel';

    export default {
        name: "AuctionsComponent",
        components: {
            Carousel,
            Slide
        },
        data: function () {
            return {
                auctions: [],
                showDialog: false,
                showDisclaimerDialog: false,
                selectedAuction: null,
                description: null,
                descriptionExpanded: false
            }
        },
        methods: {
            showImageDialog: function (nft) {
                if (nft) {
                    this.selectedAuction = nft;
                    this.showDialog = true;
                    this.description = nft.description;
                }
            },
            nextSlide: function () {
                this.$refs.carousel.next();
                this.$refs.carouselMobile.next();
            }
        },
        watch: {
            showDialog: function (value) {
                if (!value) this.descriptionExpanded = false;
            }
        },
        created: function () {
            axios.get("/api/v1/auctions-history").then((value) => {
                this.auctions = value.data.reverse();
            });
        }
    }
</script>

<style scoped>

</style>