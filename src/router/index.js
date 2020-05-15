/*
 * @Author: your name
 * @Date: 2020-04-30 15:38:07
 * @LastEditTime: 2020-05-11 16:05:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \first-blog\src\router\index.js
 */
/* jshint esversion: 6 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Add from '../views/Add.vue';
import Link from '../views/Link.vue';
import LoginAndReg from '../views/LoginReg.vue';
import Test from '../views/Test.vue';


Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/add',
        name: 'Add',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Add
    },
    {
        path: '/blog/:id',
        name: 'Blog',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Link
    },
    {
        path: '/logreg',
        name: 'LogReg',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: LoginAndReg
    },
    {
        path: '/test/:aaa',
        name: 'Test',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Test,
        props: true
    },
];

const router = new VueRouter({
    routes,
    //mode: "history",
});

export default router;