<script setup>

import { useModalForm } from "~/composables/user/useModalForm.js";

const { isActiveModel, closeModal } = useModalForm()

</script>

<template>
  <v-dialog activator="#open-modal-button" v-model="isActiveModel" max-width="500" persistent hide-overlay>

      <v-card rounded="lg">
        <v-card-title class="d-flex justify-space-between align-center">

          <div class="text-h5 text-medium-emphasis ps-2">
            <slot name="title"></slot>
          </div>

          <v-btn
              icon="mdi-close"
              variant="text"
              @click="closeModal"
          ></v-btn>

        </v-card-title>

        <v-divider class="mb-4"></v-divider>

        <v-card-text>
          <slot name="content"></slot>
        </v-card-text>

        <v-divider class="mt-2"></v-divider>

        <v-card-actions class="my-2 d-flex justify-end">
          <slot name="actions"></slot>
        </v-card-actions>

      </v-card>
  </v-dialog>
</template>

<style scoped>

</style>