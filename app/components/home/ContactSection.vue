<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)

const handleSubmit = () => {
  isSubmitting.value = true
  // Simulate submission
  setTimeout(() => {
    isSubmitting.value = false
    form.value = { name: '', email: '', subject: '', message: '' }
    alert('Message sent! 🎉')
  }, 1500)
}
</script>

<template>
  <section class="contact" id="contact">
    <!-- Section Header -->
    <div class="contact-header">
      <div class="section-title-wrapper">
        <div class="section-title-badge">
          <span class="badge-text">DROP A LINE</span>
        </div>
        <span class="section-line"></span>
        <span class="section-square"></span>
      </div>
      <h2 class="contact-heading">SAY HELLO!</h2>
    </div>

    <!-- Content -->
    <div class="contact-content">
      <!-- Left - Form -->
      <div class="contact-form-wrapper">
        <p class="contact-intro">
          Got a project in mind, a crazy idea, or just want to chat about the latest
          web tech? Fill out the form below and let's make something loud together.
        </p>

        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">YOUR NAME</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="John Doe"
                class="form-input"
                required
              />
            </div>
            <div class="form-group">
              <label class="form-label">YOUR EMAIL</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="john@example.com"
                class="form-input"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">SUBJECT</label>
            <input
              v-model="form.subject"
              type="text"
              placeholder="What's this about?"
              class="form-input"
              required
            />
          </div>

          <div class="form-group">
            <label class="form-label">MESSAGE</label>
            <textarea
              v-model="form.message"
              placeholder="Spill the details..."
              class="form-textarea"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'SENDING...' : 'SEND MESSAGE →' }}
          </button>
        </form>
      </div>

      <!-- Right - Other Ways -->
      <div class="contact-sidebar">
        <div class="sidebar-card">
          <h3 class="sidebar-title">OTHER WAYS</h3>
          <p class="sidebar-desc">
            Not a fan of forms? Hit me up on social media, or find me lurking on social media.
          </p>
          <a href="mailto:hello@mofarhannn.com" class="email-btn">
            HELLO@MOFARHANNN.COM
          </a>

          <div class="social-grid">
            <a href="https://linkedin.com/in/mofarhannn" target="_blank" class="social-card social-card--blue">
              <span class="social-icon">in</span>
              <span class="social-name">LINKEDIN</span>
            </a>
            <a href="https://github.com/mofarhannn" target="_blank" class="social-card social-card--dark">
              <span class="social-icon">⌂</span>
              <span class="social-name">GITHUB</span>
            </a>
          </div>
          <a href="https://twitter.com/mofarhannn" target="_blank" class="social-card social-card--sky social-card--full">
            <span class="social-icon">𝕏</span>
            <span class="social-name">TWITTER</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background-color: var(--color-cream);
}

/* Header */
.contact-header {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px 12px;
}

.section-title-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}

.section-title-badge {
  background-color: var(--color-hot-pink);
  padding: 4px 12px;
  border: 2px solid var(--color-dark);
  border-radius: 4px;
  box-shadow: 2px 2px 0px var(--color-dark);
}

.badge-text {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
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

.contact-heading {
  font-family: var(--font-heading);
  font-size: clamp(40px, 5vw, 56px);
  color: var(--color-dark);
  text-transform: uppercase;
}

/* Content */
.contact-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 24px 80px;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 24px;
}

/* Form Wrapper */
.contact-form-wrapper {
  border: 2px dashed var(--color-dark);
  border-radius: 12px;
  padding: 32px;
  background-color: white;
}

.contact-intro {
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-dark);
  opacity: 0.75;
  margin-bottom: 28px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--color-dark);
  margin-bottom: 6px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 14px;
  font-family: var(--font-body);
  font-size: 13px;
  border: 2px solid var(--color-dark);
  border-radius: 8px;
  background-color: var(--color-cream);
  color: var(--color-dark);
  outline: none;
  transition: all 0.2s ease;
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--color-hot-pink);
  box-shadow: 0 0 0 3px rgba(255, 59, 127, 0.15);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  width: 100%;
  padding: 14px 32px;
  font-family: var(--font-heading);
  font-size: 14px;
  background-color: var(--color-hot-pink);
  color: white;
  border: 2px solid var(--color-dark);
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 1px;
  box-shadow: 3px 3px 0px var(--color-dark);
  transition: all 0.2s ease;
}

.submit-btn:hover:not(:disabled) {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px var(--color-dark);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Sidebar */
.contact-sidebar {
  display: flex;
  flex-direction: column;
}

.sidebar-card {
  background: linear-gradient(135deg, var(--color-hot-pink) 0%, var(--color-salmon) 100%);
  border: 2px solid var(--color-dark);
  border-radius: 12px;
  padding: 28px;
  box-shadow: 4px 4px 0px var(--color-dark);
  flex: 1;
}

.sidebar-title {
  font-family: var(--font-heading);
  font-size: 20px;
  color: white;
  margin-bottom: 8px;
}

.sidebar-desc {
  font-size: 13px;
  line-height: 1.6;
  color: white;
  opacity: 0.85;
  margin-bottom: 16px;
}

.email-btn {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 700;
  color: var(--color-dark);
  background-color: var(--color-yellow);
  padding: 8px 16px;
  border: 2px solid var(--color-dark);
  border-radius: 6px;
  text-decoration: none;
  letter-spacing: 0.5px;
  box-shadow: 2px 2px 0px var(--color-dark);
  transition: all 0.2s ease;
  margin-bottom: 20px;
}

.email-btn:hover {
  transform: translate(1px, 1px);
  box-shadow: 1px 1px 0px var(--color-dark);
}

.social-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
}

.social-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 16px;
  border: 2px solid var(--color-dark);
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 2px 2px 0px var(--color-dark);
}

.social-card:hover {
  transform: translate(1px, 1px);
  box-shadow: 1px 1px 0px var(--color-dark);
}

.social-card--blue {
  background-color: #0077B5;
}

.social-card--dark {
  background-color: var(--color-dark);
}

.social-card--sky {
  background-color: #1DA1F2;
}

.social-card--full {
  width: 100%;
}

.social-icon {
  font-family: var(--font-heading);
  font-size: 22px;
  color: white;
}

.social-name {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
}

/* Mobile */
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
