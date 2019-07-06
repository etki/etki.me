<template>
    <page title="Presence">
        Just in case you've been wondering where I usually spend time:

        <h3 class="primary--text pt-4 pb-2">GitHub</h3>

        <p>
            <a href="https://github.com/etki" target="_blank">Etki</a> username was free, so I've jumped in. Years later
            I thought that it would be cool to have a brand named Ayte, so now I publish OSS via it's
            <a href="https://github.com/ayte-io" target="_blank">own organization profile</a>.
        </p>

        <p>
            By the way, <a href="https://github.com/etki/etki.me" target="_blank">here</a>'s this site repo.
        </p>

        <h3 class="primary--text pt-4 pb-2">Medium</h3>

        <p>
            Sometimes I post some personal or technology stuff as (quite unsurprisingly)
            <a href="https://medium.com/@etki" target="_blank">Etki</a>.
        </p>

        <h3 class="primary--text pt-4 pb-2">StackOverflow</h3>

        <p>
            I'm not as active as I've used to be, but here are my profiles:
        </p>

        <ul>
            <li><a href="https://stackoverflow.com/users/2908793/etki" target="_blank">StackOverflow :: En</a></li>
            <li><a href="https://ru.stackoverflow.com/users/16095/etki" target="_blank">StackOverflow :: Ru</a></li>
        </ul>

        <p class="mt-3">I hope I'll be back one day.</p>

        <h3 class="primary--text pt-4 pb-2">Telegram</h3>
        <p>
            My username is <a href="https://t.me/etkee" target="_blank">etkee</a> (they don't allow usernames less than five characters :( ),
            and I participate in some russian thematic chats:
        </p>

        <ul>
            <li v-for="(link, index) in links.telegram" :key="index">
                <a :href="'https://t.me/' + link" target="_blank">{{ link }}</a>
            </li>
        </ul>

        <p class="mt-3 mb-0">
            Also from time to time I post foxes in <a href="https://t.me/beaglephobia" target="_blank">beaglephobia</a>
            channel.
        </p>
    </page>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import Page from '../components/page/Page.vue';

    @Component({components: {Page}})
    export default class Presence extends Vue {
        // noinspection JSMethodCanBeStatic
        data () {
            return {
                links: {
                    telegram: ['elasticsearch_ru', 'chef_ru', 'continuous_integration_ru', 'k8spb']
                }
            }
        }
    }
</script>
