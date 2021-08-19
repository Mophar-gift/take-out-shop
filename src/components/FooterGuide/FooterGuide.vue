<template>
  <div class="footer-guide">
    <div
      class="footer-guide-item"
      :class="{ on: $route.path === '/msite' }"
      @click="goto('/msite')"
    >
      <span><i class="iconfont icon-waimai"></i></span>
      <span>首页</span>
    </div>
    <div
      class="footer-guide-item"
      :class="{ on: $route.path === '/search' }"
      @click="goto('/search')"
    >
      <span><i class="iconfont icon-search2"></i></span>
      <span>搜索</span>
    </div>
    <div
      class="footer-guide-item"
      :class="{ on: $route.path === '/order' }"
      @click="goto('/order')"
    >
      <span><i class="iconfont icon-dingdan"></i></span>
      <span>订单</span>
    </div>
    <div
      class="footer-guide-item"
      :class="{ on: $route.path === '/profile' }"
      @click="goto('/profile')"
    >
      <span><i class="iconfont icon-geren"></i></span>
      <span>我的</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterGuide",
  methods: {
    // 编程式路由跳转
    async goto(path) {
      try {
        await this.$router.replace(path);
      } catch (e) {
        return
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl';

.footer-guide {
  top-border-1px(#eee);
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
}

.footer-guide-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 25%;

  &.on {
    color: $green;
  }

  span {
    font-size: 12px;
    margin-top: 4px;

    i {
      font-size: 22px;
    }
  }
}
</style>