<script setup lang="ts">
const isMaintenance = !import.meta.dev
</script>

<template>
  <NuxtRouteAnnouncer />
  
  <!-- Jika maintenance, tampilkan langsung tanpa NuxtLayout agar Header/Footer hilang -->
  <div v-if="isMaintenance">
    <PagesMaintenance />
  </div>

  <!-- Jika normal, gunakan layout default -->
  <NuxtLayout v-else name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
