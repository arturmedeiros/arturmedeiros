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
      <ButtonsDownload v-if="false"/>
      <NuxtLink
          to="mailto:hello@arjos.eu"
          target="_blank"
          external
      >
        <HackerButton class="pb-0" label='📧 hello@arjos.eu' ></HackerButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonsDownload from "~/components/App/ButtonsDownload.vue";

const { data: education } = await useAsyncData("education-home", () =>
  queryContent("/education").find()
);
</script>
