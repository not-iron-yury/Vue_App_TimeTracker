<script setup>
import TaskItem from '../components/TaskItem.vue';
import { validateTasks, isTaskValid } from './../validators';

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
    validator: validateTasks,
  },
});

const emit = defineEmits({
  removeTask: isTaskValid,
});
</script>

<template>
  <section>
    <h1>Задачи</h1>
    <ul class="divide-y">
      <TaskItem task-item v-for="task in tasks" :key="task" :task="task" @remove="emit('removeTask', task)" />
    </ul>
  </section>
</template>
