<template>
  <div class="min-h-screen w-full bg-[#0f1318] text-offwhite">
    <!-- Header -->
    <AppHeader />
    
    <section class="mx-auto w-full max-w-6xl px-6 pt-8 pb-4">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="font-cinzel text-3xl mb-2">My Team</h1>
          <p class="font-poppins text-white/70">
            {{ teamStore.size }} / {{ teamStore.max }} members
          </p>
        </div>
        
        <button
          v-if="teamStore.size > 0"
          @click="clearTeam"
          class="px-4 py-2 rounded-lg border border-red-400/30 text-red-300 font-poppins text-sm hover:bg-red-500/10 transition"
        >
          Clear All
        </button>
      </div>
    </section>

    <!-- Team Grid -->
    <section class="mx-auto w-full max-w-6xl px-6 pb-10">
      <!-- Empty State -->
      <div v-if="teamStore.size === 0" class="text-center py-24">
        <Icon name="ph:users-duotone" class="w-16 h-16 text-white/30 mx-auto mb-4" />
        <h2 class="font-cinzel text-2xl mb-2">No team members yet</h2>
        <p class="text-white/70 font-poppins mb-6">Browse characters and add them to your team!</p>
        <NuxtLink
          to="/characters"
          class="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[#0f1318] font-poppins font-semibold rounded-xl hover:brightness-110 transition"
        >
          Browse Characters
        </NuxtLink>
      </div>

      <!-- Team Members -->
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
      >
        <article
          v-for="member in teamStore.members"
          :key="member.id"
          class="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden hover:shadow-lg transition"
        >
          <img
            :src="member.image || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop'"
            :alt="member.name"
            class="w-full h-48 object-cover"
            loading="lazy"
          />
          <div class="p-4">
            <h2 class="font-cinzel text-lg mb-1 line-clamp-1">{{ member.name }}</h2>
            <p class="font-poppins text-sm text-white/70 capitalize">
              {{ member.gender || '—' }}
            </p>
          </div>

          <footer class="bg-white/[0.04] border-t border-white/10 flex">
            <NuxtLink
              :to="`/details/${member.id}`"
              class="flex-1 text-center text-sm text-gold font-poppins py-3 hover:bg-white/10 transition"
            >
              View
            </NuxtLink>
            <button
              @click="teamStore.removeFromTeam(member.id)"
              class="flex-1 text-center text-sm text-red-300 font-poppins py-3 hover:bg-white/10 transition border-l border-white/10"
            >
              Remove
            </button>
          </footer>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useMyTeamStore } from '~~/stores/team'

const teamStore = useMyTeamStore()

// Load team from localStorage on mount
onMounted(() => {
  teamStore.load()
})

function clearTeam() {
  if (confirm('Are you sure you want to clear your entire team?')) {
    teamStore.clear()
  }
}
</script>