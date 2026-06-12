<script setup lang="ts">
const socialLinks = [
  { name: 'GITHUB', url: 'https://github.com/mohamadfarhannn' },
  { name: 'LINKEDIN', url: 'https://linkedin.com/in/mohamadfarhannn' },
  { name: 'EMAIL', url: 'mailto:mofarhannn@gmail.com' }
]

const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-yellow border-t-3 md:border-t-4 border-dark py-8 px-6 md:px-12 flex justify-center">
    <div class="max-w-300 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
      
      <!-- Logo & Built With -->
      <div class="flex flex-col items-center md:items-start gap-2 shrink-0">
        <NuxtLink to="/" class="flex items-center gap-3 no-underline group">
          <div class="w-8 h-8 flex items-center justify-center">
            <img src="/images/logo-mf-black.png" alt="MF Logo" class="w-full h-auto group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span class="font-heading text-lg lg:text-xl text-dark tracking-tighter">mofarhannn</span>
        </NuxtLink>
          <p class="font-heading text-[10px] md:text-[12px] text-dark/70 tracking-widest uppercase">
            Cirebon, West Java, Indonesia
          </p>

      </div>

      <!-- Nav Links -->
      <nav class="flex flex-wrap justify-center items-center gap-6 md:gap-10">
        <a 
          v-for="link in socialLinks" 
          :key="link.name"
          :href="link.url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="font-heading text-[13px] tracking-widest text-dark no-underline hover:underline decoration-2 underline-offset-4 transition-all"
        >
          {{ link.name }}
        </a>
      </nav>

      <!-- Copyright & Back to Top -->
      <div class="flex flex-col items-center md:items-end gap-2">
        <p class="font-heading text-[12px] md:text-[13px] tracking-widest text-dark uppercase opacity-90">
          &copy; {{ currentYear }} MOFARHANNN.
        </p>
        <button 
          @click="scrollToTop"
          class="font-heading text-[10px] md:text-[11px] text-dark/70 tracking-widest hover:text-dark transition-colors cursor-pointer uppercase flex items-center gap-1"
        >
          BACK TO TOP &uarr;
        </button>
      </div>

    </div>
  </footer>
</template>

<style scoped>
a, button {
  transition: all 0.2s ease-in-out;
}
</style>
