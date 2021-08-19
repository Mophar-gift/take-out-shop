<template>
  <div>
    <!-- pages界面 -->
    <router-view></router-view>
    
    <!-- Footer界面 -->
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import FooterGuide from '@/components/FooterGuide/FooterGuide'

export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus">
* 
  // 从 chrome56 开始，在 window、document 和 body 上注册的 touchstart 和 touchmove 事件处理函数，会默认为是 passive: true
  touch-action: pan-y; //  pan-y表示启用单指垂直平移手势(上下滑动事件)

</style>
