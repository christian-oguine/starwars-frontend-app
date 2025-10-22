<template>
  <div class="min-h-screen w-full bg-[#0f1318] text-offwhite">
    <!-- Header -->
     <AppHeader />
    <section class="mx-auto w-full max-w-6xl px-6 pt-8 pb-4">
      <h1 class="font-cinzel text-3xl mb-2">Characters</h1>
      <p class="font-poppins text-white/70">Browse the roster.</p>
    </section>

    <!-- Search Bar -->
    <section class="mx-auto w-full max-w-6xl px-6 pb-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search characters by name..."
        class="w-full p-2 border border-white/10 rounded-lg bg-transparent text-white"
        @keyup.enter="handleCharacterSearch"
      />
      <button
        @click="handleCharacterSearch"
        class="mt-2 px-4 py-2 bg-gold text-black rounded-lg font-poppins hover:brightness-110 transition"
      >
        Search
      </button>
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
        v-for="c in paginatedCharacters"
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

    <!-- Pagination -->
    <div v-if="!error && totalPages > 1" class="mt-10 flex items-center justify-center gap-2">
      <!-- Previous Button -->
      <button
        @click="currentPage--"
        :disabled="currentPage === 1"
        class="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 font-poppins text-sm
               hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Previous
      </button>

      <!-- Page Numbers -->
      <button
        v-for="page in displayedPages"
        :key="page"
        @click="currentPage = page"
        :class="[
          'px-4 py-2 rounded-lg border font-poppins text-sm transition',
          currentPage === page
            ? 'bg-gold text-[#0f1318] border-gold font-semibold'
            : 'bg-white/[0.04] border-white/10 hover:bg-white/10'
        ]"
      >
        {{ page }}
      </button>

      <!-- Next Button -->
      <button
        @click="currentPage++"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 font-poppins text-sm
               hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Next
      </button>
    </div>
  </section>
  </div>
</template>

<script setup lang="ts">
  const {data, error} = await useFetch('https://akabab.github.io/starwars-api/api/all.json');

  // Search state
  const searchQuery = ref('');
  
  // Pagination state
  const currentPage = ref(1);
  const itemsPerPage = 12;

  // Filtered characters (computed - doesn't mutate original data)
  const filteredCharacters = computed(() => {
    if (!data.value) return [];
    
    const query = searchQuery.value.trim().toLowerCase();
    if (query === '') return data.value;

    return data.value.filter((character: any) =>
      character.name.toLowerCase().includes(query)
    );
  });

  // Handle search button click
  const handleCharacterSearch = () => {
    currentPage.value = 1; // Reset to first page on search
  };

  // Watch for empty search to reset page
  watch(searchQuery, (newValue) => {
    if (newValue.trim() === '') {
      currentPage.value = 1;
    }
  });

  // Computed properties
  const totalPages = computed(() => {
    return Math.ceil(filteredCharacters.value.length / itemsPerPage);
  });

  const paginatedCharacters = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredCharacters.value.slice(start, end);
  });

  const displayedPages = computed(() => {
    const pages = [];
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage.value - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages.value, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  });
</script>