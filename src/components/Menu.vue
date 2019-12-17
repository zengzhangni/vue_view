<template>
    <el-container>
        <el-aside class="el-aside" width="200px">
            <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3008142408,2229729459&fm=26&gp=0.jpg" alt="" class="index-img">
            <el-menu
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
            >
                <el-submenu :index="String(index)" :key="index" v-for="(item,index) of menus">
                    <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
                    <el-menu-item :index="String(index)+'-'+String(i)"
                                  @click="$router.push(child.url),name=item.name,name2='>'+child.name"
                                  :key="i"
                                  v-for="(child,i) of item.childs">{{child.name}}
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人详情</el-dropdown-item>
                        <el-dropdown-item @click.native="$router.push('/login')">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
            </el-header>
            <el-main>
                <div class="box-title">
                    <span>{{name}}{{name2}}</span>
                </div>
                <div class="box-content" v-if="$route.path === '/'">
                    <Header/>
                </div>
                <div class="box-content" v-else>
                    <router-view/>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Header from "@/views/index/Header"

    export default {
        name: "meun",
        components: {Header},
        data() {
            return {
                menus: [],
                name: "用户管理",
                name2: ">管理员列表"
            };
        },
        mounted() {
            this.$http.get("/menu/getTree").then(res => {
                this.menus = res.data;
            })
        },
        component: {
            Header
        }
    }
</script>

<style scoped>
    .el-aside {
        height: 100vh;
        background: #545c64;
        overflow: auto;
        box-sizing: border-box;
        flex-shrink: 0;
    }

    .el-menu {
        border-right: none;
    }

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .box-title {
        text-align: left;
        margin: 0 0 15px;
    }

    .box-content {
        background: #fff;
        height: 100%;
    }

    .index-img {
        width: 200px;
        height: 100px;
        margin-top: 26px;
        margin-bottom: 16px;
    }

</style>
