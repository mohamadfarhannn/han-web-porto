<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const leftVisible = ref(false)
const rightVisible = ref(false)
const rightColumn = ref(null)

let observer = null

onMounted(() => {
  // Animasi kiri (teks) muncul sesaat setelah dimuat
  setTimeout(() => {
    leftVisible.value = true
  }, 100)

  // Animasi kanan (gambar) muncul jika masuk ke dalam viewport (saat discroll di HP)
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(() => {
        rightVisible.value = true
      }, 200)
      if (rightColumn.value) observer.unobserve(rightColumn.value)
    }
  }, { threshold: 0.1 })
  
  if (rightColumn.value) {
    observer.observe(rightColumn.value)
  } else {
    rightVisible.value = true
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <section class="min-h-screen flex items-center justify-center pt-12 pb-28 sm:pt-16 sm:pb-30 lg:pt-28 xl:pt-20 px-4 sm:px-8 lg:px-12 font-sans">
    <div class="max-w-300 w-full mx-auto flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-8">
      
      <!-- Left Column -->
      <div 
        class="flex flex-col items-start relative z-10 w-full lg:w-[55%] xl:w-[60%] lg:pr-8 xl:pr-12 transition-all duration-1000 ease-out"
        :class="leftVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'"
      >
        
        <!-- Decorative Star & Badge -->
        <div class="relative mb-10 ml-6 md:ml-8 mt-10 lg:mt-0">
          <!-- The Star Icon Graphic -->
          <div class="absolute -top-10 -left-10 md:-top-14 md:-left-12 w-16 h-16 md:w-20 md:h-20 bg-white border-[3px] border-black rotate-12 flex items-center justify-center z-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <svg viewBox="0 0 100 100" class="w-14 h-14 md:w-16 md:h-16">
              <path d="M50 10 L62 38 L90 50 L62 62 L50 90 L38 62 L10 50 L38 38 Z" fill="#ff9088" stroke="black" stroke-width="5" stroke-linejoin="round"/>
            </svg>
          </div>
          
          <div class="relative z-10 bg-yellow border-4 border-black px-4 md:px-5 py-2 font-black text-xs md:text-sm tracking-widest uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
            JUNIOR WEB DEVELOPER
          </div>
        </div>

        <!-- Heading -->
        <h1 class="text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-normal leading-[1.05] md:leading-[0.9] tracking-tighter text-black mb-8 text-center lg:text-left w-full" style="font-family: var(--font-heading, inherit)">
          <span class="text-[#ff9088]">Hello,</span> I'm
          <br class="hidden lg:block" />
          Mohammad
          <br class="hidden lg:block" />
          Farhan
        </h1>

        <!-- Description Box -->
        <div class="bg-white border-4 border-black p-5 lg:p-6 max-w-full md:max-w-137.5 mb-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10 text-center mx-auto lg:mx-0">
          <p class="text-base md:text-lg lg:text-xl font-bold leading-relaxed text-black" style="font-family: var(--font-body, inherit);">
           I specialize in building full-stack web applications using Vue js, React js and Node.js, with a strong focus on responsive interfaces and creating RESTful APIs.
          </p>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto relative z-10 mx-auto lg:mx-0">
          <NeoButton to="#work" color="pink">
            VIEW WORK
          </NeoButton>
          <NeoButton to="#contact" color="white">
            LET'S TALK
            <svg class="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <line x1="9" y1="9" x2="15" y2="9"></line>
              <line x1="9" y1="13" x2="15" y2="13"></line>
            </svg>
          </NeoButton>
        </div>

      </div>

      <!-- Right Column (Image/Visuals) -->
      <div 
        ref="rightColumn"
        class="order-1 lg:order-0 relative w-full lg:w-[45%] xl:w-[40%] max-w-60 sm:max-w-xs lg:max-w-80 xl:max-w-100 mx-auto lg:mx-0 mt-4 lg:mt-0 flex justify-center items-center lg:justify-end transition-all duration-1000 ease-out"
        :class="rightVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'"
      >
        
        <!-- Pink Background Shape -->
        <div class="absolute w-[110%] h-full bg-[#ff9088] border-[3px] border-black -rotate-6 z-0 -left-6 top-0 hidden sm:block"></div>
        
        <!-- Polaroid Frame -->
        <div class="relative z-10 bg-white border-4 border-black p-4 md:p-5 pb-16 md:pb-20 mb-24 md:mb-0 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-3 w-full hover:rotate-0 transition-transform duration-300">
          <!-- Inner image container -->
          <div class="bg-[#5c5c5c] border-4 border-black relative overflow-hidden aspect-4/5 flex justify-center items-end w-full">
            <!-- White circle behind avatar -->
            <div class="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] aspect-square bg-cream rounded-full z-0"></div>
            
            <!-- Avatar Image -->
            <img src="/images/ava-img.webp" alt="Avatar" class="relative z-10 w-[135%] max-w-none h-auto object-cover" width="400" height="400" />
          </div>
          
          <!-- "HIRE ME!" Sticker -->
          <div class="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-yellow border-4 border-black px-4 py-2 md:py-3 font-black text-base md:text-xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-8 z-20 flex items-center gap-1 hover:scale-110 transition-transform cursor-pointer">
            LET'S BUILD!! <span class="text-xl md:text-2xl">🚀</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
