<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Datetime",
  props: [
    'startDate',
    'endDate',
    'text'
  ],
  methods: {
    calcularMesesPassados(startDate, endDate) {
      console.log('CONSOLE:', startDate, endDate);
      let dataInicial = new Date(startDate);
      let dataFinal = endDate ? new Date(endDate) : new Date();

      let diferencaAnos = dataFinal.getFullYear() - dataInicial.getFullYear();
      let diferencaMeses = dataFinal.getMonth() - dataInicial.getMonth();
      let diferencaDias = dataFinal.getDate() - dataInicial.getDate();

      console.log('diferencaAnos antes do ajuste:', diferencaAnos);
      console.log('diferencaMeses antes do ajuste:', diferencaMeses);
      console.log('diferencaDias:', diferencaDias);

      // Verificar se a data final ocorre antes da data inicial no mesmo ano
      if (diferencaMeses < 0 || (diferencaMeses === 0 && diferencaDias < 0)) {
        diferencaAnos--;
      }

      console.log('diferencaAnos após o ajuste:', diferencaAnos);

      // Ajustar diferencaMeses se for negativo
      if (diferencaMeses < 0) {
        diferencaMeses += 12;
      }

      console.log('diferencaMeses após o ajuste:', diferencaMeses);

      if (diferencaDias < 0) {
        diferencaMeses--;
        let ultimoDiaMesAnterior = new Date(dataFinal.getFullYear(), dataFinal.getMonth(), 0).getDate();
        diferencaDias += ultimoDiaMesAnterior;
      }

      let totalMeses = (diferencaAnos * 12) + diferencaMeses;

      return totalMeses <= 0 ? 0 : totalMeses;
    },

    formatarTempo(meses) {
      let anos = Math.floor(meses / 12);
      let mesesRestantes = meses % 12;

      if (anos === 0 && mesesRestantes === 0) {
        return "Menos de um mês";
      }

      let resultado = "";
      if (anos > 0) {
        resultado += anos === 1 ? "1 ano" : anos + " anos";
        if (mesesRestantes > 0) {
          resultado += " e ";
        }
      }
      if (mesesRestantes > 0) {
        resultado += mesesRestantes === 1 ? "1 mês" : mesesRestantes + " meses";
      }
      return resultado;
    },
    getResultDatetime(startDate, endDate) {
      if (!endDate) {
        endDate = new Date(); // Utiliza a data atual se endDate for null
      }
      let dataPassada = new Date(startDate); // Data passada (exemplo: 2022-01-15)
      let mesesPassados = this.calcularMesesPassados(dataPassada, endDate);
      let resultadoFormatado = this.formatarTempo(mesesPassados);
      return resultadoFormatado;
    },
    formatarData(data) {
      const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
      ];

      const partes = data.split('/');
      const mesNumero = parseInt(partes[1], 10);
      const mesNome = meses[mesNumero - 1]; // Arrays em JavaScript são baseados em zero

      return mesNome + " de " + partes[0];
    }
  }
});
</script>

<template>
<div>
  <slot name="icon"/>
  {{`${ startDate ? formatarData(startDate) : '' } até ` + `${ endDate ? formatarData(endDate) : 'Hoje' }` }}
  <span v-if="text" class="px-1">•</span>
  {{ text ? getResultDatetime(startDate, endDate) : '' }}
</div>
</template>

<style scoped>

</style>