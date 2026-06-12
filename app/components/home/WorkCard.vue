<template>
  <!-- HORIZONTAL LAYOUT -->
  <div v-if="layout === 'horizontal'"
    class="sticky w-full" 
    :style="{ top: `${stickyTop}px` }"
  >
    <div 
      class="bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-transform duration-300"
      :style="{ transform: `rotate(${rotation}deg)` }"
    >
      <!-- Card Inner: Alternating layout -->
      <div class="flex flex-col" :class="reverse ? 'md:flex-row-reverse' : 'md:flex-row'">
        
        <!-- Thumbnail Section -->
        <div class="w-full md:w-[55%] relative">
          <div 
            class="w-full h-64 md:h-full min-h-80 md:min-h-105 p-5 md:p-8 flex items-center justify-center"
            :style="{ backgroundColor: frameBg }"
          >
            <div class="w-full h-full border-[3px] border-black overflow-hidden bg-white relative group">
              <img 
                :src="imageSrc" 
                :alt="title" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-square object-top" 
                width="600"
                height="600"
                loading="lazy"
              />
            </div>
          </div>
          <!-- Vertical divider on desktop -->
          <div class="hidden md:block absolute top-0 h-full w-1 bg-black" :class="reverse ? 'left-0' : 'right-0'"></div>
          <!-- Horizontal divider on mobile -->
          <div class="md:hidden absolute bottom-0 left-0 w-full h-1 bg-black"></div>
        </div>

        <!-- Content Section -->
        <div class="w-full md:w-[45%] p-8 md:p-12 lg:p-14 flex flex-col justify-center">
          <!-- Project Number -->
          <span class="inline-block bg-yellow border-[3px] border-black px-3 py-1 font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2 mb-6 w-fit">
            PROJECT {{ projectNumber }}
          </span>

          <h3 class="font-black text-3xl md:text-4xl lg:text-5xl uppercase text-black mb-6 leading-[1.1]" style="font-family: var(--font-heading, inherit);">
            {{ title }}
          </h3>

          <p class="text-gray-800 font-medium text-sm md:text-base lg:text-lg mb-6 leading-relaxed" style="font-family: var(--font-body, inherit);">
            {{ description }}
          </p>
          
          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in tags" 
              :key="typeof tag === 'string' ? tag : tag.label" 
              class="border-[3px] border-black px-3 py-1 font-black text-[10px] md:text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              :style="{ backgroundColor: typeof tag === 'string' ? '#ffffff' : (tag.color || '#ffffff') }"
            >
              {{ typeof tag === 'string' ? tag : tag.label }}
            </span>
          </div>

          <div class="mt-8">
            <NeoButton :to="projectLink" target="_blank" rel="noopener noreferrer" color="pink">
              VIEW PROJECT
            </NeoButton>
          </div>
          
        </div>
      </div>
    </div>
  </div>

  <!-- VERTICAL LAYOUT -->
  <NuxtLink v-else
    :to="projectLink"
    target="_blank"
    rel="noopener noreferrer"
    class="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer focus:outline-none"
  >
    <!-- Top Thumbnail -->
    <div 
      class="w-full relative p-2 md:p-4 lg:p-6 border-b-4 border-black flex items-center justify-center"
      :style="{ backgroundColor: frameBg }"
    >
      <div class="w-full h-full border-[3px] border-black overflow-hidden bg-white relative group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <img 
          :src="imageSrc" 
          :alt="title" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-video object-top" 
          width="600"
          height="337"
          loading="lazy"
        />
      </div>
    </div>
    
    <!-- Bottom Content -->
    <div class="p-6 md:p-8 flex flex-col grow bg-white">
      <h3 class="font-black text-2xl md:text-3xl uppercase text-black mb-4 leading-tight" style="font-family: var(--font-heading, inherit);">
        {{ title }}
      </h3>
      
      <p class="text-gray-800 font-medium text-sm md:text-base mb-8 leading-relaxed grow">
        {{ description }}
      </p>
      
      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mt-auto">
        <span 
          v-for="tag in tags" 
          :key="typeof tag === 'string' ? tag : tag.label" 
          class="border-2 border-black px-3 py-1 font-black text-[10px] md:text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black"
          :style="{ backgroundColor: typeof tag === 'string' ? '#ffffff' : (tag.color || '#ffffff') }"
        >
          {{ typeof tag === 'string' ? tag : tag.label }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  layout: {
    type: String,
    default: 'horizontal',
    validator: (value) => ['horizontal', 'vertical'].includes(value)
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  frameBg: {
    type: String,
    default: '#fce4ec'
  },
  tags: {
    type: Array,
    default: () => []
  },
  reverse: {
    type: Boolean,
    default: false
  },
  projectNumber: {
    type: [String, Number],
    default: '01'
  },
  stickyTop: {
    type: Number,
    default: 100
  },
  rotation: {
    type: Number,
    default: 0
  },
  projectLink: {
    type: String,
    default: '#'
  }
})
</script>
