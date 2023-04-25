import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/ViewHome.vue'
import ViewAdministrationIndex from "@/views/Administration/ViewAdministrationIndex.vue";
import ViewClasses from "@/views/Administration/Classe/ViewClasses.vue";
import ViewTypes from "@/views/Administration/Type/ViewTypes.vue";
import ViewCompetence from "@/views/Administration/Competence/ViewCompetence.vue";
import ViewCartes from "@/views/Administration/Carte/ViewCartes.vue";
import ViewCreateCard from "@/views/Administration/Carte/ViewCreateCard.vue";

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
                    path: 'classes',
                    name: 'classes',
                    component: ViewClasses
                },
                {
                    path: 'types',
                    name: 'types',
                    component: ViewTypes
                },
                {
                    path: 'competences',
                    name: 'competences',
                    component: ViewCompetence
                },
                {
                    path: 'cartes',
                    name: 'cartes',
                    component: ViewCartes,
                },
                {
                    path: 'addCarte',
                    name: 'addCarte',
                    component: ViewCreateCard
                }
            ]
        },
        // ...
    ]
})

export default router
