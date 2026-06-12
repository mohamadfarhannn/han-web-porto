<script setup lang="ts">
const config = useRuntimeConfig();

const isMaintenance = config.public.isMaintenance;
</script>

<template>
  <NuxtRouteAnnouncer />

  <!-- Jika maintenance, tampilkan langsung tanpa NuxtLayout agar Header/Footer hilang -->
  <MaintenanceDisplay v-if="isMaintenance" />

  <!-- Jika normal, gunakan layout default -->
  <NuxtLayout v-else name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
