<script setup lang="ts">
import ButtonNavigation from "~/components/ButtonNavigation.vue"
import ButtonBack from "~/components/ButtonBack.vue"

const route = useRoute()

const { origin } = useRequestURL()
const { data: project } = await useFetch(`${origin}/data/projects/project-${route.params.slug}.json`)

const siteUrl = 'https://devanto.exposia.art'

useSeoMeta({
    title: () => `${project.value?.title} | Portfolio d'Antony Guillin`,
    description: () => project.value?.description,

    ogTitle: () => project.value?.title,
    ogDescription: () => project.value?.description,
    ogImage: () =>
        project.value?.cover
            ? `${siteUrl}${project.value.cover}`
            : `${siteUrl}/og.jpg`,
    ogUrl: () => `${siteUrl}/projets/${route.params.slug}`,
    ogType: 'website',

    twitterCard: 'summary_large_image',

    robots: "index, follow"
})

const structuredData = computed(() => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.value?.title,
    description: project.value?.description,
    image: `${siteUrl}${project.value?.cover}`,
    author: {
        "@type": "Person",
        name: "Antony Guillin"
    }
}))

useHead({
    script: [
        {
            type: 'application/ld+json',
            children: computed(() => JSON.stringify(structuredData.value))
        }
    ]
})

const projects = await $fetch(`${origin}/data/projects/projects.json`)

// Toutes les images (cover + galerie) fusionnées
const allImages = computed<string[]>(() => {
    if (!project.value) return []
    const imgs: string[] = []
    if (project.value.cover) imgs.push(project.value.cover)
    if (project.value.gallery?.length) imgs.push(...project.value.gallery)
    return imgs
})

// Lightbox
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

function openLightbox(index: number) {
    lightboxIndex.value = index
    lightboxOpen.value = true
}

function onBackdropClick(e: MouseEvent) {
    if ((e.target as HTMLElement).classList.contains('lightbox-backdrop')) {
        closeLightbox()
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKey)
    // passive: false obligatoire pour pouvoir appeler preventDefault()
    document.addEventListener('wheel', handleWheel, { passive: false })
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKey)
    document.removeEventListener('wheel', handleWheel)
})

function handleWheel(e: WheelEvent) {
    if (!lightboxOpen.value) return
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.2 : 0.2
    zoomScale.value = Math.min(5, Math.max(1, zoomScale.value + delta))
    if (zoomScale.value === 1) translate.value = { x: 0, y: 0 }
}

function handleKey(e: KeyboardEvent) {
    if (!lightboxOpen.value) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') prevImage()
    if (e.key === 'ArrowRight') nextImage()
}

const zoomScale = ref(1)
const zoomOrigin = ref({ x: 50, y: 50 })
const isDragging = ref(false)
const dragStart = ref({ x: 0, y: 0 })
const translate = ref({ x: 0, y: 0 })

function resetZoom() {
    zoomScale.value = 1
    translate.value = { x: 0, y: 0 }
}

// Remplacer prevImage() et nextImage()
function prevImage() {
    lightboxIndex.value = (lightboxIndex.value - 1 + allImages.value.length) % allImages.value.length
    resetZoom()
}
function nextImage() {
    lightboxIndex.value = (lightboxIndex.value + 1) % allImages.value.length
    resetZoom()
}

// Remplacer closeLightbox()
function closeLightbox() {
    lightboxOpen.value = false
    resetZoom()
}

// Zoom à la molette


// Double-clic pour zoom/dézoom rapide
function onDblClick() {
    zoomScale.value === 1 ? zoomScale.value = 2.5 : resetZoom()
}

// Pan (drag)
function onMouseDown(e: MouseEvent) {
    if (zoomScale.value === 1) return
    isDragging.value = true
    dragStart.value = { x: e.clientX - translate.value.x, y: e.clientY - translate.value.y }
}
function onMouseMove(e: MouseEvent) {
    if (!isDragging.value) return
    translate.value = { x: e.clientX - dragStart.value.x, y: e.clientY - dragStart.value.y }
}

function onMouseUp() { isDragging.value = false }

const imgZoomStyle = computed(() => ({
    transform: `scale(${zoomScale.value}) translate(${translate.value.x / zoomScale.value}px, ${translate.value.y / zoomScale.value}px)`,
    cursor: zoomScale.value > 1 ? (isDragging.value ? 'grabbing' : 'grab') : 'zoom-in',
    transition: isDragging.value ? 'none' : 'transform 0.2s ease',
    userSelect: 'none' as const,
}))
</script>

