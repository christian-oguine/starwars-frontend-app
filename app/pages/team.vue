<template>
  <div class="min-h-screen w-full bg-[#0b0f15] text-offwhite relative overflow-x-hidden">
    <!-- STARFIELD BACKDROP -->
  

    <!-- TOP NAV / COUNTER -->
    <AppHeader />

    <!-- HERO -->
    <section class="relative mx-auto w-full max-w-6xl px-6 pt-8">
      <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6">
        <!-- holographic grid -->
        <div class="pointer-events-none absolute inset-0 opacity-[0.08]"
             style="background-image:linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px);background-size:28px 28px;">
        </div>

        <div class="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 class="font-cinzel text-3xl sm:text-4xl tracking-wide">Strike Team</h1>
            <p class="font-poppins text-white/70 mt-1">Assemble 5 heroes and prepare for deployment.</p>
          </div>

          <!-- Readiness -->
          <div class="w-full sm:w-80">
            <div class="flex items-center justify-between text-xs font-poppins text-white/70 mb-1">
              <span>Battle Readiness</span>
              <span>{{ teamStore.size }} / {{ teamStore.max }}</span>
            </div>
            <div class="h-2 rounded-full bg-white/[0.07] overflow-hidden">
              <div
                class="h-full transition-all duration-500"
                :class="teamStore.size === teamStore.max ? 'bg-emerald-400' : 'bg-amber-400'"
                :style="{ width: `${Math.min(100, (teamStore.size / teamStore.max) * 100)}%` }"
              />
            </div>

            <div class="mt-3 flex gap-2">
              <NuxtLink
                to="/characters"
                class="inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-gold text-black font-poppins text-sm hover:brightness-110 transition"
              >
                <Icon name="ph:user-plus-duotone" class="w-4 h-4" />
                Add More
              </NuxtLink>

              <button
                class="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-white/10 text-sm font-poppins hover:border-gold/60 transition"
                :disabled="teamStore.size === 0"
                :class="teamStore.size === 0 ? 'opacity-50 cursor-not-allowed' : ''"
                @click="clearTeam"
              >
                <Icon name="ph:broom-duotone" class="w-4 h-4" />
                Clear All
              </button>

              <button
                class="ml-auto inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-poppins transition
                       border border-white/10 hover:border-emerald-400/60"
                :class="teamStore.size === teamStore.max ? 'bg-emerald-400/20 text-emerald-200' : 'opacity-50 cursor-not-allowed'"
                :disabled="teamStore.size !== teamStore.max"
                title="Launch is enabled at 5/5"
              >
                <Icon name="ph:rocket-launch-duotone" class="w-4 h-4" />
                Launch Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FORMATION -->
    <section class="mx-auto w-full max-w-6xl px-6 py-8">
      <h2 class="font-cinzel text-xl mb-4 tracking-wide">Formation</h2>

      <!-- Five slots -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div
          v-for="(slot, i) in slots"
          :key="i"
          class="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition"
        >
          <!-- slot label -->
          <div class="absolute left-3 top-3 z-10 text-[11px] font-poppins tracking-wider uppercase rounded-full px-2 py-0.5
                      bg-white/10 border border-white/20 text-white/80">
            {{ slotNames[i] }}
          </div>

          <!-- filled card -->
          <template v-if="slot">
            <div class="relative">
              <img
                :src="slot.image || placeholder"
                :alt="slot.name"
                class="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
              <!-- glow -->
              <div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition
                          bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            <div class="p-4">
              <h3 class="font-cinzel text-lg leading-tight line-clamp-1">{{ slot.name }}</h3>
              <p class="mt-0.5 text-xs font-poppins text-white/70 capitalize">{{ slot.gender || '—' }}</p>

              <div class="mt-4 flex items-center gap-2">
                <NuxtLink
                  :to="`/details/${slot.id}`"
                  class="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-poppins
                         border border-white/10 hover:border-gold/60 transition"
                >
                  <Icon name="ph:eye-duotone" class="w-4 h-4" />
                  View
                </NuxtLink>

                <button
                  class="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-poppins
                         border border-red-400/40 text-red-300 hover:bg-red-500/10 transition"
                  @click="teamStore.removeFromTeam(slot.id)"
                >
                  <Icon name="ph:user-minus-duotone" class="w-4 h-4" />
                  Recall
                </button>
              </div>
            </div>
          </template>

          <!-- empty slot -->
          <template v-else>
            <div class="flex h-full min-h-[320px] flex-col items-center justify-center p-6">
              <Icon name="ph:shield-duotone" class="w-10 h-10 text-white/30 mb-3" />
              <p class="font-cinzel text-lg mb-1">Empty Slot</p>
              <p class="text-white/60 text-sm font-poppins mb-4 text-center">
                Deploy a warrior to this position.
              </p>
              <NuxtLink
                to="/characters"
                class="inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-gold text-black font-poppins text-sm
                       hover:brightness-110 transition"
              >
                <Icon name="ph:user-plus-duotone" class="w-4 h-4" />
                Deploy
              </NuxtLink>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- EMPTY STATE (if no members anywhere, overwrites formation with big call-to-action) -->
    <section v-if="teamStore.size === 0" class="mx-auto w-full max-w-6xl px-6 pb-16">
      <div class="text-center mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-10">
        <Icon name="ph:users-duotone" class="w-16 h-16 text-white/30 mx-auto mb-4" />
        <h2 class="font-cinzel text-2xl mb-2">No team members yet</h2>
        <p class="text-white/70 font-poppins mb-6">Browse characters and add them to your team.</p>
        <NuxtLink
          to="/characters"
          class="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[#0f1318] font-poppins font-semibold rounded-xl hover:brightness-110 transition"
        >
          <Icon name="ph:users-three-duotone" class="w-5 h-5" />
          Browse Characters
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useMyTeamStore } from '~~/stores/team'

const teamStore = useMyTeamStore()
onMounted(() => teamStore.load())

const placeholder =
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop'

// map members into 5 fixed slots (Alpha..Echo)
const slotNames = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo']
const slots = computed(() => {
  const filled = [...teamStore.members]
  while (filled.length < teamStore.max) filled.push(null as any)
  return filled.slice(0, teamStore.max)
})

function clearTeam() {
  if (confirm('Clear your entire squad?')) teamStore.clear()
}
</script>

<style scoped>
/* small cinematic polish */
</style>
