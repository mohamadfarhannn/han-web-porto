<template>
  <div class="w-full max-w-110">
    <div class="grid grid-cols-2 gap-2.5 mb-2.5">
      <SocialCards 
        href="https://linkedin.com/in/mohamadfarhannn" 
        label="LINKEDIN" 
        color="#0077B5"
      >
        <template #icon>
          <span class="font-heading text-[22px] text-white leading-none">in</span>
        </template>
      </SocialCards>
      
      <SocialCards 
        href="https://github.com/mohamadfarhannn" 
        label="GITHUB" 
        icon="i-skill-icons-github" 
        color="var(--color-dark)"
      />

      <SocialCards 
        href="mailto:mofarhannn@gmail.com" 
        label="EMAIL" 
        icon="i-heroicons-envelope" 
        color="var(--color-dark)"
      />
      
      <SocialCards 
        href="https://github.com/mofarhannn" 
        label="TWITTER" 
        icon="i-simple-icons-x" 
        color="#1DA1F2"
      />
    </div>
  </div>
</template>
