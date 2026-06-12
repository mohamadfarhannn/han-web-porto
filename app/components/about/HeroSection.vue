<script setup>
import { ref, onMounted } from 'vue'

const cvUrl = 'https://docs.google.com/document/d/11SDndu93XBiMXLs72r3-7R3PkSzp52_s/edit';

const leftVisible = ref(false)
const rightVisible = ref(false)

onMounted(() => {
  setTimeout(() => { leftVisible.value = true }, 100)
  setTimeout(() => { rightVisible.value = true }, 300)
})
</script>

<template>
  <section class="pt-12 pb-30 md:pt-16 px-4 sm:px-8 lg:px-12 font-sans min-h-[85vh] flex items-center relative overflow-hidden">
    <div class="max-w-300 w-full mx-auto flex flex-col lg:flex-row justify-between items-center gap-20 lg:gap-12">
      
      <!-- Left Column: Content -->
      <div 
        class="w-full lg:w-[50%] flex flex-col items-center text-center lg:items-start lg:text-left relative z-10 transition-all duration-1000 ease-out"
        :class="leftVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'"
      >
        
        <!-- Heading -->
        <h1 class="font-normal text-[50px] sm:text-[50px] md:text-[65px] leading-[1] text-black mb-8" style="font-family: var(--font-heading, inherit);">
          WHO IS<br />
          <span class="inline-block bg-yellow border-[4px] border-black px-5 py-2 mt-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            FARHAN?
          </span>
        </h1>

        <!-- Paragraph Box -->
        <div class="bg-white border-4 border-black p-4 md:p-6 lg:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] mb-10 w-full max-w-150 text-center xl:text-left">
          <p class="font-semibold text-sm md:text-base lg:text-lg leading-relaxed text-black">
            Junior Web Developer with full-stack capabilities, experienced in developing enterprise application interfaces and designing RESTful API. Proficient in the JavaScript ecosystem and relational database. Graduate of a Bachelor's degree in Communication Information Management and an alumnus of Bangkit Academy (Cloud Computing). Accustomed to working in an Agile environment using GitLab.
          </p>
        </div>

        

        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <NeoButton to="#journey" color="pink">
            MY JOURNEY
          </NeoButton>

          <NeoButton :to="cvUrl" target="_blank" rel="noopener noreferrer" color="white">
            MY CV
            <Icon name="lucide:download" class="w-5 h-5" />
          </NeoButton>
        </div>
      </div>

      <!-- Right Column: Polaroid Image -->
      <div 
        class="w-full lg:w-[45%] flex justify-center lg:justify-end relative z-10 transition-all duration-1000 ease-out"
        :class="rightVisible ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'"
      >
        
        <div class="relative w-full max-w-80 lg:max-w-96 xl:max-w-112.5">
          <!-- Yellow Background Box -->
          <div class="absolute inset-0 bg-yellow border-4 border-black translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 z-0"></div>
          
          <!-- White Polaroid Frame -->
          <div class="relative z-10 bg-white border-4 border-black p-4 pb-14 md:p-5 md:pb-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col group transition-transform duration-300 hover:-rotate-2">
            
            <!-- Image Wrapper -->
            <div class="w-full aspect-square border-[3px] border-black overflow-hidden bg-gray-200">
              <img 
                src="/images/profile.webp" 
                alt="Farhan Profile" 
                class="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105" 
              />
            </div>
            
            <!-- Polaroid Footer -->
            <div class="absolute bottom-4 md:bottom-5 left-5 right-5 flex justify-between items-center">
              <!-- <span class="font-black text-xs md:text-sm uppercase tracking-widest text-black">M.FARHAN V2.4</span> -->
              
              <!-- Colored Dots -->
              <div class="flex gap-1.5 md:gap-2">
                <div class="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-[2px] border-black bg-[#ff9088]"></div>
                <div class="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-[2px] border-black bg-[#aaaaff]"></div>
                <div class="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-[2px] border-black bg-[#5ae2c7]"></div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

