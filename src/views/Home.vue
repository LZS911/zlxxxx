<template>
    <div class="home">
        <MainBlog></MainBlog>
    </div>
</template>

<script>
// @ is an alias to /src
import MainBlog from "@/components/MainBlog.vue";

export default {
    name: "Home",
    components: {
        MainBlog
    }
};
</script>
