<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'success' // 'success', 'error'
  }
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="translate-y-8 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-8 opacity-0"
  >
    <div 
      v-if="show"
      class="fixed bottom-8 right-6 md:bottom-14 md:right-10 z-50 px-6 py-4 border-4 border-black font-black uppercase tracking-wider shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 animate-in slide-in-from-bottom-5"
      :class="type === 'success' ? 'bg-[#5ae2c7] text-black' : 'bg-[#ff9088] text-black'"
    >
      <!-- Success Icon -->
      <svg v-if="type === 'success'" class="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <!-- Error Icon -->
      <svg v-else class="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
      
      <span class="text-sm md:text-base mt-0.5">{{ message }}</span>
    </div>
  </Transition>
</template>
