<template>
<footer class="footer">
  <svg v-if="app.index !== app.all" class="icon up" aria-hidden="true">
    <use xlink:href="#icon-shang2"></use>
  </svg>
  <transition name="footer">
    <div v-if="app.index === app.all" class="footer-info">
      蒙ICP备16004669号-1 &copy; 2017-2018
    </div>
  </transition>
</footer>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  components: {
  }
})

export default class App extends Vue {
  app: any = this.$store.state.AppVuex
  @Prop()

  created () {
    // render前得到router的参数
  }
  mounted () {
  }
  destroyed () {
  }
  _upData(data: any) {
    // 更新Vuex数据状态
    this.$store.commit('_appUpData', data) }
}
</script>

<style lang="stylus" scoped>
@import '../static/css/common.styl'

.footer
  position fixed
  z-index 99
  bottom 0
  width 100%
  text-align center
.up
  position absolute
  bottom 15px
  left 50%
  width 30px
  height 30px
  color #fff
  animation up 1.5s
  animation-iteration-count infinite
@keyframes up {
  0%   {
    opacity 1
    transform translate(-50%, 0) }
  40% {
    opacity 1
    transform translate(-50%, -15px) }
  100% {
    opacity 0 
    transform translate(-50%, -20px) }
}

.footer-enter-active, .footer-leave-active
  transition all .5s

.footer-enter, .footer-leave-to 
  opacity 0
  transform translate(0, 100%)

.footer-info
  position absolute
  bottom 15px
  width 100%
  font-size 12px
  color rgba(0,0,0,0.4)
</style>
