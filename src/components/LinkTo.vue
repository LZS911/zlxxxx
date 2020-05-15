<!--
 * @Author: your name
 * @Date: 2020-05-06 11:20:27
 * @LastEditTime: 2020-05-11 16:12:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \first-blog\src\components\LinkTo.vue
 -->
<template>
    <div class="link-to">
        <div class="link-content">
            <h1 v-raindow>{{blog.title}}</h1>
            <article>{{blog.content}}</article>
            <p>分类:{{blog.categories}}</p>
            <p>作者:{{blog.author}}</p>
        </div>
    </div>
</template>

<script>
const AV = require("leancloud-storage");
AV.init({
    appId: "UqFIGAO2ae560LvMov2b3AaN-gzGzoHsz",
    appKey: "NPNJbytl8a6rsW7c8JmDsbjS",
    serverURL: "https://uqfigao2.lc-cn-n1-shared.com"
});
export default {
    components: {},
    props: {},
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        };
    },
    watch: {},
    computed: {},
    methods: {},
    created() {
        var userResults = [];
        let query = new AV.Query("blog");
        query.find().then(data => {
            for (let blog in data) {
                let object = data[blog].attributes;
                if (this.id === data[blog].id) {
                    userResults.push(object);
                }
            }
            this.blog = userResults[0];
            console.log(this.blog);
        });
    },
    mounted() {}
};
</script>
<style scoped>
.link-to {
    width: 1000px;
    background: #fff;
    margin: 20px auto;
    padding: 20px;
}
.link-content {
    padding: 10px;
    background: #eee;
}
</style>