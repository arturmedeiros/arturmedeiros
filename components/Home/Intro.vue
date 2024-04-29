<template>
  <div class="space-y-6">
    <div style="display: flex;
                justify-content: center;">
      <NuxtImg src="/avatar.png" alt="Artur Medeiros"
               class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-24 w-24 sm:h-36 sm:w-36"
               sizes="120px sm:84px" placeholder format="webp" />
    </div>
    <div class="pb-4">
      <div style="display: flex;
                justify-content: center;">
        <h1 class="text-2xl pb-0 mb-0 font-black tracking-tight text-gray-800 dark:text-gray-100">
          Artur J. Medeiros
        </h1>
      </div>
      <div style="display: flex;
                justify-content: center;">
        <h2 style="font-size: 1rem;"
            class="font-thin tracking-tight text-gray-800 dark:text-gray-100">
          Software Developer
        </h2>
      </div>
      <div style="display: flex;
                justify-content: center;">
        <div class="" style="font-size: 1rem;">
          <div class="inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden">
            <ul class="block text-center leading-tight [&_li]:block animate-text-slide">
              <li class="text-indigo-500">#MobileApps</li>
              <li class="text-rose-500">#Frontend</li>
              <li class="text-yellow-500">#Backend</li>
              <li class="text-teal-500">#DevOps</li>
              <li class="text-pink-500">#WebDesign</li>
              <li class="text-sky-500">#FullStack</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <p class="text-gray-900 dark:text-gray-400">
      <span class="pr-1">👋 </span>Olá! Tudo bem? Sou desenvolvedor de software com mais de <span class="underline">10 anos de experiência</span>,
      apaixonado por tecnologia da informação e empreendedorismo. Com habilidades fullstack,
      meu foco está no desenvolvimento de aplicações web robustas, tanto no front-end quanto no back-end.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      Minha expertise inclui a criação de API's REST usando PHP e JavaScript, bem como a construção
      de interfaces envolventes com Vue.js, React e outras frameworks. Ao longo dos anos, contribuí
      para projetos de grande escala em empresas globais, bem como para startups em crescimento,
      sempre buscando aumentar a produtividade das equipes e entregar soluções de alta qualidade.
    </p>
<!--    <p class="text-gray-900 dark:text-gray-400">-->
<!--      Para saber mais sobre meu trabalho, confira meu-->
<!--      <a href="https://arturmedeiros.pages.dev" target="_blank" class="underline">portolio</a>-->
<!--      ou os meus perfis do <a href="https://arturmedeiros.pages.dev" target="_blank" class="underline">GitHub</a>-->
<!--      e <a href="https://arturmedeiros.pages.dev" target="_blank" class="underline">Linkedin</a>.-->
<!--      Visite também o site da minha empresa, a ARJOS! Estou pronto para enfrentar novos desafios e-->
<!--      contribuir para o sucesso do seu próximo projeto!-->
<!--    </p>-->
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Artur Medeiros",
  description:
    "Sou um desenvolvedor de software com mais de 10 anos de experiência apaixonado por tecnologia da informação e empreendedorismo. Com habilidades fullstack, meu foco está no desenvolvimento de aplicações web robustas, tanto no front-end quanto no back-end",
});
</script>

<style>
.animate-text-slide {
  animation: text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
}

@keyframes text-slide {
  0%,
  16% {
    transform: translateY(0%);
  }

  20%,
  36% {
    transform: translateY(-16.66%);
  }

  40%,
  56% {
    transform: translateY(-33.33%);
  }

  60%,
  76% {
    transform: translateY(-50%);
  }

  80%,
  96% {
    transform: translateY(-66.66%);
  }

  100% {
    transform: translateY(-83.33%);
  }
}
</style>