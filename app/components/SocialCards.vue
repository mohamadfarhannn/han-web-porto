<script setup lang="ts">
interface Props {
  href: string
  icon?: string
  label: string
  color?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'var(--color-dark)',
})

const sizeClasses = {
  sm: 'p-3 gap-1.5',
  md: 'p-5 gap-2',
  lg: 'p-8 gap-3',
}

const iconSizes = {
  sm: 'text-[20px]',
  md: 'text-[22px]',
  lg: 'text-[32px]',
}

const labelSizes = {
  sm: 'text-[8px]',
  md: 'text-[10px]',
  lg: 'text-[14px]',
}
</script>

<template>
  <a 
    :href="href" 
    target="_blank" 
    class="flex flex-col items-center border-2 border-dark rounded-[10px] shadow-[2px_2px_0px_var(--color-dark)] transition-all duration-200 hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0px_var(--color-dark)] text-white no-underline"
    :class="[sizeClasses[size]]"
    :style="{ backgroundColor: color }"
  >
    <slot name="icon">
      <Icon v-if="icon" :name="icon" :class="iconSizes[size]" />
    </slot>
    <span class="font-body font-bold tracking-widest uppercase" :class="labelSizes[size]">
      {{ label }}
    </span>
  </a>
</template>
