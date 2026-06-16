<script setup lang="ts">

const siteUrl = 'https://devanto.exposia.art'

useSeoMeta({
    title: 'Services & tarifs | Antony F. Guillin - Développeur web freelance',
    description:
        "Création de sites web modernes, performants et éco-conçus. Découvrez mes offres : site vitrine, boutique en ligne et landing page sur mesure.",

    ogTitle: 'Services & tarifs | Antony F. Guillin',
    ogDescription:
        "Découvrez mes offres de création de sites web : landing page, site vitrine et e-commerce.",

    ogImage: `${siteUrl}/images/antony.png`,
    ogUrl: `${siteUrl}/services`,
    ogType: 'website',

    twitterCard: 'summary_large_image',

    robots: 'index,follow'
})

useHead({
    link: [
        {
            rel: 'canonical',
            href: `${siteUrl}/services`
        }
    ],

    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Services de développement web",
                url: `${siteUrl}/services`,
                description:
                    "Création de sites web modernes, performants et éco-conçus pour indépendants, entreprises et projets digitaux.",

                provider: {
                    "@type": "Person",
                    "@id": `${siteUrl}/#person`,
                    name: "Antony F. Guillin",
                    jobTitle: "Développeur web freelance",
                    url: siteUrl,
                    image: `${siteUrl}/images/antony.png`
                },

                hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Offres de création de sites web",
                    itemListElement: [
                        {
                            "@type": "Offer",
                            name: "Landing page",
                            description: "Page unique pour présenter une activité ou tester une idée."
                        },
                        {
                            "@type": "Offer",
                            name: "Site vitrine",
                            description: "Site complet pour présenter une entreprise ou un portfolio."
                        },
                        {
                            "@type": "Offer",
                            name: "Site e-commerce",
                            description: "Boutique en ligne avec paiement et gestion produits."
                        }
                    ]
                }
            })
        }
    ]
})

const offers = [
    {
        name: 'Une page',
        description: "L'essentiel pour se présenter. Idéal pour démarrer ou tester.",
        price: '800 – 1 000 €',
        duration: '1 – 2 semaines',
        stack: 'Nuxt / Vue · Strapi',
        highlight: false,
        badge: null,
        features: [
            'Design Figma + 3 retours',
            'Page unique responsive',
            'Formulaire de contact',
            'Mise en ligne incluse',
        ],
    },
    {
        name: 'Vitrine',
        description: 'Site complet de présentation, portfolio ou blog.',
        price: '2 000 – 3 000 €',
        duration: '3 – 5 semaines',
        stack: 'Nuxt / Vue · Strapi · Vercel',
        highlight: false,
        badge: null,
        features: [
            "Jusqu'à 8 pages",
            'Design Figma + 5 retours',
            'CMS pour éditer le contenu',
            'Formulaire + anti-spam',
            'Responsive mobile',
        ],
    },
    {
        name: 'Boutique',
        description: 'Site + catalogue produits, paiement et commandes.',
        price: '3 500 – 5 500 €',
        duration: '6 – 10 semaines',
        stack: 'Nuxt / Vue · Shopify · Strapi si blog',
        highlight: false,
        badge: null,
        // badge: 'Recommandé',
        features: [
            "Tout l'offre Vitrine",
            'Shopify (produits, paiement)',
            'Gestion des commandes',
            "Panier + tunnel d'achat",
            'SSL + sauvegardes',
        ],
    },
]

const steps = [
    {
        number: '01',
        icon: 'i-lucide-search',
        title: 'Audit + démo',
        badge: 'Gratuit & sans engagement',
        description: "J'analyse votre site et prépare une maquette Figma ou une préproduction. Vous voyez le résultat avant toute décision.",
    },
    {
        number: '02',
        icon: 'i-lucide-file-text',
        title: 'Devis + acompte',
        badge: '40 % à la signature',
        description: "On cadre le projet ensemble. Le développement commence après signature et versement de l'acompte.",
    },
    {
        number: '03',
        icon: 'i-lucide-pen-tool',
        title: 'Maquettes',
        badge: '5 allers-retours',
        description: "Jusqu'à 5 allers-retours sur le design. Vous validez avant le développement.",
    },
    {
        number: '04',
        icon: 'i-lucide-code-2',
        title: 'Développement',
        badge: null,
        description: "Intégration, CMS, e-commerce si besoin. Visualisation de l'avancé tout au long du projet.",
    },
    {
        number: '05',
        icon: 'i-lucide-globe',
        title: 'Mise en ligne',
        badge: 'Solde à la livraison',
        description: "Déploiement, formation, documentation remise. Site en ligne après règlement du solde.",
    },
]

