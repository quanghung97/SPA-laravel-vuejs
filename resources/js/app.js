
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/index';
import {currency} from './currency';
import Home from './components/Home.vue';
import Articles from './components/Articles.vue';

Vue.use(VueRouter);


const routes = [
    { path: '/home', component:  Home},
    { path: '/articles/:teamId', component:  Articles},
];

const router = new VueRouter({
    routes
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('app-component', require('./components/App.vue'));
Vue.filter('currency', currency)

const app = new Vue({
    el: '#app',
    router,
    store: store
});
