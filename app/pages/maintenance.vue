<script setup lang="ts">
definePageMeta({
  layout: false
})

useHead({
  title: 'Under Maintenance... — mofarhannn',
})
</script>

<template>
  <main class="h-screen bg-cream flex items-center justify-center p-6 md:p-10 relative overflow-hidden font-body">
    
    <!-- Background Decor -->
    <!-- <div class="absolute z-0 w-[300px] h-[300px] rounded-full bg-yellow opacity-15 -top-[50px] -right-[100px] animate-[pulse-dot_4s_ease-in-out_infinite]"></div>
    <div class="absolute z-0 w-0 h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-b-[250px] border-b-hot-pink opacity-10 -bottom-[50px] -left-[50px] rotate-[20deg]"></div> -->

    <div class="max-w-137.5 w-full flex flex-col items-center gap-12 z-10 relative">
      
      <!-- Top Badges -->
      <div class="flex items-center gap-4">
        <!-- <div class="inline-flex items-center gap-2 bg-yellow text-dark text-[11px] font-bold py-2 px-4 rounded-md tracking-widest border-2 border-dark shadow-[2px_2px_0px_var(--color-dark)]">
          LAGI MAINTENANCE
        </div> -->
      </div>

      <!-- Main Visual / Content -->
      <div class="relative bg-white border-8 border-dark  shadow-[6px_6px_0px_var(--color-dark)] md:shadow-[10px_10px_0px_var(--color-dark)] w-full py-6 px-6 md:py-8 md:px-8 text-center rounded-xl">
        <!-- Floating decors -->
        <div class="absolute font-heading text-[11px] py-2 px-4 border-2 border-dark shadow-[3px_3px_0px_var(--color-dark)] z-10 tracking-widest -top-3.75 left-2.5 md:-top-5 md:-left-5 bg-yellow text-dark -rotate-6">
          OOPS!
        </div>
        <div class="absolute font-heading text-[11px] py-2 px-4 border-2 border-dark shadow-[3px_3px_0px_var(--color-dark)] z-10 tracking-widest -bottom-6.25 right-2 md:-bottom-5 md:-right-5 bg-hot-pink text-dark rotate-6">
          STAY TUNED!
        </div>

        <div class="flex flex-col items-center gap-8">
          <div class="w-22 h-22 bg-cream border-[3px] border-dark rounded-full flex items-center justify-center shadow-[4px_4px_0px_var(--color-dark)]">
            <Icon name="ph:hammer-fill" class="text-[44px] text-dark animate-[tool-swing_2s_ease-in-out_infinite]" />
          </div>
          
          <h1 class="font-heading text-4xl sm:text-5xl md:text-[56px] leading-[1.05] text-dark uppercase tracking-tighter">
            WEBNYA LAGI
            <br />
            MAINTENANCE.
            <span class="text-hot-pink animate-[blink_1s_step-end_infinite]">_</span>
          </h1>

          <p class="text-[15px] leading-[1.7] text-dark/85 max-w-110 py-5 px-6 border-2 border-dashed border-dark rounded-lg bg-cream text-left">
            Mohon bersabar ya! website ini sedang dalam proses perbaikan, Tungguin ya!
          </p>

          <!-- <div class="flex flex-col sm:flex-row gap-4 justify-center w-full mt-2 p-8">
            <NuxtLink to="/" class="group text-[13px] font-bold no-underline py-3.5 px-8 rounded-lg tracking-wider uppercase border-2 border-dark shadow-[4px_4px_0px_var(--color-dark)] inline-flex items-center justify-center gap-3 bg-[#00F5A0] text-dark hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-dark)] transition-all duration-200">
              <Icon name="ph:house-bold" class="text-[20px] group-hover:scale-110 transition-transform duration-200" />
              BALIK KE HOME
            </NuxtLink>
          </div> -->
        </div>
      </div>

      <!-- Bottom divider
      <div class="relative border-t-2 border-dashed border-dark w-full max-w-[300px]">
        <span class="absolute -top-[5px] left-0 w-2 h-2 bg-dark"></span>
        <span class="absolute -top-[5px] right-0 w-2 h-2 bg-dark"></span>
      </div>

      <p class="text-xs font-bold text-dark/50 uppercase tracking-widest">
        A neobrutalist dev polishing his craft...
      </p> -->
    </div>
  </main>
</template>

<style scoped>
@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

@keyframes tool-swing {
  0%, 100% { transform: rotate(-15deg); }
  50% { transform: rotate(15deg); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
