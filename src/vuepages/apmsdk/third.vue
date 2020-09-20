<template>
  <div class="third_content">
    <div class="nav-left">
      <h4>导航</h4>
      <ul class="nav-left_first">
        <li
          @click="$router.push('/dataview')"
          :class="$route.name == 'dataview'? 'active' : ''"
        >数据概览</li>
        <li>用户统计</li>
        <li>网络请求</li>
        <li>错误</li>
        <li>地域</li>
        <li>版本</li>
        <li>设备</li>
        <li>操作系统</li>
      </ul>
      <h4>工具包</h4>
      <ul class="nav-left_second">
        <li @click="$router.push('/nettest')" :class="$route.name == 'nettest'? 'active' : ''">网络拨测</li>
        <li>系统配置</li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
.third_content {
  .nav-left {
    background: #ffffff;
    float: left;
    height: 100%;
    width: 200px;
    box-shadow: 0 2px 5px 0 rgba($color: #009588, $alpha: 0.3);
    h4 {
      font-size: 17px;
      margin-top: 10px;
      margin-bottom: 10px;
      margin: 10px 0 10px 25px;
    }
    ul {
      li {
        font-size: 14px;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 60px;
        cursor: pointer;
        &:hover {
          background-color: rgba($color: #009588, $alpha: 0.05);
          border-right: 2px solid #009588;
          color: #009588;
        }
        &.active {
          background-color: rgba($color: #009588, $alpha: 0.05);
          border-right: 2px solid #009588;
          color: #009588;
        }
      }
    }
  }
  .content {
    width: calc(100% - 200px);
    margin-left: 230px;
  }
}
</style>