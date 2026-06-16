<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from '#app'

import type { NavigationMenuItem } from '@nuxt/ui'
import Breadcrumb from "~/components/Breadcrumb.vue"

const route = useRoute()

const items = computed<NavigationMenuItem[][]>(() => [[
    {
        label: 'Projets',
        icon: 'i-lucide-folder-dot',
        to: '/',
        active: route.path.startsWith('/projets')
    },
    {
        label: 'Biographie',
        // label: 'Services & Biographie',
        icon: 'i-lucide-user',
        to: '/biographie',
        // active: true
    },
    {
        label: 'Services',
        // label: 'Services & Biographie',
        icon: 'i-lucide-info',
        to: '/services',
        // active: true
    },
    {
        label: 'Contact',
        icon: 'i-lucide-at-sign',
        to: '/contact',
    }
]])
</script>

<template>
    <UNavigationMenu :items="items" color="neutral" :ui="{
        root: 'justify-around border-t border-default py-2',
        item: 'py-0',
        link: 'flex-col gap-1 px-3',
        linkLeadingIcon: 'size-5',
        linkLabel: 'font-normal whitespace-pre-line '
    }" class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-fit rounded-full border bg-white px-4 py-2 shadow-lg" />
</template>
