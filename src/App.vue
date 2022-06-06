<template>
    <MenuComponent/>
    <HeaderComponent/>
    <AuctionsComponent/>
    <AccordionComponent/>
    <PortfolioComponent/>
    <NftComponent/>
    <TokensComponent/>
    <RoadmapComponent/>
    <FooterComponent/>

</template>

<script>
    import AccordionComponent from "@/components/AccordionComponent";
    import AuctionsComponent from "@/components/AuctionsComponent";
    import FooterComponent from "@/components/FooterComponent";
    import HeaderComponent from "@/components/HeaderComponent";
    import MenuComponent from "@/components/MenuComponent";
    import NftComponent from "@/components/NftComponent";
    import PortfolioComponent from "@/components/PortfolioComponent";
    import RoadmapComponent from "@/components/RoadmapComponent";
    import TokensComponent from "@/components/TokensComponent";

    export default {
        name: 'App',
        components: {
            AccordionComponent,
            AuctionsComponent,
            FooterComponent,
            HeaderComponent,
            MenuComponent,
            NftComponent,
            PortfolioComponent,
            RoadmapComponent,
            TokensComponent
        },
        provide: {
            colorsPalette: ["#6D507C", "#C5CBD3", "#8CBCB9", "#DDA448", "BB342F",
                "#A591B9", "#b7b9be", "#BBD1D6", "#D7BDA6", "#D47990",
                "#A66DDE", "#CEDCF2", "#A7DFEC", "#ECBC92", "#EA6183"]
        }
    }
</script>

<style>
    #app {}
</style>
