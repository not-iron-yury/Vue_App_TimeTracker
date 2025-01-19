<script setup>
import { isHourValid } from './../validators';

const props = defineProps({
  hour: {
    type: Number,
    required: true,
    validator: isHourValid,
  },
});

const classList = [
  'absolute -top-4 left-1/2 -translate-x-2/4 px-2 text-lg font-mono rounded pointer-events-none',
  props.hour === new Date().getHours() ? 'bg-blue-600 font-black text-white' : 'bg-gray-100 text-gray-500',
];

const formatedHour = `${props.hour.toString().padStart(2, '0')}:00`;
</script>

<template>
  <a href="#" :class="classList"> {{ formatedHour }} </a>
</template>
