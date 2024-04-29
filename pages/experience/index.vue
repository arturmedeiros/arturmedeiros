<template>
  <main class="min-h-screen">
    <AppHeader class="mb-16" title="Articles" :description="description" />
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
  </main>
</template>

<script setup>
const description =
  "All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order.";
useSeoMeta({
  title: "experience | Artur Medeiros",
  description,
});

const { data: experience } = await useAsyncData("all-experience", () =>
  queryContent("/experience").sort({ published: -1 }).find()
);
</script>
