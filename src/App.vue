<script setup>
import { ref } from 'vue';
import LayoutHeader from './components/layout/Header.vue';
import LayoutFooter from './components/layout/Footer.vue';
import Timers from './pages/Timers.vue';
import Progress from './pages/Progress.vue';
import Tasks from './pages/Tasks.vue';
import { PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS } from './constants';

const currentPage = ref(pageHash());

function pageHash() {
  const hash = window.location.hash.slice(1);
  if ([PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS].includes(hash)) {
    return hash;
  }
  return PAGE_TIMERS;
}

const newCurrentPage = newpage => {
  currentPage.value = newpage;
};
</script>

<template>
  <layout-header @change-current-page="newCurrentPage" />
  <main class="flex flex-grow flex-col py-8">
    <div class="container px-4 mx-auto">
      <Timers v-show="currentPage === PAGE_TIMERS" />
      <Tasks v-show="currentPage === PAGE_TASKS" />
      <Progress v-show="currentPage === PAGE_PROGRESS" />
    </div>
  </main>
  <layout-footer @change-current-page="newCurrentPage" :current-page="currentPage" />
</template>

<style></style>
