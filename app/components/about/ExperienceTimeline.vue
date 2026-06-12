<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  experiences: {
    type: Array,
    required: true,
    default: () => []
  }
})

const itemRefs = ref([])
const visibleItems = ref([])

let observer = null

onMounted(() => {
  visibleItems.value = Array(props.experiences.length).fill(false)
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Number(entry.target.dataset.index)
        setTimeout(() => { visibleItems.value[index] = true }, 150)
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

<template>
  <div class="relative pl-8 md:pl-10">
    <!-- Vertical Line -->
    <div class="absolute left-3.25 md:left-4.25 top-6 bottom-0 w-1 bg-black z-0"></div>

    <!-- Timeline Items -->
    <div 
      v-for="(item, index) in experiences" 
      :key="index"
      class="relative transition-all duration-700 ease-out"
      :class="[
        { 'mb-12': index !== experiences.length - 1 },
        visibleItems[index] ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      ]"
      :ref="el => { if (el) itemRefs[index] = el }"
      :data-index="index"
    >
      <!-- Bullet Point -->
      <div 
        class="absolute -left-8 md:-left-10 top-5 w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-black z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        :style="{ backgroundColor: item.color || '#ffcc47' }"
      ></div>
      
      <!-- Card -->
      <div class="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform duration-300">
        <div class="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-2">
          <div>
            <span class="bg-black text-white px-3 py-1 font-black text-xs uppercase self-start">{{ item.date }}</span>
            <h3 class="font-black text-xl md:text-2xl text-black leading-tight mt-2" style="font-family: var(--font-heading, inherit);">{{ item.role }}</h3>
            <p class="font-black text-black mt-1 text-sm md:text-base">{{ item.company }}</p>
          </div>
        </div>
        <p class="font-semibold text-gray-800 text-sm md:text-base leading-relaxed mt-4">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>


