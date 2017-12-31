<style lang="stylus" scoped>
@import '../static/css/common.styl'
.box
  background url(../static/img/overlay.png) #338445
  background url(../static/img/overlay.png), linear-gradient(45deg, #246a68, #564871)
  .content
    text-align center
    .content-title
      font-size 1.4rem
      padding 0 0 40px 0
    .swiper-box
      width 85%
      max-width 800px
      .swiper-item
        min-height 400px
        padding 0 50px
        .swiper-content_box
          background rgba(255,255,255,0.1)
          min-height 340px
          padding 30px 20px
          line-height 25px
        .title
          font-size 1.3rem
          padding 10px 0
        .skill
          padding 10px 0
        .introduce
          padding 10px 0
          text-align left
        .demo-url
          display inline-block
          cursor pointer
          margin 20px 0 0 0
          padding 5px 10px
          border-radius 3px
          background rgba(255,255,255,0.2)
</style>

<template>
<section class="box" :style="boxSty">
  <div style="height: 76px"></div>

  <section class="content">
    <h3 class="content-title">项目作品</h3>

    <swiper 
    class="swiper-box" 
    :options="swiperOption"
    ref="mySwiper">
      <!-- slides -->
      <swiper-slide
      v-for="(item, index) in app.demo"
      class="swiper-item_box"
      :key="index+'_swiper'">
        <div class="swiper-item" >
          <div class="swiper-content_box">
            <h3 class="title">{{item.title}}</h3>
            <p class="skill">{{item.skill}}</p>
            <p v-if="item.demoUrl" class="up-url">线上地址：{{item.demoUrl}}</p>
            <p class="introduce">{{item.introduce}}</p>
            <p v-if="item.myWork">{{item.myWork}}</p>
            <p 
            v-if="item.url" 
            @click="goUrl(item.url)"
            class="demo-url">{{item.urlTitle}}</p>
          </div>
        </div>
      </swiper-slide>

      <div class="dot" slot="pagination"></div>

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

export default class Demo extends Vue {
  app: any = this.$store.state.AppVuex
  swiperOption: any = {
    // swiper options 所有的配置同swiper官方api配置
    speed: 800,
    loop: true,
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
  goUrl(url:any) {
    console.log(url)
    window.open(url) }
  _upData(data: any) {
    // 更新Vuex数据状态
    this.$store.commit('_appUpData', data) }
}
</script>

