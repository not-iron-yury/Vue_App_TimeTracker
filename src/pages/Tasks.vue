<script setup>
import TaskItem from '../components/TaskItem.vue';
import { validateTasks } from './../validators';

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
    validator: validateTasks,
  },
});
</script>

<template>
  <section>
    <h1>Задачи</h1>
    <ul class="divide-y">
      <task-item v-for="task in tasks" :key="task" :task="task" />
    </ul>
  </section>
</template>
