<script setup>
import { ref } from 'vue';
import BaseSelect from './BaseSelect.vue';
import { isTimeLineDataValid } from '../validators';
import TimeLineHour from './TimeLineHour.vue';

const props = defineProps({
  timeLineData: {
    type: Object,
    required: true,
    validator: isTimeLineDataValid,
  },
});

const classListItem = 'relative flex flex-col gap-2 border-t border-gray-200 py-8 px-2';

const options = [
  { label: 'Тренировка', value: 1 },
  { label: 'Говнокодинг', value: 2 },
  { label: 'Бытовуха', value: 3 },
  { label: 'Кушац', value: 4 },
  { label: 'Магазин', value: 5 },
];

const selectedOptionId = ref(0);
</script>

<template>
  <li :class="classListItem">
    <TimeLineHour :hour="timeLineData.hour" />
    <base-select
      :options="options"
      :selectedId="selectedOptionId"
      placeholder="Отдых"
      @select="selectedOptionId = $event"
    />
  </li>
</template>
