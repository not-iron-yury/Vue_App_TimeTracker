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
    <base-button>
      <font-awesome-icon :icon="['fas', 'xmark']" />
    </base-button>
    <select
      class="w-full truncate bg-blue-50 rounded-sm px-2 py-2 text-2xl"
      @change="emit('select', Number($event.target.value))"
    >
      <option selected disabled value="">{{ placeholder }}</option>
      <option v-for="{ label, value } in options" :key="value" :value="value" :selected="value === selectedOptionId">
        {{ label }}
      </option>
    </select>
  </div>
</template>
