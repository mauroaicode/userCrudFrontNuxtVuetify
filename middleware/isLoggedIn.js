import {useAuthStore} from "~/store/auth.js";

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()

    if (to.fullPath === '/login' && authStore.id) {
        return navigateTo('/users')
    }

    if (to.fullPath === '/users' && authStore.id) {
        return navigateTo('/login')
    }
})