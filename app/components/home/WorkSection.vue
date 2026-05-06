<script setup>
const projects = [
  {
    image: '/images/project-datapulse.png',
    title: 'DATAPULSE DASH',
    description: 'Enterprise-grade analytics dashboard processing millions of data rows in real-time with custom visualizations and reports.',
    tags: ['REACT', 'D3.JS', 'TS'],
  },
  {
    image: '/images/project-nxtgen.png',
    title: 'NXTGEN CORE',
    description: 'A complete rewrite and re-architecture of a legacy monolith to a modern microservice, event-driven system.',
    tags: ['NUXT 3', 'VUETIFY', 'API'],
  },
  {
    image: '/images/project-studiox.png',
    title: 'STUDIO X',
    description: 'Interactive portfolio for a creative agency, featuring WebGL experiments and custom physics-based scroll animations.',
    tags: ['THREE.JS', 'GSAP'],
  },
]
</script>

<template>
  <section class="work" id="work">
    <!-- Section Header -->
    <div class="work-header">
      <div class="section-title-wrapper">
        <span class="section-square"></span>
        <span class="section-line"></span>
        <div class="section-title-badge">
          <h2 class="section-title">SELECTED WORK</h2>
        </div>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="work-grid">
      <article
        v-for="(project, i) in projects"
        :key="i"
        class="project-card"
      >
        <div class="project-image-wrapper">
          <img :src="project.image" :alt="project.title" class="project-image" />
        </div>
        <div class="project-info">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>
          <div class="project-tags">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="project-tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </article>
    </div>

    <!-- See All Button -->
    <div class="work-cta">
      <NuxtLink to="/projects" class="see-all-btn">
        SEE ALL →
      </NuxtLink>
    </div>

    <!-- Bottom divider -->
    <div class="section-divider">
      <span class="divider-square divider-square--left"></span>
      <span class="divider-square divider-square--right"></span>
    </div>
  </section>
</template>

<style scoped>
.work {
  background-color: var(--color-cream);
}

/* Section Header */
.work-header {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px 40px;
}

.section-title-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
}

.section-square {
  width: 8px;
  height: 8px;
  background-color: var(--color-dark);
  flex-shrink: 0;
}

.section-line {
  flex: 1;
  height: 2px;
  border-top: 2px dashed var(--color-dark);
}

.section-title-badge {
  background-color: var(--color-yellow);
  padding: 8px 20px;
  border: 2px solid var(--color-dark);
  border-radius: 6px;
  box-shadow: 3px 3px 0px var(--color-dark);
  transform: rotate(-1deg);
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(24px, 3vw, 32px);
  color: var(--color-dark);
  text-transform: uppercase;
  white-space: nowrap;
}

/* Grid */
.work-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Card */
.project-card {
  border: 2px solid var(--color-dark);
  border-radius: 12px;
  overflow: hidden;
  background-color: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 4px 4px 0px var(--color-dark);
}

.project-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px var(--color-dark);
}

.project-image-wrapper {
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-bottom: 2px solid var(--color-dark);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-info {
  padding: 20px;
}

.project-title {
  font-family: var(--font-heading);
  font-size: 16px;
  color: var(--color-dark);
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}

.project-desc {
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-dark);
  opacity: 0.7;
  margin-bottom: 16px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.project-tag {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 700;
  padding: 4px 10px;
  border: 2px solid var(--color-dark);
  border-radius: 20px;
  letter-spacing: 0.5px;
  color: var(--color-dark);
  background-color: var(--color-cream);
}

/* CTA */
.work-cta {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 60px;
  display: flex;
  justify-content: center;
}

.see-all-btn {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-dark);
  padding: 12px 32px;
  border: 2px solid var(--color-dark);
  border-radius: 8px;
  background-color: white;
  box-shadow: 3px 3px 0px var(--color-dark);
  transition: all 0.2s ease;
  letter-spacing: 0.5px;
}

.see-all-btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px var(--color-dark);
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
  .work-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .work-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
