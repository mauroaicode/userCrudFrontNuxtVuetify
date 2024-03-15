import {ref} from "vue";
import {useUserStore} from "~/store/user.js";

export const useDeleteUser = () => {

    const errorMessage = ref('')
    const userStore = useUserStore()

    const deleteUser = async (userId) => {

        try {

            await userStore.deleteUser(userId)
            await userStore.getUsers()

        }catch (error){

            errorMessage.value = error.response.data.message
        }
    }

    return {


        deleteUser
    }
}