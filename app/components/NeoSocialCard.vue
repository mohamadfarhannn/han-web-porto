<script setup>
defineProps({
  to: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  colSpan: {
    type: Number,
    default: 1
  }
})
</script>

<template>
  <a 
    :href="to" 
    target="_blank" 
    rel="noopener noreferrer" 
    class="bg-white border-4 border-black p-6 flex flex-col items-center justify-center gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-[0.5px_0.5px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 active:translate-x-1 transition-all text-black no-underline group"
    :class="colSpan === 2 ? 'col-span-2' : ''"
  >
    <slot name="icon">
      <Icon v-if="icon" :name="icon" class="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
    </slot>
    <span class="font-black text-xs md:text-sm uppercase tracking-wider mt-1">{{ label }}</span>
  </a>
</template>
