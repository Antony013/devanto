<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () =>
    queryCollection('projects').all()
)
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <main class="flex-1 pl-6 pt-6 sm:pl-24 sm:pt-24">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <NuxtLink v-for="project in projects" :key="project.slug" :to="`/projets/${project.slug}`"
                    class="block aspect-4/3 overflow-hidden group">
                    <img :src="project.cover" :alt="project.title"
                        class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80" />
                </NuxtLink>
            </div>
        </main>

        <h1 class="text-6xl sm:text-7xl md:text-8xl font-thin tracking-tight leading-none">
            Projets
        </h1>
    </div>
</template>