<script setup lang="ts">
const socialLinks = [
  { name: 'GITHUB', url: 'https://github.com/mohamadfarhannn' },
  { name: 'LINKEDIN', url: 'https://linkedin.com/in/mohamadfarhannn' },
  { name: 'EMAIL', url: 'mailto:mofarhannn@gmail.com' }
]
</script>

<template>
  <footer class="bg-yellow border-t-3 md:border-t-4 border-dark py-8 px-6 md:px-12 flex justify-center">
    <div class="max-w-300 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
      
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 no-underline group shrink-0">
        <div class="w-8 h-8 flex items-center justify-center">
          <img src="/images/logo-mf-black.png" alt="MF Logo" class="w-full h-auto group-hover:rotate-12 transition-transform duration-300" />
        </div>
        <span class="font-heading text-lg lg:text-xl text-dark tracking-tighter">mofarhannn</span>
      </NuxtLink>

      <!-- Nav Links -->
      <nav class="flex flex-wrap justify-center items-center gap-6 md:gap-10">
        <a 
          v-for="link in socialLinks" 
          :key="link.name"
          :href="link.url" 
          target="_blank" 
          class="font-heading text-[13px] tracking-widest text-dark no-underline hover:underline decoration-2 underline-offset-4 transition-all"
        >
          {{ link.name }}
        </a>
      </nav>

      <!-- Copyright -->
      <p class="font-heading text-[12px] md:text-[13px] tracking-widest text-dark uppercase opacity-90">
        &copy; 2026 MOFARHANNN.
      </p>
    </div>
  </footer>
</template>

<style scoped>
/* Transisi halus untuk link */
a {
  transition: all 0.2s ease-in-out;
}
</style>
