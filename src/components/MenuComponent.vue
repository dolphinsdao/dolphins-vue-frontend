<template>
    <nav class="mt-mobile nav-open">
        <div class="container">
            <div class="mt-munu-mb">

                <div class="header-navigation-wr">
                    <div class="header-navigation">

                        <ul class="header-ul">
                            <li class="header-li">
                                <a @click="scrollTo('portfolio', true)">Treasury</a>
                            </li>
                            <li class="header-li">
                                <a @click="showDialog = true">Whitepaper</a>
                            </li>
                        </ul>
                        <ul class="header-social-ul">
                            <li class="header-social-li">
                                <a href="https://discord.com/invite/dolphinsdao" target="_blank">
                                    <img src="images/header-img.svg" alt="">
                                </a>
                            </li>
                            <li class="header-social-li">
                                <a href="https://twitter.com/dolphins__dao?s=21">
                                    <img src="images/header-img2.svg" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    </nav>
    <header class="header">
        <div class="container">
            <div class="header-wrap">
                <div class="burger" @click="toggleExpand">
                    <i><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 16H3V14H21V16ZM21 10H3V8H21V10Z" fill="black"/>
                    </svg>
                    </i>
                    <i><svg width="24" height="24" viewBox="0 0 50 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="11.3536" y1="1.64645" x2="46.7089" y2="37.0018" stroke="white"/>
                        <line x1="10.6464" y1="36.6464" x2="46.0018" y2="1.29111" stroke="white"/>
                    </svg>

                    </i>
                </div>
                <div class="header-logo">
                    <a href="#">
                        <img src="images/logo.svg" alt="">
                    </a>
                </div>
                <div class="header-link">
                    <ul class="header-ul">
                        <li class="header-li">
                            <a @click="scrollTo('portfolio', false)">Treasury</a>
                        </li>
                        <li class="header-li">
                            <a href="https://dolphins-dao.gitbook.io/dolphins-dao-whitepaper/" target="_blank">Whitepaper</a>
                        </li>
                    </ul>
                </div>
                <div class="header-social">
                    <ul class="header-social-ul">
                        <li class="header-social-li">
                            <a href="https://discord.com/invite/dolphinsdao" target="_blank">
                                <img src="images/header-img.svg" alt="">
                            </a>
                        </li>
                        <li class="header-social-li">
                            <a href="https://twitter.com/dolphins__dao?s=21">
                                <img src="images/header-img2.svg" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <GDialog v-model="showDialog" max-width="95vw" max-height="95vh">
        <div id="dialogContainer">
            <object id="objectWhitepaperPdf" data="/docs/DolphinsDAO - whitepaper.pdf" type="application/pdf" width="100%" height="700">
                If you are unable to view file, you can download from <a href = "/docs/DolphinsDAO - whitepaper.pdf">here</a>
                or download <a target = "_blank" href = "http://get.adobe.com/reader/">Adobe PDF Reader</a> to view the file.
            </object>
            <div class="readFullPdfNote">You can view DolphinsDAO - whitepaper <a href = "/docs/DolphinsDAO - whitepaper.pdf">here</a></div>
        </div>
    </GDialog>
</template>

<script>
    export default {
        name: "MenuComponent",
        data: function () {
            return {
                showDialog: false
            }
        },
        methods: {
            toggleExpand: function () {
                const burger = document.querySelector('.burger');
                const navbar = document.querySelector('.mt-mobile');
                const body = document.querySelector('body');

                navbar.classList.toggle('nav-open');
                body.classList.toggle('body-open');
                burger.classList.toggle('burger-open');
            },
            scrollTo: function(id, toggleClasses) {
                console.log("scroll to", id);

                if (toggleClasses) {
                    const burger = document.querySelector('.burger');
                    const navbar = document.querySelector('.mt-mobile');
                    const body = document.querySelector('body');

                    navbar.classList.toggle('nav-open');
                    body.classList.toggle('body-open');
                    burger.classList.toggle('burger-open');
                }

                document.getElementById(id).scrollIntoView({behavior: 'smooth'})
            }
        }
    }
</script>

<style scoped>

</style>