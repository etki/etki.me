<template>
    <v-container flat mt-5>
    <v-card>
        <v-card-text>
            <v-container pa-3 my-4>
                <v-layout justify-center align-center column>
                    <v-flex mb-5>
                        <h1 class="primary--text">Hey, I'm Etki!</h1>
                    </v-flex>
                    <v-flex mb-5>
                        <div>
                            I'm software engineer from Saint-Petersburg, Russia, and you're on my home page.
                        </div>
                    </v-flex>
                    <v-flex>
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
            </v-container>
        </v-card-text>
    </v-card>
    </v-container>
</template>
