<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      EXPERIÊNCIA PROFISSIONAL
    </h2>
    <div class="space-y-4">
      <AppWorkCard
        v-for="(work, id) in works"
        :key="id"
        :work="work"
      />
    </div>
    <NuxtLink
      to="/"
      target="_blank"
      external
    >
      <HackerButton class="pb-0" label='Baixar currículo' ></HackerButton>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const { data: works } = await useAsyncData("works-home", () =>
  queryContent("/works").find()
);
</script>
