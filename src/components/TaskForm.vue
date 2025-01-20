<script setup>
import BaseButton from '../components/BaseButton.vue';
import { isTaskValid } from './../validators';

const emit = defineEmits({
  newTask: isTaskValid,
});

function handlerInput(event) {
  const input = event.target.elements['input-task'];

  if (input.value) {
    emit('newTask', input.value);
    input.value = '';
  }
}
</script>

<template>
  <form @submit.prevent="handlerInput" class="flex items-end gap-2 px-4 pb-4 border-b">
    <input
      id="input-task"
      type="text"
      class="p-2 w-full h-[44px] font-mono text-lg text-gray-600 border-2 border-blue-100 placeholder:text-gray-300"
      placeholder="Добавить новую задачу"
    />
    <BaseButton>
      <font-awesome-icon :icon="['fas', 'plus']" />
    </BaseButton>
  </form>
</template>

<style scoped>
form {
  position: sticky;
}
</style>
