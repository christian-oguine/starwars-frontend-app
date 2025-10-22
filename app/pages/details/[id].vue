<template>
  <div class="min-h-screen w-full bg-[#0f1318] text-offwhite">
    <!-- Top bar -->
    <section class="mx-auto w-full max-w-6xl px-6 pt-8">
      <NuxtLink
        to="/characters"
        class="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-white/10 hover:border-gold/60 font-poppins text-sm transition"
      >
        <Icon name="solar:arrow-left-bold" class="w-4 h-4" />
        Back to Characters
      </NuxtLink>
    </section>

    <!-- States -->
    <section class="mx-auto w-full max-w-6xl px-6 py-10">
      <div v-if="pending" class="text-white/70 font-poppins">Loading…</div>

      <div v-else-if="error" class="text-red-300 font-poppins">
        Failed to load character. Please try again.
      </div>

      <div v-else-if="!character" class="text-center py-24">
        <h2 class="font-cinzel text-2xl mb-2">Character Not Found</h2>
        <p class="text-white/70 font-poppins">We couldn’t find what you’re looking for.</p>
      </div>

      <!-- Content -->
      <div
        v-else
        class="grid grid-cols-1 xl:grid-cols-[360px,1fr] gap-8 items-start"
      >
        <!-- LEFT: Portrait / summary -->
        <aside class="xl:sticky xl:top-8 h-fit">
          <div class="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04]">
            <div class="relative w-full aspect-[3/4] bg-white/5">
              <img
                :src="character.image || placeholder"
                :alt="character.name"
                class="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                @error="(e)=>(e.target as HTMLImageElement).src = placeholder"
              />
              <span
                v-if="isEvil(character)"
                class="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-red-500/15 border border-red-400/40 text-red-200 px-2.5 py-0.5 text-[12px] font-poppins"
              >
                <Icon name="ph:warning-octagon-duotone" class="w-4 h-4" />
                Evil
              </span>
            </div>
          </div>

          <!-- Quick facts under image -->
          <div class="mt-4 space-y-2 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div class="flex items-center gap-2 text-sm font-poppins">
              <Icon name="ph:user" class="w-4 h-4 text-gold" />
              <span class="text-white/70">Sex:</span>
              <span class="capitalize">{{ character.gender || '—' }}</span>
            </div>
            <div v-if="character.species" class="flex items-center gap-2 text-sm font-poppins">
              <Icon name="ph:plant-duotone" class="w-4 h-4 text-gold" />
              <span class="text-white/70">Species:</span>
              <span class="capitalize">{{ character.species }}</span>
            </div>
            <div v-if="character.homeworld" class="flex items-center gap-2 text-sm font-poppins">
              <Icon name="ph:globe-hemisphere-west-duotone" class="w-4 h-4 text-gold" />
              <span class="text-white/70">Homeworld:</span>
              <span class="capitalize">{{ character.homeworld }}</span>
            </div>
            <div class="pt-2 flex gap-2">
              <a
                v-if="character.wiki"
                :href="character.wiki"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-white/10 hover:border-gold/60 font-poppins text-sm transition"
              >
                <Icon name="ph:link-simple-duotone" class="w-4 h-4" />
                Wiki
              </a>
              <button
                class="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-poppins transition"
                :class="isEvil(character) ? 'border border-white/10 cursor-not-allowed opacity-50' : 'bg-gold text-black hover:brightness-110'"
                :disabled="isEvil(character)"
                title="Add to Team"
              >
                <Icon name="ph:user-plus-duotone" class="w-4 h-4" />
                Add
              </button>
            </div>
          </div>
        </aside>


      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

type Character = {
  id: number
  name: string
  image?: string
  gender?: string
  species?: string
  homeworld?: string
  height?: number | string | null
  mass?: number | string | null
  born?: string | number | null
  died?: string | number | null
  wiki?: string
  affiliations?: string[] | null
  masters?: string[] | null
}

const route = useRoute()
const id = computed(() => Number(route.params.id))

// Single-item endpoint
const { data, pending, error } = await useFetch<Character>(
  () => `https://akabab.github.io/starwars-api/api/id/${id.value}.json`,
  { key: () => `character-${id.value}`, default: () => null }
)

const character = computed(() => data.value ?? null)
const placeholder =
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop'

// Optional subtitle (species • homeworld)
const subtitle = computed(() => {
  const parts = [character.value?.species, character.value?.homeworld].filter(Boolean)
  return parts.length ? parts.join(' • ') : ''
})

// Simple “evil” rule
const isEvil = (c: Partial<Character>) => {
  const t = (s: any) => String(s || '').toLowerCase()
  return /(darth|sith)/.test(t(c.name)) ||
         /(darth|sith)/.test(t((c.affiliations || []).join(' '))) ||
         /(darth)/.test(t((c.masters || []).join(' ')))
}

const hasAffiliations = computed(
  () => Array.isArray(character.value?.affiliations) && character.value!.affiliations!.length > 0
)
const hasMasters = computed(
  () => Array.isArray(character.value?.masters) && character.value!.masters!.length > 0
)

// SEO
useHead(() => ({
  title: character.value ? `${character.value.name} • Details` : 'Character Details'
}))
</script>

<style scoped>
.stat-card { @apply rounded-2xl border border-white/10 bg-white/[0.04] p-4; }
.stat-label { @apply text-xs font-poppins text-white/60; }
.stat-value { @apply mt-1 text-lg font-cinzel; }

.panel { @apply rounded-2xl border border-white/10 bg-white/[0.04] p-5; }
.panel-title { @apply font-cinzel text-xl mb-2; }
.list { @apply space-y-1 text-sm font-poppins text-white/85 pl-1; }
</style>
