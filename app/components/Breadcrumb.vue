<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

const route = useRoute()

const items = ref<BreadcrumbItem[]>([
    {
        label: 'Acceuil',
        // icon: 'i-lucide-home',
        to: '/'
    },
    {
        label: 'Components',
        // icon: 'i-lucide-box',
        to: '/projets'
    },
    {
        label: route.params.id as string,
        to: `/projets/${route.params.id}`
    }
])
</script>

<template>
    <UBreadcrumb class="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 w-fit" color="secondary" :items="items" />
</template>
