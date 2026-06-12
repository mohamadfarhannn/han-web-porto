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
          v-bind="project" 
        />
      </div>
      
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

useHead({
  title: 'Projects — mofarhannn',
  meta: [
    { name: 'description', content: 'Explore all my projects, from frontend dashboards to fullstack web applications.' }
  ]
})

const projects = ref([
  {
    title: 'DAILYGRIND',
    description: 'A full featured Instagram-clone RESTful API built from scratch with Node.js & Express.js. Includes JWT authentication with OTP email verification, Cloudinary image optimization, Prisma ORM with PostgreSQL, and paginated endpoints for posts, comments, likes, and user profiles.',
    imageSrc: '/images/dailygrind-1.webp',
    frameBg: '#FEDDDB',
    tags: ['NODE.JS', 'EXPRESS', 'POSTGRESQL', 'PRISMA', 'JWT'],
  },
  {
    title: 'OFFSTREET PARKING DASHBOARD',
    description: 'A responsive parking management dashboard featuring real-time slot availability, booking management, and interactive data visualization. Built with a modern Vue.js frontend connected to a robust backend API with role-based access control.',
    imageSrc: '/images/offstreet-1.webp',
    frameBg: '#E3E3FF',
    tags: ['VUE.JS', 'TAILWIND CSS', 'REST API', 'DASHBOARD'],
  },
  {
    title: 'ONSTREET PARKING DASHBOARD',
    description: 'An integrated on-street parking management system serving as a central control hub for transactions, member registrations, and field device activation. Collaborated with the frontend team to execute a complete UI revamp. Focused on building reusable components and decoupling business logic from the presentation layer to deliver a responsive, scalable, and user centric platform.',
    imageSrc: '/images/onstreet-1.webp',
    frameBg: '#DBF5F0',
    tags: ['VUE.JS', 'TAILWIND', 'API INTEGRATION', 'SHADCN UI'],
  },
  {
    title: 'CHILL MOVIE',
    description: 'An interactive front-end movie streaming application. This project implements REST API integration for dynamic CRUD operations and utilizes Zustand for global state management of the watchlist feature. Developed using the Atomic Design methodology, featuring complex data filtering, sorting, and automated deployment pipelines via Netlify.',
    imageSrc: '/images/chillmovie.webp',
    frameBg: '#FFF9EB',
    tags: ['REACT.JS', 'TAILWIND', 'ZUSTAND', 'NETLIFY']
  },
])
</script>