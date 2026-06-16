<script setup lang="ts">
const props = defineProps<{
    title: string
    currentSlug: string
    projects: any[]
}>()

const currentIndex = computed(() =>
    props.projects.findIndex(
        p => p.slug === props.currentSlug
    )
)

const previousProject = computed(() => {
    if (currentIndex.value === -1 || props.projects.length === 0) return null

    const previousIndex =
        (currentIndex.value - 1 + props.projects.length) % props.projects.length

    return props.projects[previousIndex]
})

const nextProject = computed(() => {
    if (currentIndex.value === -1 || props.projects.length === 0) return null

    const nextIndex =
        (currentIndex.value + 1) % props.projects.length

    return props.projects[nextIndex]
})
</script>

<template>
    <div
        class="flex flex-col gap-2 items-center fixed bottom-24 left-1/2 -translate-x-1/2 z-50 w-fit rounded-full bg-white px-4 py-2">
        <div class="flex items-center flex-row gap-4 rounded-full">
            <UTooltip text="Projet précédent">
                <UButton class="rounded-full" :to="previousProject
                    ? `/projets/${previousProject.slug}`
                    : undefined" icon="i-lucide-arrow-left" color="neutral" variant="subtle" />
            </UTooltip>
            <h3 class="w-fit whitespace-nowrap">Projet {{ title }}</h3>
            <UTooltip text="Projet suivant">
                <UButton class="rounded-full" :to="nextProject
                    ? `/projets/${nextProject.slug}`
                    : undefined" icon="i-lucide-arrow-right" color="neutral" variant="solid" />
            </UTooltip>
        </div>
    </div>
</template>