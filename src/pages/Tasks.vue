<script setup>
import TaskItem from '../components/TaskItem.vue';
import TaskForm from '../components/TaskForm.vue';
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
  addTask: isTaskValid,
});

function addNewTask(task) {
  emit('addTask', task);
}
</script>

<template>
  <section class="relative">
    <h1 class="mb-10 text-xl font-semibold text-center text-blue-900">Задачи</h1>
    <TaskForm @newTask="addNewTask" />
    <ul class="divide-y">
      <TaskItem task-item v-for="task in tasks" :key="task" :task="task" @remove="emit('removeTask', task)" />
    </ul>
  </section>
</template>
