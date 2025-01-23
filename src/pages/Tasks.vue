<script setup>
import TaskItem from '../components/TaskItem.vue';
import TaskForm from '../components/TaskForm.vue';
import { validateTasks, isTaskNameValid, isTaskValid } from './../validators';

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
    validator: validateTasks,
  },
});

const emit = defineEmits({
  removeTask: isTaskValid,
  addTask: isTaskNameValid,
});

function addNewTask(task) {
  emit('addTask', task);
}
</script>

<template>
  <section>
    <h1 class="mb-10 text-xl font-semibold text-center text-blue-900">Задачи</h1>
    <TaskForm @newTask="addNewTask" />
    <ul v-if="tasks.length > 0" class="divide-y">
      <TaskItem v-for="task in tasks" :key="task.id" :task="task" @remove="emit('removeTask', task)" />
    </ul>
    <div v-else class="flex items-center justify-center py-[12vh]">
      <p class="text-blue-500 text-2xl">Нет задач</p>
    </div>
  </section>
</template>
