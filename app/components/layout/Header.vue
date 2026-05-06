<script setup>
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <!-- Logo -->
      <div class="header-logo">
        <img src="/images/logo-mf-black.png" alt="MF Logo" class="logo-img" />
        <span class="logo-text">mofarhannn</span>
      </div>

      <!-- Nav Links -->
      <nav class="header-nav">
        <NuxtLink to="/" class="nav-link nav-link--active">HOME</NuxtLink>
        <NuxtLink to="/about" class="nav-link">ABOUT ME</NuxtLink>
        <NuxtLink to="/projects" class="nav-link">PROJECTS</NuxtLink>
      </nav>

      <!-- Hire Me Button -->
      <NuxtLink to="#contact" class="hire-btn">
        HIRE ME!
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-cream);
  border-bottom: 2px dashed var(--color-dark);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  width: 36px;
  height: auto;
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 18px;
  color: var(--color-dark);
  letter-spacing: -0.5px;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  color: var(--color-dark);
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 6px;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background-color: var(--color-dark);
  color: var(--color-cream);
}

.nav-link--active {
  background-color: var(--color-yellow);
  color: var(--color-dark);
}

.hire-btn {
  font-family: var(--font-heading);
  font-size: 13px;
  padding: 10px 24px;
  background-color: var(--color-hot-pink);
  color: white;
  border: 2px solid var(--color-dark);
  border-radius: 8px;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
  box-shadow: 3px 3px 0px var(--color-dark);
}

.hire-btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px var(--color-dark);
}

/* Mobile */
@media (max-width: 768px) {
  .header-nav {
    display: none;
  }
  
  .logo-text {
    font-size: 15px;
  }
}
</style>