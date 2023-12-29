<!--
  功能：vue2.0封装的组件首页
  作者：zhuqin-wei
  邮箱：1051084301@qq.com
  时间：2023年12月04日 16:14:15
  版本：v1.0
  修改内容：vue2.0初始化模板
  修改人员：zicheng-jiang
  修改时间：2020.10.01
-->
<template>
  <el-container class="main-control">
    <el-header>
      <div class="main-header">
        <div class="left-header">
          <img
            src="../../assets/icon/homeicon.png"
            class="logo"
            alt="main logo"
          />
        </div>
        <div class="right-header">you bian</div>
      </div>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
//import(导入)其他文件（如：组件，工具js，第三方插件js，json文件，图片文件等）

export default {
  /**注册组件*/
  components: {},
  /**接受父组件传值*/
  props: {},
  name: "mainControl",
  data() {
    return {

    };
  },
  /**计算属性*/
  computed: {},
  /**监听data数据变化*/
  watch: {},
  /**所有方法*/
  methods: {

  },
  /**创建组件时执行(有VM对象this)*/
  created() {

  },
  /**加载完组件时执行(主要预处理数据)*/
  mounted() {

  },
  beforeCreate() {/**生命周期 - 创建之前*/ },
  beforeMount() {/**生命周期 - 挂载之前*/ },
  beforeUpdate() {/**生命周期 - 更新之前*/ },
  updated() {/**生命周期 - 更新之后*/ },
  beforeDestroy() {/**生命周期 - 销毁之前*/ },
  destroyed() {/**生命周期 - 销毁完成*/ },
  activated() {/**keep-alive组件激活时调用。仅针对keep-alive组件有效*/ },
  deactivated() {/**keep-alive组件停用时调用。仅针对keep-alive组件有效*/ },
}
</script>
<style scoped lang='less'>
/* @import url(); 引入css类 */
.main-control {
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
    .main-header {
      display: flex;
      .left-header {
      }
      .right-header {
      }
    }
  }
}
</style>
