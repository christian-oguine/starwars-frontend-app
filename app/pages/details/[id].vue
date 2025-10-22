<template>
  <div class="min-h-screen w-full bg-[#0f1318] text-white flex flex-col fixed inset-0 text-offwhite overflow-hidden">
    <!-- Top bar -->
    <section class="mx-auto w-full max-w-6xl px-6 pt-8">
      <div class="flex items-center justify-between gap-3">
        <NuxtLink
          to="/characters"
          class="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-white/10 hover:border-gold/60 font-poppins text-sm transition"
        >
          <Icon name="solar:arrow-left-bold" class="w-4 h-4" />
          Back to Characters
        </NuxtLink>

        <!-- Prev / Next -->
        <div class="hidden sm:flex items-center gap-2">
          <NuxtLink
            v-if="prevId"
            :to="`/details/${prevId}`"
            class="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-white/10 hover:border-gold/60 font-poppins text-sm transition"
          >
            <Icon name="ph:arrow-left" class="h-4 w-4" /> Prev
          </NuxtLink>
          <NuxtLink
            v-if="nextId"
            :to="`/details/${nextId}`"
            class="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-white/10 hover:border-gold/60 font-poppins text-sm transition"
          >
            Next <Icon name="ph:arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- States -->
    <section class="mx-auto w-full max-w-6xl px-6 py-10">
      <div v-if="pending" class="text-white/70 font-poppins">Loading…</div>
      <div v-else-if="error" class="text-red-300 font-poppins">Failed to load character. Please try again.</div>
      <div v-else-if="!character" class="text-center py-24">
        <h2 class="font-cinzel text-2xl mb-2">Character Not Found</h2>
        <p class="text-white/70 font-poppins">This ID doesn’t exist.</p>
      </div>

      <!-- Content -->
      <div v-else class="grid grid-cols-1 xl:grid-cols-[360px,1fr] gap-8 items-start">
        <!-- LEFT: Portrait + quick facts + team toggle -->
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

          <!-- Quick facts -->
          <div class="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div class="space-y-2">
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
            </div>

            <div class="mt-4 flex flex-wrap gap-2">
              <a
                v-if="character.wiki"
                :href="character.wiki"
                target="_blank" rel="noopener"
                class="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-white/10 hover:border-gold/60 font-poppins text-sm transition"
              >
                <Icon name="ph:link-simple-duotone" class="w-4 h-4" />
                Wiki
              </a>

              <button
                class="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-poppins transition"
                :class="isInTeam ? 'border border-white/10 hover:bg-white/10' : 'bg-gold text-black hover:brightness-110'"
                @click="toggleTeam()"
                :title="isInTeam ? 'Remove from Team' : 'Add to Team'"
              >
                <Icon :name="isInTeam ? 'ph:user-minus-duotone' : 'ph:user-plus-duotone'" class="w-4 h-4" />
                {{ isInTeam ? 'Remove' : 'Add' }}
              </button>
            </div>
          </div>
        </aside>

        <!-- RIGHT: Details -->
        <main class="space-y-6">
          <!-- Title block -->
          <header class="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <h1 class="font-cinzel text-3xl leading-tight">{{ character.name }}</h1>
            <p v-if="subtitle" class="mt-1 text-sm text-white/60 font-poppins">{{ subtitle }}</p>
          </header>

          <!-- Stats -->
          <section class="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div class="stat-card">
              <p class="stat-label"><Icon name="ph:ruler-duotone" class="mr-1 inline h-4 w-4" /> Height</p>
              <p class="stat-value">{{ character.height ?? '—' }}</p>
            </div>
            <div class="stat-card">
              <p class="stat-label"><Icon name="ph:scales-duotone" class="mr-1 inline h-4 w-4" /> Mass</p>
              <p class="stat-value">{{ character.mass ?? '—' }}</p>
            </div>
            <div class="stat-card">
              <p class="stat-label"><Icon name="ph:baby-duotone" class="mr-1 inline h-4 w-4" /> Born</p>
              <p class="stat-value">{{ character.born ?? '—' }}</p>
            </div>
            <div class="stat-card">
              <p class="stat-label"><Icon name="ph:skull-duotone" class="mr-1 inline h-4 w-4" /> Died</p>
              <p class="stat-value">{{ character.died ?? '—' }}</p>
            </div>
            <div class="stat-card">
              <p class="stat-label"><Icon name="ph:map-pin-line-duotone" class="mr-1 inline h-4 w-4" /> Born at</p>
              <p class="stat-value">{{ character.bornLocation || '—' }}</p>
            </div>
          </section>

          <!-- More facts -->
          <section class="panel">
            <h3 class="panel-title">
              <Icon name="ph:list-bullets-duotone" class="mr-2 inline h-5 w-5 text-gold" />
              Facts
            </h3>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm font-poppins">
              <div class="fact"><span class="label">Died at:</span> <span>{{ character.diedLocation || '—' }}</span></div>
              <div class="fact"><span class="label">Eye color:</span> <span class="capitalize">{{ character.eyeColor || '—' }}</span></div>
              <div class="fact"><span class="label">Hair color:</span> <span class="capitalize">{{ character.hairColor || '—' }}</span></div>
              <div class="fact"><span class="label">Skin color:</span> <span class="capitalize">{{ character.skinColor || '—' }}</span></div>
              <div class="fact"><span class="label">Cybernetics:</span> <span>{{ character.cybernetics || '—' }}</span></div>
            </div>
          </section>

          <!-- Affiliations / Masters / Apprentices -->
          <section class="grid md:grid-cols-2 gap-4">
            <div v-if="hasAffiliations" class="panel">
              <h3 class="panel-title">
                <Icon name="ph:users-three-duotone" class="mr-2 inline h-5 w-5 text-gold" />
                Affiliations
              </h3>
              <ul class="list">
                <li v-for="(a,i) in character.affiliations" :key="i">{{ a }}</li>
              </ul>
            </div>

            <div v-if="hasMasters" class="panel">
              <h3 class="panel-title">
                <Icon name="ph:sword-duotone" class="mr-2 inline h-5 w-5 text-gold" />
                Masters
              </h3>
              <ul class="list">
                <li v-for="(m,i) in character.masters" :key="i">{{ m }}</li>
              </ul>
            </div>

            <div v-if="hasApprentices" class="panel md:col-span-2">
              <h3 class="panel-title">
                <Icon name="ph:graduation-cap-duotone" class="mr-2 inline h-5 w-5 text-gold" />
                Apprentices
              </h3>
              <ul class="list">
                <li v-for="(p,i) in character.apprentices" :key="i">{{ p }}</li>
              </ul>
            </div>
          </section>

          <!-- Bottom Prev/Next for mobile -->
          <div class="sm:hidden flex items-center justify-between">
            <NuxtLink
              v-if="prevId"
              :to="`/details/${prevId}`"
              class="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-white/10 hover:border-gold/60 font-poppins text-sm transition"
            >
              <Icon name="ph:arrow-left" class="h-4 w-4" /> Prev
            </NuxtLink>
            <NuxtLink
              v-if="nextId"
              :to="`/details/${nextId}`"
              class="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-white/10 hover:border-gold/60 font-poppins text-sm transition"
            >
              Next <Icon name="ph:arrow-right" class="h-4 w-4" />
            </NuxtLink>
          </div>
        </main>
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
  bornLocation?: string | null
  diedLocation?: string | null
  eyeColor?: string | null
  hairColor?: string | null
  skinColor?: string | null
  cybernetics?: string | null
  wiki?: string
  affiliations?: string[] | null
  masters?: string[] | null
  apprentices?: string[] | null
}

