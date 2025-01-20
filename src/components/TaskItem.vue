<script setup>
import { ref } from 'vue';
import BaseButton from '../components/BaseButton.vue';
import BaseSelect from '../components/BaseSelect.vue';
import { TIMERS_LIMIT, BUTTON_TYPE_DANGER } from './../constants';
import { isTaskValid } from '../validators';

const props = defineProps({
  task: {
    type: String,
    required: true,
    validator: isTaskValid,
  },
});

const selectedTimerId = ref(null);
</script>

<template>
  <li class="flex flex-col gap-3 p-4">
    <div class="flex items-center gap-2">
      <base-button :type="BUTTON_TYPE_DANGER">
        <font-awesome-icon :icon="['fas', 'trash-can']" />
      </base-button>
      <span class="truncate text-xl">{{ task }}</span>
    </div>
    <div>
      <base-select
        class="font-mono"
        :options="TIMERS_LIMIT"
        placeholder="hh:mm"
        :selectedId="selectedTimerId"
        @select="selectedTimerId = $event"
      />
    </div>
  </li>
</template>
