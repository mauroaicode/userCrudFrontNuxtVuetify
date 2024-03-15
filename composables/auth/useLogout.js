import { useAuthStore } from '~/store/auth.js'

export const useLogout = () => {

    const authStore = useAuthStore()
    const router = useRouter()

    const logout = async () => {

        try {

            await authStore.logout()

            localStorage.removeItem('token');

            await router.push('/login')

        } catch (error) {
            console.log(error)
        }
    }

    return {
        logout
    }
}