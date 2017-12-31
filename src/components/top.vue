<template>
<header class="top">
  <my-logopc @click="goGitHub"/>
</header>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import LogoPC from './logopc.vue'

@Component({
  components: {
    'my-logopc': LogoPC
  }
})

export default class Top extends Vue {
  app: any = this.$store.state.AppVuex
  goGitHub() {
    window.open(this.app.moreInfo.GitHub)
  }
}
</script>

<style lang="stylus" scoped>
@import '../static/css/common.styl'

.top
  position fixed
  z-index 98
  top 0
  left 0
  width 100%
  height 76px
</style>
