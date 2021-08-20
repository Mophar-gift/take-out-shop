<template>
  <header class="header">
    <!-- 头部左侧插槽 -->
    <slot name="left"></slot>
    <!-- 头部中间标题(标题内容从外部传递过来) -->
    <span class="header_title">
      <span class="header_title_text ellipsis">{{ title }}</span>
    </span>
    <!-- 头部右侧插槽 -->
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style lang="stylus" scoped>
.header
  background-color #02a774
  position fixed
  z-index 100
  left 0
  top 0
  width 100%
  height 45px
  .header_search
    position absolute
    left 15px
    top 50%
    transform translateY(-50%)
    width 10%
    height 50%
    .iconfont
      font-size 22px
      color #fff
  .header_title
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 30%
    color #fff
    font-size 22px
    text-align center
</style>