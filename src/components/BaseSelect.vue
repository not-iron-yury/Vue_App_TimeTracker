<script setup>
import BaseButton from './BaseButton.vue';
import { isOptionValid } from './../validators';

const props = defineProps({
  options: {
    type: Array,
    required: true,
    validator: isOptionValid,
  },
  placeholder: {
    type: String,
    required: true,
  },
  selectedOptionId: {
    type: Number,
    required: false,
  },
});

const emit = defineEmits(['select']);
</script>

<template>
  <div class="flex gap-2">
    <base-button @click="$emit('select', null)">
      <font-awesome-icon :icon="['fas', 'xmark']" class="text-xl" />
    </base-button>
    <select
      class="w-full truncate bg-blue-50 rounded-sm px-2 py-2 text-xl h-11"
      @change="emit('select', Number($event.target.value))"
    >
      <option disabled :selected="selectedOptionId === null">{{ placeholder }}</option>
      <option v-for="{ label, value } in options" :key="value" :value="value" :selected="value === selectedOptionId">
        {{ label }}
      </option>
    </select>
  </div>
</template>
