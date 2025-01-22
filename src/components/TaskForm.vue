<script setup>
import { nextTick } from 'vue';
import BaseButton from '../components/BaseButton.vue';
import { isTaskNameValid } from './../validators';

const emit = defineEmits({
  newTask: isTaskNameValid,
});

function handlerInput(event) {
  const input = event.target.elements['input-task'];
  const inputValue = input.value.trim();

  if (inputValue) {
    emit('newTask', inputValue[0].toUpperCase() + inputValue.slice(1));
    input.value = '';

    nextTick(() => window.scrollTo(0, document.body.scrollHeight));
  }
}
</script>

<template>
  <form @submit.prevent="handlerInput" class="flex items-end fix gap-2 px-4 pb-4 border-b">
    <input
      id="input-task"
      type="text"
      class="p-2 w-full h-[44px] font-mono text-lg text-gray-600 border-2 border-blue-100 placeholder:text-gray-300 focus:outline-blue-600"
      placeholder="Добавить новую задачу"
    />
    <BaseButton class="bg-blue-500 text-white">
      <font-awesome-icon :icon="['fas', 'plus']" />
    </BaseButton>
  </form>
</template>

<style scoped>
form {
  position: sticky;
}
</style>
