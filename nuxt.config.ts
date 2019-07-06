// @ts-ignore
import Nuxt from '@nuxt/config';
import {Configuration} from 'webpack';

interface NuxtContext {
    isDev: boolean,
    isClient: boolean,
    isServer: boolean,
    loaders: any
}

// noinspection JSUnusedLocalSymbols
const nuxt: Nuxt = {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'Etki!',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/vuetify/1.5.16/vuetify.min.css' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Varela+Round|Material+Icons&display=swap' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/vuetify'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
    ],
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(configuration: Configuration, context: NuxtContext) {

        }
    },
    pageTransition: {
        duration: 0
    }
};

export default nuxt;
