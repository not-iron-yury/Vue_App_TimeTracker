<script setup>
import BaseButton from './BaseButton.vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
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
</script>

<template>
  <div class="flex gap-2">
    <base-button>&#215;</base-button>
    <select class="w-full truncate bg-blue-50 rounded-sm px-2 py-2 text-2xl">
      <option selected disabled value="">{{ placeholder }}</option>
      <option v-for="{ label, value } in options" :key="value" :value="value" :selected="value === selectedOptionId">
        {{ label }}
      </option>
    </select>
  </div>
</template>
