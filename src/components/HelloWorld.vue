<template>
    <div class="container">
        <section class="ant-layout" id="main-layout"><span id="main-bg"></span><span
                id="bg-gradient"></span><span id="static-header-gradient"></span><span
                id="static-end-gradient"></span>
            <section class="ant-layout" id="width-layout">
                <main class="ant-layout-content" style="overflow: scroll; padding: 30px 48px;">
                    <div class="auctions-navigation-container">
                        <div class="ant-row ant-row-center"
                             style="margin-left: -24px; margin-right: -24px; width: 100%; row-gap: 0px;">
                            <div class="ant-col ant-col-24 img-cont-500 ant-col-md-10"
                                 style="padding-left: 24px; padding-right: 24px;">
                                <div class="auction-view">
                                    <div class="ant-carousel">
                                        <div class="slick-slider slick-initialized">
                                            <div class="slick-list">
                                                <div class="slick-track"
                                                     style="opacity: 1; transform: translate3d(0px, 0px, 0px); width: 377px;">
                                                    <div data-index="0"
                                                         class="slick-slide slick-active slick-current"
                                                         tabindex="-1" aria-hidden="false"
                                                         style="outline: none; width: 377px;">
                                                        <div>
                                                            <div class="sc-gsDKAQ bpapHc">
                                                                <div class="ant-image artwork-image stack-item"
                                                                     style="transform-origin: right bottom; position: static; z-index: 0; margin-left: 0px; background: black; box-shadow: rgba(0, 0, 0, 0.1) 12px 2px 20px 14px; aspect-ratio: 1 / 1;">
                                                                    <img loading="lazy" class="ant-image-img"
                                                                         v-bind:src="auction.image">
                                                                    <div class="ant-image-mask">
                                                                        <div class="ant-image-mask-info"><span
                                                                                role="img" aria-label="eye"
                                                                                class="anticon anticon-eye"><svg
                                                                                viewBox="64 64 896 896"
                                                                                focusable="false"
                                                                                data-icon="eye" width="1em"
                                                                                height="1em" fill="currentColor"
                                                                                aria-hidden="true"><path
                                                                                d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg></span>Preview
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="auction-nav">
                                        <button data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                                                v-on:click="right()"
                                                type="button" class="ant-btn carousel-control-next"
                                                ant-click-animating-without-extra-node="false"><span
                                                class="icon-arrow-left-zero"></span></button>
                                        <button data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                                                v-on:click="left()"
                                                type="button" class="ant-btn carousel-control-prev"
                                                ant-click-animating-without-extra-node="false"><span
                                                class="icon-arrow-right-zero"></span></button>
                                    </div>
                                </div>
                                <h6 class="about-nft-collection">ABOUT THIS NFT</h6>
                                <p class="about-nft-collection a-description">{{auction.description}}</p></div>
                            <div class="ant-col ant-col-24 ant-col-md-14"
                                 style="padding-left: 24px; padding-right: 24px;"><h2 class="art-title">Dolphin
                                #{{auction.num}}</h2>
                                <div class="auction-container">
                                    <div class="bid-info">
                                        <div class="bid-info-container">
                                            <div style="max-width: 350px;"></div>
                                            <div class="actions-place-bid"><span>Auction ended</span></div>
                                        </div>
                                    </div>
                                </div>
                                <p class="ant-row" style="row-gap: 0px;" v-if="!auction.winnerBid">
                                100% of proceeds from Dolphins auctions go to the treasury wallet mutually managed by Dolphins DAO members
                                    <br><br>
                                    Founders team is compensated with Dolphins. Every 10th Dolphin is sent to our wallet.
                                    This allows us to receive governance rights in DolphinsDAO and to cover some of the costs: design, development, etc.
                                </p>
                                <div class="ant-row" style="row-gap: 0px;" v-if="!!auction.winnerBid">
                                    <div class="ant-col bids-lists"><h6 class="info-title h6">Bid History</h6>
                                        <div class="ant-row bid-history" style="row-gap: 0px;">
                                            <div class="ant-col ant-col-8">
                                                <div class="flex ">
                                                    <div style="display: flex; flex-direction: row; align-items: center;">
                                                        <div class="ant-statistic create-statistic"
                                                             style="margin-bottom: 0px; font-size: 16px;">
                                                            <div class="ant-statistic-content"><span
                                                                    class="ant-statistic-content-prefix"><span
                                                                    style="background: rgba(255, 255, 255, 0.05); border-radius: 50%; height: 24px; width: 24px; display: inline-flex; overflow: hidden;"><img
                                                                    src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"></span></span><span
                                                                    class="ant-statistic-content-value">{{auction.winnerBid}} SOL</span>
                                                            </div>
                                                        </div>
                                                        <!--<div class="usd">$953.30</div>-->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ant-col ant-col-8" style="opacity: 0.7;">{{auction.date}}</div>
                                            <div class="ant-col ant-col-8">
                                                <div class="flex-right">
                                                    <div class=""
                                                         style="width: 24px; height: 24px; margin-right: 10px; margin-top: 2px;">
                                                        <div style="border-radius: 50px; overflow: hidden; padding: 0px; margin: 0px; width: 24px; height: 24px; display: inline-block;">
                                                            <svg height="100" version="1.1" width="100"
                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                 xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                 style="overflow: hidden; position: relative;">
                                                                <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></desc>
                                                                <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>
                                                                <rect x="0" y="0" width="24" height="24" rx="0"
                                                                      ry="0" fill="#f90101" stroke="none"
                                                                      style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
                                                                <rect x="0" y="0" width="24" height="24" rx="0"
                                                                      ry="0" fill="#18d1f2" stroke="none"
                                                                      transform="matrix(-0.5722,-0.8201,0.8201,-0.5722,9.6633,30.1112)"
                                                                      style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
                                                                <rect x="0" y="0" width="24" height="24" rx="0"
                                                                      ry="0" fill="#2395e1" stroke="none"
                                                                      transform="matrix(-0.7027,0.7115,-0.7115,-0.7027,39.1916,4.4953)"
                                                                      style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
                                                                <rect x="0" y="0" width="24" height="24" rx="0"
                                                                      ry="0" fill="#f26202" stroke="none"
                                                                      transform="matrix(-0.3401,0.9404,-0.9404,-0.3401,27.9903,21.3608)"
                                                                      style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <span style="opacity: 0.7;">{{winner}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </section>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'HelloWorld',
        props: {},
        data: function () {
            return {
                auctions: [],
                auction: {},
                winner: ""
            }
        },
        methods: {
            left: function () {
                let index = this.auctions.indexOf(this.auction);
                if (index > 0) {
                    this.auction = this.auctions[index - 1];
                    this.winner = this.auction.winner.substring(0, 4) + "..." + this.auction.winner.substring(this.auction.winner.length - 4);
                    this.fetchNFTData(this.auction);
                }
            },
            right: function () {
                let index = this.auctions.indexOf(this.auction);
                if (index < this.auctions.length - 1) {
                    this.auction = this.auctions[index + 1];
                    this.winner = this.auction.winner.substring(0, 4) + "..." + this.auction.winner.substring(this.auction.winner.length - 4);
                    this.fetchNFTData(this.auction);
                }
            },
            fetchNFTData(auction) {
                if (auction && auction.json)
                    axios.get(auction.json)
                        .then((result) => {
                            auction.description = result.data.description;
                        })
            }
        },
        created: async function() {
            var self = this;
            await axios.get("/api/v1/auctions-history")
                .then((result) => {
                    console.log("auctions", result);
                    self.auctions = result.data;
                    self.auction = this.auctions.length > 0
                        ? this.auctions[this.auctions.length - 1]
                        : {};
                    self.fetchNFTData(self.auction);
                    const openMe = document.getElementById('open-me');
                    if (openMe && self.auction) openMe.onclick = function() {
                        window.open(self.auction.link, "_blank");
                    };
                });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
