<script setup>

</script>

<template>
  <section class="min-h-screen flex items-center justify-center pt-16 md:pt-2 pb-8 px-4 sm:px-8 lg:px-12 font-sans mb-0">
    <div class="max-w-300 w-full mx-auto flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-8">
      
      <!-- Left Column -->
      <div class="flex flex-col items-center justify-center content-center md:items-start relative z-10 w-full lg:w-[55%] xl:w-[60%] lg:pr-8 xl:pr-12">
        
        <!-- Decorative Star & Badge -->
        <div class="relative mb-10 ml-6 md:ml-8 mt-8 lg:mt-0">
          <!-- The Star Icon Graphic -->
          <div class="absolute -top-10 -left-10 md:-top-14 md:-left-12 w-16 h-16 md:w-20 md:h-20 bg-white border-[3px] border-black rotate-12 flex items-center justify-center z-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <svg viewBox="0 0 100 100" class="w-14 h-14 md:w-16 md:h-16">
              <path d="M50 10 L62 38 L90 50 L62 62 L50 90 L38 62 L10 50 L38 38 Z" fill="#ff9088" stroke="black" stroke-width="5" stroke-linejoin="round"/>
            </svg>
          </div>
          
          <div class="relative z-10 bg-yellow border-[3px] border-black px-4 md:px-5 py-2 font-black text-xs md:text-sm tracking-widest uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
            JUNIOR WEB DEVELOPER
          </div>
        </div>

        <!-- Heading -->
         <div>
          
         </div>
        <h1 class="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-normal leading-[0.9] tracking-tighter text-black mb-8" style="font-family: var(--font-heading, inherit)">
          <span class="text-[#ff9088]">Hello,</span> I'm
          <br class="hidden lg:block" />
          Mohammad
          <br class="hidden lg:block" />
          Farhan
        </h1>

        <!-- Description Box -->
        <div class="bg-white border-[3px] border-black p-4 lg:p-6 max-w-137.5 mb-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10">
          <p class="text-base md:text-lg lg:text-xl font-bold leading-relaxed text-black" style="font-family: var(--font-body, inherit);">
           I specialize in building full-stack web applications using Vue js, React js and Node.js, with a strong focus on responsive interfaces and creating RESTful APIs.
          </p>
        </div>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-4 md:gap-6 relative z-10">
          <a href="#work" class="bg-[#ff9088] border-[3px] border-black px-6 py-3 md:px-8 md:py-4 font-black text-sm md:text-base uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all inline-block">
            VIEW WORK
          </a>
          <a href="#contact" class="bg-white border-[3px] border-black px-6 py-3 md:px-8 md:py-4 font-black text-sm md:text-base uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all items-center gap-2 inline-flex">
            LET'S TALK
            <svg class="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <line x1="9" y1="9" x2="15" y2="9"></line>
              <line x1="9" y1="13" x2="15" y2="13"></line>
            </svg>
          </a>
        </div>

      </div>

      <!-- Right Column (Image/Visuals) -->
      <div class="relative w-full lg:w-[45%] xl:w-[40%] max-w-60 lg:max-w-80 xl:max-w-100 mx-auto lg:mx-0 mt-16 lg:mt-0 flex justify-center items-center lg:justify-end">
        
        <!-- Pink Background Shape -->
        <div class="absolute w-[110%] h-full bg-[#ff9088] border-[3px] border-black -rotate-6 z-0 -left-6 top-0 hidden sm:block"></div>
        
        <!-- Polaroid Frame -->
        <div class="relative z-10 bg-white border-[3px] border-black p-4 md:p-5 pb-16 md:pb-20 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-3 w-full hover:rotate-0 transition-transform duration-300">
          <!-- Inner image container -->
          <div class="bg-[#5c5c5c] border-[3px] border-black relative overflow-hidden aspect-4/5 flex justify-center items-end w-full">
            <!-- White circle behind avatar -->
            <div class="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] aspect-square bg-cream rounded-full z-0"></div>
            
            <!-- Avatar Image -->
            <img src="/images/ava-img.webp" alt="Avatar" class="relative z-10 w-[135%] max-w-none h-auto object-cover" />
          </div>
          
          <!-- "HIRE ME!" Sticker -->
          <div class="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-yellow border-[3px] border-black px-4 py-2 md:py-3 font-black text-base md:text-xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-8 z-20 flex items-center gap-1 hover:scale-110 transition-transform cursor-pointer">
            LET'S BUILD!! <span class="text-xl md:text-2xl">🚀</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
