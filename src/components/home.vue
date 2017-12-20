<template>
<section class="wrap" id="wrap" :style="boxSty">

  <my-first />

  <user-info />

  <my-skill />

  <my-experience />

  <my-demo />
  
  <about-more />

</section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'

import Me from './me.vue'
import userInfo from './userinfo.vue'
import Skill from './skill.vue'
import Experience from './experience.vue'
import Demo from './demo.vue'
import AboutMore from './aboutme.vue'

@Component({
  components: {
    'my-first': Me,
    'user-info': userInfo,
    'my-skill': Skill,
    'my-experience': Experience,
    'my-demo': Demo,
    'about-more': AboutMore
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
