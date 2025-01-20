<script setup>
import { computed, ref } from 'vue';
import LayoutHeader from './components/layout/Header.vue';
import LayoutFooter from './components/layout/Footer.vue';
import TimeLine from './pages/TimeLine.vue';
import Progress from './pages/Progress.vue';
import Tasks from './pages/Tasks.vue';
import { PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS } from './constants';
import { pageHash, generateTimeLines, createTaskListOption } from './functions';

const timeLines = generateTimeLines();

const currentPage = ref(pageHash());

const newCurrentPage = newpage => {
  currentPage.value = newpage;
};

const tasks = ref(['Тренировка', 'Кодинг', 'Бытовуха', 'Кушац', 'Магазин']);

const taskListOption = computed(() => createTaskListOption(tasks.value));

function removeTaskOption(option) {
  const index = tasks.value.indexOf(option);
  tasks.value.splice(index, 1);
}
</script>

<template>
  <LayoutHeader @change-current-page="newCurrentPage" />
  <main class="flex flex-grow flex-col py-8">
    <div class="container px-4 mx-auto">
      <TimeLine v-show="currentPage === PAGE_TIMERS" :timeLines="timeLines" :taskListOption="taskListOption" />
      <Tasks v-show="currentPage === PAGE_TASKS" :tasks="tasks" @removeTask="removeTaskOption" />
      <Progress v-show="currentPage === PAGE_PROGRESS" />
    </div>
  </main>
  <LayoutFooter @changeCurrentPage="newCurrentPage" :currentPage="currentPage" />
</template>

<style></style>
