import {useUserStore} from "~/store/user.js";

export const useUserList = () => {

    const userStore = useUserStore()
    const { users } = storeToRefs(userStore)
    const dataExists = ref(true)


    const getUsers = async () => {

        try {

            await  userStore.getUsers();

        } catch (e) {

            console.log(e)
        }
    }

    watch(() => userStore.dataExists, (newValue) => {
        dataExists.value = newValue
    })


    return {
        users,
        getUsers,
        dataExists
    }
}