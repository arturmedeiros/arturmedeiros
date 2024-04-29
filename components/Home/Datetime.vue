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
    calculateMonthsPassed(startDate, endDate) {
      let initialDate = new Date(startDate);
      let finalDate = endDate ? new Date(endDate) : new Date();

      let yearDifference = finalDate.getFullYear() - initialDate.getFullYear();
      let monthDifference = finalDate.getMonth() - initialDate.getMonth();
      let dayDifference = finalDate.getDate() - initialDate.getDate();

      if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        yearDifference--;
      }

      if (monthDifference < 0) {
        monthDifference += 12;
      }

      if (dayDifference < 0) {
        monthDifference--;
        let lastDayOfPreviousMonth = new Date(finalDate.getFullYear(), finalDate.getMonth(), 0).getDate();
        dayDifference += lastDayOfPreviousMonth;
      }

      let totalMonths = (yearDifference * 12) + monthDifference;

      return totalMonths <= 0 ? 0 : totalMonths;
    },
    formatTime(months) {
      let years = Math.floor(months / 12);
      let remainingMonths = months % 12;

      if (years === 0 && remainingMonths === 0) {
        return "Menos de um mês";
      }

      let result = "";
      if (years > 0) {
        result += years === 1 ? "1 ano" : years + " anos";
        if (remainingMonths > 0) {
          result += " e ";
        }
      }
      if (remainingMonths > 0) {
        result += remainingMonths === 1 ? "1 mês" : remainingMonths + " meses";
      }
      return result;
    },
    getResultDatetime(startDate, endDate) {
      if (!endDate) {
        endDate = new Date();
      }
      let pastDate = new Date(startDate); // Past date (example: 2022-01-15)
      let passedMonths = this.calculateMonthsPassed(pastDate, endDate);
      let formattedResult = this.formatTime(passedMonths);
      return formattedResult;
    },
    formatDate(date) {
      const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
      ];

      const parts = date.split('/');
      const monthNumber = parseInt(parts[1], 10);
      const monthName = months[monthNumber - 1];

      return monthName + " de " + parts[0];
    }
  }
});
</script>

<template>
<div>
  <slot name="icon"/>
  {{`${ startDate ? formatDate(startDate) : '' } até ` + `${ endDate ? formatDate(endDate) : 'Hoje' }` }}
  <span v-if="text" class="px-1">•</span>
  {{ text ? getResultDatetime(startDate, endDate) : '' }}
</div>
</template>

<style scoped>

</style>