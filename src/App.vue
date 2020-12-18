<template>
    <div id="app">
        <section class="my-hero hero is-fullheight-with-navbar justify-flex-end">
            <div class="big-circle"></div>
            <div class="name-decor-wrap">
                <div class="container">
                    <div class="wrap-name">
                        <span class="p--1 ">maxwell</span>
                        <span class="p--2 leSnake">adapoe</span>
                    </div>

                </div>

            </div>
            <div class="hero-head">
                <NavigationBar></NavigationBar>
            </div>
            <!-- Hero content: will be in the middle -->
            <div class="hero-body">

                <div class="container has-text-centered h-100-mobile">
                    <div class="item-wraps">
                        <div class="scroll-down-button">
                            <div class="down-icon">
                                <div class="line-1"></div>
                                <div class="line-2"></div>
                            </div>

                        </div>
                        <div class="my-image-wrap">
                            <img src="./assets/images/me_clipped_smaller.png" alt="" class="my-image">

                        </div>
                    </div>
                </div>
            </div>

        </section>
        <router-view/>
        <Footer></Footer>

    </div>
</template>

<script>
    import NavigationBar from "./components/layouts/NavigationBar";
    import Footer from "./components/layouts/Footer";

    export default {
        metaInfo: {
            // if no subcomponents specify a metaInfo.title, this title will be used
            title: 'Maxwell Adapoe',
            // all titles will be injected into this template
            titleTemplate: '%s | Maxwell Adapoe'
        },
        data() {
            return {}
        },
        components: {
            NavigationBar,
            Footer
        }
    }

</script>

<style lang="scss">
    @import "./assets/scss/main.scss";

</style>
