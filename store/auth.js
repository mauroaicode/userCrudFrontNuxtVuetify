import { defineStore } from "pinia";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios;

export const useAuthStore = defineStore('auth', {
    state: () => ({
        id: '',
        name: '',
        last_name: '',
        email: '',
        access_token: '',
        isLoggedIn: false,
    }),
    actions: {

        async login(email, password) {

            await $axios.post('/login', {

                email: email,
                password: password,

            }).then((result) => {

                localStorage.setItem('token',result.data.session.access_token)

                this.$state.access_token = result.data.session.access_token

                this.$state.email = result.data.session.user.email

                this.$state.id = result.data.session.user.id

                this.$state.isLoggedIn = true;
            })
        },

        async logout() {

            await $axios.post('/logout')
            this.resetState()
        },

        resetState() {
            this.$state.id = ''
            this.$state.email = ''
            this.$state.access_token = ''
            this.$state.isLoggedIn = false
        },
    },

    persist: true,
})