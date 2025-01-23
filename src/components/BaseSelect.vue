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
  selected: {
    type: [Number, String],
    required: false,
  },
});

const emit = defineEmits(['select']);
</script>

<template>
  <div class="flex gap-2">
    <BaseButton @click="emit('select', null)">
      <font-awesome-icon :icon="['fas', 'xmark']" class="text-xl" />
    </BaseButton>
    <select
      class="w-full truncate bg-blue-50 rounded-sm px-2 py-2 text-xl h-11"
      @change="emit('select', $event.target.value)"
    >
      <option disabled :selected="selected === null">{{ placeholder }}</option>
      <option v-for="{ label, value } in options" :key="value" :value="value" :selected="value === selected">
        {{ label }}
      </option>
    </select>
  </div>
</template>
