export default {
    head: {
        title: 'Etki!',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        ],
        link: [
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Varela+Round&display=swap'}
        ]
    },
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/vuetify'
    ]
}