<template>
    <div class="AddBlog">
        <div class="addContent" v-if="!isSubmit">
            <h1>添加博客</h1>

            <form action @submit.prevent="onSubmit">
                <label for>主题:</label>
                <input type="text" v-model="blog.title" />
                <label for>内容:</label>
                <textarea name id cols="30" rows="10" v-model="blog.content"></textarea>
                <label for>分类:</label>
                <div class="checkboxes">
                    <label for>C++</label>
                    <input type="checkbox" name value="C++" v-model="blog.categories" />
                    <label for>Vue.js</label>
                    <input type="checkbox" name value="Vue.js" v-model="blog.categories" />
                    <label for>Java:</label>
                    <input type="checkbox" name value="Java" v-model="blog.categories" />
                    <label for>C#:</label>
                    <input type="checkbox" name value="C#" v-model="blog.categories" />
                </div>
                <label for>作者:</label>
                <input type="text" v-model="blog.author" />
                <button>添加博客</button>
            </form>
        </div>
        <div class="preview" v-if="isSubmit">
            <h1>博客添加成功</h1>
            <h2>博客预览</h2>主题:
            <p>{{ blog.title }}</p>内容:
            <p>{{ blog.content }}</p>分类:
            <p>{{ blog.categories }}</p>作者:
            <p>{{ blog.author }}</p>
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
    name: "AddBlog",
    components: {},
    props: {},
    data() {
        return {
            blog: {
                title: "",
                content: "",
                categories: [],
                author: ""
            },
            isSubmit: false
        };
    },
    watch: {},
    computed: {},
    methods: {
        onSubmit: function() {
            if (
                this.blog.title != "" &&
                this.blog.content != "" &&
                this.blog.categories.length != 0 &&
                this.blog.tiauthortle != ""
            ) {
                const TestObject = AV.Object.extend("blog");
                const testObject = new TestObject();
                testObject.set(this.blog);
                testObject.save().then(testObject => {
                    console.log(testObject);
                    console.log("保存成功。");
                    this.isSubmit = true;
                });
            }
        }
    },
    created() {},
    mounted() {}
};
</script>
<style scoped>
.AddBlog {
    width: 1000px;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
}
.addContent {
    margin: 40px;
}
label {
    display: block;
    margin: 10px 0;
}
.checkboxes label {
    display: inline-block;
    margin: 10px 0 0 100px;
}

input[type="text"] {
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
    width: 80%;
    height: 35px;
    font-size: 15px;
    padding-left: 3%;
    display: block;
}

textarea {
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
    width: 80%;
    height: 300px;
    font-size: 15px;
    padding-left: 3%;
}
button {
    margin-top: 20px;
    float: left;
    width: 100px;
    height: 30px;
    border: none;
    color: #fff;
    font-size: 16px;
    border-radius: 3px;
    background-color: #00bdff;
    box-shadow: 0px 0px 29px 0px rgba(7, 15, 72, 0.1);
}
</style>
