<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const headerVisible = ref(false)
const sectionRef = ref(null)
const cardRefs = ref([])
const visibleCards = ref([])

const projects = ref([
  {
    title: 'DAILYGRIND',
    description: 'A full-featured Instagram-clone RESTful API built from scratch with Node.js & Express.js. Includes JWT authentication with OTP email verification, Cloudinary image optimization, Prisma ORM with PostgreSQL, and paginated endpoints for posts, comments, likes, and user profiles.',
    imageSrc: '/images/dailygrind-1.webp',
    frameBg: '#FEDDDB',
    tags: ['NODE.JS', 'EXPRESS', 'POSTGRESQL', 'PRISMA', 'JWT'],
    reverse: false,
    projectNumber: '01',
    rotation: -0.5
  },
  {
    title: 'OFFSTREET PARKING DASHBOARD',
    description: 'A responsive parking management dashboard featuring real-time slot availability, booking management, and interactive data visualization. Built with a modern Vue.js frontend connected to a robust backend API with role-based access control.',
    imageSrc: '/images/offstreet-1.webp',
    frameBg: '#E3E3FF',
    tags: ['VUE.JS', 'TAILWIND CSS', 'REST API', 'DASHBOARD'],
    reverse: true,
    projectNumber: '02',
    rotation: 0.5
  },
  {
    title: 'ONSTREET PARKING DASHBOARD',
    description: 'A full-featured Instagram-clone RESTful API built from scratch with Node.js & Express.js. Includes JWT authentication with OTP email verification, Cloudinary image optimization, Prisma ORM with PostgreSQL, and paginated endpoints for posts, comments, likes, and user profiles.',
    imageSrc: '/images/onstreet-1.webp',
    frameBg: '#DBF5F0',
    tags: ['VUE.JS', 'TAILWIND CSS', 'REST API', 'DASHBOARD'],
    reverse: false,
    projectNumber: '03',
    rotation: 0.5
  },
])

let observer = null

onMounted(() => {
  visibleCards.value = Array(projects.value.length).fill(false)
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === sectionRef.value) {
          setTimeout(() => { headerVisible.value = true }, 100)
          observer.unobserve(sectionRef.value)
        } else if (entry.target.dataset.index !== undefined) {
          const idx = Number(entry.target.dataset.index)
          setTimeout(() => { visibleCards.value[idx] = true }, 150)
          observer.unobserve(entry.target)
        }
      }
    })
  }, { threshold: 0.1 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  } else {
    headerVisible.value = true
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
    return 'opacity-100 left-0'
  } else {
    // index 0 -> kanan ke kiri (starts from right, so left is positive)
    // index 1 -> kiri ke kanan (starts from left, so left is negative)
    return index % 2 === 0 
      ? 'opacity-0 left-24 md:left-40' 
      : 'opacity-0 -left-24 md:-left-40'
  }
}
</script>

<template>
  <section id="work" ref="sectionRef" class="py-20 px-4 sm:px-8 lg:px-12 pt-34 font-sans overflow-hidden">
    <div class="max-w-300 w-full mx-auto">
      
      <!-- Header Section -->
      <div 
        class="flex items-center mb-16 md:mb-24 w-full transition-all duration-700 ease-out"
        :class="headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'"
      >
        <!-- Small Icon Box -->
        <div class="border-4 border-black bg-white w-12 h-12 md:w-14 md:h-14 hidden sm:flex items-center justify-center shrink-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-10 relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter" class="w-6 h-6 md:w-8 md:h-8">
            <path d="M3 4v16h18V8H11L9 4H3z"></path>
            <path d="M3 10h18"></path>
          </svg>
        </div>
        
        <!-- Connecting Line -->
        <div class="grow h-1 bg-black ml-6 mr-6 hidden sm:block z-0 relative"></div>
        
        <!-- Title Box -->
        <div class="relative z-10 bg-yellow border-4 border-black px-6 md:px-10 py-3 md:py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-2 shrink-0">
          <h2 class="font-normal text-lg sm:text-xl md:text-2xl uppercase tracking-widest text-black" style="font-family: var(--font-heading, inherit);">
            SELECTED WORK
          </h2>
        </div>
      </div>

      <!-- Sticky Card Stack Container -->
      <div class="relative">
        <div 
          v-for="(project, index) in projects" 
          :key="project.title"
          class="mb-12 md:mb-16 last:mb-0 relative transition-all duration-1000 ease-out"
          :ref="el => { if (el) cardRefs[index] = el }"
          :data-index="index"
          :class="getCardAnimationClass(index)"
        >
          <HomeWorkCard 
            :title="project.title"
            :description="project.description"
            :image-src="project.imageSrc"
            :frame-bg="project.frameBg"
            :tags="project.tags"
            :reverse="project.reverse"
            :project-number="project.projectNumber"
            :sticky-top="100 + (index * 20)"
            :rotation="project.rotation"
          />
        </div>
      </div>

      <!-- See All Button -->
      <div class="mt-20 flex justify-center">
        <NeoButton to="/projects" color="cyan" size="lg">
          SEE ALL WORKS
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter" class="w-5 h-5 md:w-6 md:h-6">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </NeoButton>
      </div>

    </div>
  </section>
</template>


