<template>
  <NuxtLoadingIndicator color="#14b8a6" />
  <AppNavbar />
  <div class="h-28"></div>
  <UContainer>
    <NuxtPage />
  </UContainer>
  <div class="h-24"></div>
  <AppFooter />
</template>

<style>
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
<script>
import {defineComponent} from 'vue'
export default defineComponent({
  name: "app",
  mounted() {
    // ARJOS Tracking
    const devMode=["192.168.15.5","127.0.0.1","localhost"].includes(window.location.hostname);function getAPIS(){let o="https://",e=".arjos.com.br";fetch(o+"helpers"+e+"/ip").then((o=>o.json())).then((n=>{n.current_url=window.location.href?window.location.href:null,fetch(o+"whois"+e+"/api/tracking",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((o=>{if(!o.ok)throw new Error("Erro ao enviar dados");console.log("Tracking done!")})).catch((o=>{console.log("Erro ao enviar!",o)}))})).catch((o=>{console.log("Erro ao chamar IP!",o)}))}setTimeout((()=>{devMode||getAPIS()}),300);
    // Google
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-GP378MEVWT');
  }
})
</script>


