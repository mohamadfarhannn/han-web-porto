<template>
  <div class="min-h-screen flex flex-col">
    <LayoutHeader />

    <main class="flex-1 mt-20">
      <slot />
    </main>

    <LayoutFooter />
  </div>
</template>
