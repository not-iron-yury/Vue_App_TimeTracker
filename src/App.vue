<script setup>
import { ref } from 'vue';
import LayoutHeader from './components/layout/Header.vue';
import LayoutFooter from './components/layout/Footer.vue';
import TimeLine from './pages/TimeLine.vue';
import Progress from './pages/Progress.vue';
import Tasks from './pages/Tasks.vue';
import { PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS } from './constants';
import { pageHash, generateTimeLines } from './functions';

const timeLines = generateTimeLines();

const currentPage = ref(pageHash());

const newCurrentPage = newpage => {
  currentPage.value = newpage;
};

const tasks = ['Тренировка', 'Кодинг', 'Бытовуха', 'Кушац', 'Магазин'];
</script>

<template>
  <layout-header @change-current-page="newCurrentPage" />
  <main class="flex flex-grow flex-col py-8">
    <div class="container px-4 mx-auto">
      <TimeLine v-show="currentPage === PAGE_TIMERS" :timeLines="timeLines" />
      <Tasks v-show="currentPage === PAGE_TASKS" :tasks="tasks" />
      <Progress v-show="currentPage === PAGE_PROGRESS" />
    </div>
  </main>
  <layout-footer @change-current-page="newCurrentPage" :current-page="currentPage" />
</template>

<style></style>
