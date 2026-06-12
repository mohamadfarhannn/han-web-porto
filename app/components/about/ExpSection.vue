<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const experienceData = ref([
  {
    date: 'Oct 2025 - Apr 2026',
    role: 'Frontend Developer Intern',
    company: 'PT Juru Supervisi Indonesia',
    description: 'Revamped a parking management dashboard into a modular, responsive application using Vue.js, TypeScript, Tailwind CSS, and Shadcn UI. I optimized real-time data performance by integrating REST APIs with Axios and TanStack Query caching, all executed collaboratively within an Agile and GitLab workflow.',
    color: '#ff9088'
  },
  {
    date: 'Jun - Nov 2025',
    role: 'Fullstack Web Developer Bootcamp',
    company: 'Harisenin.com',
    description: 'Graduated from an intensive Full-Stack Web Developer program. Specialized in the modern Frontend ecosystem (React.js, Tailwind) backed by a solid Node.js and Express architecture to build interactive web applications. The technical portfolio developed here served as the direct springboard to my first professional role as a Frontend Developer.',
    color: '#aaaaff'
  },
  {
    date: 'Sep - Oct 2024',
    role: 'UI/UX Designer Intern',
    company: 'PT Trilux Sukses Abadi',
    description: 'Redesigned the Rendis Cart module interface for the ASPAK application using Figma to enhance user experience. I also conducted comprehensive system analysis and produced technical documentation, including Swimlane, DFD, and ERD diagrams using Draw.io',
    color: '#5ae2c7'
  },
  {
    date: 'Feb - Jun 2024',
    role: 'Bangkit Academy - Cloud Computing Track',
    company: 'Google, GoTo, Traveloka',
    description: 'Engaged in an intensive cloud computing training program delivered by industry leaders Google, GoTo, and Traveloka. This program provided a strong foundation in cloud infrastructure, DevOps practices, and modern software deployment strategies essential for scalable enterprise solutions.',
    color: '#ff9088'
  }
])

const certificateData = ref([
  {
    year: '2025',
    title: 'Fullstack Web Developer',
    issuer: 'Harisenin.com',
    icon: 'lucide:code',
    iconColor: '#ff9088',
    linkColor: '#000',
    link: 'https://drive.google.com/file/d/1AsTRGmxKaHZxkBRLqwL6o5T2pV5TTrkC/view?usp=sharing'
  },
  {
    year: '2024',
    title: 'Bangkit Academy - Cloud Computing',
    issuer: 'Google, GoTo, Traveloka',
    icon: 'lucide:cloud',
    iconColor: '#7c7cf3',
    linkColor: '#000',
    link: 'https://drive.google.com/file/d/1KVxHlvgkEqgx-0fFRIkHxsCYmICI8m69/view?usp=sharing'
  },
  {
    year: '2023',
    title: 'Junior Web Developer',
    issuer: 'Digitalent KOMDIGI',
    icon: 'lucide:terminal',
    iconColor: '#5ae2c7',
    linkColor: '#000',
    link: 'https://drive.google.com/file/d/1fBpZ_QbDC7i8xERK9xPSAoEe31s9v_EE/view?usp=sharing'
  },
])

const expBadgeRef = ref(null)
const eduBadgeRef = ref(null)
const eduCardRef = ref(null)
const certBadgeRef = ref(null)

const expBadgeVisible = ref(false)
const eduBadgeVisible = ref(false)
const eduCardVisible = ref(false)
const certBadgeVisible = ref(false)

