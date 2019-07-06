<template>
    <v-container flat class="index-container">
        <v-card>
            <v-card-text>
                <div class="index-container">
                    <v-layout justify-center align-center column>
                        <v-flex>
                            <h1 class="primary--text">Hey, I'm Etki!</h1>
                        </v-flex>
                        <v-flex class="text-xs-center index-section-middle">
                            I'm software engineer from Saint-Petersburg, Russia, and you're on my home page.
                        </v-flex>
                        <v-flex class="text-xs-center">
                            <nuxt-link to="/about">
                                <v-btn color="primary">About</v-btn>
                            </nuxt-link>
                            <nuxt-link to="/presence">
                                <v-btn color="primary">Presence</v-btn>
                            </nuxt-link>
                            <nuxt-link to="/contacts">
                                <v-btn color="primary">Contacts</v-btn>
                            </nuxt-link>
                        </v-flex>
                    </v-layout>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<style lang="sass">
.index-section-middle
    margin: 30px auto

@media (min-width: 600px)
    .index-section-middle
        margin: 60px auto

@media (min-width: 960px)
    .index-container
        margin: 40px auto
</style>
