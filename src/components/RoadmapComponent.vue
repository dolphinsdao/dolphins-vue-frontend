<template>
    <section class="roadmap">
        <div class="container">
            <div class="roadmap-title">
                Road map
            </div>
            <br/>
            <div class="dots-line"><img src="images/dots-line.png" alt="">
                <ul class="slick-dots" style="display: block;" role="tablist">
                    <li class="" role="presentation" v-bind:class="{'slick-active': activePage === 0}">
                        <button type="button" role="tab" id="slick-slide-control20" aria-controls="slick-slide20"
                                aria-label="1 of 4" tabindex="-1" @click="setPage(0)">1
                        </button>
                    </li>
                    <li class="" role="presentation" v-bind:class="{'slick-active': activePage === 1}">
                        <button type="button" role="tab" id="slick-slide-control21" aria-controls="slick-slide21"
                                aria-label="2 of 4" tabindex="-1" @click="setPage(1)">2
                        </button>
                    </li>
                    <li role="presentation" v-bind:class="{'slick-active': activePage === 2}">
                        <button type="button" role="tab" id="slick-slide-control22" aria-controls="slick-slide22"
                                aria-label="3 of 4" tabindex="-1" @click="setPage(2)">3
                        </button>
                    </li>
                    <li role="presentation" v-bind:class="{'slick-active': activePage === 3}">
                        <button type="button" role="tab" id="slick-slide-control23" aria-controls="slick-slide23"
                                aria-label="4 of 4" tabindex="0" aria-selected="true" @click="setPage(3)">4
                        </button>
                    </li>
                </ul>
            </div>

        </div>
        <div class="roadmap-container">
            <Carousel ref="roadmap" :wrap-around="false" :items-to-show="1" v-model="activePage">
                <Slide v-for="slide in slides" :key="slide.index">
                    <div class="roadmap-block">
                        <div class="roadmap-wrap">
                            <div class="roadmap-slider-title" v-html="slide.title"></div>
                            <div class="roadmap-slider-suptitle" v-html="slide.description"></div>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                </template>
            </Carousel>
        </div>
        <br/>
        <br/>
        <br/>
    </section>
</template>

<script>
    import { Carousel, Slide } from 'vue3-carousel';
    export default {
        name: "RoadmapComponent",
        components: {
            Carousel,
            Slide,
        },
        data: function () {
            return {
                activePage: 0,
                slides: [
                    {
                        index: 1,
                        title: "Mid December 2021 - Start of the auction",
                        description: "The first of 100 Dolphins will be auctioned in December 2021, to mark the start of the ongoing process. Every 24 hours one Dolphin will be brought to market. The end of one auction triggers start of the next auction."
                    },
                    {
                        index: 2,
                        title: "Late December 2021 - DAO launch",
                        description: "The DAO itself (Discord+SolaLand) was launched immediately after the first Dolphin was auctioned. However, to keep the Dolphins community truly decentralized, the DAO started making major decisions as early as on the 10th day.<br/" +
                            "<br/><br/>" +
                            "Just after 10 Dolphins were sold, the DAO formed the first proposals and invested some of the proceeds.<br/" +
                            "<br/><br/>" +
                            "The WhitePaper was drawn up by the core team. However, it is available for Holders to comment on and amend so that everyone's perspective is respected. In the WhitePaper all the processes are outlined, defined and structured to ensure that the DD activity is organized, transparent and always sanctioned by the Holders.<br/" +
                            "<br/><br/>" +
                            "DAO proposals are drawn up and voted on by holders - they are meant to drive our investment activity as well as to maintain administrative processes inside the DolphinsDAO. A Realms wallet secured by multisig with 8 signatories is where we keep our funds and NFTs - safety and order are our priorities."
                    },
                    {
                        index: 3,
                        title: "April - End of the auctions & Further progress",
                        description: "Once the 100th Dolphin is sold, the DAO evolves - to ensure the most effective and UF holder experience all the key actions are to be governed via an advanced toolset of Squads. The DAO will develop continuously and infinitely, investing in crypto projects and developing the whole blockchain industry. <br><br>Each holder of the Dolphins should have the ability to sell their NFT. DolphinsDAO will be available for listing on the main Solana NFT marketplaces - Solanart, Magic Eden, Digital Eyes, Alpha Art & Solsea as soon as the 100th Dolphin is sold. <br><br>Once the DAO is set up, advanced analytic tools are to be introduced. We want the DD Holder community to prosper on their own along with the DolphinsDAO treasury. Among those tools: essential news digest, calendar, deep project analysis. <br><br>Lots of community events are to be held: online meet-ups and non-trivial activities only for the DD holders. As a community of just a 100, getting to know each other better is crucial to facilitate the project's growth."
                    },
                    {
                        index: 4,
                        title: "May - Derivative collection launch",
                        description: "DolphinsDAO is looking to expand its influence - Baby Dolphin Pods will be available for public mint.<br/" +
                            "<br/><br/>" +
                            "The idea behind Baby Dolphin Pods and its Roadmap were developed by the DAO. The primary goal of the Pods collection is to empower digital artists, help them find audience and support, as well as professional advice and sponsorship; at the same time for non-artists we aimed for ensuring constant rewards for the holders with minimum engagement from their side.<br/" +
                            "<br/><br/>" +
                            "50% of mint proceeds will fund DolphinsDAO treasury and reward actual contributors to the 2nd gen development.<br/>" +
                            "50% will fund the Pods roadmap completion<br/>" +
                            "More information TBA."
                    }
                ]
            }
        },
        methods: {
            pageUpdated: function (value) {
                console.log("pageUpdated", value);
            },
            setPage: function (page) {
                this.activePage = page;
            }
        }
    }
</script>

<style scoped>

</style>