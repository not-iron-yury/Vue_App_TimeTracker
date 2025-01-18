<script setup>
import BaseOptions from './BaseSelect.vue';

const props = defineProps({
  timeLineData: {
    type: Object,
    required: true,
  },
});

const classListItem = 'relative flex flex-col gap-2 border-t border-gray-200 py-8 px-2';
const classListLink = [
  'absolute -top-4 left-1/2 -translate-x-2/4 px-2 text-lg font-mono rounded pointer-events-none',
  props.timeLineData.hour === new Date().getHours() ? 'bg-blue-600 font-black text-white' : 'bg-gray-100 text-gray-500',
];

const options = [
  { label: 'Тренировка', value: 1 },
  { label: 'Говнокодинг', value: 2 },
  { label: 'Бытовуха', value: 3 },
  { label: 'Кушац', value: 4 },
  { label: 'Магазин', value: 5 },
];

const selectedOptionId = 0;
</script>

<template>
  <li :class="classListItem">
    <a href="#" :class="classListLink"> {{ timeLineData.hour }}:00 </a>
    <base-options :options="options" :selectedOptionId="selectedOptionId" placeholder="Отдых" />
  </li>
</template>
