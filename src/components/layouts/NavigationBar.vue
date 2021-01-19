<template>
    <div class="my-navbar">
        <div class="section">

            <div class="container has-padding-left-15-tablet has-padding-right-15-tablet">
                <div class="nav-brand">
                    <span class="has-text-weight-bold ">maxwell adapoe</span>
                </div>

                <a class="hamburger is-red" href="mailto:me@maxwelladapoe.com,maxwelladapoe@gmail.com">
                    <b-icon icon="mail"/>
                </a>



            </div>
            <b-sidebar type="is-light" right fullheight :open.sync="showNav">
                <b-menu class="my-menu">
                    <b-menu-list>
                        <b-menu-item label="Home" class="nav-link"></b-menu-item>
                        <b-menu-item label="Blog"></b-menu-item>
                    </b-menu-list>
                </b-menu>
            </b-sidebar>

        </div>
    </div>
</template>

<script>
    export default {
        name: "NavigationBar",
        data() {
            return {
                showNav: false
            }
        }
    }
</script>

<style scoped>

</style>