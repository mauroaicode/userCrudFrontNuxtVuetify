import { defineStore } from "pinia";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios;

export const useUserStore = defineStore('user', {

    state: () => ({
        users: [],
        isLoading: true,
        dataExists: true
    }),

    actions: {

        async getUsers() {

            let res = await $axios.get('/user/list')
                .then((result) => {

                    this.$state.isLoading = false

                    if (result.data.users.length === 0){

                        this.$state.dataExists = false

                        return
                    }

                    this.$state.users = result.data.users;
                })
        },

        async createUser(user){

          await $axios.post('/user/create', user)
              .then(( result ) => {
                  this.$state.isLoading = false
              })
        },

        async deleteUser(userId){

            await $axios.delete(`/user/${userId}/delete`)
                .then(( result ) => {
                    this.$state.isLoading = false
                })
        }
    },

    persist: true,
})