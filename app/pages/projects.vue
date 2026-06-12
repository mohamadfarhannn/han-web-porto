<script setup>
import { ref } from 'vue'

useHead({
  title: 'Projects — mofarhannn',
  meta: [
    { name: 'description', content: 'Explore all my projects, from frontend dashboards to fullstack web applications.' }
  ]
})

import { projectsData } from '~/utils/data'

const projects = ref(projectsData)
</script>

<template>
  <div class="min-h-screen font-sans relative bg-amber-100 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-112.5 md:h-150 bg-cream border-b-4 z-0"></div>
    <div class="max-w-300 w-full mx-auto relative z-10 pt-8 pb-20 px-4 sm:px-8 lg:px-12">
      
      <!-- Header -->
      <div class="flex flex-col items-center justify-center text-center mb-16 md:mb-28 mt-8 md:mt-20 gap-6">
        
        <h1 class="font-black text-5xl sm:text-6xl md:text-[80px] text-black leading-[1.05] max-w-5xl" style="font-family: var(--font-heading, inherit); letter-spacing: -0.02em;">
          <span class="text-[#ff9088]">Selected</span> Works
        </h1>

        <p class="text-sm md:text-lg lg:text-xl font-bold leading-relaxed text-black max-w-sm:max-w-md md:max-w-2xl" style="font-family: var(--font-body, inherit);">
          This is where I document my web development journey. It features a curated collection of my work and serves as a continuous playground for learning and building new things.
        </p>
      </div>

      <!-- Projects Grid -->
      <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 scroll-mt-32">
        <HomeWorkCard 
          v-for="project in projects" 
          :key="project.title" 
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
</template>


