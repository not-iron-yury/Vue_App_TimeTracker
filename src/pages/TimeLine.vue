<script setup>
import TimeLineItem from '../components/TimeLineItem.vue';
import { HOURS_IN_DAY } from './../constants';

const props = defineProps({
  timeLines: {
    type: Array,
    required: true,
    validator: timeLines => {
      return timeLines.every(({ hour }) => typeof hour === 'number' && hour < HOURS_IN_DAY && hour > -1);
    },
  },
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
