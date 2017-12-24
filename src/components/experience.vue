<style lang="stylus" scoped>
@import '../static/css/common.styl'
.box
  overflow hidden
  background url(../static/img/overlay.png) #246a68
  background url(../static/img/overlay.png), linear-gradient(45deg, #338445, #246a68, #564871)
  .content
    text-align center
    .content-title
      font-size 1.4rem
      padding 0 0 40px 0
    .swiper-box
      width 80%
      max-width 750px
      .swiper-item
        width 100%
        min-height 100px
        background rgba(255,255,255,0.1)
</style>

<template>
<section class="box" :style="boxSty">
  <div :style="{height: app.scrollWid > 450 ? '76px' : '10px'}"></div>
  <section class="content">
    <h3 class="content-title">前端经历</h3>

    <swiper 
    class="swiper-box" 
    :options="swiperOption"
    ref="mySwiper">
      <!-- slides -->
      <swiper-slide
      v-for="(index) in 1"
      class="swiper-item_box"
      :key="index+'_swiper'">
        <div class="swiper-item">{{index}}</div>
      </swiper-slide>
      <div v-if="!app.version.mobile" class="dot" slot="pagination"></div>
      <div v-if="!app.version.mobile" class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div v-if="!app.version.mobile" class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>

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

export default class Experience extends Vue {
  app: any = this.$store.state.AppVuex
  swiperOption: any = {
    // swiper options 所有的配置同swiper官方api配置
    autoplay: 3000,
    speed: 300,
    loop: true,
    autoplayDisableOnInteraction: true,
    setWrapperSize: false,
    roundLengths: true,
    autoHeight: true,
    // direction: 'vertical',
    grabCursor: true,
    pagination: '.dot',
    uniqueNavElements :false,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    paginationClickable: true,
    mousewheelControl: false,
    // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
    debugger: true,
    // swiper callbacks
    // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
  }
  @Prop()

  created () {
    if(this.app.version.mobile) {
      // 移动端用反转样式
      this.swiperOption = {
        ...this.swiperOption,
        effect : 'flip',
        flip: {
          slideShadows : true,
          limitRotation : true,
        },
      }
    }
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
  get swiperSty() {
    return {
      width: '100%',
      height: '300px',
      background: 'pink'
    }
  }
  _upData(data: any) {
    // 更新Vuex数据状态
    this.$store.commit('_appUpData', data) }
}
</script>
