<template>
    <v-card-title>
        <v-btn to="/" text icon color="primary" class="ml-0" v-if="!disableBackButton">
            <v-icon>arrow_back</v-icon>
        </v-btn>
        <h1 class="primary--text"><slot></slot></h1>
    </v-card-title>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';

    @Component({})
    export default class PageTitle extends Vue {
        @Prop({type: Boolean, default: false}) disableBackButton!: boolean;
    }
</script>
