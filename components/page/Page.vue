<template>
    <v-card>
        <page-title :disable-back-button="disableBackButton">{{ title }}</page-title>
        <v-card-text>
            <slot></slot>
        </v-card-text>
    </v-card>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import PageTitle from './PageTitle.vue';

    @Component({
        components: {PageTitle}
    })
    export default class Page extends Vue {
        @Prop({type: String, required: true}) title!: string;
        @Prop({type: Boolean, default: false}) disableBackButton!: boolean;
    }
</script>
