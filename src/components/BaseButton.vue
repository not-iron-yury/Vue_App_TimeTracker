<script>
import { BUTTON_TYPE_BASIC, BUTTON_TYPE_DANGER } from './../constants';

// const typeButton будет инициализированна только 1 раз
// находясь в <script setup> инициализация будет выполнятся в каждой инициализации компонента BaseButton
const typeButton = {
  [BUTTON_TYPE_BASIC]: 'bg-blue-50 enabled:hover:bg-gray-500 enabled:hover:text-white',
  [BUTTON_TYPE_DANGER]: 'bg-red-400 enabled:hover:bg-red-600 text-white',
};
</script>

<script setup>
import { TYPES_OF_BUTTONS } from './../constants';
const props = defineProps({
  type: {
    type: String,
    default: 'basic',
    validate: type => TYPES_OF_BUTTONS.includes(type),
  },
});
</script>

<template>
  <button
    :class="[
      typeButton[type],
      'max-w-11 w-full h-11 text-2xl rounded-sm disabled:cursor-not-allowed disabled:opacity-50',
    ]"
  >
    <slot></slot>
  </button>
</template>
