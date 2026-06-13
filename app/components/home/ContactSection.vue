<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import emailjs from '@emailjs/browser'

const config = useRuntimeConfig()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  honeypot: '',
})

const isSubmitting = ref(false)

const toast = ref({
  show: false,
  message: '',
  type: 'success'
})

const showToast = (message, type = 'success') => {
  toast.value = { show: true, message, type }
  setTimeout(() => {
    toast.value.show = false
  }, 3000)
}

const handleSubmit = async () => {
  // 1. Honeypot check (Silently ignore if filled by bot to fool them)
  if (form.value.honeypot) {
    isSubmitting.value = true
    setTimeout(() => {
      isSubmitting.value = false
      form.value = { name: '', email: '', subject: '', message: '', honeypot: '' }
      showToast('Message sent! I will get back to you soon.', 'success')
    }, 1000)
    return
  }

  // 2. Cooldown check (30 minute = 1800000 ms)
  const lastSent = localStorage.getItem('last_email_sent')
  const cooldownTime = 30 * 60 * 1000 // 30 menit dalam milidetik
  
  if (lastSent && (Date.now() - parseInt(lastSent)) < cooldownTime) {
    showToast('Tunggu 30 menit sebelum mengirim pesan lagi.', 'error')
    return
  }

  isSubmitting.value = true
  
  try {
    // Parameter: (Service ID, Template ID, Data Object, Public Key)
    await emailjs.send(
      config.public.emailjsServiceId, 
      config.public.emailjsTemplateId, 
      {
        from_name: form.value.name,
        reply_to: form.value.email, // Memastikan Anda bisa langsung membalas email pengunjung
        subject: form.value.subject,
        message: form.value.message,
      },
      config.public.emailjsPublicKey
    )
    
    // Set timestamp for cooldown setelah berhasil
    localStorage.setItem('last_email_sent', Date.now().toString())
    
    // Reset form setelah berhasil
    form.value = { name: '', email: '', subject: '', message: '', honeypot: '' }
    showToast('Message sent! I will get back to you soon.', 'success')
    
  } catch (error) {
    console.error('EmailJS Error:', error)
    showToast('Failed to send message. Please try again later.', 'error')
  } finally {
    isSubmitting.value = false
  }
}

const sectionRef = ref(null)
const headerVisible = ref(false)
const formVisible = ref(false)
const rightVisible = ref(false)

