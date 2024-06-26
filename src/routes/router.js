import Vue from 'vue'
import VueRouter from 'vue-router'

import Chat from '../pages/Chat.vue'
import Salvos from '../pages/Salvos.vue'
import ForumBD from '../pages/ForumBD.vue'
import ForumPOO from '../pages/ForumPOO.vue'
import ForumBeyTech from '../pages/ForumBeyTech.vue'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import NotFound from '../pages/NotFound.vue'

Vue.use(VueRouter)

const routes = [
    {
        path : '/chat',
        component : Chat
    },

    {
        path : '/salvos',
        component : Salvos
    },

    { 
        path: '/ForumBancoDeDados',
        component: ForumBD
    },

    { 
        path: '/ForumProgramaçãoOrientadaAObjetos',
        component: ForumPOO
    },
    { 
        path: '/ForumBeyondTech',
        component: ForumBeyTech
    },
    { 
        path: '/Home',
        component: Home
    },

    {
        path: '/',
        component: Login
    },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    routes
});

export default router