let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === expBadgeRef.value) setTimeout(() => { expBadgeVisible.value = true }, 100)
        else if (entry.target === eduBadgeRef.value) setTimeout(() => { eduBadgeVisible.value = true }, 100)
        else if (entry.target === eduCardRef.value) setTimeout(() => { eduCardVisible.value = true }, 200)
        else if (entry.target === certBadgeRef.value) setTimeout(() => { certBadgeVisible.value = true }, 100)
        
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })
  
  if (expBadgeRef.value) observer.observe(expBadgeRef.value)
  if (eduBadgeRef.value) observer.observe(eduBadgeRef.value)
  if (eduCardRef.value) observer.observe(eduCardRef.value)
  if (certBadgeRef.value) observer.observe(certBadgeRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section id="journey" class="py-20 px-4 sm:px-8 lg:px-12 pt-28 md:pt-36 font-sans relative overflow-hidden bg-amber-100 bg-[radial-gradient(#00000033_2px,transparent_2px)] [bg-size:24px_24px]">
    
    <div class="max-w-300 w-full mx-auto flex flex-col lg:flex-row gap-16 lg:gap-12 relative z-10">
      
      <!-- Left Column: EXPERIENCE -->
      <div class="w-full lg:w-1/2 flex flex-col">
        <!-- Badge -->
        <div 
          ref="expBadgeRef"
          class="mb-10 lg:mb-12 transition-all duration-700 ease-out"
          :class="expBadgeVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'"
        >
          <div class="inline-block bg-yellow border-4 border-black px-6 py-2 font-black text-xl md:text-2xl uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-2">
            EXPERIENCE
          </div>
        </div>

        <!-- Timeline Container -->
        <AboutExperienceTimeline :experiences="experienceData" />
      </div>

      <!-- Right Column: EDU & CERTS -->
      <div class="w-full lg:w-1/2 flex flex-col gap-12">
        
        <!-- EDUCATION SECTION -->
        <div>
          <!-- Badge -->
          <div 
            ref="eduBadgeRef"
            class="mb-10 lg:mb-12 transition-all duration-700 ease-out"
            :class="eduBadgeVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'"
          >
            <div class="inline-block bg-[#ff9088] border-[4px] border-black px-6 py-2 font-black text-xl md:text-2xl uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-1">
              EDUCATION
            </div>
          </div>

          <!-- Edu Card -->
          <div 
            ref="eduCardRef"
            class="bg-white border-[4px] border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden transition-all duration-500 ease-out"
            :class="eduCardVisible ? 'translate-y-0 opacity-100 hover:-translate-y-1' : 'translate-y-16 opacity-0'"
          >
            <!-- Decorative Yellow Circle -->
            <div class="absolute -top-12 -right-12 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#fde9a3] z-0"></div>
            
            <div class="relative z-10">
              <span class="inline-block bg-[#5ae2c7] border-[3px] border-black text-black px-3 py-1 font-black text-xs uppercase mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">2021 - 2025</span>
              <h3 class="font-black text-lg md:text-2xl text-black leading-tight mb-2" style="font-family: var(--font-heading, inherit);">Bachelor of Communication Information Management (S.I.Kom)</h3>
              <p class="font-black text-black text-base md:text-lg mb-4">Sekolah Tinggi Multi Media Yogyakarta</p>
              <p class="font-semibold text-gray-800 text-sm md:text-base leading-relaxed">
                Focused on Human Computer Interaction. Conducted a qualitative usability evaluation of the Bantul Digital Library website using Jakob Nielsen's 10 Heuristics. The research identified 4 fully optimized functional aspects and 6 crucial areas for UI/UX improvement.
              </p>
            </div>
          </div>
        </div>

        <!-- CERTS SECTION -->
        <div class="mt-2 md:mt-4">
          <!-- Badge -->
          <div 
            ref="certBadgeRef"
            class="mb-10 lg:mb-12 transition-all duration-700 ease-out"
            :class="certBadgeVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'"
          >
            <div class="inline-block bg-[#5ae2c7] border-[4px] border-black px-6 py-2 font-black text-xl md:text-2xl uppercase tracking-tight shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-1">
              CERTIFICATES
            </div>
          </div>

          <!-- Certs Grid -->
          <AboutCertificatesGrid :certificates="certificateData" />
        </div>

      </div>

    </div>

    <!-- Decorative Triangle (SVG) -->
    <svg class="absolute bottom-10 left-4 md:left-12 w-16 h-16 md:w-20 md:h-20 z-0 hidden sm:block drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" viewBox="0 0 100 100" fill="none">
      <path d="M50 10 L90 85 L10 85 Z" fill="#FFCC47" stroke="black" stroke-width="6" stroke-linejoin="round" class="rotate-12 origin-center" />
    </svg>

  </section>
</template>


