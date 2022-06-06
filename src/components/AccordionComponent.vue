<template>
    <section class="section-accordion">
        <div class="container">
            <div class="accordion">


                <div ref="item" class="item" @click="toggleOpen">
                    <p class="text"></p>
                    <div class="inner-block-block">
                    <div class="inner-border">
                        <div class="inner-border-img">
                            <img src="images/inner-border-img.svg" alt="">
                        </div>
                        <div class="inner-title">
                            Every day one Dolphin is sold through auction, total supply is limited to 100 Dolphins
                        </div>
                    </div>
                </div>
                    <div class="icon">
                        <div class="icon-wrap">
                            <div class="icon-text">More benefits</div>
                            <div class="icon-text2">Hide</div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 14.5L17 9.5H7L12 14.5Z" fill="#F4A051"/>
                            </svg>
                        </div>
                    </div>

                    <p></p>

                    <div class="hidden-box">
                        <p></p>
                        <div class="inner-block-block">
                            <div class="inner-border">
                                <div class="inner-border-img">
                                    <img src="images/inner-border-img2.svg" alt="">
                                </div>
                                <div class="inner-title">
                                    100% of mint revenues goes to the treasury wallet managed & owned by the holders
                                </div>
                            </div>
                        </div>
                        <div class="inner-block-block">
                            <div class="inner-border">
                                <div class="inner-border-img">
                                    <img src="images/inner-border-img3.svg" alt="">
                                </div>
                                <div class="inner-title">
                                    Every 10th Dolphin goes to the core team's wallet (dolphinsdao.sol)
                                </div>
                            </div>
                        </div>
                        <div class="inner-block-block">
                            <div class="inner-border">
                                <div class="inner-border-img">
                                    <img src="images/inner-border-img4.svg" alt="">
                                </div>
                                <div class="inner-title">
                                    Every Dolphin grants one share in the treasury & one voting right
                                </div>
                            </div>
                        </div>
                        <div class="inner-block-block">
                            <div class="inner-border">
                                <div class="inner-border-img">
                                    <img src="images/inner-border-img5.svg" alt="">
                                </div>
                                <div class="inner-title">
                                    Every Dolphin has the same rarity, every holder is equal
                                </div>
                            </div>
                        </div>
                        <div class="inner-block-block">
                            <div class="inner-border">
                                <div class="inner-border-img">
                                    <img src="images/inner-border-img6.svg" alt="">
                                </div>
                                <div class="inner-title">
                                    The artwork is completely open-source and free to modify (CC0 license)
                                </div>
                            </div>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "AccordionComponent",
        methods: {
            toggleOpen: function () {
                this.$refs.item.classList.toggle("open")
            }
        }
    }
</script>

<style scoped>

</style>