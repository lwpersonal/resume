<template>
<section class="box" :style="boxSty">
  <div :style="{height: app.scrollWid > 450 ? '76px' : '50px'}"></div>
  <section class="content">
    <h3 class="content-title">我的信息</h3>

    <div class="icon-box">

      <div class="item-box">
        <div class="box-animate">
          <svg class="icon item" 
          id="birthday"
          @mouseenter="mouseEnterFn"
          @mouseleave="mouseLeaveFn"
          aria-hidden="true">
            <use xlink:href="#icon-shengri"></use>
          </svg>
        </div>
        <div class="title">生日/1995.6.2</div>
      </div>

      <div class="item-box">
        <div class="box-animate">
          <svg class="icon item"
          id="Education" 
          @mouseenter="mouseEnterFn"
          @mouseleave="mouseLeaveFn"
          aria-hidden="true">
            <use xlink:href="#icon-xueli"></use>
          </svg>
        </div>
        <div class="title">学历/本科</div>
      </div>

      <div class="item-box">
        <div class="box-animate">
          <svg class="icon item" 
          id="job" 
          @mouseenter="mouseEnterFn"
          @mouseleave="mouseLeaveFn"
          aria-hidden="true">
            <use xlink:href="#icon-zhuangtai"></use>
          </svg>
        </div>
        <div class="title">工作/Web 前端</div>
      </div>

      <div class="item-box">
        <div class="box-animate">
          <svg class="icon item" 
          id="location" 
          @mouseenter="mouseEnterFn"
          @mouseleave="mouseLeaveFn"
          aria-hidden="true">
            <use xlink:href="#icon-zuobiao"></use>
          </svg>
        </div>
        <div class="title">坐标/北京</div>
      </div>
    </div>
  </section>
</section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

import { throttle } from 'lodash'

@Component({
  components: {
  }
})

export default class UserInfo extends Vue {
  app: any = this.$store.state.AppVuex
  whereIcon: string = '' // 当前鼠标在那个图标
  @Prop()

  created () {
    // render前得到router的参数
  }
  mounted () {
  }
  destroyed () {
  }
  get boxSty() {
    return {
      width: this.app.scrollWid + 'px',
      height: this.app.scrollHei + 'px'
    }
  }
  mouseEnterFn(e) {
    e = e || window.event
    this.whereIcon = e.currentTarget.id }
  mouseLeaveFn() {
    this.whereIcon = '' }
  _upData(data: any) {
    // 更新Vuex数据状态
    this.$store.commit('_appUpData', data) }
}
</script>

<style lang="stylus" scoped>
@import '../static/css/common.styl'
@keyframes arc1 {
  0%   {
    opacity 0 }
  10% {
    opacity 1
  }
  50% {
    opacity 1
  }
  100% {
    transform translate(-50%, -50%) scale(1.7)
    opacity 0 }
}
@keyframes arc2 {
  0%   {
    opacity 0 }
  10% {
    opacity 1
  }
  50% {
    opacity 1
  }
  100% {
    transform translate(-50%, -50%) scale(1.4)
    opacity 0 }
}
.box
  background url(../static/img/overlay.png), linear-gradient(45deg, #564871, #655361, #85505f)
  .content
    text-align center
    .content-title
      font-size 1.4rem
    .icon-box
      display flex
      flex-wrap wrap
      justify-content space-around
      max-width 750px
      margin 20px auto 0 auto
      padding 0 20px
      .item-box
        margin 0 10px
        @media screen and (min-width 380px) and (max-width 450px) {
          min-width 150px
        }
        text-align center
        .item
          position relative
          z-index 10
          transition .5s all ease
          display block
          padding 10px
          border-radius 50%
          background rgba(255,255,255,0.2)
          @media screen and (max-width 680px) {
            width 25px
            height 25px
          }
          @media screen and (min-width 680px) {
            width 60px
            height 60px
          }
        .box-animate
          position relative
          margin 20px auto 10px auto
          @media screen and (max-width 680px) {
            width 45px
            height 45px
          }
          @media screen and (min-width 680px) {
            width 80px
            height 80px
          }
        .box-animate::before
          content ''
          position absolute
          opacity 0
          transition all .5s ease-out
          top 50%
          left 50%
          transform translate(-50%, -50%) scale(1)
          display block
          width 100%
          height 100%
          border-radius 50%
          // border 3px solid rgba(255,255,255,0.1)
          box-shadow: 0 0 0 2px rgba(255,255,255,.1)
        .box-animate::after
          content ''
          position absolute
          opacity 0
          transition all .5s ease-out
          top 50%
          left 50%
          transform translate(-50%, -50%) scale(1)
          display block
          width 100%
          height 100%
          border-radius 50%
          // border 3px solid rgba(255,255,255,0.1)
          box-shadow: 0 0 0 2.5px rgba(255,255,255,.1)
        .box-animate:hover
          .item
            transform scale(.95)
          &:hover::after
            animation arc1 1.5s
            animation-fill-mode forwards
          &:hover::before
            animation arc2 1.5s
            animation-fill-mode forwards
</style>
