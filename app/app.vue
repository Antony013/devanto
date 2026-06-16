<script setup lang="ts">
import NavBar from "~/components/NavBar.vue"

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/logo.png'
    }
  ]
})
</script>

<template>
  <UApp>
    <NuxtPage />
    <NavBar />
  </UApp>
</template>
