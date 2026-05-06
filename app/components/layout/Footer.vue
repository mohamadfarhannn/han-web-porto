<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <!-- Logo -->
      <div class="footer-logo">
        <img src="/images/logo-mf-black.png" alt="MF Logo" class="logo-img" />
        <span class="logo-text">mofarhannn</span>
      </div>

      <!-- Links -->
      <nav class="footer-links">
        <a href="https://github.com/mofarhannn" target="_blank" class="footer-link">GITHUB</a>
        <a href="https://linkedin.com/in/mofarhannn" target="_blank" class="footer-link">LINKEDIN</a>
        <a href="mailto:hello@mofarhannn.com" class="footer-link">EMAIL</a>
      </nav>

      <!-- Copyright -->
      <p class="footer-copy">&copy; 2026 MOFARHANNN.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-dark);
  color: var(--color-cream);
  border-top: 2px dashed var(--color-dark);
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  width: 28px;
  height: auto;
  filter: brightness(0) invert(1);
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 15px;
  color: var(--color-cream);
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-link {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  color: var(--color-cream);
  text-decoration: none;
  letter-spacing: 1px;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.footer-link:hover {
  opacity: 1;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.footer-copy {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>
