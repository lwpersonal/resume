<template>
<section class="wrap" id="wrap" :style="boxSty">

  <my-first />

  <about-me />

  <user-info />

  <my-skill />

</section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'

import Me from './me.vue'
import userInfo from './userinfo.vue'
import Skill from './skill.vue'
import AboutMe from './aboutme.vue'

@Component({
  components: {
    'my-first': Me,
    'user-info': userInfo,
    'my-skill': Skill,
    'about-me': AboutMe
  }
})

export default class Home extends Vue {
  app: any = this.$store.state.AppVuex
  animatedName: string = 'up' // up down
  created () {
    // render前得到router的参数
  }
  mounted () {
  }
  destroyed () {
  }
  @Watch('app.index')
  indexChange(newIndex, oldIndex) {
    console.log(oldIndex +'=>' + newIndex)
  }
  get boxSty() {
    return { transform: 'translateY(-' + (this.app.index * this.app.scrollHei) + 'px)' } }
  _upData(data: any) {
    // 更新Vuex数据状态
    this.$store.commit('_appUpData', data) }
}
</script>

<style lang="stylus" scoped>
@import '../static/css/common.styl'
.wrap
  width 100%
  transition all ease .5s
</style>
