<script setup lang="ts">

const props = defineProps({
    to: {
        type: String as () => string | null,
        default: "/projets"
    },
    // zoom: {
    //     type: Number,
    //     default: 6
    // }
})
</script>

<template>
    <UTooltip text="Retour">
        <UButton :to="to" icon="i-lucide-arrow-left" color="neutral" variant="solid" class="rounded-full absolute top-5 left-5 z-50 p-2.5" />
    </UTooltip>
</template>