const included = [
    { icon: 'i-lucide-globe', text: 'Mise en ligne + config DNS' },
    { icon: 'i-lucide-mail-check', text: 'Emails pro (SPF/DKIM/DMARC)' },
    { icon: 'i-lucide-cookie', text: 'Bandeau cookies' },
    { icon: 'i-lucide-scroll-text', text: 'Mentions légales (template)' },
    { icon: 'i-lucide-video', text: 'Documentation + vidéos Loom' },
    { icon: 'i-lucide-bar-chart-2', text: 'Analytics RGPD (Plausible)' },
    { icon: 'i-lucide-clock', text: '14 jours de corrections offertes' },
    { icon: 'i-lucide-server', text: 'Hébergement sous votre nom' },
]

const notIncluded = [
    { icon: 'i-lucide-search', text: 'Stratégie SEO' },
    { icon: 'i-lucide-type', text: 'Rédaction de contenu' },
    { icon: 'i-lucide-megaphone', text: 'CRO / Publicité' },
    { icon: 'i-lucide-brush', text: 'Création / Modification de logo' },
]

const maintenanceItems = [
    {
        icon: 'i-lucide-pencil',
        title: 'Modification simple',
        price: '60 €',
        description: 'Texte, image, mise à jour mineure.',
    },
    {
        icon: 'i-lucide-file-plus',
        title: 'Nouvelle page',
        price: '180 €',
        description: 'Page complète avec contenu et intégration.',
    },
    {
        icon: 'i-lucide-shield',
        title: 'Abonnement mensuel',
        price: '70 € / mois',
        description: "Sécu + monitoring + 1h d'intervention incluse.",
    },
    {
        icon: 'i-lucide-wrench',
        title: 'Fonctionnalité sur mesure',
        price: 'Sur devis',
        description: 'Toute modification complexe ou nouvelle feature.',
    },
]
</script>

