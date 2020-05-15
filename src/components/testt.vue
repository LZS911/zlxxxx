<!--
 * @Author: your name
 * @Date: 2020-05-11 15:45:49
 * @LastEditTime: 2020-05-11 16:13:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \first-blog\src\components\testt.vue
 -->
<template>
    <div class="router-header"></div>
</template>

<script>
export default {
    name: "RouterHeader",
    components: {},
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