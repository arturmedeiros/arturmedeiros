<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      EXPERIÊNCIA PROFISSIONAL
    </h2>
    <ul class="space-y-16">
      <li v-for="(xp, id) in experience" :key="id">
        <AppArticleCard :article="xp" />
      </li>
    </ul>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="All Articles &rarr;"
        to="/articles"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: experience } = await useAsyncData("experience-home", () =>
  queryContent("/experience")
    .sort({ published: -1 })
    .limit(3)
    .only(["title", "description", "published", "slug", "_path"])
    .find()
);
</script>
