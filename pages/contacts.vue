<template>
    <page title="Contacts">
        <p>
            Ping me if you want to:
        </p>

        <ul>
            <li>
                <a href="https://t.me/etkee" target="_blank">Telegram messenger</a>
            </li>
            <li>
                <a href="mailto:etki@etki.me">Classic email</a>
            </li>
        </ul>
    </page>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import Page from '../components/page/Page.vue';

    @Component({
        components: {Page}
    })
    export default class ContactsPage extends Vue {
    }
</script>
