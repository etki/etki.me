<template>
  <div>
    <Header v-if="standalone"/>
    <component :tag="standalone ? 'v-tabs-items' : 'div'">
      <v-tab-item :key="id">
        <Heading :size="2">{{sections[id]}}</Heading>
        <slot/>
      </v-tab-item>
    </component>
  </div>
</template>

<script lang="ts">
import {Component, Prop} from 'vue-property-decorator';
import Header from './Header';
import Heading from '../element/Heading.vue';

@Component({components: {Heading, Header}})
export default class CvSection extends Vue {
  @Prop({type: String, required: true})
  private id!: string;
  // id => name
  @Prop({type: Object, required: true})
  private sections!: {[index: string]: string};
  @Prop({type: Boolean, required: true, default: false})
  private standalone!: boolean;
  @Prop({type: Boolean, required: true, default: false})
  private monochrome!: boolean;

  public data() {
    return {

    };
  }
}
</script>