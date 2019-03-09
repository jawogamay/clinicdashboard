

require('./bootstrap');

window.Vue = require('vue');
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'Vuetify'
import VueRouter from 'vue-router'

import Dashboard from './pages/Dashboard.vue'
import Settings from './pages/Setting.vue'
import Permission from './pages/Permission.vue'
import Roles from './pages/Roles.vue'
import User from './pages/Users.vue'
import Auth from './auth'

Vue.use(Vuetify)
Vue.use(VueRouter)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin',require('./components/Admin.vue').default);


Vue.prototype.$auth = new Auth(window.user);
const routes = [

    {
        path: '/admin/dashboard',
        component: Dashboard
    },
    {
        path: '/admin/users',
        component: User
    },
    {
        path: '/admin/settings',
        component: Settings
    },
    {
        path: '/admin/permissions',
        component: Permission
    },
    {
        path: '/admin/roles',
        component: Roles
    }

]

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    el: '#app',
    router
});
