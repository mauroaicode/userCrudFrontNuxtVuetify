<script setup>

import { useLogout } from "~/composables/auth/useLogout.js";
import { useModalForm } from "~/composables/user/useModalForm.js";


const { logout } = useLogout()
const { openModal } = useModalForm()

</script>

<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-banner color="info" dark>
          <v-container>

            <v-row justify="center">
              <v-col cols="12">
                <div class="text-center">

                  <h1 class="text-blue-darken-3 mb-3 text-h4 text-sm-h3 font-weight-bold">Lista de Usuarios</h1>
                  <p class="text-sm-body-1 mb-5">Aquí puedes encontrar todos los usuarios registrados en nuestra
                    plataforma.</p>

                  <div class="mb-5">
                    <v-btn color="default" @click="logout">Cerrar sesión</v-btn>
                  </div>
                  <div>
                    <v-btn color="primary" @click="openModal">Crear usuario</v-btn>
                  </div>

                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-banner>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>