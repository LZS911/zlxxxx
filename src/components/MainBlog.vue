<template>
    <div class="main-blog">
        <h1>博客总览</h1>
        <input type="text" placeholder="搜索" v-model="search" />

        <div class="show-blog" v-for="blog in filteredBlogs" :key="blog.id">
            <router-link :to="'/blog/' + blog.objectId">
                <div class="blog-content">
                    <h2 v-raindow>{{blog.title | to-uppercase}}</h2>
                    <article style="color:black">{{blog.content | sinppet}}</article>
                </div>
            </router-link>
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
    name: "MainBlog",
    components: {},
    props: {},
    data() {
        return {
            blogs: [],
            search: ""
        };
    },
    watch: {},
    computed: {
        filteredBlogs: function() {
            return this.blogs.filter(blog => {
                return blog.title.match(this.search);
            });
        }
    },
    filters: {
        "to-uppercase": function(value) {
            return value.toUpperCase();
        },
        sinppet: function(value) {
            if (value.length > 100) return value.slice(0, 100) + "...";
            else return value;
        }
    },
    directives: {
        raindow: {
            bind(el) {
                el.style.color =
                    "#" +
                    Math.random()
                        .toString(16)
                        .slice(2, 8);
            }
        }
    },
    methods: {
        getData() {
            // var userResults = [];
            let query = new AV.Query("blog");
            query.find().then(data => {
                //     for (let blog in data) {
                //         let object = data[blog].attributes;
                //         object.id = data[blog].id;
                //         userResults.push(object);
                //     }
                var json = JSON.parse(JSON.stringify(data));
                console.log(json);
                this.blogs = json;
            });
        }
    },
    created() {
        this.getData();
    },
    mounted() {}
};
</script>
<style scoped>
.main-blog {
    width: 1000px;
    margin: 20px auto;
    background: #fff;
    padding: 20px;
}
input {
    outline-color: invert;
    outline-style: none;
    outline-width: 0px;
    border: none;
    border-style: none;
    text-shadow: none;
    -webkit-appearance: none;
    -webkit-user-select: text;
    outline-color: transparent;
    border-radius: 6px;
    box-shadow: 0px 0px 29px 0px rgba(7, 15, 72, 0.1);
    width: 95%;
    height: 45px;
    padding-left: 4%;
    font-size: 20px;
}
.show-blog {
    width: 100%;
    background: #eee;
}
.blog-content {
    padding: 5px;
    margin: 20px;
    box-sizing: border-box;
}
a {
    text-decoration: none;
}
</style>
