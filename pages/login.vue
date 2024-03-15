<script setup>
import {useLogin} from "~/composables/auth/useLogin.js";

definePageMeta({
  middleware: 'is-logged-in'
})

const { errorMessage } = useLogin();

</script>

<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">

      <div class="text-center pa-6">
        <h1 class="text-blue-darken-3">Bienvenido</h1>
        <p>Por favor, inicia sesión para continuar.</p>
      </div>

      <FormLogin/>

    </v-sheet>
  </div>
</template>

<style scoped>

</style>