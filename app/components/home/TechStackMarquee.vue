
<script setup>
import { ref } from 'vue'

const techStack = ref([
  { name: 'Vue.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>' },
  { name: 'Node.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>' },
  { name: 'Express.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect><line x1="2" y1="12" x2="22" y2="12"></line></svg>' },
  { name: 'PostgreSQL', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>' },
  { name: 'TypeScript', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M9 15h6"></path><path d="M12 18v-6"></path></svg>' },
  { name: 'Tailwind CSS', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>' },
  { name: 'Figma', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>' },
  { name: 'Git', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>' },
  { name: 'Prisma ORM', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><path d="M12 2L2 7L12 12L22 7L12 2Z"></path><path d="M2 17L12 22L22 17"></path><path d="M2 12L12 17L22 12"></path></svg>' },

])
</script>


<template>
  <div class="py-8 md:py-10 border-y-[3px] border-black bg-amber-100 overflow-hidden flex relative z-20">

    <!-- Marquee Container -->
    <div class="animate-marquee flex gap-6 md:gap-8 px-3 md:px-4 w-max">
      
      <!-- Group 1 -->
      <div class="flex items-center gap-6 md:gap-8 shrink-0">
        <div v-for="tech in techStack" :key="tech.name" 
             class="flex items-center gap-2 bg-white border-2 border-black rounded-full px-4 py-2 shadow-[3px_3px_0px_#000000] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_#000000] transition-all cursor-default">
          <span class="w-5 h-5 flex items-center justify-center text-black" v-html="tech.icon"></span>
          <span class="font-bold text-sm md:text-base uppercase tracking-wider text-black" style="font-family: var(--font-body, inherit);">{{ tech.name }}</span>
        </div>
      </div>

      <!-- Group 2 (Duplicate for Seamless Loop) -->
      <div class="flex items-center gap-6 md:gap-8 shrink-0">
        <div v-for="tech in techStack" :key="tech.name + '-dup'" 
             class="flex items-center gap-2 bg-white border-2 border-black rounded-full px-4 py-2 shadow-[3px_3px_0px_#000000] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_#000000] transition-all cursor-default">
          <span class="w-5 h-5 flex items-center justify-center text-black" v-html="tech.icon"></span>
          <span class="font-bold text-sm md:text-base uppercase tracking-wider text-black" style="font-family: var(--font-body, inherit);">{{ tech.name }}</span>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: scroll 25s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    /* Translate exactly half of the flex container (1 of the 2 groups + its gap) */
    transform: translateX(calc(-50%));
  }
}
</style>
