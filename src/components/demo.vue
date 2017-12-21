<template>
<section class="box" :style="boxSty">
  <div :style="{height: app.scrollWid > 450 ? '76px' : '50px'}"></div>
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
  
  background url(../static/img/overlay.png) #338445
  background url(../static/img/overlay.png), linear-gradient(45deg, #578532, #338445, #246a68)
</style>
