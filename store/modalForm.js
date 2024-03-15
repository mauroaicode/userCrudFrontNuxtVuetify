import { defineStore } from "pinia";

export const useModalFormStore = defineStore('modalForm', {

    state: () => ({
        modal: false
    }),

    actions: {

        openModal(){
            this.$state.modal = true
        },

        closeModal(){
            this.$state.modal = false
        }
    },

})