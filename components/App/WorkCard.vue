<template>
  <article class="pb-4">
    <h2 class="text-base font-bold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600">
      {{ work.function }}
    </h2>
    <p class="relative mt-0.5 mb-1 z-10 text-sm text-gray-600 dark:text-gray-400">
      {{ work.company }}
    </p>
    <time class="relative z-10 order-first mb-3 flex items-center text-xs text-gray-400 dark:text-gray-500 pl-3.5">
      <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
        <span class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"></span>
      </span>
      {{ work.period }}
      <br>
      <Datetime :start-date="work.date_start" :end-date="work.date_end" :text="true"></Datetime>
    </time>
    <p class="relative z-10 mt-1 text-sm text-gray-600 dark:text-gray-400">
      {{ work.description }}
    </p>
  </article>
</template>

<script setup>
import Datetime from "~/components/Home/Datetime.vue";

defineProps({
  work: {
    type: Object,
    required: true,
  },
});
</script>
