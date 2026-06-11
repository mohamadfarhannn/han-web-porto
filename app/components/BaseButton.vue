<script setup lang="ts">
interface Props {
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'yellow'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  size: 'md'
})

const variants = {
  primary: 'bg-hot-pink text-white',
  secondary: 'bg-[#ef3e66] text-white',
  yellow: 'bg-[#FFCC47] text-dark'
}

const sizes = {
  sm: 'px-4 py-1.5 text-[11px] shadow-[2px_2px_0px_var(--color-dark)] hover:shadow-[1px_1px_0px_var(--color-dark)]',
  md: 'px-6 py-2.5 text-[13px] shadow-[4px_4px_0px_var(--color-dark)] hover:shadow-[2px_2px_0px_var(--color-dark)]',
  lg: 'px-8 py-3.5 text-[15px] shadow-[6px_6px_0px_var(--color-dark)] hover:shadow-[3px_3px_0px_var(--color-dark)]'
}
</script>

<template>
  <component
    :is="to ? 'NuxtLink' : (href ? 'a' : 'button')"
    :to="to"
    :href="href"
    :type="!to && !href ? type : undefined"
    class="group relative inline-flex items-center justify-center font-heading tracking-wider uppercase border-2 border-dark rounded-lg transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none no-underline cursor-pointer"
    :class="[variants[variant], sizes[size]]"
  >
    <slot />
  </component>
</template>
