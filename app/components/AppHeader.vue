<script setup lang="ts">
import { useMyTeamStore } from '~~/stores/team'
const team = useMyTeamStore()
onMounted(() => team.load())
</script>

<template>
  <header class="mx-auto w-full max-w-6xl px-6 py-4 flex items-center justify-between">
    <NuxtLink to="/" class="font-cinzel text-xl text-gold">StarWars</NuxtLink>

    <NuxtLink
      to="/team"
      class="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-white/10 hover:border-gold/60 font-poppins text-sm transition"
      title="Open My Team"
    >
      <Icon name="ph:users-three-duotone" class="w-4 h-4" />
      Team {{ team.size }}/{{ team.max }}
    </NuxtLink>
  </header>
</template>
