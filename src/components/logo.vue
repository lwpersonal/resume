<template>
  <div class="logo-box" @click="goGitHub" title="GitHub">
    <div class="bk"></div>
    <div v-for="index in 4" :class="'line' + index"></div>
    <div v-for="index in 4" :class="'vertical' + index"></div>
    <div v-for="index in 5" :class="'arc' + index"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {
  }
})

export default class Top extends Vue {
  app: any = this.$store.state.AppVuex
  created () {
    // render前得到router的参数
  }
  mounted () {
  }
  destroyed () {
  }
  goGitHub() {
    window.open(this.app.moreInfo.GitHub) }
  _upData(data: any) {
    // 更新Vuex数据状态
    this.$store.commit('_appUpData', data) }
}
</script>

<style lang="stylus" scoped>
@import '../static/css/common.styl'

// pc端尺寸
// wid = 56px
// hei = 56px
// lineWid = 2px
// arcWid = 16px
// arcHei = 16px

// 移动端尺寸
wid = 34px
hei = 34px
lineWid = 1px
arcWid = 10px
arcHei = 10px


arc1_top = (2 * arcHei) + (3 * lineWid) + 1
arc1_lef = lineWid + 1

arc2_top = (2 * arcHei) + (3 * lineWid) + 1
arc2_lef = arcWid + (3 * lineWid) + 1

arc3_top = (2 * arcHei) + (3 * lineWid) + 1
arc3_lef = (2 * arcWid) + (3 * lineWid) + 1

arc4_top = arcHei + (2 * lineWid) + 1
arc4_lef = (2 * arcHei) + (3 * lineWid) + 1

arc5_top = lineWid + 1
arc5_lef = arcWid + (2 * lineWid) + 1

line2_top = lineWid + arcWid + 1
line3_top = (2 * lineWid) + (2 * arcWid) + 1
line4_top = (3 * lineWid) + (3 * arcWid) + 1

vertical2_top = lineWid + arcHei + 1
vertical3_top = (2 * lineWid) + (2 * arcHei) + 1
vertical4_top = (3 * lineWid) + (3 * arcHei) + 1

// logo动画
.logo-box
  position absolute
  cursor pointer
  top 50%
  left 30px
  width wid
  height hei
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
  width wid
  height hei
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
    background rgba(255,255,255,0.7) }
}

arc() {
  position absolute
  width arcWid
  height arcHei
  border-radius 50%
  background rgba(0,0,0,1)  
}
.arc1
  arc()
  left arc1_lef
  top arc1_top
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
  left arc2_lef
  top arc2_top
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
  left arc3_lef
  top arc3_top
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
  left arc4_lef
  top arc4_top
  animation arc4 4s
  animation-fill-mode forwards
  animation-delay 1.2s
  transform translateY(-50px)
@keyframes arc4 {
  0%   {
    transform translateY(-50px) }
  20% {
    transform translateY(-(arcWid + lineWid)) }
  80% {
    transform translateY(-(arcWid + lineWid)) }
  100% {
    transform translateY(0) }
}

.arc5
  arc()
  left arc5_lef
  top arc5_top
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
    width wid }
}

.line2
  top line2_top
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
    width wid }
}

.line3
  top line3_top
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
    width wid }
}

.line4
  line()
  left 0
  top line4_top
  animation line4 0.5s
  animation-iteration-count 1
  animation-delay .5s
  animation-fill-mode forwards
@keyframes line4
{
  0% {
    width 2px }
  100% {
    width wid }
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
    height hei }
}

.vertical2
  bottom 0
  vertical()
  left vertical2_top
  animation vertical2 .5s
  animation-delay .67s
  animation-fill-mode forwards
@keyframes vertical2 {
  0%   {
    height 2px }
  100% {
    height hei }
}

.vertical3
  bottom 0
  vertical()
  left vertical3_top
  animation vertical3 .5s
  animation-delay .84s
  animation-fill-mode forwards
@keyframes vertical3 {
  0%   {
    height 2px }
  100% {
    height hei }
}

.vertical4
  bottom 0
  vertical()
  left vertical4_top
  animation vertical4 .5s
  animation-delay 1s
  animation-fill-mode forwards
@keyframes vertical4 {
  0%   {
    height 2px }
  100% {
    height hei }
}
</style>
