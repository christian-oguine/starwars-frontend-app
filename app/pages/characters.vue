<template>
  <div class="min-h-screen w-full bg-[#0f1318] text-offwhite">
    <!-- Header -->
     <AppHeader />

    <section class="mx-auto w-full max-w-6xl px-6 pt-8 pb-4">
      <h1 class="font-cinzel text-3xl mb-2">Characters</h1>
      <p class="font-poppins text-white/70">Browse the roster.</p>
    </section>

    <!-- SEARCH & FILTER FORM -->
    <section class="mx-auto w-full max-w-6xl px-6 pb-6">
      <div class="flex flex-col sm:flex-row gap-3">
        <!-- Search input -->
        <div class="flex-1">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search characters..."
            class="w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-offwhite placeholder:text-white/50 focus:border-gold focus:ring-2 focus:ring-gold/50 focus:outline-none transition font-poppins"
          />
        </div>

        <!-- Gender filter -->
        <div class="sm:w-48">
          <select
            v-model="genderFilter"
            class="w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-offwhite focus:border-gold focus:ring-2 focus:ring-gold/50 focus:outline-none transition font-poppins cursor-pointer"
          >
            <option value="all">All Genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <!-- Alignment filter -->
        <div class="sm:w-48">
          <select
            v-model="alignmentFilter"
            class="w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-offwhite focus:border-gold focus:ring-2 focus:ring-gold/50 focus:outline-none transition font-poppins cursor-pointer"
          >
            <option value="all">All Alignments</option>
            <option value="good">Good</option>
            <option value="evil">Evil</option>
          </select>
        </div>
      </div>

  
    </section>


  </div>
</template>


