<!--
 * @Author: your name
 * @Date: 2020-05-06 09:10:24
 * @LastEditTime: 2020-05-11 15:48:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \first-blog\src\components\RouterHeader.vue
 -->
<template>
    <div class="router-header">
        <span class="router-main">
            <router-link to="/">主页</router-link>
            <router-link to="/add">添加博客</router-link>
            <router-link to="/test">test</router-link>
        </span>
        <span class="router-log">
            <router-link to="/logreg" style="font-size:15px">注册/登录</router-link>
        </span>
    </div>
</template>

<script>
export default {
    name: "RouterHeader",
    components: {},
    props: {},
    data() {
        return {};
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {}
};
</script>
<style scoped>
.router-header {
    width: 1000px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    text-align: center;
}

.router-main a {
    padding: 20px;
    font-weight: bold;
    font-size: 20px;
    color: #2c3e50;
    text-decoration: none;
}
.router-log {
    position: relative;
    left: 350px;
}
.router-log a {
    padding: 20px 10px 20px 20px;
    font-size: 10px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
}
.router-log :hover {
    background: #eee;
}
.router-main :hover {
    background: #eee;
}

.router-header a.router-link-exact-active {
    color: #42b983;
}
</style>