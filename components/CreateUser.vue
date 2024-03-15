<script setup lang="ts">
import {useModalForm} from "~/composables/user/useModalForm";
import {useCreateUser} from "~/composables/user/useCreateUser";

const { closeModal } = useModalForm()
const { v$, formCreateUser, errorMessage, createUser} = useCreateUser()
</script>

<template>

  <ModalForm>

    <template v-slot:title>

      Crear Usuario

    </template>

    <template v-slot:content>

      <FormUser :formCreateUser="formCreateUser" :v$="v$" />

    </template>

    <template v-slot:actions>

      <v-btn
          variant="flat"
          text="Cancelar"
          @click="closeModal"
      ></v-btn>

      <v-btn
          color="primary"
          text="Crear Usario"
          variant="flat"
          @click="createUser"
      ></v-btn>
    </template>

  </ModalForm>

</template>

<style scoped>

</style>