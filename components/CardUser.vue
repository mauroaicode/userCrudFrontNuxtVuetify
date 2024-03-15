<script setup>
import {useAuthStore} from "~/store/auth.js";
import {useDeleteUser} from "~/composables/user/useDeleteUser.js";

defineProps(['user'])
const authStore = useAuthStore()
const {deleteUser} = useDeleteUser()
</script>

<template>
  <v-card class="mt-5 h-100">

    <div class="text-center">
      <v-avatar size="150">
        <img src="https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.webp" width="150" alt="Avatar">
      </v-avatar>
      <v-card-title>{{ user.name }} {{ user.last_name }}</v-card-title>
    </div>

    <v-card-text class="">
      <div><strong>Correo electrónico:</strong> {{ user.email }}</div>
      <div><strong>Teléfono:</strong> {{ user.phone }}</div>
      <div><strong>Dirección:</strong> {{ user.address }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="red darken-1" :disabled="authStore.id === user.id" @click="deleteUser(user.id)">Eliminar</v-btn>
      <v-btn color="info">Actualizar</v-btn>
    </v-card-actions>

  </v-card>
</template>

<style scoped>

</style>