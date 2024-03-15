import {computed} from "vue";
import {email, helpers, minLength, required} from "@vuelidate/validators";

export const loginValidationRules = computed(() => {
    return {
        email: {
            required: helpers.withMessage('El correo electrónico es requerido.', required),
            email: helpers.withMessage('Formato de correo electrónico no es válido.', email),
        },
        password: {
            required: helpers.withMessage('La contraseña es requerida.', required)
        }
    };
});
