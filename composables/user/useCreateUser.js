import {reactive, ref} from 'vue'
import {useVuelidate} from "@vuelidate/core";
import {useUserStore} from "~/store/user.js";
import {useModalFormStore} from "~/store/modalForm.js";
import {createUserValidations} from "~/validations/user/createUserValidations.js";


export const useCreateUser = () => {

    const formCreateUser = reactive({
        name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        address: '',
    })
    const errorMessage = ref('')
    const userStore = useUserStore()
    const modalFormStore = useModalFormStore()
    const validations = createUserValidations.value

    const v$ = useVuelidate(validations, formCreateUser)

    const createUser = async () => {

        const isValidateResult = await v$.value.$validate()

        try {
            if (!isValidateResult){

                return
            }

            await userStore.createUser(formCreateUser)
            await userStore.getUsers()
            modalFormStore.closeModal()

        }catch (error){

            errorMessage.value = error.response.data.message
        }
    }

    return {
        v$,
        createUser,
        errorMessage,
        formCreateUser,
    }
}