<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div 
      v-for="(cert, index) in certificates" 
      :key="index"
      class="bg-cream border-4 border-black p-5 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between h-full relative transition-all duration-500 ease-out"
      :class="visibleItems[index] ? 'translate-y-0 opacity-100 hover:-translate-y-1' : 'translate-y-16 opacity-0'"
      :ref="el => { if (el) itemRefs[index] = el }"
      :data-index="index"
    >
      <div class="flex justify-between items-start mb-6">
        <Icon :name="cert.icon || 'lucide:badge-check'" class="w-7 h-7 stroke-[2.5]" :style="{ color: cert.iconColor || '#000000' }" />
        <span class="bg-black text-white px-3 py-1 font-black text-[10px] md:text-xs uppercase">{{ cert.year }}</span>
      </div>
      <div class="flex flex-col justify-between mb-4">
        <h4 class="font-black text-lg md:text-xl text-black leading-tight">{{ cert.title }}</h4>
        <p class="font-black text-black mt-1 text-sm md:text-base">{{ cert.issuer }}</p>
      </div>
      <a :href="cert.link || '#'" class="font-black text-xs md:text-sm uppercase hover:underline underline-offset-4 mt-auto" target="_blank" :style="{ color: cert.linkColor || '#000000' }">VIEW CREDENTIAL</a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  certificates: {
    type: Array,
    required: true,
    default: () => []
  }
})

const itemRefs = ref([])
const visibleItems = ref([])

let observer = null

onMounted(() => {
  visibleItems.value = Array(props.certificates.length).fill(false)
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Number(entry.target.dataset.index)
        // Add staggered delay based on index for simultaneous appearance when entering viewport together
        setTimeout(() => { visibleItems.value[index] = true }, 100 + (index * 150))
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  itemRefs.value.forEach(item => {
    if (item) observer.observe(item)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
