<template>
  <div class="relative pl-8 md:pl-10">
    <!-- Vertical Line -->
    <div class="absolute left-[13px] md:left-[17px] top-6 bottom-0 w-[4px] bg-black z-0"></div>

    <!-- Timeline Items -->
    <div 
      v-for="(item, index) in experiences" 
      :key="index"
      class="relative"
      :class="{ 'mb-12': index !== experiences.length - 1 }"
    >
      <!-- Bullet Point -->
      <div 
        class="absolute -left-8 md:-left-10 top-5 w-6 h-6 md:w-8 md:h-8 rounded-full border-[4px] border-black z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        :style="{ backgroundColor: item.color || '#ffcc47' }"
      ></div>
      
      <!-- Card -->
      <div class="bg-white border-[4px] border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform duration-300">
        <div class="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-2">
          <div>
            <span class="bg-black text-white px-3 py-1 font-black text-xs uppercase self-start">{{ item.date }}</span>
            <h3 class="font-black text-xl md:text-2xl text-black leading-tight mt-2" style="font-family: var(--font-heading, inherit);">{{ item.role }}</h3>
            <p class="font-black text-black mt-1 text-sm md:text-base">{{ item.company }}</p>
          </div>
        </div>
        <p class="font-semibold text-gray-800 text-sm md:text-base leading-relaxed mt-4">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  experiences: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>
