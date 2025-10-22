<template>
  <div class="min-h-screen w-full bg-[#0f1318] text-white flex flex-col fixed inset-0 text-offwhite overflow-hidden">
    <!-- header -->
    <AppHeader />

    <!-- hero -->
    <main class="flex-1">
      <section class="mx-auto w-full max-w-6xl px-6 pt-10 pb-12">
        <h1 class="font-cinzel text-[clamp(2rem,6vw,4rem)] leading-tight">
          Enter the <span class="text-gold">Galaxy</span><br />
          Build Your Legendary Squad
        </h1>

        <p class="mt-4 max-w-2xl text-white/80 font-poppins">
          Recruit up to five heroes and keep the dark side out.
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <NuxtLink
            to="/characters"
            class="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-gold text-black font-poppins hover:brightness-110 transition shadow-md">
            <Icon name="solar:users-group-rounded-bold" class="w-5 h-5" />
            Start Building Characters
          </NuxtLink>

          <NuxtLink
            to="/team"
            class="inline-flex items-center gap-2 rounded-xl px-6 py-3 border border-white/15 hover:border-gold/60 font-poppins transition">
            <Icon name="solar:shield-star-bold" class="w-5 h-5 text-gold" />
            View My Team
          </NuxtLink>
        </div>
      </section>

      <section class="mx-auto w-full max-w-6xl px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article class="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <h3 class="font-cinzel text-xl mb-1">Galaxy Roster</h3>
          <p class="text-sm text-white/80 font-poppins">Browse characters with images and quick stats.</p>
        </article>

        <article class="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <h3 class="font-cinzel text-xl mb-1">Assemble 5 Heroes</h3>
          <p class="text-sm text-white/80 font-poppins">Pick up to five members and manage them anywhere.</p>
        </article>

        <article class="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <h3 class="font-cinzel text-xl mb-1">Smart Rules</h3>
          <p class="text-sm text-white/80 font-poppins">Blocks Sith/Darth automatically while selecting.</p>
        </article>
      </section>
    </main>

    <footer class="w-full border-t border-white/10">
      <div class="mx-auto w-full max-w-6xl px-6 py-6 text-xs text-white/60 font-poppins">
        © {{ year }} Star Wars Team Builder — All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear()
</script>
