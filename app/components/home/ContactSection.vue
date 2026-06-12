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
  <section id="contact" class="py-20 px-4 sm:px-8 lg:px-12 pt-34 font-sans bg-amber-100 relative z-10">
    <div class="max-w-300 w-full mx-auto">
      
      <!-- Section Header -->
      <div class="flex items-center mb-16 md:mb-20 w-full">
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
        <div class="w-full lg:w-[60%] xl:w-[65%] relative">
          <!-- Drop a Line Badge -->
          <div class="absolute -top-4 -left-4 md:-top-5 md:-left-6 bg-[#ff9088] border-[3px] border-black px-3 py-1 md:px-4 md:py-2 font-black text-xs md:text-sm uppercase tracking-wider -rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
            Let's get in touch
          </div>

          <div class="bg-white border-4 border-black p-6 md:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative z-10">
            
            <div class="flex items-center justify-center mb-8 md:mb-10">
              <p class="font-semibold text-sm md:text-base leading-relaxed text-black max-w-sm text-center">
                Feel free to reach out for collaborations, project inquiries, or just to say hello.
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
              
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
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full mt-4 bg-[#5ae2c7] border-4 border-black py-4 font-black text-base md:text-lg uppercase tracking-widest text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'SENDING...' : 'SEND MESSAGE' }}
                <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter" class="w-5 h-5 md:w-6 md:h-6">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

            </form>
          </div>
        </div>

        <!-- Right: Other Ways & Socials -->
        <div class="w-full lg:w-[40%] xl:w-[35%] flex flex-col gap-6 md:gap-8 mt-8 lg:mt-0">
          
          <!-- Other Ways Box -->
          <div class="bg-[#7c7cf3] border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white">
            <h3 class="font-normal text-2xl md:text-3xl uppercase tracking-widest text-white mb-4" style="font-family: var(--font-heading, inherit);">
              OTHER WAYS
            </h3>
            <p class="font-medium text-sm md:text-base mb-8 leading-relaxed text-white">
              Hit me up directly via email or find me on social media.
            </p>
            <a href="mailto:mofarhannn@gmail.com" class="bg-white text-black border-[3px] border-black py-3 px-4 font-black text-md md:text-xl tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center block w-full hover:translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all no-underline">
              mofarhannn@gmail.com
            </a>
          </div>

          <!-- Socials Grid -->
          <div class="grid grid-cols-2 gap-4 md:gap-6">
            
            <!-- Whatsapp -->
            <a href="https://wa.me/6285171176995" target="_blank" rel="noopener noreferrer" class="bg-white border-4 border-black p-6 flex flex-col items-center justify-center gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-black no-underline group">
              <Icon name="simple-icons:whatsapp" class="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
              <span class="font-black text-xs md:text-sm uppercase tracking-wider mt-1">WHATSAPP</span>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/mohamadfarhannn" target="_blank" rel="noopener noreferrer" class="bg-white border-4 border-black p-6 flex flex-col items-center justify-center gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-black no-underline group">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span class="font-black text-xs md:text-sm uppercase tracking-wider mt-1">GITHUB</span>
            </a>

            <!-- Linkedin -->
            <a href="https://www.linkedin.com/in/mohamadfarhannn/" target="_blank" rel="noopener noreferrer" class="col-span-2 bg-white border-4 border-black p-6 flex flex-col items-center justify-center gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-black no-underline group">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span class="font-black text-xs md:text-sm uppercase tracking-wider mt-1">LINKEDIN</span>
            </a>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
