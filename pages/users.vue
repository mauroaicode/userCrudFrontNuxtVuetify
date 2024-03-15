<script setup>

import {useUserList} from "~/composables/user/useUserList.js";

definePageMeta({
  layout: 'default-app',
  middleware: 'is-logged-out'
})

const { users, getUsers, dataExists} = useUserList()

getUsers()

</script>

<template>

  <v-row align="center" justify="center" class="h-screen" v-if="!dataExists">
    <v-col cols="12" sm="8" md="6" class="text-center">
      <div class="display-1">Usuarios no registrados</div>
    </v-col>
  </v-row>
  <v-row>
    <v-col
        v-for="user in users"
        :key="user.id"
        cols="12"
        sm="4"
    >
      <CardUser :user="user"/>
    </v-col>
  </v-row>

  <CreateUser/>

</template>

<style scoped>

</style>