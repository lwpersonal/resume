
<style lang="stylus" scoped>
@import '../static/css/common.styl'
.box
  overflow hidden
  background url(../static/img/overlay.png) #578532
  background url(../static/img/overlay.png), linear-gradient(45deg, #338445, #246a68, #564871)
  .content
    text-align center
    .content-title
      font-size 1.4rem
      padding 0 0 40px 0
    .list-box
      width 300px
      margin 0 auto
      text-align left
      .list
        display flex
        align-items center
        padding 10px 0
        .list-icon
          display block
          width 25px
          height 25px
        .item-content
          display block
          text-indent 1em
          font-size 1.2rem
    .other-box
      display flex
      align-items center
      justify-content space-around
      width 300px
      margin 0 auto
      padding 40px 0 0 0
      .other
        display block
        cursor pointer
        width 30px
        height 30px
        padding 10px
        border-radius 50%
        background rgba(0,0,0,0.2)
</style>

<template>
<section class="box" :style="boxSty">
  <div :style="{height: app.scrollWid > 450 ? '76px' : '10px'}"></div>

  <section class="content">
    <h3 class="content-title">联系我</h3>
    <div class="list-box">
      <p v-for="(item, index) in app.contact"
      class="list">
        <svg class="icon list-icon" 
        :style="{color: item.color}"
        aria-hidden="true">
          <use :xlink:href="item.icon"></use>
        </svg>
        <span class="item-content">{{item.content}}</span>
      </p>
    </div>
    <div class="other-box">
      <svg class="icon other" 
      v-for="(item, index) in app.other" 
      @click="goUrl(item.content)"
      aria-hidden="true">
        <use :xlink:href="item.icon"></use>
      </svg>
    </div>
    
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

export default class AboutMe extends Vue {
  app: any = this.$store.state.AppVuex
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
  goUrl(url:any) {
    window.open(url) }
  _upData(data: any) {
    // 更新Vuex数据状态
    this.$store.commit('_appUpData', data) }
}
</script>

