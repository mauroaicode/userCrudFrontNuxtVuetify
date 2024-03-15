import {useModalFormStore} from "~/store/modalForm.js";
import {ref} from "vue";

export const useModalForm = () => {

    const modalFormStore = useModalFormStore()
    const isActiveModel = ref(false)

    const openModal = () => {

        modalFormStore.openModal()
    }

    const closeModal = () => {

        modalFormStore.closeModal()
    }

    watch(() => modalFormStore.modal, (newValue) => {
        isActiveModel.value = newValue
    })

    return {
        openModal,
        closeModal,
        isActiveModel,

    }
}