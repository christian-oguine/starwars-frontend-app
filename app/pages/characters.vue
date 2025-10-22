<template>
  <div class="min-h-screen w-full bg-[#0f1318] text-offwhite">
    <!-- Header -->
     <AppHeader />
    <section class="mx-auto w-full max-w-6xl px-6 pt-8 pb-4">
      <h1 class="font-cinzel text-3xl mb-2">Characters</h1>
      <p class="font-poppins text-white/70">Browse the roster.</p>
    </section>


  </div>
</template>

<script setup lang="ts">

  const {data, error} = await useFetch('https://akabab.github.io/starwars-api/api/all.json');

  console.log(data.value)
 
</script>
