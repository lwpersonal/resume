<template>
  <section class="wrap" id="wrap" >
  <!-- pc端 -->
  <component 
  class="box"
  :is="com" 
  :style="{ 
    position: 'absolute', 
    transform: 'translateY(' + positYcom + ')'}"
    :class="animatedTypecom"/>
  <component 
  class="box"
  :is="comold" 
  :style="{ position: 'absolute', transform: 'translateY(' + positYcomold + ')'}"
  :class="animatedTypecomold"/>

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
  com:any = Me
  comold:any = userInfo
  mobile: any = Me
  nowScreen: string = 'com' // 当前是那个组件
  positYcom: string = '0'
  positYcomold: string = '100%'
  animatedTypecom: string = '' // 是上移动画还是下移动画up上down下
  animatedTypecomold: string = ''
  created () {
    // render前得到router的参数
  }
  mounted () {
  }
  destroyed () {
  }
  @Watch('app.index')
  indexChange(newIndex, oldIndex) {
    const arr: Array<any> = [Me, userInfo, Skill, Experience, Demo, AboutMore]
    const newCom: string = this.nowScreen === 'com' ? 'comold' : 'com'
    
    // 两个组件循环切换位置渲染，一个在视区内，一个就在外
    if(newIndex > oldIndex) {
      // 上，up,索引越来越大
      this[newCom] = arr[newIndex]
      this['positY' + newCom] = '100%'
      // this['positY' + this.nowScreen] = '0'
      this['animatedType' + newCom] = 'up2'
      this['animatedType' + this.nowScreen] = 'up'
    } else if(newIndex < oldIndex) {
      this[newCom] = arr[newIndex]
      this['positY' + newCom] = '-100%'
      // this['positY' + this.nowScreen] = '0'
      this['animatedType' + newCom] = 'down2'
      this['animatedType' + this.nowScreen] = 'down'
    }
    this.nowScreen = this.nowScreen === 'com' ? 'comold' : 'com'
  }
  _upData(data: any) {
    // 更新Vuex数据状态
    this.$store.commit('_appUpData', data) }
}
</script>

<style lang="stylus" scoped>
@import '../static/css/common.styl'
time = 1s
.up
  animation up time + .1s
  animation-fill-mode forwards
@keyframes up {
  0%  {
    prefix(transform, translateY(0))
  }
  100% {
    prefix(transform, translateY(-100%))
  }
}
.up2
  animation up2 time
  // animation-delay 5s
  animation-fill-mode forwards
@keyframes up2 {
  0%  {
    prefix(transform, translateY(100%))
  }
  100% {
    prefix(transform, translateY(0))
  }
}

.down
  animation down time + .1s
  animation-fill-mode forwards
@keyframes down {
  0%  {
    prefix(transform, translateY(0)) }
  100% {
    prefix(transform, translateY(100%)) }
}
.down2
  animation down2 time
  // animation-delay 5s
  animation-fill-mode forwards
@keyframes down2 {
  0%  {
    prefix(transform, translateY(-100%)) }
  100% {
    prefix(transform, translateY(0)) }
}

.wrap
  position relative
  width 100%
  transition all ease .5s
</style>
