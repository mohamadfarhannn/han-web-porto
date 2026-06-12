<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

useHead({
  title: 'Projects — mofarhannn',
  meta: [
    { name: 'description', content: 'Explore all my projects, from frontend dashboards to fullstack web applications.' }
  ]
})

import { projectsData } from '~/utils/data'

const projects = ref(projectsData)

const headerRef = ref(null)
const headerVisible = ref(false)

const cardRefs = ref([])
const visibleCards = ref([])

let observer = null

onMounted(() => {
  visibleCards.value = Array(projects.value.length).fill(false)
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === headerRef.value) {
          setTimeout(() => { headerVisible.value = true }, 100)
          observer.unobserve(headerRef.value)
        } else if (entry.target.dataset.index !== undefined) {
          const idx = Number(entry.target.dataset.index)
          setTimeout(() => { visibleCards.value[idx] = true }, 150)
          observer.unobserve(entry.target)
        }
      }
    })
  }, { threshold: 0.1 })

  if (headerRef.value) {
    observer.observe(headerRef.value)
  }

  cardRefs.value.forEach(card => {
    if (card) observer.observe(card)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

const getCardAnimationClass = (index) => {
  if (visibleCards.value[index]) {
    return 'translate-x-0 opacity-100'
  } else {
    return index % 2 === 0 
      ? '-translate-x-16 md:-translate-x-24 opacity-0'
      : 'translate-x-16 md:translate-x-24 opacity-0'
  }
}
</script>

<template>
  <div class="min-h-screen font-sans relative bg-amber-100 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-112.5 md:h-150 bg-cream border-b-4 z-0"></div>
    <div class="max-w-300 w-full mx-auto relative z-10 pt-8 pb-20 px-4 sm:px-8 lg:px-12">
      
      <!-- Header -->
      <div 
        ref="headerRef"
        class="flex flex-col items-center justify-center text-center mb-16 md:mb-28 mt-8 md:mt-20 gap-6 transition-all duration-1000 ease-out"
        :class="headerVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'"
      >
        
        <h1 class="font-black text-5xl sm:text-6xl md:text-[80px] text-black leading-[1.05] max-w-5xl" style="font-family: var(--font-heading, inherit); letter-spacing: -0.02em;">
          <span class="text-[#ff9088]">Selected</span> Works
        </h1>

        <p class="text-sm md:text-lg lg:text-xl font-bold leading-relaxed text-black max-w-sm:max-w-md md:max-w-2xl" style="font-family: var(--font-body, inherit);">
          This is where I document my web development journey. It features a curated collection of my work and serves as a continuous playground for learning and building new things.
        </p>
      </div>

      <!-- Projects Grid -->
      <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 scroll-mt-32">
        <div
          v-for="(project, index) in projects" 
          :key="project.title" 
          class="relative transition-all duration-1000 ease-out h-full"
          :ref="el => { if (el) cardRefs[index] = el }"
          :data-index="index"
          :class="getCardAnimationClass(index)"
        >
          <HomeWorkCard 
            layout="vertical"
            :title="project.title"
            :description="project.description"
            :image-src="project.imageSrc"
            :frame-bg="project.frameBg"
            :tags="project.tags"
            :project-link="project.link"
          />
        </div>
      </div>
      
    </div>
  </div>
</template>


