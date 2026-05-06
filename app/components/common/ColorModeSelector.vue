<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
   @click="toggleColorMode"
   class="relative p-2 rounded-full bg-[#252525] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group flex items-center justify-center h-8 w-8"
   aria-label="Toggle Dark Mode"
   >
   <Icon 
    v-if="colorMode.value === 'light'"
    name="lucide:sun"
    class="w-6 h-6 text-[#FFF9EB] animate-spin-slow"
   />
   <div v-else class="relative w-5 h-5">
    <Icon
     name="lucide:moon"
     class="w-5 h-5 text-[#FFF9EB]"
    />
    <Icon 
      name="lucide:star"
      class="absolute top-1 right-1 w-1 h-1 text-[#FFF9EB] animate-pop"
    />
     <Icon 
      name="lucide:star"
      class="absolute -top-1 right-1 w-1.5 h-1.5 text-[#FFF9EB] animate-pop"
    />
   </div>
  </button>
</template>

<style scoped>
.animate-spin-slow {
  animation: spin 8s linear infinite;
}

.animate-pop {
  animation: fade-in-out 4s ease-in-out infinite;
  animation-delay: 0.2s;
}

@keyframes fade-in-out {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-bounce-slow {
  animation: bounce-custom 4s infinite;
}

@keyframes bounce-custom {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
</style>