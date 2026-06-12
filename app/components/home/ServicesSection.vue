<template>
  <section class="py-20 px-4 sm:px-8 lg:px-12 pt-34 overflow-hidden font-sans bg-amber-100">
    <div class="max-w-300 w-full mx-auto">
      
      <!-- Header Section -->
      <div class="flex items-center mb-16 md:mb-20 w-full">
        <!-- Title Box -->
        <div class="relative z-10 bg-yellow border-4 border-black px-6 md:px-8 py-3 md:py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2 shrink-0">
          <h2 class="font-normal text-lg sm:text-xl md:text-2xl uppercase tracking-widest text-black" style="font-family: var(--font-heading, inherit);">
            MY CAPABILITIES
          </h2>
        </div>
        
        <!-- Connecting Line -->
        <div class="grow h-1 bg-black ml-6 mr-6 hidden sm:block z-0 relative"></div>
        
        <!-- Small Icon Box -->
        <div class="border-4 border-black bg-white w-12 h-12 md:w-14 md:h-14 hidden sm:flex items-center justify-center shrink-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-10 relative">
          <svg viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter" class="w-6 h-6 md:w-8 md:h-8">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
        
        <!-- Service 1: Frontend -->
        <div class="bg-cream border-4 border-black p-6 md:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-2 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
          <!-- Icon Box -->
          <div class="bg-[#ff9088] border-[3px] border-black w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-4deg] mb-8 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter" class="w-7 h-7 md:w-9 md:h-9">
              <polyline points="8 6 2 12 8 18"></polyline>
              <polyline points="16 6 22 12 16 18"></polyline>
            </svg>
          </div>
          
          <h3 class="font-black text-xl lg:text-2xl text-black mb-4 uppercase tracking-wide leading-tight" style="font-family: var(--font-heading, inherit);">
            FRONTEND WEB DEVELOPMENT
          </h3>
          <p class="text-black font-semibold text-sm lg:text-base leading-relaxed mt-auto">
            Building interactive, responsive, and pixel-perfect user interfaces using modern tools like Vue 3, Tailwind CSS, and Shadcn components.
          </p>
        </div>

        <!-- Service 2: Backend -->
        <div class="bg-cream border-4 border-black p-6 md:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] -rotate-2 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full mt-4 md:mt-0">
          <!-- Icon Box -->
          <div class="bg-[#aaaaff] border-[3px] border-black w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[4deg] mb-8 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter" class="w-7 h-7 md:w-9 md:h-9">
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
          </div>
          
          <h3 class="font-black text-xl lg:text-2xl text-black mb-4 uppercase tracking-wide leading-tight" style="font-family: var(--font-heading, inherit);">
            BACKEND DEVELOPMENT
          </h3>
            <p class="text-black font-semibold text-sm lg:text-base leading-relaxed mt-auto">
            Designing production-ready, secure, and efficient server-side architecture and RESTful APIs, complete with relational database management (PostgreSQL/MySQL).
          </p>
        </div>

        <!-- Service 3: Full Stack -->
        <div class="bg-cream border-4 border-black p-6 md:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full mt-4 md:mt-0">
          <!-- Icon Box -->
          <div class="bg-[#5ae2c7] border-[3px] border-black w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-3 mb-8 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter" class="w-7 h-7 md:w-9 md:h-9">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 12 12 17 22 12"></polyline>
              <polyline points="2 17 12 22 22 17"></polyline>
            </svg>
          </div>
          
          <h3 class="font-black text-xl lg:text-2xl text-black mb-4 uppercase tracking-wide leading-tight" style="font-family: var(--font-heading, inherit);">
            FULLSTACK WEB DEVELOPMENT
          </h3>

          <p class="text-black font-semibold text-sm lg:text-base leading-relaxed mt-auto">
            Delivering seamless end-to-end development and connecting a solid backend with a dynamic frontend to ship production ready applications.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Neo-Brutalism Services Section
</script>
