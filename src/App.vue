/*
 * @Author: AI
 * @Date: 2017-10-11 21:02:36
 * @Last Modified by: AI
 * @Last Modified time: 2017-12-17 23:59:09
 * @describe
 */
<template>
  <div id="app" >
    <!-- 相对屏幕固定的元素 -->
    <section class="fixed-box">
      <my-top />
      <my-nav v-if="app.scrollWid > 450"/>
      <my-footer />
    </section>
    <!-- 路由渲染出口 -->
    <router-view v-if="app.scrollWid"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import store from './router/vuex'
import { throttle } from 'lodash'

import Nav from './components/nav.vue'
import Top from './components/top.vue'
import Footer from './components/footer.vue'

@Component({
  store,
  components: {
    'my-nav': Nav,
    'my-top': Top,
    'my-footer': Footer
  }
})
export default class App extends Vue {
  app: any = this.$store.state.AppVuex
  resizeFn: any = throttle(this.resize, 30)
  scrollFn: any = throttle(this.scroll, 30)
  // 钩子函数
  mounted () {
    console.log(this.app)
    this._upData({ scrollWid: window.innerWidth, scrollHei: window.innerHeight })
    window.addEventListener('resize', this.resizeFn)
    window.addEventListener('mousewheel', this.scrollFn)
  }
  destroyed () {
    window.removeEventListener('mousewheel', this.scrollFn)
    window.removeEventListener('resize', this.resizeFn)
  }
  scroll (e) {
    window.removeEventListener('mousewheel', this.scrollFn)
    e = e || window.event
    const detail: any = e.detail || e.wheelDelta

    if (detail > 0 && this.app.index > 0) { // 当滑轮向上滚动时
      this._upData({ index: this.app.index - 1 })
      setTimeout( () => { window.addEventListener('mousewheel', this.scrollFn) }, 600)
    } else if (detail < 0 && this.app.index < this.app.all) { // 当滑轮向下滚动时
      this._upData({ index: this.app.index + 1 })
      setTimeout( () => { window.addEventListener('mousewheel', this.scrollFn) }, 600) 
    } else {
      window.addEventListener('mousewheel', this.scrollFn) }
  }
  _up() {}
  _down() {}
  resize (e) {
    e = e || window.event
    this._upData({ scrollWid: e.currentTarget.innerWidth, scrollHei: e.currentTarget.innerHeight }) }
  _upData(data: any) {
    this.$store.commit('_appUpData', data)
  }
}
</script>

<style lang="stylus">
body
	overflow-y hidden
.fixed-box{
  width 100%
}
</style>
