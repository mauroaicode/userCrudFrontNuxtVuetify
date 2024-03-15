import { reactive, ref } from 'vue'
import { useVuelidate } from "@vuelidate/core";

import axios from "axios";
import {useAuthStore} from "~/store/auth.js";
import {loginValidationRules} from "~/validations/auth/loginValidations.js";

export const useLogin = () => {

    const formLogin = reactive({
        email: 'developer.mauricio2310@gmail.com',
        password: 'password'
    });
    const errorMessage = ref('')
    const authStore = useAuthStore()
    const router = useRouter()
    const validationsRules = loginValidationRules.value

    const v$ = useVuelidate(validationsRules, formLogin)

    const login = async () => {

        const isValidateResult = await v$.value.$validate()

        if (!isValidateResult){

            return
        }

        try {
            await authStore.login(formLogin.email, formLogin.password);

            const token = window.localStorage.getItem('token');

            if (token) {

                axios.defaults.headers.common['Authorization'] = 'Bearer ' + authStore.access_token;
            }
             await router.push('/users')

        } catch (error) {

            errorMessage.value = error.response.data.message
        }
    }

    return {
        v$,
        login,
        formLogin,
        errorMessage
    }
}