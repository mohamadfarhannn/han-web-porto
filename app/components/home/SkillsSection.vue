<script setup>
const skills = [
  {
    icon: '&lt;/&gt;',
    title: 'FRONTEND MAGIC',
    tags: ['REACT', 'VUE', 'TYPESCRIPT'],
    bgColor: '#FFB6C1',
  },
  {
    icon: '🎨',
    title: 'STYLING POWER',
    tags: ['TAILWIND', 'SCSS', 'FRAMER MOTION'],
    bgColor: '#FFA07A',
  },
  {
    icon: '⚡',
    title: 'PERFORMANCE',
    tags: ['NUXT', 'VITE', 'WEBPACK'],
    bgColor: '#7B5EA7',
    textLight: true,
  },
]
</script>

<template>
  <section class="skills" id="skills">
    <!-- Section Header -->
    <div class="skills-header">
      <div class="section-title-wrapper">
        <span class="section-icon">&lt;/&gt;</span>
        <h2 class="section-title">MY SKILLS</h2>
        <span class="section-line"></span>
        <span class="section-square"></span>
      </div>
    </div>

    <!-- Skills Grid -->
    <div class="skills-grid">
      <div
        v-for="(skill, i) in skills"
        :key="i"
        class="skill-card"
        :style="{ backgroundColor: skill.bgColor }"
        :class="{ 'skill-card--light': skill.textLight }"
      >
        <div class="skill-icon" v-html="skill.icon"></div>
        <h3 class="skill-title">{{ skill.title }}</h3>
        <div class="skill-tags">
          <span
            v-for="tag in skill.tags"
            :key="tag"
            class="skill-tag"
            :class="{ 'skill-tag--light': skill.textLight }"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- Bottom divider -->
    <div class="section-divider">
      <span class="divider-square divider-square--left"></span>
      <span class="divider-square divider-square--right"></span>
    </div>
  </section>
</template>

<style scoped>
.skills {
  background-color: var(--color-cream);
  padding: 0 0 0 0;
}

/* Section Header */
.skills-header {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px 40px;
}

.section-title-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
}

.section-icon {
  font-family: var(--font-heading);
  font-size: 14px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-dark);
  border-radius: 6px;
  background-color: white;
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(32px, 4vw, 48px);
  color: var(--color-dark);
  text-transform: uppercase;
  white-space: nowrap;
}

.section-line {
  flex: 1;
  height: 2px;
  border-top: 2px dashed var(--color-dark);
}

.section-square {
  width: 8px;
  height: 8px;
  background-color: var(--color-dark);
  flex-shrink: 0;
}

/* Grid */
.skills-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Card */
.skill-card {
  border: 2px solid var(--color-dark);
  border-radius: 12px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 4px 4px 0px var(--color-dark);
}

.skill-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px var(--color-dark);
}

.skill-card--light {
  color: white;
}

.skill-icon {
  font-size: 32px;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  border: 2px dashed rgba(0, 0, 0, 0.15);
}

.skill-title {
  font-family: var(--font-heading);
  font-size: 16px;
  letter-spacing: 0.5px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
}

.skill-tag {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 700;
  padding: 4px 10px;
  border: 2px solid var(--color-dark);
  border-radius: 20px;
  letter-spacing: 0.5px;
  background-color: rgba(255, 255, 255, 0.2);
}

.skill-tag--light {
  border-color: rgba(255, 255, 255, 0.5);
  color: white;
}

/* Divider */
.section-divider {
  position: relative;
  border-top: 2px dashed var(--color-dark);
  max-width: 1200px;
  margin: 0 auto;
}

.divider-square {
  position: absolute;
  top: -5px;
  width: 8px;
  height: 8px;
  background-color: var(--color-dark);
}

.divider-square--left { left: 0; }
.divider-square--right { right: 0; }

/* Mobile */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
