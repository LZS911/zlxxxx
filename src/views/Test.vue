<!--
 * @Author: your name
 * @Date: 2020-05-11 15:46:22
 * @LastEditTime: 2020-05-11 16:08:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \first-blog\src\views\Test.vue
 -->
<template>
    <div class="er">
        <Test></Test>
    </div>
</template>

<script>
// @ is an alias to /src
import Test from "@/components/testt.vue";

export default {
    name: "Test123",
    props: ["aaa"],
    components: {
        Test
    }
};
</script>
