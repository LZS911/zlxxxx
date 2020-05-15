<template>
    <div id="app">
        <router-header></router-header>
        <router-view />
    </div>
</template>
<script>
// @ is an alias to /src
import RouterHeader from "@/components/RouterHeader.vue";

export default {
    name: "Home",
    components: {
        RouterHeader
    }
};
</script>
<style>
body {
    background: #f6f5f7;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