const route = useRoute()
const id = computed(() => Number(route.params.id))

// single character
const { data, pending, error } = await useFetch<Character>(
  () => `https://akabab.github.io/starwars-api/api/id/${id.value}.json`,
  { key: () => `character-${id.value}`, default: () => null }
)
const character = computed(() => data.value ?? null)

// fetch all ids (for prev/next). Cache with a stable key.
const { data: allList } = await useFetch<any[]>(
  'https://akabab.github.io/starwars-api/api/all.json',
  { default: () => [], key: 'sw-all' }
)
const ids = computed<number[]>(() => (allList.value || []).map((x: any) => x.id).sort((a,b)=>a-b))
const idx = computed(() => ids.value.findIndex(x => x === id.value))
const prevId = computed(() => (idx.value > 0 ? ids.value[idx.value - 1] : null))
const nextId = computed(() => (idx.value >= 0 && idx.value < ids.value.length - 1 ? ids.value[idx.value + 1] : null))

// team (persisted)
const team = useState<number[]>('team', () => {
  if (process.client) {
    try { return JSON.parse(localStorage.getItem('team') || '[]') } catch { return [] }
  }
  return []
})
watch(team, (val) => { if (process.client) localStorage.setItem('team', JSON.stringify(val)) }, { deep: true })

const isInTeam = computed(() => team.value.includes(id.value))
function toggleTeam() {
  const arr = team.value
  const i = arr.indexOf(id.value)
  if (i >= 0) arr.splice(i, 1)
  else arr.push(id.value)
}

// helpers
const placeholder =
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop'

const subtitle = computed(() => {
  const parts = [character.value?.species, character.value?.homeworld].filter(Boolean)
  return parts.length ? parts.join(' • ') : ''
})

const isEvil = (c: Partial<Character>) => {
  const t = (s: any) => String(s || '').toLowerCase()
  return /(darth|sith|first order|empire)/.test(t(c.name)) ||
         /(darth|sith|first order|empire)/.test(t((c.affiliations || []).join(' '))) ||
         /(darth)/.test(t((c.masters || []).join(' ')))
}

const hasAffiliations = computed(() => Array.isArray(character.value?.affiliations) && character.value!.affiliations!.length > 0)
const hasMasters = computed(() => Array.isArray(character.value?.masters) && character.value!.masters!.length > 0)
const hasApprentices = computed(() => Array.isArray(character.value?.apprentices) && character.value!.apprentices!.length > 0)

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
.fact { @apply flex gap-2; }
.fact .label { @apply text-white/60; }
</style>
