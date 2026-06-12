<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  to: {
    type: String,
    default: undefined
  },
  color: {
    type: String,
    default: 'white' // 'white', 'pink', 'yellow', 'cyan', 'blue'
  },
  size: {
    type: String,
    default: 'md' // 'md', 'lg'
  },
  block: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const bgMap: Record<string, string> = {
  pink: 'bg-[#ff9088]',
  yellow: 'bg-yellow',
  white: 'bg-white',
  cyan: 'bg-[#5ae2c7]',
  blue: 'bg-[#7c7cf3]',
  cream: 'bg-cream'
}

const sizeClasses = computed(() => {
  if (props.size === 'lg') {
    return 'px-8 py-3 md:py-4 text-lg md:text-xl tracking-wider shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-2 active:translate-x-2'
  }
  return 'px-6 py-4 text-sm md:text-base tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1.5 active:translate-x-1.5'
})

const baseClasses = 'border-4 border-black font-black uppercase transition-all flex items-center justify-center gap-2 text-center text-black no-underline hover:translate-y-1 hover:translate-x-1 disabled:opacity-70 disabled:cursor-not-allowed'

const computedClasses = computed(() => {
  return [
    baseClasses,
    bgMap[props.color] || bgMap.white,
    sizeClasses.value,
    props.block ? 'w-full' : 'inline-flex w-full sm:w-auto'
  ]
})
</script>

<template>
  <NuxtLink 
    v-if="to"
    :to="to"
    :class="computedClasses"
  >
    <slot />
  </NuxtLink>
  <button 
    v-else
    :type="type"
    :disabled="disabled"
    :class="computedClasses"
  >
    <slot />
  </button>
</template>
