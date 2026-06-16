<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () =>
    queryCollection('projects').all(),
    { serveur: false }
)

const siteUrl = 'https://devanto.exposia.art'

useSeoMeta({
    title: 'Projets | Antony F. Guillin - Développeur web freelance',
    description:
        "Vous avez un projet de site web ou une question ? Contactez Antony F. Guillin, développeur web freelance spécialisé en création de sites web modernes, performants et éco-conçus.",

    ogTitle: 'Projets | Antony F. Guillin',
    ogDescription:
        "Contactez Antony F. Guillin pour discuter de votre projet de création ou de refonte de site web.",

    ogImage: `${siteUrl}/images/antony.webp`,
    ogUrl: `${siteUrl}/projets`,
    ogType: 'website',

    twitterCard: 'summary_large_image',

    robots: 'index,follow'
})

useHead({
    link: [
        {
            rel: 'canonical',
            href: `${siteUrl}/projets`
        }
    ],

    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProjetsPage",
                name: "Projets",
                url: `${siteUrl}/projets`,
                description:
                    "Page des projets d'Antony F. Guillin, développeur web freelance.",

                mainEntity: {
                    "@type": "Person",
                    "@id": `${siteUrl}/#person`,
                    name: "Antony F. Guillin",
                    jobTitle: "Développeur web freelance",
                    url: siteUrl,
                    image: `${siteUrl}/images/antony.webp`
                }
            })
        }
    ]
})
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <main class="flex-1 pl-6 pt-6 sm:pl-24 sm:pt-24">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <NuxtLink v-for="project in projects" :key="project.slug" :to="`/projets/${project.slug}`"
                    class="block aspect-4/3 overflow-hidden group">
                    <NuxtImg loading="lazy" :src="project.cover" :alt="project.title"
                        class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80" />
                </NuxtLink>
            </div>
        </main>

        <h1 class="text-6xl sm:text-7xl md:text-8xl font-thin tracking-tight leading-none">
            Projets
        </h1>
    </div>
</template>