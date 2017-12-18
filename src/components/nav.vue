<template>
<section class="nav">
  <div 
  class="icon-box" 
  v-for="(item, index) in app.nav"
  @click="indexChange(index)">
    <svg 
    :class="{ select: app.index === index }"
    class="icon icon-arc" 
    aria-hidden="true">
      <use :xlink:href="item.icon"></use>
    </svg>
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

export default class Nav extends Vue {
  app: any = this.$store.state.AppVuex
  @Prop()

  created () {
    // render前得到router的参数
  }
  mounted () {
  }
  destroyed () {
  }
  indexChange(index) {
    this._upData({ index })
  }
  _upData(data: any) {
    // 更新Vuex数据状态
    this.$store.commit('_appUpData', data) }
}
</script>

<style lang="stylus" scoped>
@import '../static/css/common.styl'
.nav
  position fixed
  z-index 99
  right 30px
  top 50%
  transform translate(0, -50%)
  .icon-box:first-child
    margin 0
  .icon-box
    position relative
    display block
    transition .5s all ease
    width 30px
    height 30px
    margin 5px 0 0 0
    border-radius 50%
    .icon-arc
      position absolute
      transition .5s all ease
      cursor pointer
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 0px
      height 0px
      padding 5px
      border-radius 50%
      color rgba(0,0,0,0)
      background rgba(255,255,255,0.5)
    .select
      width 20px
      height 20px
      color #fff
      background rgba(0,0,0,0.8)
  .icon-box:hover
    .icon-arc
      width 20px
      height 20px
      color #fff
      background rgba(0,0,0,0.8)

</style>
