<script setup lang="ts">
import emailjs from '@emailjs/browser'
const config = useRuntimeConfig()

useSeoMeta({
    title: 'Contact — Antony F. Guillin',
    description: 'Contactez Antony F. Guillin, freelance web design et développement web.'
})

const EMAILJS_SERVICE_ID = config.public.emailjsServiceId
const EMAILJS_TEMPLATE_ID = config.public.emailjsTemplateId
const EMAILJS_PUBLIC_KEY = config.public.emailjsPublicKey

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
})

const errors = ref<Record<string, string>>({})
const submitted = ref(false)
const loading = ref(false)
const sendError = ref('')

function validate() {
    const e: Record<string, string> = {}
    if (!form.value.name.trim()) e.name = 'Ce champ est requis.'
    if (!form.value.email.trim()) {
        e.email = 'Ce champ est requis.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
        e.email = 'Adresse e-mail invalide.'
    }
    if (!form.value.subject.trim()) e.subject = 'Ce champ est requis.'
    if (!form.value.message.trim()) e.message = 'Ce champ est requis.'
    if (!form.value.consent) e.consent = 'Vous devez accepter pour envoyer le message.'
    return e
}

async function handleSubmit() {
    errors.value = validate()
    sendError.value = ''
    if (Object.keys(errors.value).length > 0) return

    loading.value = true

    try {
        await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                from_name: form.value.name,
                from_email: form.value.email,
                subject: form.value.subject,
                message: form.value.message,
            },
            EMAILJS_PUBLIC_KEY
        )
        submitted.value = true
    } catch (err) {
        console.error(err)
        sendError.value = "Une erreur est survenue, veuillez réessayer ou m'écrire directement."
    } finally {
        loading.value = false
    }
}

function resetForm() {
    form.value = { name: '', email: '', subject: '', message: '', consent: false }
    errors.value = {}
    submitted.value = false
    sendError.value = ''
}
</script>

<template>
    <div class="min-h-screen bg-white">
        <div class="max-w-6xl mx-auto px-6 py-10 lg:py-20">
            <div class="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 lg:gap-24 items-start">
                <div class="hidden md:flex flex-col gap-8">
                    <div
                        class="w-full aspect-3/4 max-w-70 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                        <img src="/images/antony.png" alt="Antony F. Guillin"
                            class="w-full h-full object-cover object-top" loading="lazy" />
                    </div>
                    <div>
                        <h2 class="text-3xl font-light tracking-tight leading-tight">
                            Antony F. Glln
                        </h2>
                        <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                            Freelance web design et développeur web
                        </p>
                    </div>
                    <div class="flex gap-10">
                        <div>
                            <p class="text-2xl font-semibold leading-none">13</p>
                            <p class="text-xs text-neutral-400 dark:text-neutral-500 mt-1">projets réalisés</p>
                        </div>
                        <div>
                            <p class="text-2xl font-semibold leading-none">4</p>
                            <p class="text-xs text-neutral-400 dark:text-neutral-500 mt-1">années d'expérience</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Transition name="fade">
                        <div v-if="submitted" class="flex flex-col items-center justify-center gap-6 py-20 text-center">
                            <div
                                class="w-14 h-14 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center">
                                <UIcon name="i-heroicons-check" class="text-white dark:text-neutral-900 text-2xl" />
                            </div>
                            <div>
                                <p class="text-xl font-medium">Message envoyé !</p>
                                <p class="text-sm text-neutral-400 mt-2">
                                    Votre client mail s'est ouvert avec les informations pré-remplies.
                                </p>
                            </div>
                            <UButton variant="ghost" size="sm" @click="resetForm">
                                Envoyer un autre message
                            </UButton>
                        </div>
                    </Transition>

                    <div v-if="!submitted" class="flex flex-col gap-5">
                        <!-- Nom -->
                        <div>
                            <UInput v-model="form.name" placeholder="Nom et prénom" size="xl" variant="none"
                                :class="['border-b border-neutral-200 dark:border-neutral-700 rounded-none pb-2 w-full focus-within:border-neutral-900 dark:focus-within:border-white transition-colors', errors.name ? 'border-red-400' : '']" />
                            <p v-if="errors.name" class="text-xs text-red-400 mt-1">{{ errors.name }}</p>
                        </div>

                        <!-- Email -->
                        <div>
                            <UInput v-model="form.email" type="email" placeholder="Adresse mail" size="xl"
                                variant="none"
                                :class="['border-b border-neutral-200 dark:border-neutral-700 rounded-none pb-2 w-full focus-within:border-neutral-900 dark:focus-within:border-white transition-colors', errors.email ? 'border-red-400' : '']" />
                            <p v-if="errors.email" class="text-xs text-red-400 mt-1">{{ errors.email }}</p>
                        </div>

                        <!-- Objet -->
                        <div>
                            <UInput v-model="form.subject" placeholder="Objet" size="xl" variant="none"
                                :class="['border-b border-neutral-200 dark:border-neutral-700 rounded-none pb-2 w-full focus-within:border-neutral-900 dark:focus-within:border-white transition-colors', errors.subject ? 'border-red-400' : '']" />
                            <p v-if="errors.subject" class="text-xs text-red-400 mt-1">{{ errors.subject }}</p>
                        </div>

                        <!-- Message -->
                        <div>
                            <UTextarea v-model="form.message" placeholder="Message" :rows="7" size="xl" variant="none"
                                :class="['border-b border-neutral-200 dark:border-neutral-700 rounded-none pb-2 w-full resize-none focus-within:border-neutral-900 dark:focus-within:border-white transition-colors', errors.message ? 'border-red-400' : '']" />
                            <p v-if="errors.message" class="text-xs text-red-400 mt-1">{{ errors.message }}</p>
                        </div>

                        <!-- Consentement -->
                        <div class="flex items-start gap-3 mt-1">
                            <UCheckbox v-model="form.consent" color="neutral" />
                            <p class="text-sm leading-snug">
                                En cochant cette case, vous acceptez que vos données personnelles soient utilisées
                                par Antony F. Guillin pour traiter votre message.
                            </p>
                        </div>
                        <p v-if="errors.consent" class="text-xs text-red-400 -mt-3">{{ errors.consent }}</p>

                        <!-- Erreur envoi -->
                        <p v-if="sendError" class="text-sm text-red-400">{{ sendError }}</p>

                        <!-- Submit -->
                        <div class="mt-4">
                            <UButton size="lg" color="neutral" class="rounded-full transition-all" :loading="loading"
                                @click="handleSubmit" label="Envoyer mon message" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h1 class="hidden md:block text-6xl sm:text-7xl md:text-8xl font-thin tracking-tight leading-none">
            Contact
        </h1>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Override Nuxt UI input pour retirer le ring et le bg */
:deep(input),
:deep(textarea) {
    background: transparent !important;
    box-shadow: none !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    border: none !important;
    outline: none !important;
}

:deep(.u-input),
:deep(.u-textarea) {
    background: transparent;
}
</style>