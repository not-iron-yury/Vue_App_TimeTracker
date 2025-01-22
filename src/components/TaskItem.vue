<script setup>
import { ref } from 'vue';
import BaseButton from '../components/BaseButton.vue';
import BaseSelect from '../components/BaseSelect.vue';
import { TIMERS_LIMIT, BUTTON_TYPE_DANGER } from './../constants';
import { isTaskNameValid } from '../validators';

const props = defineProps({
  task: {
    type: String,
    required: true,
    validator: isTaskNameValid,
  },
});

const selectedTimerId = ref(null);

const emit = defineEmits(['remove']);
</script>

<template>
  <li class="flex flex-col gap-3 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('remove')">
        <font-awesome-icon :icon="['fas', 'trash-can']" />
      </BaseButton>
      <span class="truncate text-xl">{{ task }}</span>
    </div>
    <div>
      <BaseSelect
        class="font-mono"
        :options="TIMERS_LIMIT"
        placeholder="hh:mm"
        :selectedId="selectedTimerId"
        @select="selectedTimerId = $event"
      />
    </div>
  </li>
</template>
