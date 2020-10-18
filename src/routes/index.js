import Vue from 'vue'
import Router from 'vue-router'
import Stats from "@/components/Stats";
import Login from "@/components/Login";
import Default from "@/components/Default";

Vue.use(Router)

export default[
    { path: '/stats', name: "Stats",component: Stats},
    { path: '/login', component: Login},
    { path: '/', name: "Default", component: Default,}]