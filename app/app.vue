<script setup lang="ts">
const layout = "main-layout"
</script>


<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
