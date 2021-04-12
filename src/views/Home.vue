<template>
    <div class=" has-background-blue-black">

        <div class="section">
            <section class="container ">
                <div class="my-bio">
                    <div class="columns is-multiline is-mobile">
                        <div class="column is-12-mobile is-12-touch is-5-desktop">
                            <p class="is-size-3 has-text-white has-text-centered-mobile"><span
                                    class="title has-text-white has-text-weight-bold"> Hii! &#x1F44B; nice to meet you</span><br>
                                I am Maxwell Adapoe, a full-stack developer, graphic & UI designer
                                based in Ghana.</p>

                            <p class="subtitle mt-5 has-text-white has-text-weight-bold has-text-centered-mobile">My
                                Current Stack</p>

                            <div class="tags">
                                <span class="tag is-rounded is-outlined">HTML</span>
                                <span class="tag is-rounded  is-outlined">CSS</span>
                                <span class="tag is-rounded  is-outlined">JavaScript</span>
                                <span class="tag is-rounded  is-outlined">Vue Js</span>
                                <span class="tag is-rounded  is-outlined">Node</span>
                                <span class="tag is-rounded  is-outlined">PHP</span>
                                <span class="tag is-rounded  is-outlined">Python</span>
                                <span class="tag is-rounded  is-outlined">Java</span>
                                <span class="tag is-rounded  is-outlined">Dart</span>
                                <span class="tag is-rounded  is-outlined">Flutter</span>
                                <span class="tag is-rounded  is-outlined">SQL</span>
                                <span class="tag is-rounded  is-outlined">MongoDb</span>
                                <span class="tag is-rounded  is-outlined">Photoshop</span>
                                <span class="tag is-rounded  is-outlined">Adobe  Illustrator</span>
                                <span class="tag is-rounded  is-outlined">InDesign</span>
                                <span class="tag is-rounded  is-outlined">XD</span>
                            </div>

                            <div class=" my-buttons my-buttons has-text-centered-mobile">
                                <a href="/downloads/cvMaxwellAdapoe.pdf" download>
                                    <b-button type="is-info" class="mt-5" rounded icon-right="file-download-outline">
                                        Download my CV
                                    </b-button>

                                </a>

                                <a href="mailto:me@maxwelladapoe.com,maxwelladapoe@gmail.com">
                                    <b-button type="is-info" class="mt-5" outlined inverted rounded icon-right="mail">
                                        Send me an email
                                    </b-button>
                                </a>
                            </div>

                        </div>

                        <div class="column is-12-mobile is-12-touch is-6-desktop is-offset-1-desktop">
                            <div class="typed">
                                <vue-typed-js :loop="true" :showCursor="false" :contentType="'html'"
                                              :strings="[
                                                 'do {<br/>&nbsp;&nbsp;&nbsp;&nbsp;design + code <br/>} while (alive)',
                                                 'function(uiUxDes){<br>&nbsp;&nbsp;&nbsp;&nbsp;return true; <br>}',
                                                 'function(frontend){<br>&nbsp;&nbsp;&nbsp;&nbsp;return true; <br>}',
                                                 'function(backend){<br>&nbsp;&nbsp;&nbsp;&nbsp;return true; <br>}',
                                                 ]"
                                              :typeSpeed="150">
                                    <p class="my-caption typing"></p>
                                </vue-typed-js>
                            </div>

                        </div>
                    </div>
                </div>


            </section>
        </div>


        <div class="section">


            <Carousel></Carousel>

        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    import Carousel from "../components/Carousel";

    export default {
        name: 'Home',
        components: {
            Carousel
        }
    }
</script>
