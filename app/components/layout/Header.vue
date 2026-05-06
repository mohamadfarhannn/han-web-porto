<script setup>
import logo from '../../../public/images/logo-mf-outline-white.png';

</script>

<template>
  <header class="flex items-center bg-[#FFF9EB]">
    <div class="flex flex-row items-center justify-between w-full px-4 py-4 max-w-7xl mx-auto">
      <nav class="flex items-center gap-4">
        <ul class="flex flex-row gap-x-4 text-[#252525] ">
          <li class="hover:underline hover:underline-offset-4"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="hover:underline hover:underline-offset-4"><NuxtLink to="/about">About</NuxtLink></li>
          <li class="hover:underline hover:underline-offset-4"><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
  
      <div class="rounded-full w-18 h-18 bg-[#252525] flex items-center justify-center p-3 border-2 border-[#FFF9EB]">
        <img :src="logo" alt="Logo" class="object-cover">
      </div>
  
      <div class="flex flex-row gap-x-4">
        <Icon name="ph:envelope-simple-fill" />
        <Icon name="ri:github-fill" />
        <Icon name="logos:linkedin-icon" />
        <CommonColorModeSelector/>
      </div>
    </div>
  </header>
</template>