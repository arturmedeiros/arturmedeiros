<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ButtonsDownload"
})
</script>

<template>
  <div class="pt-1 flex justify-center">
    <NuxtLink
        to="https://arturmedeiros.pages.dev/curriculo/CV_Artur_2024.pdf"
        target="_blank"
        external
    >
      <HackerButton class="pb-0" label='Currículo 🇵🇹' ></HackerButton>
    </NuxtLink>
    <NuxtLink
        to="https://arturmedeiros.pages.dev/curriculo/CV_BR_Artur_2024.pdf"
        target="_blank"
        external
    >
      <HackerButton class="pb-0" label='Currículo 🇧🇷' ></HackerButton>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>