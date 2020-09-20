<template>
  <div id="app" class="app">
    <div class="nav-top">
      <h2>开发者平台</h2>
      <ul>
        <li @click="$router.push('/first')" :class="$route.meta.name=='first' ?'active' : ''">基础业务</li>
        <li @click="skipto()" :class="$route.meta.name=='second' ?'active' : ''">数据分析</li>
        <li>
          <router-link to="/dataview" :class="$route.meta.name=='apmsdk' ?'active' : ''">哨兵性能监控系统</router-link>
        </li>
      </ul>
      <h4>退出登录</h4>
    </div>
    <div class="router-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
  methods: {
    skipto() {
      this.$router.push("/second");
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  .nav-top {
    height: 64px;
    width: 100%;
    line-height: 64px;
    overflow: hidden;
    box-shadow: 0 2px 5px 0 rgba($color: #009588, $alpha:0.3);

    h2 {
      margin-left:10px;
      font-size: 16px;
      width: 200px;
      float: left;
    }
    ul {
      width: calc(100% - 280px);
      overflow: hidden;
      float: left;
      .active {
        color: #009580;
      }
      li {
        float: left;
        font-size: 14px;
        margin-right: 35px;
        cursor: pointer;
      }
      li:hover {
        color: #009580;
      }
    }
    h4 {
      width: 80px;
      float: left;
      cursor: pointer;
      font-size: 16px;
      color: #009580;
    }
  }
  .router-container {
    display: flex;
    margin-top: 10px;
    height: calc(100vh - 74px);
  }
}
</style>
