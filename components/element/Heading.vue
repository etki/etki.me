<template>
  <component :is="'h' + size" class="primary--text">
    <slot/>
  </component>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component({})
export default class Heading extends Vue {
  @Prop({type: Number, default: 1}) size!: number;
}
</script>