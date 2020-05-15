/* jshint esversion: 6 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.directive('raindow', {
    bind(el) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
    }
});

Vue.filter("to-uppercase", function (value) {
    return value.toUpperCase();
});
Vue.filter("sinppet", function (value) {
    return value.slice(0, 100) + '...';
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');