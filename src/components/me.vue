<template>
<section class="box" :style="boxSty">
  <div :style="{height: app.scrollWid > 450 ? '76px' : '50px'}"></div>
  <section class="content">
    <img src="../static/img/me.png" class="my-img" />
    <h3 class="title">{{app.myInfo.title}}</h3>
    <div class="line"></div>
    <p class="name">我叫 <span class="my-name">{{app.myInfo.name}}</span></p>
    <p class="job">是一名 <span class="job-name">{{app.myInfo.jobIntension}}</span></p>
    <p class="more">{{app.myInfo.more}}</p>
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

export default class Me extends Vue {
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

<style lang="stylus" scoped>
@import '../static/css/common.styl'
.box
  background url(../static/img/overlay.png), linear-gradient(45deg, #655361, #85505f, #8f454f)
  .content
    text-align center
    @media screen and (max-width 450px)
      .my-img
        display block
        width 100px
        height 100px
        margin 30px auto 0 auto
        border-radius 50%
    @media screen and (min-width 450px)
      .my-img
        display block
        width 150px
        height 150px
        margin 50px auto 0 auto
        border-radius 50%
    .title
      margin 30px 0 0 0
      padding 20px
      font-style oblique
      font-size 1.2rem
    .line
      width 80%
      height 1px
      margin 20px auto 0 auto
      background #fff
    .name
      margin 40px 0 0 0
      line-height 40px
      .my-name
        font-size 1.2rem
    .job
      line-height 40px
      .job-name
        font-size 1.2rem
    .more
      padding 0 20px
</style>
