<template>

    <div class="carousel">
        <div class="left">
            <div class="arrow-wrap">
                <div class="arrow prev" @click="prev"></div>
            </div>
        </div>
        <div class="display-area">
            <template v-if="selectedImage">
                <div class="description">
                    <p class="title">{{selectedImage.title}}</p>
                    <p class="type">{{selectedImage.type}}</p>
                    <p class="year">{{selectedImage.year}}</p>
                    <div class="link mt-2">
                        <a class=" is-small" target="_blank" :href="selectedImage.link">View Project</a>
                    </div>
                </div>
                <div class="shape-bg" :class="selectedImage.shape"
                     :style="{backgroundColor:selectedImage.shapeColor}"></div>
                <div class="image">
                    <img class="img" :src="selectedImage.path" alt="">
                </div>
            </template>

        </div>
        <div class="right">
            <div class="arrow-wrap">
                <div class="arrow next" @click="next"></div>
            </div>
        </div>

        <div class="summary mt-1 has-text-weight-bold">
            <div class="arrows">
                <div class="arrow-wrap-alt">

                    <div class="arrow-alt prev" @click="prev"></div>
                </div>

                <div class="arrow-wrap-alt">

                    <div class="arrow-alt next" @click="next"></div>
                </div>
            </div>


            <div>
                {{selectedIndex+1}} of {{images.length}}
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        props: {
            images: {
                type: Array,
                required: true,
            },
            initialIndex: {
                type: Number,
                required: false,
                default: 0
            }
        },
        data() {
            return {
                selectedImage: this.images[0],
                selectedIndex: 0,
            }
        },


        methods: {
            prev() {
                if (this.selectedIndex > 0) {
                    this.selectedIndex--;
                } else {
                    this.selectedIndex = (this.images.length - 1);
                }

                this.selectedImage = this.images[this.selectedIndex]
            },

            next() {
                if ((this.selectedIndex + 1) < this.images.length) {
                    this.selectedIndex++;
                } else {
                    this.selectedIndex = 0;
                }


                this.selectedImage = this.images[this.selectedIndex]
            }
        },

    }
</script>

<style scoped lang="scss">
    .carousel {
        height: 30em;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;
        flex-direction: row;
        @media (max-width: 775px) {
            height: 40em;
            flex-direction: column;
        }


        @media (max-width: 530px) {
            height: 35em;
            flex-direction: column;
        }


        @media (max-width:400px) {
            height: 35em;
            flex-direction: column;
        }


    }

    .summary {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-between;

        right: 0;
        bottom: 0;
        text-align: right;

    }

    .left, .right {
        width: 10em;

        @media (max-width: 1215px) {
            width: 5em;

        }
        @media (max-width: 950px) {
            display: none;
        }

        cursor: pointer;
        display: flex;
        align-items: center;


    }

    .arrows {
        display: flex;

    }

    .arrow-wrap .arrow-wrap-alt {

        width: 10em;
        height: 3em;
        display: flex;
        align-items: center;


    }

    .arrow-wrap {
        @media (max-width: 1215px) {
            width: 5em;
        }

        @media (max-width: 950px) {
            display: none;
        }
    }

    .arrow-wrap-alt {
        @media (min-width: 950px) {
            display: none;
        }

        &:first-child {
            margin-right: 1em;
        }
    }


    .arrow, .arrow-alt {
        width: 1em;
        height: 1em;
        border: 0.2em solid #000;
        border-left: 0;
        border-top: 0;

        &.prev {
            transform: rotate(135deg);
        }

        &.next {
            transform: rotate(315deg);
        }
    }

    .arrow-alt {
        cursor: pointer;
    }

    .right {
        .arrow-wrap {
            justify-content: flex-end;
        }
    }

    .display-area {
        flex: 1;
        display: flex;
        position: relative;
        align-items: center;


        flex-direction: row;


        @media (max-width: 775px) {
            flex-direction: column;
        }
        .shape-bg {
            width: 25em;
            height: 25em;
            position: absolute;
            z-index: -1;
            left: 50%;
            margin-left: -12.5em;
            top: 50%;
            margin-top: -12.5em;

            @media (max-width: 775px) {
                width: 24em;
                height: 24em;
                margin-left: -12em;
                margin-top: -10em;
            }



            @media (max-width: 530px) {
                width: 20em;
                height: 20em;
                margin-left: -10em;
                margin-top: -6em;
            }


            @media (max-width:400px) {
                width: 15em;
                height: 15em;
                margin-left: -7.5em;
                margin-top: -4.5em;
            }

            @media (max-width:330px) {
                display: none;
            }


            &.circle {
                border-radius: 100%;
            }

            &.rounded-square {
                border-radius: 1em;
            }
        }

        .description {
            width: 20em;
            text-align: left;
            height: auto;

            @media (max-width: 775px) {
                text-align: center;
                width: 100%;
                height: 10em;
            }

            @media (max-width: 530px) {

                height: 14em;
            }

            @media (max-width:400px) {

                height: 15em;

            }

        }

        .image {

        }
    }


</style>