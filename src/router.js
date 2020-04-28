import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from './components/Home.vue';
import About from './components/About.vue';
import Post from './components/Post.vue';
import Contact from './components/Contact.vue';
const routes = [
    {
        path : '/',
        component : Home
    },
    {
        path : '/about',
        component : About
    },
    {
        path : '/post',
        component : Post
    },
    {
        path : '/contact',
        component : Contact
    },
];

export default new VueRouter({routes,mode:'history'});