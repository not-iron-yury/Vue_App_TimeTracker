<script setup>
import { ref } from 'vue';
import BaseSelect from './BaseSelect.vue';
import TimeLineHour from './TimeLineHour.vue';
import { isTimeLineDataValid } from '../validators';

const props = defineProps({
  timeLineData: {
    type: Object,
    required: true,
    validator: isTimeLineDataValid,
  },
  taskListOption: {
    type: Array,
    required: true,
  },
});

const classListItem = 'relative flex flex-col gap-2 border-t border-gray-200 py-8 px-2';

const selectedOptionId = ref(null);
</script>

<template>
  <li :class="classListItem">
    <TimeLineHour :hour="timeLineData.hour" />
    <BaseSelect
      :options="taskListOption"
      :selected="selectedOptionId"
      placeholder="Отдых"
      @select="selectedOptionId = $event"
    />
  </li>
</template>
