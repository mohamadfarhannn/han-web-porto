<script setup lang="ts">
useHead({
  title: 'mofarhannn — Junior Web Developer Portfolio',
  meta: [
    { name: 'description', content: 'I code visuals that pop. Building energetic, slightly chaotic, but highly professional web experiences.' },
    { name: 'keywords', content: 'frontend developer, portfolio, web developer, vue, nuxt, react, typescript' },
    { property: 'og:title', content: 'mofarhannn — Junior Web Developer Portfolio' },
    { property: 'og:description', content: 'I code visuals that pop. Building energetic, slightly chaotic, but highly professional web experiences.' },
  ],
})
</script>

<template>
  <div>
    <HomeHeroSection />
    <HomeServicesSection />
    <HomeTechStackMarquee />
    <HomeWorkSection />
    <HomeContactSection />
  </div>
</template>