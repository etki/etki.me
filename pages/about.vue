<template>
    <page title="About">
        <div class="text">
            <p>
                My real name is not Etki, but I don't like it, so I'm hiding under pseudonyms online. Etki's my
                pseudonym as a software engineer.
            </p>

            <p>
                I've started in 2010, when I've enrolled as a sound engineer; I thought that it would be cool to have a
                site for myself when I graduate. When I've graduated, well... Turned out my shyness didn't play well
                with job I've been taught, so I've just jumped into IT, since talking to computers is much much easier.
            </p>

            <p>
                My current stack is Java, ElasticSearch, Cassandra, different frameworks (mostly Spring tho), and I
                prefer Maven over Gradle. I'm also looking forwards C#, since it's same as Java, but much cooler (sorry,
                java folks). Sometimes I do weird and completely different stuff in other languages and environments, so
                I've worked with Ruby (Chef, some self-created gems), JS/TS, Vue (which I used to enrich 3-d panos
                played by <a href="https://www.marzipano.net/">Marzipano</a>) / Vuex / Nuxt, a tiny bit of React, a
                little bit of Python, a lot of god-forsaken PHP (and even FXAA in it, I'm not kidding), I can read
                simplest assembly listings and know what's false sharing and cache coherence, had some Scala but didn't
                like it, same with Spark, and a lot more, but this list has already turned damn boring.
            </p>

            <p class="mb-0">That's it :P</p>
        </div>
    </page>
</template>
<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import Page from '../components/page/Page.vue';

    @Component({
        components: {Page}
    })
    export default class AboutPage extends Vue {}
</script>
