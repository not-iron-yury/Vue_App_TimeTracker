<script setup>
import { BUTTON_TYPE_BASIC, BUTTON_TYPE_DANGER, TYPES_OF_BUTTONS } from './../constants';

const props = defineProps({
  type: {
    type: String,
    default: 'basic',
    validate: type => TYPES_OF_BUTTONS.includes(type),
  },
});

const typeButton = {
  [BUTTON_TYPE_BASIC]: 'bg-blue-50 enabled:hover:bg-gray-500 enabled:hover:text-white',
  [BUTTON_TYPE_DANGER]: 'bg-red-400 enabled:hover:bg-red-500 text-white',
};
</script>

<template>
  <button
    :class="[
      typeButton[type],
      'max-w-11 w-full h-11 pb-1 text-2xl rounded-sm disabled:cursor-not-allowed disabled:opacity-50',
    ]"
  >
    <slot></slot>
  </button>
</template>
