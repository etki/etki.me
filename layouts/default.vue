<template>
    <v-app>
        <v-toolbar color="white" class="navbar">
            <v-layout justify-center row>
                <v-flex class="width-limiter">
                    <v-layout row>
                    <v-toolbar-title>
                        <nuxt-link to="/" class="logo">
                            <v-btn flat color="primary">
                                Etki!
                            </v-btn>
                        </nuxt-link>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items class="hidden-sm-and-down">
                        <nuxt-link to="/about">
                            <v-btn flat color="primary">
                                About
                            </v-btn>
                        </nuxt-link>
                        <nuxt-link to="/presence">
                            <v-btn flat color="primary">
                                Presence
                            </v-btn>
                        </nuxt-link>
                        <nuxt-link to="/contacts">
                            <v-btn flat color="primary">
                                Contacts
                            </v-btn>
                        </nuxt-link>
                    </v-toolbar-items>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-toolbar>
        <v-container class="width-limiter" fill-height>
            <v-container fluid pa-0>
                <!--suppress CheckEmptyScriptTag -->
                <nuxt />
            </v-container>
        </v-container>
        <footer class="cellar">
            <v-layout>
                <v-spacer></v-spacer>
                <v-flex class="logos text-xs-right">
                    Built with:
                    <vue-logo />
                    <nuxt-logo />
                    <vuetify-logo />
                </v-flex>
            </v-layout>
        </footer>
    </v-app>
</template>

<style lang="sass">
html
    font-size: 16px
    word-spacing: 1px
    -ms-text-size-adjust: 100%
    -webkit-text-size-adjust: 100%
    -moz-osx-font-smoothing: grayscale
    -webkit-font-smoothing: antialiased
    box-sizing: border-box
    overflow: auto

body, .application
    font-family: 'Varela Round', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
    overflow: auto
    font-size: 18px

*, *:after, *:before
    margin: 0

.navbar
    a
        text-decoration: none
    .logo
        button
            padding-top: 6px
            padding-bottom: 6px
            height: inherit
            font-size: 36px
            text-transform: none
    button
        font-size: 18px
        padding-top: 20px
        padding-bottom: 20px
        margin-top: 0
        margin-bottom: 0

.width-limiter
    max-width: 960px

.cellar
    padding: 10px
    .logos img
        height: 18px
</style>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import NuxtLogo from '../components/logo/NuxtLogo.vue';
    import VuetifyLogo from '../components/logo/VuetifyLogo.vue';
    import VueLogo from '../components/logo/VueLogo.vue';

    @Component({
        components: {
            NuxtLogo,
            VuetifyLogo,
            VueLogo
        }
    })
    export default class DefaultLayout extends Vue {}
</script>
