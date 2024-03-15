import {computed} from "vue";
import {email, helpers, minLength, required} from "@vuelidate/validators";

export const createUserValidations = computed(() => {
    return {
        name: {
            required: helpers.withMessage('El nombre es requerido.', required),
        },
        last_name: {
            required: helpers.withMessage('El apellido es requerido.', required),
        },
        phone: {
            required: helpers.withMessage('El teléfono es requerido.', required),
        },
        address: {
            required: helpers.withMessage('La dirección es requerida.', required),
        },
        email: {
            required: helpers.withMessage('El correo electrónico es requerido.', required),
            email: helpers.withMessage('Formato de correo electrónico no es válido.', email),
        },
        password: {
            required: helpers.withMessage('La contraseña es requerida.', required)
        }
    };
});