let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(() => { headerVisible.value = true }, 100)
      setTimeout(() => { formVisible.value = true }, 300)
      setTimeout(() => { rightVisible.value = true }, 500)
      if (sectionRef.value) observer.unobserve(sectionRef.value)
    }
  }, { threshold: 0.1 })
  
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  } else {
    headerVisible.value = true
    formVisible.value = true
    rightVisible.value = true
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section id="contact" ref="sectionRef" class="py-20 px-4 sm:px-8 lg:px-12 pt-34 font-sans bg-amber-100 relative z-10 overflow-hidden">
    <div class="max-w-300 w-full mx-auto">
      
      <!-- Section Header -->
      <div 
        class="flex items-center mb-16 md:mb-20 w-full transition-all duration-700 ease-out"
        :class="headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'"
      >
        <!-- Title Box -->
        <div class="relative z-10 bg-yellow border-4 border-black px-6 md:px-8 py-3 md:py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2 shrink-0">
          <h2 class="font-normal text-lg sm:text-xl md:text-2xl uppercase tracking-widest text-black" style="font-family: var(--font-heading, inherit);">
            SAY HELLO!
          </h2>
        </div>
        
        <!-- Connecting Line -->
        <div class="grow h-1 bg-black mx-4 md:mx-6 hidden sm:block z-0 relative"></div>
        
        <!-- Small Icon Box -->
        <div class="border-4 border-black bg-white w-12 h-12 md:w-14 md:h-14 hidden sm:flex items-center justify-center shrink-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-10 relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter" class="w-6 h-6 md:w-8 md:h-8">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
      </div>

      <!-- Main Layout -->
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-12 items-start">
        
        <!-- Left: Form Container -->
        <div 
          class="w-full lg:w-[60%] xl:w-[65%] relative transition-all duration-700 ease-out"
          :class="formVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'"
        >
          <!-- Drop a Line Badge -->
          <div class="absolute -top-4 -left-4 md:-top-5 md:-left-6 bg-[#5ae2c7] border-[3px] border-black px-3 py-1 md:px-4 md:py-2 font-black text-xs md:text-sm uppercase tracking-wider -rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
            Let's get in touch
          </div>

          <div class="bg-white border-4 border-black p-6 md:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative z-10">
            
            <div class="flex items-center justify-center mb-8 md:mb-10">
              <p class="font-semibold text-sm md:text-base leading-relaxed text-black max-w-sm text-center">
                Feel free to reach out for collaborations, project inquiries, or just to say hello.
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
              
              <!-- Honeypot Field (Hidden from normal users) -->
              <div class="absolute opacity-0 -z-10 w-0 h-0 overflow-hidden" aria-hidden="true">
                <label for="website">Leave this field empty</label>
                <input 
                  type="text" 
                  id="website" 
                  name="website" 
                  v-model="form.honeypot" 
                  tabindex="-1" 
                  autocomplete="off" 
                />
              </div>

              <!-- Name & Email Row -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name -->
                <div class="flex flex-col">
                  <label for="name" class="font-black text-xs md:text-sm uppercase tracking-wider mb-2 text-black">YOUR NAME</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    placeholder="John Doe"
                    required
                    class="w-full border-[3px] border-black px-4 py-3 bg-[#f8f8f8] focus:bg-white focus:outline-none focus:ring-0 font-medium text-black placeholder:text-gray-400 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  />
                </div>
                
                <!-- Email -->
                <div class="flex flex-col">
                  <label for="email" class="font-black text-xs md:text-sm uppercase tracking-wider mb-2 text-black">YOUR EMAIL</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    placeholder="john@example.com"
                    required
                    class="w-full border-[3px] border-black px-4 py-3 bg-[#f8f8f8] focus:bg-white focus:outline-none focus:ring-0 font-medium text-black placeholder:text-gray-400 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  />
                </div>
              </div>

              <!-- Subject -->
              <div class="flex flex-col">
                <label for="subject" class="font-black text-xs md:text-sm uppercase tracking-wider mb-2 text-black">SUBJECT</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  placeholder="What's this about?"
                  required
                  class="w-full border-[3px] border-black px-4 py-3 bg-[#f8f8f8] focus:bg-white focus:outline-none focus:ring-0 font-medium text-black placeholder:text-gray-400 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>

              <!-- Message -->
              <div class="flex flex-col">
                <label for="message" class="font-black text-xs md:text-sm uppercase tracking-wider mb-2 text-black">MESSAGE</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5"
                  placeholder="Spill the details..."
                  required
                  class="w-full border-[3px] border-black px-4 py-3 bg-[#f8f8f8] focus:bg-white focus:outline-none focus:ring-0 font-medium text-black placeholder:text-gray-400 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] resize-y"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <NeoButton 
                type="submit" 
                :disabled="isSubmitting"
                color="pink"
                block
                class="mt-4"
              >
                {{ isSubmitting ? 'SENDING...' : 'SEND MESSAGE' }}
                <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter" class="w-5 h-5 md:w-6 md:h-6">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </NeoButton>

            </form>
          </div>
        </div>

        <!-- Right: Other Ways & Socials -->
        <div 
          class="w-full lg:w-[40%] xl:w-[35%] flex flex-col gap-6 md:gap-8 mt-8 lg:mt-0 transition-all duration-700 ease-out"
          :class="rightVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'"
        >
          
          <!-- Other Ways Box -->
          <div class="bg-[#7c7cf3] border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white">
            <h3 class="font-normal text-2xl md:text-3xl uppercase tracking-widest text-white mb-4" style="font-family: var(--font-heading, inherit);">
              OTHER WAYS
            </h3>
            <p class="font-medium text-sm md:text-base mb-8 leading-relaxed text-white">
              Hit me up directly via email or find me on social media.
            </p>
            <NeoButton to="mailto:mofarhannn@gmail.com" color="white" size="md" block>
              mofarhannn@gmail.com
            </NeoButton>
          </div>

          <!-- Socials Grid -->
          <div class="grid grid-cols-2 gap-4 md:gap-6">
            <NeoSocialCard 
              to="https://wa.me/6285171176995" 
              icon="simple-icons:whatsapp" 
              label="WHATSAPP" 
            />
            <NeoSocialCard 
              to="https://github.com/mohamadfarhannn" 
              icon="simple-icons:github" 
              label="GITHUB" 
            />
            <NeoSocialCard 
              to="https://www.linkedin.com/in/mohamadfarhannn/" 
              icon="simple-icons:linkedin" 
              label="LINKEDIN" 
              :col-span="2" 
            />
          </div>
        </div>

      </div>
    </div>

    <!-- Toast Notification -->
    <NeoToast 
      :show="toast.show" 
      :message="toast.message" 
      :type="toast.type" 
    />
  </section>
</template>
