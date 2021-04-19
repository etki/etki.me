<template>
  <div>
    <Heading>Etki</Heading>
    <div class="subheader">
      <div>
        Software developer, performance otaku. Java, C# and half a dozen other languages.
      </div>
      <div>
        Russia, Saint-Petersburg. Planning to move to Netherlands, Maastricht in August 2021.
      </div>
      <div v-for="number of telephones">
        Tel.: <a :href="`tel:${number.replaceAll(/\D/g, '')}`">{{number}}</a>.
      </div>
      <div v-for="address in emails">
        Email: <a :href="`mailto:${address}`">{{address}}</a>.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import Heading from '~/components/element/Heading.vue';

@Component({components: {Heading}})
export default class CvHeader extends Vue {
  @Prop({type: Array, required: true})
  public telephones!: string[];
  @Prop({type: Array, required: true})
  public emails!: string[];
}
</script>