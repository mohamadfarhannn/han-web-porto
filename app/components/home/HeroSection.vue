<script setup>
</script>

<template>
  <section class="hero">
    <div class="hero-inner">
      <!-- Left Content -->
      <div class="hero-content">
        <!-- Badge -->
        <div class="hero-badge-wrapper">
          <span class="hero-star">★</span>
          <div class="hero-badge">
            <span class="badge-dot"></span>
            FRONTEND DEVELOPER
          </div>
        </div>

        <!-- Heading -->
        <h1 class="hero-heading">
          I CODE VISUALS
          <br />
          THAT POP.
          <span class="hero-cursor">↘</span>
        </h1>

        <!-- Description -->
        <p class="hero-desc">
          Building energetic, slightly chaotic, but highly professional web experiences. Rejecting the boring corporate web, one bold pixel at a time.
        </p>

        <!-- CTA Buttons -->
        <div class="hero-cta">
          <a href="#work" class="btn btn--outline">
            VIEW WORK
          </a>
          <a href="#contact" class="btn btn--outline">
            LET'S TALK 👋
          </a>
        </div>
      </div>

      <!-- Right - Avatar -->
      <div class="hero-visual">
        <div class="hero-triangle"></div>
        <div class="hero-avatar-wrapper">
          <img src="/images/hero-avatar.png" alt="Mofarhannn Avatar" class="hero-avatar" />
          <div class="hero-label">
            THAT'S ME →
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom dashed line -->
    <div class="hero-divider">
      <span class="divider-square divider-square--left"></span>
      <span class="divider-square divider-square--right"></span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background-color: var(--color-cream);
  overflow: hidden;
}

.hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

/* Badge */
.hero-badge-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.hero-star {
  font-size: 48px;
  color: var(--color-yellow);
  animation: spin-slow 8s linear infinite;
  display: inline-block;
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--color-yellow);
  color: var(--color-dark);
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 6px;
  letter-spacing: 1px;
  border: 2px solid var(--color-dark);
  box-shadow: 2px 2px 0px var(--color-dark);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background-color: #4CAF50;
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

/* Heading */
.hero-heading {
  font-family: var(--font-heading);
  font-size: clamp(48px, 6vw, 72px);
  line-height: 1.05;
  color: var(--color-dark);
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: -1px;
}

.hero-cursor {
  font-size: 0.5em;
  vertical-align: middle;
  opacity: 0.5;
  animation: bounce-arrow 2s ease-in-out infinite;
}

@keyframes bounce-arrow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

/* Description */
.hero-desc {
  font-size: 15px;
  line-height: 1.7;
  color: var(--color-dark);
  opacity: 0.75;
  max-width: 440px;
  margin-bottom: 32px;
  padding: 16px;
  border: 2px dashed var(--color-dark);
  border-radius: 8px;
  background-color: white;
}

/* CTA */
.hero-cta {
  display: flex;
  gap: 12px;
}

.btn {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
  cursor: pointer;
  text-transform: uppercase;
}

.btn--outline {
  background-color: white;
  color: var(--color-dark);
  border: 2px solid var(--color-dark);
  box-shadow: 3px 3px 0px var(--color-dark);
}

.btn--outline:hover {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px var(--color-dark);
}

/* Visual / Avatar */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 420px;
}

.hero-triangle {
  position: absolute;
  top: 0;
  right: -40px;
  width: 0;
  height: 0;
  border-left: 250px solid transparent;
  border-right: 250px solid transparent;
  border-bottom: 500px solid var(--color-hot-pink);
  transform: rotate(-10deg);
  z-index: 0;
}

.hero-avatar-wrapper {
  position: relative;
  z-index: 1;
}

.hero-avatar {
  width: 320px;
  height: auto;
  border-radius: 0 0 160px 160px;
  filter: grayscale(100%) contrast(1.1);
  border: 3px solid var(--color-dark);
  background: white;
}

.hero-label {
  position: absolute;
  bottom: 20px;
  right: -60px;
  background-color: var(--color-yellow);
  color: var(--color-dark);
  font-family: var(--font-heading);
  font-size: 11px;
  padding: 6px 12px;
  border: 2px solid var(--color-dark);
  border-radius: 4px;
  box-shadow: 2px 2px 0px var(--color-dark);
  white-space: nowrap;
  transform: rotate(3deg);
  animation: subtle-float 3s ease-in-out infinite;
}

@keyframes subtle-float {
  0%, 100% { transform: rotate(3deg) translateY(0); }
  50% { transform: rotate(3deg) translateY(-5px); }
}

/* Divider */
.hero-divider {
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

.divider-square--left {
  left: 0;
}

.divider-square--right {
  right: 0;
}

/* Mobile */
@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 40px 24px 60px;
  }

  .hero-content {
    order: 2;
  }

  .hero-visual {
    order: 1;
    min-height: 300px;
  }

  .hero-badge-wrapper {
    justify-content: center;
  }

  .hero-desc {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-cta {
    justify-content: center;
  }

  .hero-triangle {
    right: -100px;
    border-left: 180px solid transparent;
    border-right: 180px solid transparent;
    border-bottom: 360px solid var(--color-hot-pink);
  }

  .hero-avatar {
    width: 250px;
  }

  .hero-label {
    right: -20px;
  }
}
</style>
