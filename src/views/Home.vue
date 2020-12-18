<template>
    <div class=" has-background-blue-black">

        <div class="section">
        <section class="container ">
            <div class="my-bio">
                <div class="columns">
                    <div class="column is-5">
                        <p class="is-size-4 has-text-white"><span class="title has-text-white has-text-weight-bold">Hello, Nice to meet you</span><br>
                            I am Maxwell Adapoe, a fullstack web & mobile app
                            developer & graphic designer
                            based in Ghana.</p>
                        <p class="subtitle has-margin-top-50 has-text-white has-text-weight-bold">My Current Stack</p>

                        <div class="tags">
                            <span class="tag is-rounded is-outlined">Html</span>
                            <span class="tag is-rounded  is-outlined">Css</span>
                            <span class="tag is-rounded  is-outlined">JavaScript</span>
                            <span class="tag is-rounded  is-outlined">Vue Js</span>
                            <span class="tag is-rounded  is-outlined">Node</span>
                            <span class="tag is-rounded  is-outlined">Php</span>
                            <span class="tag is-rounded  is-outlined">Python</span>
                            <span class="tag is-rounded  is-outlined">Java</span>
                            <span class="tag is-rounded  is-outlined">Dart</span>
                            <span class="tag is-rounded  is-outlined">Flutter</span>
                            <span class="tag is-rounded  is-outlined">Sql</span>
                            <span class="tag is-rounded  is-outlined">MongoDb</span>
                            <span class="tag is-rounded  is-outlined">Photoshop</span>
                            <span class="tag is-rounded  is-outlined">Adobe  Illustrator</span>
                            <span class="tag is-rounded  is-outlined">InDesign</span>
                            <span class="tag is-rounded  is-outlined">XD</span>
                        </div>

                        <b-button type="is-info" class="has-margin-top-50" outlined inverted rounded icon-right="file-download-outline"> Download my CV</b-button>

                    </div>

                    <div class="column is-6 is-offset-1-desktop">
                        <div class="">
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


<!--        <div class="section">-->


<!--        <section class="my-section">-->

<!--            <div class="container">-->
<!--                <div class="columns">-->
<!--                    <div class="column is-6 ">-->

<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

<!--        </section>-->

<!--        </div>-->
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Home',
        components: {}
    }
</script>
