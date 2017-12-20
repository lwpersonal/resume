<template>
<header class="top" :style="{height: app.scrollWid > 450 ? '76px' : '50px'}">
  <my-logo v-if="app.scrollWid <= 450" @click="goGitHub"/>
  <my-logopc v-if="app.scrollWid > 450" @click="goGitHub"/>
</header>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

import LogoPC from './logopc.vue'
import Logo from './logo.vue'

@Component({
  components: {
    'my-logo': Logo,
    'my-logopc': LogoPC
  }
})

export default class Top extends Vue {
  app: any = this.$store.state.AppVuex
  @Prop()

  created () {
    // render前得到router的参数
  }
  mounted () {
  }
  destroyed () {
  }
  goGitHub() {
    console.log(this.app.moreInfo.GitHub)
    window.open(this.app.moreInfo.GitHub)
  }
  _upData(data: any) {
    // 更新Vuex数据状态
    this.$store.commit('_appUpData', data) }
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
  // background rgba(0,255,255,0.5)
</style>
