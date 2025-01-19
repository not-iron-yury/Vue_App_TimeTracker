<script setup>
import { ref } from 'vue';
import BaseButton from '../components/BaseButton.vue';
import BaseSelect from '../components/BaseSelect.vue';
import { TASKS } from './../constants';

const selectedOptionId = ref(10);
const options = [
  { label: '00:10', value: 10 },
  { label: '00:20', value: 20 },
  { label: '00:30', value: 30 },
  { label: '00:40', value: 40 },
];
</script>

<template>
  <section>
    <h1>Задачи</h1>
    <ul class="divide-y">
      <li v-for="task in TASKS" :key="tast" class="flex flex-col gap-3 p-4">
        <div class="flex items-center gap-2">
          <base-button>
            <font-awesome-icon :icon="['fas', 'trash-can']" />
          </base-button>
          <span class="truncate text-xl">{{ task }}</span>
        </div>
        <div>
          <base-select
            class="font-mono"
            :options="options"
            placeholder="hh:mm"
            :selectedOptionId="selectedOptionId"
            @select="selectedOptionId = $event"
          />
        </div>
      </li>
    </ul>
  </section>
</template>
