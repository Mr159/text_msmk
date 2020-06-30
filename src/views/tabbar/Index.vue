<template>
    <div class="g-tabbar">
        <router-link class="g-tabbar-item" to="/home">
            <i class="iconfont iconwode"></i>
            <span>首页</span>
        </router-link>
        <router-link class="g-tabbar-item" to="/kecheng">
            <i class="iconfont iconwode"></i>
            <span>课程</span>
        </router-link>
        <router-link class="g-tabbar-item" to="/yue">
            <i class="iconfont iconwode"></i>
            <span>约课记录</span>
        </router-link>
        <router-link class="g-tabbar-item" to="/lianxi">
            <i class="iconfont iconwode"></i>
            <span>联系</span>
        </router-link>
        <router-link class="g-tabbar-item" to="/person">
            <i class="iconfont iconwode"></i>
            <span>我的</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"Tabbar"
}
</script>

<style lang="scss" scoped>
    .g-tabbar{
        display:flex;
        width:100%;
        height:50px;
        background:#fff;

        &-item{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color:#333;
            font-size:12px;

            .iconfont{
                margin-bottom:3px;
                font-size:30px;
            }
        }

    }
    a{
        text-decoration: none;
    }
    .router-link-active{
        color:red;
    }
</style>