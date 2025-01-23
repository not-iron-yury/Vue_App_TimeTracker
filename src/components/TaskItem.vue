<script setup>
import { ref } from 'vue';
import BaseButton from '../components/BaseButton.vue';
import BaseSelect from '../components/BaseSelect.vue';
import { TIMERS_LIMIT, BUTTON_TYPE_DANGER } from './../constants';

const props = defineProps({
  task: {
    type: Object,
    required: true,
    //validator: isTaskNameValid,
  },
});

const emit = defineEmits(['remove']);

const selectedTimeValue = ref(null);

function setTaskTimeValue(value, task) {
  task.secondsToComplete = value;

  selectedTimeValue.value = null === value ? value : Number(value);
}
</script>

<template>
  <li class="flex flex-col gap-3 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('remove')">
        <font-awesome-icon :icon="['fas', 'trash-can']" />
      </BaseButton>
      <span class="truncate text-xl">{{ task.name }}</span>
    </div>
    <div>
      <BaseSelect
        class="font-mono"
        :options="TIMERS_LIMIT"
        placeholder="hh:mm"
        :selected="selectedTimeValue"
        @select="setTaskTimeValue($event, task)"
      />
    </div>
  </li>
</template>
