<script setup lang="ts">
const route = useRoute();

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT ME", path: "/about" },
  { name: "PROJECTS", path: "/projects" },
];

const btnSize = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 800) return "sm";
  if (screenWidth <= 1024) return "md";
  return "lg";
};

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Tutup menu otomatis saat pindah halaman
watch(
  () => route.path,
  () => {
    isMenuOpen.value = false;
  },
);

</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 p-4 md:p-6 flex justify-center pointer-events-none">
    <div
      class="max-w-80 sm:max-w-150 md:max-w-175 lg:max-w-225 w-full bg-white border-2 md:border-3 border-dark shadow-[4px_4px_0px_var(--color-dark)] md:shadow-[6px_6px_0px_var(--color-dark)] rounded-xl px-4 md:px-8 py-3 flex items-center justify-between pointer-events-auto relative z-70"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 md:gap-3 no-underline group shrink-0 relative z-50">
        <div class="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center">
          <img src="/images/logo-mf-black.png" alt="MF Logo" class="w-full h-auto group-hover:rotate-12 transition-transform duration-300" width="40" height="40" />
        </div>
        <span class="font-heading text-lg lg:text-xl text-dark tracking-tighter">mofarhannn</span>
      </NuxtLink>

      <!-- Nav Links (Desktop) -->
      <nav class="hidden md:flex items-center gap-4 lg:gap-6">
        <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path" class="group relative px-2 py-1.5 no-underline overflow-hidden">
          <span 
            class="relative z-10 font-body text-[13px] font-extrabold tracking-widest transition-colors duration-300"
            :class="route.path === link.path ? 'text-dark' : 'text-dark group-hover:text-dark'"
          >
            {{ link.name }}
          </span>
          <!-- Underline animation left to right -->
          <span 
            class="absolute bottom-0 left-0 h-0.75 bg-dark transition-all duration-300 ease-out"
            :class="route.path === link.path ? 'w-full' : 'w-0 group-hover:w-full'"
          ></span>
        </NuxtLink>
      </nav>

      
      <!-- CTA & Mobile Toggle -->
      <div class="flex items-center gap-3 relative z-70">
        <div class="hidden md:inline-flex text-right">
          <BaseButton href="/#contact" variant="secondary" size="md"> HIRE ME! </BaseButton>
        </div>
        <!-- Mobile Menu Toggle (Re-unified) -->
        <button
          @click="toggleMenu"
          aria-label="Toggle Navigation Menu"
          class="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border-2 border-dark rounded-lg bg-yellow shadow-[2px_2px_0px_var(--color-dark)] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          <span 
            class="w-5 h-0.5 bg-dark transition-all duration-300"
            :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"
          ></span>
          <span 
            class="w-5 h-0.5 bg-dark transition-all duration-300"
            :class="isMenuOpen ? 'opacity-0' : ''"
          ></span>
          <span 
            class="w-5 h-0.5 bg-dark transition-all duration-300"
            :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"
          ></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div v-if="isMenuOpen" @click="isMenuOpen = false" class="fixed inset-0 bg-dark/20 backdrop-blur-sm pointer-events-auto z-50 md:hidden"></div>
    </Transition>

    <Transition name="slide-right">
      <div v-if="isMenuOpen" class="fixed inset-0 z-60 pointer-events-none md:hidden">
        <div class="fixed inset-y-0 right-0 w-[70%] max-w-75 bg-white border-l-4 border-dark flex flex-col p-8 pt-24 shadow-[-10px_0px_0px_var(--color-dark)] pointer-events-auto">
          
          <nav class="flex flex-col gap-6 mt-8">
            <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path" class="group relative inline-block py-2 no-underline" @click="isMenuOpen = false">
              <span
                class="absolute top-0 -left-2 inset-0 bg-[#6B7AFF] border-2 border-dark shadow-[3px_3px_0px_var(--color-dark)] rounded transition-all duration-200 -z-10"
                :class="[route.path === link.path ? 'opacity-100 scale-105' : 'opacity-0 scale-75 rotate-0 group-hover:opacity-100 group-hover:-rotate-3 group-hover:scale-105']"
              ></span>
              <span class="font-heading text-2xl tracking-tighter text-dark uppercase transition-colors duration-200" :class="route.path === link.path ? 'text-white' : 'text-dark group-hover:text-white group-hover:-rotate-3'">
                {{ link.name }}
              </span>
            </NuxtLink>
          </nav>

          <div class="mt-auto">
            <BaseButton href="/#contact" variant="secondary" class="w-full" size="lg" @click="isMenuOpen = false"> HIRE ME! </BaseButton>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Animasi Fade untuk Backdrop */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animasi Slide dari Kanan */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
  opacity: 1;
}

/* Transisi halus untuk navigasi */
.nav-link-transition {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
