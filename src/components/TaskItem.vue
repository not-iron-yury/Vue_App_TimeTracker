<script setup>
import { ref } from 'vue';
import BaseButton from '../components/BaseButton.vue';
import BaseSelect from '../components/BaseSelect.vue';

const props = defineProps({
  task: {
    type: String,
    required: true,
  },
});

const selectedTimerId = ref(10);

const timersLimit = [
  { label: '00:10', value: 10 },
  { label: '00:20', value: 20 },
  { label: '00:30', value: 30 },
  { label: '00:40', value: 40 },
];
</script>

<template>
  <li class="flex flex-col gap-3 p-4">
    <div class="flex items-center gap-2">
      <base-button>
        <font-awesome-icon :icon="['fas', 'trash-can']" />
      </base-button>
      <span class="truncate text-xl">{{ task }}</span>
    </div>
    <div>
      <base-select
        class="font-mono"
        :options="timersLimit"
        placeholder="hh:mm"
        :selectedId="selectedTimerId"
        @select="selectedTimerId = $event"
      />
    </div>
  </li>
</template>
