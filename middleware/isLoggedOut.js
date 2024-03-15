import { useAuthStore } from '~/store/auth.js'

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()

    if (!authStore.id) {
        return navigateTo('/login')
    }
})