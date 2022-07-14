<template>
  <div class="home">
    <el-container>
    <el-aside class="aside">
      <!-- 菜单 -->
      <el-row class="tac">
        <el-col>
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            default-active="2"
            router
            background-color="rgb(48,65,86)"
            text-color="rgb(191,203,217)"
          >

          <el-menu-item index="/home/index">
            <i class="el-icon-menu"></i>
            <span class="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/home/Document">
            <i class="el-icon-menu"></i>
            <span class="title">文档</span>
          </el-menu-item>
          <el-menu-item index="/home/Lead">
            <i class="el-icon-menu"></i>
            <span class="title">引导页</span>
          </el-menu-item>
          <!-- 二级菜单 el-submenu -->
          <el-submenu index="4">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限测试页</span>
              </template>
              <el-menu-item index="4-1">页面权限</el-menu-item>
              <el-menu-item index="4-2">指令权限</el-menu-item>
              <el-menu-item index="4-3">角色权限</el-menu-item>
          </el-submenu>
          <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <span class="title">图标</span>
          </el-menu-item>
          <el-submenu index="6">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>组件</span>
              </template>
              <el-menu-item index="6-1">页面权限</el-menu-item>
              <el-menu-item index="6-2">指令权限</el-menu-item>
              <el-menu-item index="6-3">角色权限</el-menu-item>
          </el-submenu>

          <el-submenu index="7">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>图标</span>
              </template>
              <el-menu-item index="7-1">页面权限</el-menu-item>
              <el-menu-item index="7-2">指令权限</el-menu-item>
              <el-menu-item index="7-3">角色权限</el-menu-item>
          </el-submenu>

          <el-submenu index="8">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>路由嵌套</span>
              </template>
              <el-menu-item index="8-1">页面权限</el-menu-item>
              <el-menu-item index="8-2">指令权限</el-menu-item>
              <el-menu-item index="8-3">角色权限</el-menu-item>
          </el-submenu>

          <el-submenu index="9">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>Table</span>
              </template>
              <el-menu-item index="9-1">页面权限</el-menu-item>
              <el-menu-item index="9-2">指令权限</el-menu-item>
              <el-menu-item index="9-3">角色权限</el-menu-item>
          </el-submenu>

          <el-submenu index="10">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>综合实例</span>
              </template>
              <el-menu-item index="10-1">页面权限</el-menu-item>
              <el-menu-item index="10-2">指令权限</el-menu-item>
              <el-menu-item index="10-3">角色权限</el-menu-item>
          </el-submenu>

            <!-- 
            default-active 默认激活的菜单的索引
            open close submenu展开或收起所触发的事件

            二级菜单
           -->
            <!-- <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>


            <el-menu-item index="2">导航2</el-menu-item> -->
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <router-view></router-view>
    </el-container>
  </el-container>
  </div>
</template>

<script>
import instance from "../api/api.js";

export default {
  name: "HomeView",
  components: {},
  data(){
    return {
      isCollapse:false,//设置aside是否折叠
    }
  },
  methods:{
    handleOpen(){

    },
    handleClose(){

    }
  },
  created() {
    // /api/aa ===  127.0.0.1:2222/aa
    instance.get("/asd").then((res) => console.log(res));
    // instance.post("/ab",{"name":"asd"}).then(res=>console.log(res))
  },
};
</script>
<style scoped lang="scss">
  .aside{
    margin:0;padding:0;
    color: #fff;
    .el-menu-vertical-demo{
      height: 100vh;
      .el-menu-item:hover{
        // background-color: red !important;
      }
    }
    
  }
</style>