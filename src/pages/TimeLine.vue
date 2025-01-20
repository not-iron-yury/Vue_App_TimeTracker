<script setup>
import TimeLineItem from '../components/TimeLineItem.vue';
import { isTimeLinesValid, isOptionValid } from './../validators';

const props = defineProps({
  timeLines: {
    type: Array,
    required: true,
    validator: isTimeLinesValid,
  },
  taskListOption: {
    type: Array,
    required: true,
    validator: isOptionValid,
  },
});
</script>

<template>
  <section>
    <h1 class="mb-10 text-xl font-semibold text-center text-blue-900">Таймеры</h1>
    <ul>
      <time-line-item
        v-for="timeLineData in timeLines"
        :key="timeLineData['hour']"
        :timeLineData="timeLineData"
        :taskListOption="taskListOption"
      />
    </ul>
  </section>
</template>
