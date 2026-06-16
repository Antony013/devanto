<script setup lang="ts">
const siteUrl = 'https://devanto.exposia.art'

useSeoMeta({
    title: 'Biographie | Antony F. Guillin - Développeur web freelance',
    description:
        "Découvrez le parcours d'Antony F. Guillin, développeur web freelance spécialisé en création de sites web modernes, performants et éco-conçus.",

    ogTitle: 'Biographie | Antony F. Guillin',
    ogDescription:
        "Découvrez le parcours, les compétences et la vision d'Antony F. Guillin, développeur web freelance.",

    ogImage: `${siteUrl}/images/antony.png`,
    ogUrl: `${siteUrl}/biographie`,
    ogType: 'profile',

    twitterCard: 'summary_large_image',

    robots: 'index,follow'
})

useHead({
    link: [
        {
            rel: 'canonical',
            href: `${siteUrl}/biographie`
        }
    ],

    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": `${siteUrl}/#person`,
                name: "Antony F. Guillin",
                url: siteUrl,
                image: `${siteUrl}/images/antony.png`,
                description:
                    "Développeur web freelance spécialisé dans la conception de sites web modernes, performants et éco-conçus.",
                jobTitle: "Développeur web freelance",
                knowsAbout: [
                    "Développement web",
                    "Web design",
                    "Nuxt.js",
                    "Vue.js",
                    "Symfony",
                    "Tailwind CSS",
                    "SEO",
                    "Éco-conception web"
                ]
            })
        }
    ]
})
</script>

<template>
    <div class="min-h-screen flex flex-col gap-6 p-6 sm:p-24 pb-24">
        <div class="flex flex-col md:flex-row gap-6">
            <div class="shrink-0 w-full md:w-1/4 flex flex-col gap-6">
                <div class="aspect-3/4 rounded-2xl overflow-hidden w-52 sm:w-64 md:w-full">
                    <NuxtImg src="/images/antony.png" loading="lazy" alt="Photo portrait de Antony F. Guillin"
                        class="w-full h-full object-cover" />
                </div>

                <div class="flex justify-start gap-10">
                    <div>
                        <h2 class="font-bold text-2xl">13</h2>
                        <p>projets réalisés</p>
                    </div>
                    <div>
                        <h2 class="font-bold text-2xl">6</h2>
                        <p>années d'expérience</p>
                    </div>
                </div>
            </div>

            <h1 class="block md:hidden text-[clamp(2rem,3vw,3rem)]">
                Antony F. Guillin Freelance web design et développeur web
            </h1>

            <div class="flex flex-col md:flex-row gap-8 flex-1">
                <div class="flex-1 leading-relaxed">
                    <p>
                        En 2018, j'étudie en BTS Assistant Manager, un diplôme que j'obtiendrai deux ans plus tard.
                        Même
                        si ces études se passent bien, je ressens qu'il me manque quelque chose. Une question
                        revient
                        souvent dans ma tête : *comment sont créés les sites web et les applications mobiles ?*
                        <br />
                        <br />
                        Par curiosité, je commence à apprendre le développement en autodidacte. Très vite, cette
                        curiosité devient une véritable passion. Au cours de ma deuxième année de BTS, je décide de
                        me
                        réorienter vers un BTS Développement Web afin d'en faire mon métier.
                        <br />
                        <br />
                        Cette formation m'a beaucoup appris, mais elle m'a aussi fait perdre le plaisir de créer.
                        Après
                        l'obtention de mon diplôme, je mets le développement de côté pendant plusieurs années.
                        <br />
                        <br />
                        Puis un jour, l'envie revient. Pas celle de coder parce qu'il le faut, mais celle de créer.
                        Repartir d'une page blanche, imaginer une idée et la transformer en un produit concret.
                        C'est ce
                        qui m'a toujours plu dans le développement, et c'est encore aujourd'hui ce qui me motive le
                        plus.
                        <br />
                        <br />
                        J'ai recommencé avec de petits projets personnels, uniquement pour le plaisir. Petit à
                        petit, la
                        passion est revenue, jusqu'à me donner envie de construire des projets plus ambitieux.
                        <br />
                        <br />
                        Aujourd'hui, je développe des sites web parce que j'aime concevoir des expériences qui
                        allient
                        design, technique et simplicité. J'accorde une grande importance à la qualité du code, à la
                        sécurité, aux performances et, lorsque c'est pertinent, à l'éco-conception. Pour moi, créer
                        un
                        site ne consiste pas seulement à le rendre beau : il doit aussi être fiable, rapide et pensé
                        pour durer.
                    </p>
                </div>
            </div>
        </div>

        <h1 class="hidden md:block text-[clamp(2rem,3vw,3rem)]">
            Antony F. Guillin Freelance web design et développeur web
        </h1>
    </div>
</template>