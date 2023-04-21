import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/ViewHome.vue'
import ViewAdministrationIndex from "@/views/Administration/ViewAdministrationIndex.vue";
import ViewClasses from "@/views/Administration/Classe/ViewClasses.vue";
import ViewTypes from "@/views/Administration/Type/ViewTypes.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/administration',
            name: 'admin',
            component: ViewAdministrationIndex,
            children : [
                {
                    path: 'classes', name: 'classes', component: ViewClasses
                },
                {
                    path: 'types', name: 'types', component: ViewTypes
                }
            ]
        },
        // ...
    ]
})

export default router