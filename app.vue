<template>
  <NuxtLoadingIndicator color="#14b8a6" />
  <AppNavbar />
  <div class="h-28"></div>
  <UContainer>
    <NuxtPage />
  </UContainer>
  <div class="h-32"></div>
  <AppFooter />
</template>

<style>
@import "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap";

* {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}


@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.gradient-test {
  --size: 250px;
  --speed: 50s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

  width: var(--size);
  height: var(--size);
  filter: blur(calc(var(--size) / 5));
  background-image: linear-gradient(hsl(158, 82, 57, 85%), hsl(252, 82, 57));
  animation: rotate var(--speed) var(--easing) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

@media (min-width: 720px) {
  .gradient-test {
    --size: 500px;
  }
}

</style>
<script setup lang="ts">
</script>
