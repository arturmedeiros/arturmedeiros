<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      FORMAÇÃO ACADÊMICA
    </h2>
    <div class="space-y-4">
      <AppEducationCard
        v-for="(course, id) in education"
        :key="id"
        :education="course"
      />
      <NuxtLink
        to="/"
        target="_blank"
        external
      >
        <HackerButton class="pb-0" label='Baixar currículo' ></HackerButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: education } = await useAsyncData("education-home", () =>
  queryContent("/education").find()
);
</script>
