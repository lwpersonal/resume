<style lang="stylus" scoped>
@import '../static/css/common.styl'
.box
  overflow hidden
  background url(../static/img/overlay.png) #246a68
  background url(../static/img/overlay.png), linear-gradient(45deg, #246a68, #564871, #655361)
  .content
    text-align center
    .content-title
      font-size 1.4rem
      padding 0 0 40px 0
    .item-box
      padding 0 10px
      @media screen and (min-width 450px) {
        width 700px
        text-align left
        line-height 25px
      }
      margin 0 auto
      .title
        display inline-block
        padding 10px 0
        font-size 1.3rem
      .time
        display inline-block
        padding 5px 0
        @media screen and (min-width 450px) {
          margin 0 0 0 30px
        }
      .job
        display inline-block
        padding 10px 0
      .tag-box
        display inline-block
        margin 0 0 0 10px
        padding 10px 0
        .tag
          display inline-block
          margin 0 0 0 10px
      .skill
        padding 10px 0
      .list
        padding 5px 0
        font-size .8rem
      .result
        padding 10px 0
      .get
        padding 10px 0
        

</style>

<template>
<section class="box" :style="boxSty">
  <div :style="{height: app.scrollWid > 450 ? '76px' : '10px'}"></div>
  <section class="content">
    <h3 class="content-title">工作经历</h3>
    <section 
    class="item-box"
    v-for="(item, index) in app.experience">
      <h3 class="title">{{item.title}}</h3>
      <p class="time">{{item.time}}</p>
      <br />
      <p class="job">{{item.job}}</p>
      <p class="tag-box">
        <span 
        class="tag" 
        :style="{color: tag.color}"
        v-for="(tag, tagIndex) in item.tag">{{tag.text}}</span>
      </p>
      <p class="skill">{{item.skill}}</p>
      <p class="list" v-for="(list, listIndex) in item.content">- {{list}}</p>
      <p class="result">{{item.result}}</p>
      <p class="get">{{item.get}}</p>
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

export default class Experience extends Vue {
  app: any = this.$store.state.AppVuex
  @Prop()

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
  _upData(data: any) {
    // 更新Vuex数据状态
    this.$store.commit('_appUpData', data) }
}
</script>
