<script setup>

defineProps(['formCreateUser', 'v$'])
</script>

<template>

  <v-text-field
      name="name"
      label="Nombre"
      type="text"
      v-model="formCreateUser.name"
      :error-messages="v$.name.$error ? v$.name.$errors.map(error => error.$message): ''"
  />

  <v-text-field
      name="lastName"
      label="Apellidos"
      type="text"
      v-model="formCreateUser.last_name"
      :error-messages="v$.last_name.$error ? v$.last_name.$errors.map(error => error.$message): ''"
  />

  <v-text-field
      name="email"
      label="Correo electrónico"
      type="text"
      v-model="formCreateUser.email"
      :error-messages="v$.email.$error ? v$.email.$errors.map(error => error.$message): ''"
  />

  <v-text-field
      name="phone"
      label="Teléfono"
      type="text"
      v-model="formCreateUser.phone"
      :error-messages="v$.phone.$error ? v$.phone.$errors.map(error => error.$message): ''"
  />

  <v-text-field
      name="address"
      label="Dirección"
      type="text"
      v-model="formCreateUser.address"
      :error-messages="v$.address.$error ? v$.address.$errors.map(error => error.$message): ''"
  />

  <v-text-field
      name="password"
      label="Contraseña"
      type="text"
      v-model="formCreateUser.password"
      :error-messages="v$.password.$error ? v$.password.$errors.map(error => error.$message): ''"
  />

</template>

<style scoped>

</style>