<template>
    <div v-if="project" class="h-screen flex flex-col relative bg-white">

        <ButtonBack to="/" />

        <!-- ── GALERIE : 45vh mobile / 50vh desktop, scroll horizontal ── -->
        <div class="w-full overflow-x-auto scrollbar-hide shrink-0 h-[45vh] md:h-[60vh]">
            <div v-if="allImages.length" class="flex flex-row gap-4 h-full">
                <button v-for="(img, index) in allImages" :key="index" @click="openLightbox(index)"
                    class="relative h-full shrink-0 overflow-hidden group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black"
                    :style="index === 0 ? 'width: 85vw' : 'width: 60vw'"
                    :class="{ 'md:!w-[55vw]': index === 0, 'md:!w-[35vw]': index > 0, 'border-l border-white/20': index > 0 }">
                    <NuxtImg format="webp" quality="80" loading="lazy" :src="img"
                        :alt="`${project.title} — vue ${index + 1}`"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] select-none" />
                    <div
                        class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                </button>
            </div>

            <div v-else class="h-full bg-neutral-100 flex items-center justify-center">
                <span class="text-sm text-neutral-400 tracking-widest uppercase">Aucune image disponible</span>
            </div>
        </div>

        <!-- ── CONTENT ── -->
        <div class="flex-1 pb-30">
            <div class="mx-auto w-full px-4 md:px-8 py-5 h-full">

                <div
                    class="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)_minmax(0,1fr)] gap-5 md:gap-10 h-full">

                    <!-- Gauche : titre + meta + navigation -->
                    <div class="flex flex-col justify-between gap-8">
                        <div class="flex flex-col gap-8">
                            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none">
                                {{ project.title }}
                            </h1>

                            <div class="flex flex-col gap-6">
                                <div class="flex flex-row gap-6">
                                    <span class="flex items-center gap-2">
                                        <UIcon name="i-lucide-calendar" class="w-6 h-6 shrink-0" />
                                        {{ project.year }}
                                    </span>
                                    <span class="flex items-center gap-2">
                                        <UIcon name="i-lucide-clock" class="w-6 h-6 shrink-0" />
                                        {{ project.time }}
                                    </span>
                                </div>
                                <a v-if="project.website" :href="project.website" target="_blank" rel="noopener"
                                    class="flex items-center gap-2 hover:text-neutral-900 transition-colors cursor-pointer w-fit">
                                    <UIcon name="i-lucide-globe" class="w-6 h-6 shrink-0" />
                                    <span class="truncate">{{ project.website.replace('https://', '') }}</span>
                                    <UIcon name="i-lucide-external-link" class="w-4 h-4 shrink-0" />
                                </a>
                                <p v-else class="flex items-center gap-2">
                                    <UIcon name="i-lucide-globe" class="w-6 h-6 shrink-0" />
                                    Site plus en ligne
                                </p>
                            </div>
                        </div>

                        <span class="flex items-center gap-2">
                            <UIcon name="i-lucide-sparkles" class="w-6 h-6 shrink-0" />
                            {{ project.type }}
                        </span>
                    </div>

                    <!-- Centre : description -->
                    <p class="leading-relaxed whitespace-pre-line">
                        {{ project.description }}
                    </p>

                    <!-- Droite : technologies + services -->
                    <div class="flex flex-col gap-6">
                        <div v-if="project.technologies?.length" class="flex flex-col gap-3">
                            <h2 class="font-bold tracking-widest uppercase">
                                Technologies</h2>
                            <ul class="flex flex-col gap-2">
                                <li v-for="tech in project.technologies" :key="tech" class="flex items-center gap-2">
                                    <UIcon v-if="tech.toLowerCase() === 'figma'" name="i-lucide-figma"
                                        class="w-6 h-6 shrink-0" />
                                    <NuxtImg loading="lazy" v-if="tech.toLowerCase() === 'symfony'"
                                        src="/images/badges/symfony.png" alt="logo du framework Symfony"
                                        class="w-6 h-6" />
                                    <UIcon v-if="tech.toLowerCase() === 'html / css / js'" name="i-lucide-code"
                                        class="w-6 h-6 shrink-0" />
                                    <NuxtImg loading="lazy" v-if="tech.toLowerCase() === 'nodejs'"
                                        src="/images/badges/nodejs.svg" alt="logo du framework Symfony"
                                        class="w-6 h-6" />
                                    <NuxtImg loading="lazy" v-if="tech.toLowerCase() === 'vuejs'"
                                        src="/images/badges/vuejs.svg" alt="logo du framework Symfony"
                                        class="w-6 h-6" />
                                    <NuxtImg loading="lazy" v-if="tech.toLowerCase() === 'mysql'"
                                        src="/images/badges/mysql.svg" alt="logo du framework Symfony"
                                        class="w-6 h-6" />
                                    <NuxtImg loading="lazy" v-if="tech.toLowerCase() === 'openstreetmap'"
                                        src="/images/badges/openstreetmap.svg" alt="logo du framework Symfony"
                                        class="w-6 h-6" />
                                    {{ tech }}
                                </li>
                            </ul>
                        </div>

                        <div v-if="project.services?.length" class="flex flex-col gap-3">
                            <h2 class="font-bold tracking-widest uppercase">Services
                            </h2>
                            <ul class="flex flex-col gap-2 list-disc pl-6">
                                <li v-for="serv in project.services" :key="serv">
                                    {{ serv }}
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- ── LIGHTBOX ── -->
        <Teleport to="body">
            <Transition name="fade">
                <div v-if="lightboxOpen"
                    class="lightbox-backdrop fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
                    @click="onBackdropClick">
                    <div class="relative flex overflow-hidden items-center justify-center w-full max-w-5xl"
                        @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp" @mouseleave="onMouseUp"
                        @click.stop>
                        <button @click="closeLightbox"
                            class="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 cursor-pointer"
                            aria-label="Fermer">
                            <UIcon name="i-lucide-x" class="w-5 h-5" />
                        </button>

                        <button v-if="allImages.length > 1" @click="prevImage"
                            class="absolute -left-2 md:-left-12 z-10 text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 cursor-pointer"
                            aria-label="Image précédente">
                            <UIcon name="i-lucide-chevron-left" class="w-6 h-6" />
                        </button>

                        <NuxtImg loading="lazy" :src="allImages[lightboxIndex]"
                            :alt="`${project.title} — vue ${lightboxIndex + 1}`" :style="imgZoomStyle"
                            class="max-h-[80vh] max-w-full rounded-xl object-contain shadow-2xl select-none"
                            @dblclick="onDblClick" @click.stop />

                        <button v-if="allImages.length > 1" @click="nextImage"
                            class="absolute -right-2 md:-right-12 z-10 text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 cursor-pointer"
                            aria-label="Image suivante">
                            <UIcon name="i-lucide-chevron-right" class="w-6 h-6" />
                        </button>
                    </div>

                    <p class="mt-3 text-white/40 text-xs tracking-widest select-none tabular-nums">
                        {{ lightboxIndex + 1 }} / {{ allImages.length }}
                    </p>

                    <div v-if="allImages.length > 1"
                        class="mt-3 flex flex-row gap-2 overflow-x-auto scrollbar-hide max-w-full px-2" @click.stop>
                        <button v-for="(img, i) in allImages" :key="i" @click="lightboxIndex = i"
                            class="shrink-0 rounded-md overflow-hidden transition-all duration-200 focus:outline-none cursor-pointer"
                            :class="i === lightboxIndex
                                ? 'ring-2 ring-white opacity-100 scale-105'
                                : 'opacity-35 hover:opacity-65'">
                            <NuxtImg loading="lazy" :src="img" :alt="`Miniature ${i + 1}`"
                                class="h-10 w-14 object-cover" />
                        </button>
                    </div>
                </div>
            </Transition>
        </Teleport>

    </div>


    <!-- Projet introuvable -->
    <div v-else class="min-h-screen flex items-center justify-center">
        <div class="text-center flex flex-col items-center gap-4">
            <p class="text-neutral-400 text-sm tracking-widest uppercase">Projet introuvable</p>
            <NuxtLink to="/">
                <UButton variant="outline" color="neutral" size="sm">Retour aux projets</UButton>
            </NuxtLink>
        </div>
    </div>

    <ButtonNavigation :title="project.title" :projects="projects" :current-slug="project.slug" />
</template>

<style scoped>
.scrollbar-hide {
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>