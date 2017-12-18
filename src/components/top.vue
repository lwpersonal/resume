<template>
<section class="top">
  <div class="logo-box">
    <div class="bk"></div>
    <div v-for="index in 4" :class="'line' + index"></div>
    <div v-for="index in 4" :class="'vertical' + index"></div>
    <div v-for="index in 5" :class="'arc' + index"></div>
  </div>
</section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  components: {
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
  height 76px
  background rgba(0,255,255,0.5)
// logo动画
.logo-box
  position absolute
  top 50%
  left 30px
  width 56px
  height 56px
  animation logo 1s
  animation-delay 3.5s
  animation-fill-mode forwards
  transform translate(0, -50%)
@keyframes logo {
  0%  {
    transform translate(0, -50%) }
  10% { 
    transform translate(10px, -80%) }
  20% { 
    transform translate(-10px, -20%) }
  50% {
    transform translate(0, -50%) }
  80{ 
    transform translate(10px, -80%) }
  90% { 
    transform translate(10px, -80%) }
  100% {
    transform translate(0, -50%) }
}

.bk
  position absolute
  width 56px
  height 56px
  top 0
  left 0
  background rgba(255,255,255,0)
  animation bk 1s
  animation-delay 5s
  animation-fill-mode forwards
@keyframes bk {
  0%  {
    background rgba(255,255,255,0) }
  100% {
    background rgba(255,255,255,1) }
}

arc() {
  position absolute
  width 16px
  height 16px
  border-radius 50%
  background rgba(0,0,0,1)  
}
.arc1
  arc()
  left 3px
  top 39px
  animation arc1 1s
  animation-fill-mode forwards
  transform translateY(-70px)
@keyframes arc1 {
  0%   {
    transform translateY(-70px) }
  100% {
    transform translateY(0) }
}

.arc2
  arc()
  left 21px
  top 39px
  animation arc2 1.5s
  animation-fill-mode forwards
  transform translateY(-70px)
@keyframes arc2 {
  0%   {
    transform translateY(-70px) }
  100% {
    transform translateY(0) }
}

.arc3
  arc()
  left 39px
  top 39px
  animation arc3 1.8s
  animation-fill-mode forwards
  transform translateY(-70px)
@keyframes arc3 {
  0%   {
    transform translateY(-70px) }
  100% {
    transform translateY(0) }
}

.arc4
  arc()
  left 39px
  top 21px
  animation arc4 4s
  animation-fill-mode forwards
  animation-delay 1.2s
  transform translateY(-50px)
@keyframes arc4 {
  0%   {
    transform translateY(-50px) }
  20% {
    transform translateY(-18px) }
  80% {
    transform translateY(-18px) }
  100% {
    transform translateY(0) }
}

.arc5
  arc()
  left 21px
  top 3px
  animation arc5 1s
  animation-fill-mode forwards
  animation-delay 1.34s
  transform translateY(-30px)
@keyframes arc5 {
  0%   {
    transform translateY(-30px) }
  100% {
    transform translateY(0) }
}

line() {
  position absolute
  height 2px
  width 2px
  background rgba(0,0,0,0.6)
}
.line1
  top 0
  right 0
  line()
  animation line2 2s
  animation-iteration-count 1
  animation-delay 1.51s
  animation-fill-mode forwards
@keyframes line2
{
  0% {
    width 2px }
  100% {
    width 56px }
}

.line2
  top 19px
  right 0
  line()
  animation line2 1s
  animation-iteration-count 1
  animation-delay 1.34s
  animation-fill-mode forwards
@keyframes line2
{
  0% {
    width 2px }
  100% {
    width 56px }
}

.line3
  top 37px
  right 0
  line()
  animation line3 1s
  animation-iteration-count 1
  animation-delay 1.17s
  animation-fill-mode forwards
@keyframes line3
{
  0% {
    width 2px }
  100% {
    width 56px }
}

.line4
  line()
  left 0
  top 55px
  animation line4 0.5s
  animation-iteration-count 1
  animation-delay .5s
  animation-fill-mode forwards
@keyframes line4
{
  0% {
    width 2px }
  100% {
    width 56px }
}

vertical() {
  position absolute
  width 2px
  height 2px
  background rgba(0,0,0,0.6)
}
.vertical1
  vertical()
  left 0
  top 0
  animation vertical1 .5s
  animation-fill-mode forwards
@keyframes vertical1 {
  0%   {
    height 2px }
  100% {
    height 56px }
}

.vertical2
  bottom 0
  vertical()
  left 19px
  animation vertical2 .5s
  animation-delay .67s
  animation-fill-mode forwards
@keyframes vertical2 {
  0%   {
    height 2px }
  100% {
    height 56px }
}

.vertical3
  bottom 0
  vertical()
  left 37px
  animation vertical3 .5s
  animation-delay .84s
  animation-fill-mode forwards
@keyframes vertical3 {
  0%   {
    height 2px }
  100% {
    height 56px }
}

.vertical4
  bottom 0
  vertical()
  left 55px
  animation vertical4 .5s
  animation-delay 1s
  animation-fill-mode forwards
@keyframes vertical4 {
  0%   {
    height 2px }
  100% {
    height 56px }
}
</style>
