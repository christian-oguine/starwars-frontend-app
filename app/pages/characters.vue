<template>
  <div class="min-h-screen w-full bg-[#0f1318] text-offwhite">
    <!-- Header -->
     <AppHeader />
    <section class="mx-auto w-full max-w-6xl px-6 pt-8 pb-4">
      <h1 class="font-cinzel text-3xl mb-2">Characters</h1>
      <p class="font-poppins text-white/70">Browse the roster.</p>
    </section>

  <!-- GRID -->
  <section class="mx-auto w-full max-w-6xl px-6 pb-10">
    <!-- error state -->
    <p v-if="error" class="text-red-300 font-poppins">
      Failed to load characters. Please try again.
    </p>

    <!-- grid -->
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <article
        v-for="c in (data || [])"
        :key="c.id"
        class="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden hover:shadow-lg transition"
      >
        <img
          :src="c.image || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop'"
          :alt="c.name"
          class="w-full h-48 object-cover"
          loading="lazy"
        />
        <div class="p-4">
          <h2 class="font-cinzel text-lg mb-1 line-clamp-1">{{ c.name }}</h2>
          <p class="font-poppins text-sm text-white/70">
            Gender: {{ c.gender || '—' }}
          </p>
        </div>

        <footer class="bg-white/[0.04] border-t border-white/10">
          <NuxtLink
            :to="`/details/${c.id}`"
            class="block text-center text-sm text-gold font-poppins py-3 hover:bg-white/10 transition"
          >
            View Details
          </NuxtLink>
        </footer>
      </article>
    </div>
  </section>




  </div>
</template>

<script setup lang="ts">

  const {data, error} = await useFetch('https://akabab.github.io/starwars-api/api/all.json');

  console.log(data.value)
 
</script>
