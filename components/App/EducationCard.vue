<template>
  <article class="pb-4">
    <h2 class="text-base font-bold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600">
      {{ education.course }}
    </h2>
    <p class="relative mt-0.5 mb-1 z-10 text-sm text-gray-600 dark:text-gray-400">
      {{ education.type }} <span class="px-1">•</span> {{ education.company }}
    </p>
    <time class="relative z-10 order-first mb-3 flex items-center text-xs text-gray-400 dark:text-gray-500 pl-3.5">
      <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
        <span class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"></span>
      </span>
      {{ education.period }}
      <br>
      <Datetime :start-date="education.date_start" :end-date="education.date_end"></Datetime>
    </time>
    <div>
    </div>
  </article>
</template>

<script setup>
import Datetime from "~/components/Home/Datetime.vue";
import BtnHacker from "~/components/App/BtnHacker.vue";

defineProps({
  education: {
    type: Object,
    required: true,
  },
});
</script>
