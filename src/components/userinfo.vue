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

.fade-enter-active {
  transition all 1s
}   
.fade-leave-active {
  transition all .5s
}
.fade-enter {
  opacity 0
  transform translate(0, 50%)
}
.fade-leave-to {
  opacity 0
  transform translate(0, -50%)
}
.box
  overflow hidden
  background url(../static/img/overlay.png) #655361
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
          border 2px solid rgba(255,255,255,0.1)
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
          border 2.5px solid rgba(255,255,255,0.1)
        .box-animate:hover
          .item
            transform scale(.95)
          &:hover::after
            animation arc1 1.5s
            animation-fill-mode forwards
          &:hover::before
            animation arc2 1.5s
            animation-fill-mode forwards
    .content-text
      position relative
      width 80%
      margin 30px auto 0 auto
      .content-item
        position absolute
        top 0
        width 80%
        padding 15px 10%
        border-radius 3px
        background rgba(255,255,255,.1)
</style>

<template>
<section class="box" :style="boxSty">
  <div :style="{height: app.scrollWid > 450 ? '76px' : '50px'}"></div>
  <section class="content">
    <h3 class="content-title">我的信息</h3>

    <section class="icon-box">

      <div class="item-box"
      :key="index+'_title'"
      v-for="(item, index) in app.infoArr">
        <div class="box-animate">
          <svg class="icon item" 
          :id="item.id"
          @touchstart="mouseEnterFn"
          @mouseenter="mouseEnterFn"
          @mouseleave="mouseLeaveFn"
          aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
        </div>
        <div class="title">{{item.title}}</div>
      </div>
    </section>

    <section class="content-text">
      <transition 
      name="fade"
      :key="index+'_animted'"
      v-for="(item, index) in app.infoArr">
        <article 
        v-if="whereIcon === item.id"
        class="content-item"
        :class="item.id">{{item.title}}</article>
      </transition>
    </section>
  </section>
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

export default class UserInfo extends Vue {
  app: any = this.$store.state.AppVuex
  whereIcon: string = this.app.infoArr[0].id // 当前鼠标在那个图标
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
  mouseLeaveFn() { }
  _upData(data: any) {
    // 更新Vuex数据状态
    this.$store.commit('_appUpData', data) }
}
</script>

