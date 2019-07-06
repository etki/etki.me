<template>
    <page title="Hmph, that's an error">
        Looks like you've followed a broken link. Want to go back to <nuxt-link to="/">home</nuxt-link>?
    </page>
</template>
<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import Page from '../components/page/Page.vue';
    @Component({
        components: {Page}
    })
    export default class Error extends Vue {}
</script>
