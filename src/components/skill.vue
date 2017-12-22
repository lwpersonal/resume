<style lang="stylus" scoped>
@import '../static/css/common.styl'
.box
  overflow hidden
  background url(../static/img/overlay.png) #564871
  background url(../static/img/overlay.png), linear-gradient(45deg, #246a68, #564871, #655361)
  .content
    text-align center
    .content-title
      font-size 1.4rem
    .content-box
      @media screen and (min-width 600px) {
        display flex
      }
      max-width 800px
      margin 40px auto 0 auto
      .skill-box
        margin 0 10px 0 20px
        max-width 240px
        @media screen and (min-width 600px) {
          flex 1
          margin 0 20px 0 40px
        }
        @media screen and (max-width 600px) {
          margin 0 auto
        }
      .skill-info
        margin 0 20px 0 10px
        max-width 240px
        background orange
        @media screen and (min-width 600px) {
          flex 1
          margin 0 20px 0 40px
        }
        @media screen and (max-width 600px) {
          margin 0 auto
        }
      .inner
        //
</style>

<template>
<section class="box" :style="boxSty">
  <div :style="{height: app.scrollWid > 450 ? '76px' : '50px'}"></div>
  <section class="content">
    <h3 class="content-title">技能栈</h3>
    <div class="content-box">
      <section class="skill-box">
        <ul class="inner">
          <li class="height-item">ksjd</li>
        </ul>
      </section>
      <section class="skill-info">dff</section>
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

export default class Skill extends Vue {
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
  _upData(data: any) {
    // 更新Vuex数据状态
    this.$store.commit('_appUpData', data) }
}
</script>

