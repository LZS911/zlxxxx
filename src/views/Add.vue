<template>
    <div class="Add">
        <AddBlog></AddBlog>
    </div>
</template>

<script>
// @ is an alias to /src
import AddBlog from "@/components/AddBlog.vue";

export default {
    name: "Add",
    components: {
        AddBlog
    }
};
</script>
