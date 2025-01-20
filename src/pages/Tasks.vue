<script setup>
import TaskItem from '../components/TaskItem.vue';
import { TASKS } from './../constants';
</script>

<template>
  <section>
    <h1>Задачи</h1>
    <ul class="divide-y">
      <task-item v-for="task in TASKS" :key="task" :task="task" />
    </ul>
  </section>
</template>
