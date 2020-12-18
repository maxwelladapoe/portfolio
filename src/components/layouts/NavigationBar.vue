<template>
    <div class="my-navbar">
        <div class="section">

            <div class="container has-padding-left-15-tablet has-padding-right-15-tablet">
                <div class="nav-brand">
                    <span class="has-text-weight-bold ">maxwell adapoe</span>
                </div>

                <div @click="showNav=!showNav" class="hamburger">
                    <div class="menu-icon" :class="{'active':showNav}">
                        <span class="line-1"></span>
                        <span class="line-2"></span>
                        <span class="line-3"></span>
                    </div>

                </div>

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