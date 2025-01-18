<script setup>
import TimeLineItem from '../components/layout/TimeLineItem.vue';

const props = defineProps({
  timeLines: Array,
  required: true,
});
</script>

<template>
  <section>
    <h1 class="mb-10 text-xl font-semibold text-center text-blue-900">Таймеры</h1>
    <ul>
      <time-line-item v-for="timeLineData in timeLines" :key="timeLineData['hour']" :timeLineData="timeLineData" />
    </ul>
  </section>
</template>
