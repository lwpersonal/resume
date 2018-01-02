<style lang="stylus" scoped>
@import '../static/css/common.styl'
.box
  overflow hidden
  background url(../static/img/overlay.png) #564871
  background url(../static/img/overlay.png), linear-gradient(45deg, #564871, #655361)
  .content
    text-align center
    .content-title
      font-size 1.4rem
    .content-box
      margin 40px auto 0 auto
      padding 15px 20px
      .skill-box
        position relative
        width 100%
      skillBox() {
        position absolute
        transition all ease-out .8s
        top 0
        width 750px
        padding 20px
        border-radius 3px
        text-align left
      }
      .skill-box_0
        skillBox()
        transform translate(-375px, 0) scale(1)
        z-index 10
        left 50%
        background rgba(255,255,255,0.2)
        padding 30px 0 0 0
      .skill-box_1
        z-index 8
        cursor pointer
        skillBox()
        transform translate(-750px, 0) scale(.8)
        left 100%
        opacity 0.2
        color #bcbcbc
        background rgba(255,255,255,0.2)
      .skill-box_2
        skillBox()
        cursor pointer
        z-index 9
        transform translate(0, 0) scale(.7)
        left 0
        opacity 0.1
        background rgba(255,255,255,0.2)
      .item
        margin 0 auto
        width 70%
        line-height 30px
        padding 0 0 30px 0
      .item-title
        font-size 1.3rem
      
</style>

<template>
<section class="box" :style="boxSty">
  <div style="height: 76px"></div>
  <section class="content">
    <h3 class="content-title">技能栈</h3>
    <div class="content-box">
      <div class="skill-box">
        <section 
        :style="{minHeight: app.scrollHei - 300 + 'px'}"
        @click="nowIndex = indexL"
        v-for="(itemL, keyL, indexL) in app.skill"
        :class="className(indexL)">
          <p class="item" v-for="(item, key, index) in itemL"><span v-if="typeof key !== 'number'" class="item-title">{{key}}：</span>{{item}}
          </p>
        </section>
      </div>
      
    </div>
  </section>
</section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {
  },
  filters: {
  }
})

export default class Skill extends Vue {
  app: any = this.$store.state.AppVuex
  nowIndex: number = 0

  created () {
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
  className(index) {
    const len = Object.keys(this.app.skill).length

    // [...Array(10).keys()] TS会转义错误
    let arr: Array<string> = Object.keys(Array(len + 1).join('.'))
    const lastArr: Array<string> = arr.splice(this.nowIndex)

    arr = lastArr.concat(arr) // 根据当前index重新排序数组
    // 得到对应元素所在的位置，返回对应的class
    const resIndex: number = arr.indexOf(index + '')

    return 'skill-box_' + resIndex
  }
  _upData(data: any) {
    // 更新Vuex数据状态
    this.$store.commit('_appUpData', data) }
}
</script>