<template>
    <div class="min-h-screen bg-white">

        <!-- ─── HERO ──────────────────────────────────────────────── -->
        <section class="px-5 pt-16 pb-12 md:px-14 md:pt-24 md:pb-16 max-w-5xl mx-auto">
            <p class="text-xs font-semibold uppercase tracking-widest text-[#3ecf8e] mb-4">Tarifs & services</p>
            <h1 class="text-3xl md:text-5xl font-light text-gray-900 leading-tight mb-4" style="letter-spacing:-0.03em">
                Un site qui travaille<br class="hidden sm:block" />
                pour vous — pas l'inverse.
            </h1>
            <p class="text-base text-gray-500 leading-relaxed max-w-xl">
                Trois offres claires, un processus transparent, zéro mauvaise surprise.
                Audit gratuit avant toute décision.
            </p>
        </section>

        <!-- ─── OFFRES ─────────────────────────────────────────────── -->
        <section id="offres" class="px-5 pb-12 md:px-14 max-w-5xl mx-auto">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="text-xl font-medium text-gray-900 whitespace-nowrap">Mes offres</h2>
                <div class="flex-1 h-px bg-gray-100" />
            </div>

            <!-- Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div v-for="offer in offers" :key="offer.name"
                    class="relative rounded-2xl flex flex-col gap-5 p-6 transition-all duration-200" :class="offer.highlight
                        ? 'bg-gray-950 text-white shadow-xl shadow-gray-900/10'
                        : 'bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-sm'">
                    <!-- Badge -->
                    <div v-if="offer.badge" class="absolute -top-3 left-5">
                        <span class="text-xs font-semibold bg-[#3ecf8e] text-gray-950 rounded-full px-3 py-1">
                            {{ offer.badge }}
                        </span>
                    </div>

                    <!-- Header -->
                    <div>
                        <p class="text-xs font-medium mb-1"
                            :class="offer.highlight ? 'text-gray-500' : 'text-gray-400'">
                            {{ offer.stack }}
                        </p>
                        <h3 class="text-lg font-semibold" :class="offer.highlight ? 'text-white' : 'text-gray-900'">
                            {{ offer.name }}
                        </h3>
                        <p class="text-sm mt-1 leading-snug"
                            :class="offer.highlight ? 'text-gray-400' : 'text-gray-500'">
                            {{ offer.description }}
                        </p>
                    </div>

                    <!-- Price -->
                    <p class="text-3xl font-light tracking-tight"
                        :class="offer.highlight ? 'text-white' : 'text-gray-900'" style="letter-spacing:-0.03em">
                        {{ offer.price }}
                    </p>

                    <p class="flex items-center gap-1.5 mt-1.5"
                        :class="offer.highlight ? 'text-gray-500' : 'text-gray-400'">
                        <UIcon name="i-lucide-clock" class=" shrink-0" />
                        {{ offer.duration }}
                    </p>

                    <div class="h-px" :class="offer.highlight ? 'bg-white/10' : 'bg-gray-200'" />

                    <!-- Features -->
                    <ul class="space-y-2.5 flex-1">
                        <li v-for="f in offer.features" :key="f" class="flex items-start gap-2.5 text-sm"
                            :class="offer.highlight ? 'text-gray-300' : 'text-gray-600'">
                            <UIcon name="i-lucide-check" class="mt-0.5 shrink-0 text-[#3ecf8e] text-sm" />
                            {{ f }}
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Paiement 3x -->
            <div class="mt-5 rounded-2xl bg-gray-50 border border-gray-100 px-5 py-4">
                <div class="flex items-center gap-2 mb-3 sm:mb-0">
                    <UIcon name="i-lucide-credit-card" class="text-[#3ecf8e] text-base shrink-0" />
                    <span class="text-sm font-medium text-gray-700">Paiement en 3 fois sans frais</span>
                </div>
                <!-- Mobile: stacked steps -->
                <div class="mt-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 sm:mt-2">
                    <span
                        class="text-xs text-gray-500 bg-white border border-gray-200 rounded-lg px-3 py-1.5 font-medium text-center sm:text-left">
                        40 % à la signature
                    </span>
                    <UIcon name="i-lucide-chevron-right" class="text-gray-300 text-xs hidden sm:block mx-2" />
                    <UIcon name="i-lucide-chevron-down" class="text-gray-300 text-xs sm:hidden self-center" />
                    <span
                        class="text-xs text-[#059669] bg-[#f0fdf8] border border-[#bbf7d0] rounded-lg px-3 py-1.5 font-medium text-center sm:text-left">
                        30 % maquettes validées
                    </span>
                    <UIcon name="i-lucide-chevron-right" class="text-gray-300 text-xs hidden sm:block mx-2" />
                    <UIcon name="i-lucide-chevron-down" class="text-gray-300 text-xs sm:hidden self-center" />
                    <span
                        class="text-xs text-[#059669] bg-[#f0fdf8] border border-[#bbf7d0] rounded-lg px-3 py-1.5 font-medium text-center sm:text-left">
                        30 % mise en ligne
                    </span>
                </div>
            </div>
        </section>

        <!-- ─── INCLUS ─────────────────────────────────────────────── -->
        <section id="inclus" class="px-5 py-12 md:px-14 max-w-5xl mx-auto">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="text-xl font-medium text-gray-900 whitespace-nowrap">Inclus partout</h2>
                <div class="flex-1 h-px bg-gray-100" />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0 mb-8">
                <div v-for="item in included" :key="item.text"
                    class="flex items-center gap-3 py-3.5 border-b border-gray-100">
                    <div
                        class="w-7 h-7 rounded-lg bg-[#f0fdf8] border border-[#bbf7d0] flex items-center justify-center shrink-0">
                        <UIcon :name="item.icon" class="text-[#3ecf8e] text-xs" />
                    </div>
                    <span class="text-sm text-gray-700">{{ item.text }}</span>
                </div>
            </div>

            <!-- Non inclus -->
            <div class="rounded-xl bg-gray-50 border border-gray-100 px-5 py-4">
                <p class="text-xs font-medium mb-3 uppercase tracking-wide">Non inclus</p>
                <div class="flex flex-wrap gap-2">
                    <div v-for="item in notIncluded" :key="item.text"
                        class="flex items-center gap-1.5 text-xs bg-white border border-gray-200 rounded-full px-3 py-1.5">
                        <UIcon :name="item.icon" />
                        {{ item.text }}
                    </div>
                </div>
            </div>
        </section>

        <!-- ─── PROCESSUS ─────────────────────────────────────────── -->
        <section id="processus" class="px-5 py-12 md:px-14 max-w-5xl mx-auto">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="text-xl font-medium text-gray-900 whitespace-nowrap">Comment ça se passe</h2>
                <div class="flex-1 h-px bg-gray-100" />
            </div>

            <div class="space-y-0">
                <div v-for="(step, i) in steps" :key="step.number" class="py-5 border-b border-gray-100 last:border-0">
                    <!-- Mobile layout: number + title inline, description below -->
                    <div class="flex items-start gap-4">
                        <!-- Numéro -->
                        <span class="text-sm font-light tabular-nums pt-0.5 shrink-0 w-6">
                            {{ step.number }}
                        </span>
                        <div class="flex-1 min-w-0">
                            <!-- Title row -->
                            <div class="flex flex-wrap items-center gap-2 mb-1.5">
                                <p class="text-sm font-semibold text-gray-900">{{ step.title }}</p>
                                <span v-if="step.badge"
                                    class="inline-flex text-xs font-medium text-[#059669] bg-[#f0fdf8] border border-[#bbf7d0] rounded-full px-2.5 py-0.5">
                                    {{ step.badge }}
                                </span>
                            </div>
                            <!-- Description -->
                            <p class="text-sm leading-relaxed">{{ step.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ─── MAINTENANCE ───────────────────────────────────────── -->
        <section id="maintenance" class="px-5 py-12 md:px-14 max-w-5xl mx-auto">
            <div class="flex items-center gap-4 mb-8">
                <h2 class="text-xl font-medium text-gray-900 whitespace-nowrap">Après la mise en ligne</h2>
                <div class="flex-1 h-px bg-gray-100" />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 rounded-2xl overflow-hidden">
                <div v-for="item in maintenanceItems" :key="item.title"
                    class="bg-white p-6 flex gap-4 items-start group hover:bg-gray-50 transition-colors">
                    <div
                        class="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#f0fdf8] group-hover:border-[#bbf7d0] transition-colors">
                        <UIcon :name="item.icon"
                            class="text-gray-400 text-sm group-hover:text-[#3ecf8e] transition-colors" />
                    </div>
                    <div class="min-w-0">
                        <p class="text-xs text-gray-400 mb-0.5">{{ item.title }}</p>
                        <p class="text-xl font-semibold text-gray-900 mb-1 tracking-tight">{{ item.price }}</p>
                        <p class="text-sm leading-snug">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ─── CTA FOOTER ────────────────────────────────────────── -->
        <section class="px-5 pt-4 pb-20 md:px-14 max-w-5xl mx-auto">
            <div class="relative rounded-3xl overflow-hidden px-7 py-12 md:px-14 md:py-14"
                style="background: linear-gradient(135deg, #0c1a0c 0%, #0f172a 100%)">
                <!-- Glow -->
                <div class="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none opacity-30"
                    style="background: radial-gradient(circle, #3ecf8e, transparent 70%)" />
                <!-- Bottom-left subtle glow -->
                <div class="absolute -bottom-16 -left-16 w-64 h-64 rounded-full pointer-events-none opacity-10"
                    style="background: radial-gradient(circle, #3ecf8e, transparent 70%)" />

                <div class="relative z-10">
                    <p class="text-xs font-semibold uppercase tracking-widest text-[#3ecf8e] mb-4">Prêt à démarrer ?</p>
                    <h2 class="text-2xl md:text-4xl font-light text-white leading-tight mb-3"
                        style="letter-spacing:-0.03em">
                        Votre site a du potentiel.<br />
                        Laissez-moi vous le montrer.
                    </h2>
                    <p class="text-sm text-gray-400 mb-8">
                        Je prépare une démo de votre site refondu — sans engagement.
                    </p>
                    <!-- Mobile: full-width button -->
                    <UButton label="Me contacter" color="success" size="lg" icon="i-lucide-arrow-right" trailing
                        class="w-full sm:w-auto justify-center font-medium" to="/contact" />
                </div>
            </div>
        </section>

    </div>
</template>