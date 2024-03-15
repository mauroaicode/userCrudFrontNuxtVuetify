<script setup>
import { useLogin } from "~/composables/auth/useLogin.js";

const { formLogin, v$, login, errorMessage } = useLogin()

</script>

<template>
  <v-form fast-fail >
    <v-alert
        class="mb-3"
        v-if="errorMessage"
        type="error"
        dismissible
        closable
        transition="scale-transition"
    >
      {{ errorMessage }}
    </v-alert>
    <v-text-field
        label="Correo electrónico"
        type="email"
        v-model="formLogin.email"
        :error-messages="v$.email.$error ? v$.email.$errors.map(error => error.$message): ''"
    />

    <v-text-field
        label="Contraseña"
        type="password"
        v-model="formLogin.password"
        :error-messages="v$.password.$error ? v$.password.$errors.map(error => error.$message): ''"
    />

    <v-btn color="primary" block class="mt-2" @click="login">Iniciar Sesión</v-btn>

  </v-form>
</template>

<style scoped>

</style>