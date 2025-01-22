<script setup>
import { computed, ref } from 'vue';
import LayoutHeader from './components/layout/Header.vue';
import LayoutFooter from './components/layout/Footer.vue';
import TimeLine from './pages/TimeLine.vue';
import Progress from './pages/Progress.vue';
import Tasks from './pages/Tasks.vue';
import { PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS, TASKS_LIST } from './constants';
import { pageHash, createTimeLines, createTaskListOption, id } from './functions';

const timeLines = createTimeLines();
const currentPage = ref(pageHash());
const tasks = ref(TASKS_LIST);

const newCurrentPage = newpage => {
  currentPage.value = newpage;
};

const taskListOption = computed(() => createTaskListOption(tasks.value));

function removeTaskOption(option) {
  const index = tasks.value.indexOf(option);
  tasks.value.splice(index, 1);
}

function addTaskOption(name) {
  const newTask = {
    id: id(),
    name,
    secondsToComplete: 0,
  };

  tasks.value.push(newTask);
}
</script>

<template>
  <LayoutHeader @change-current-page="newCurrentPage" />
  <main class="flex flex-grow flex-col py-8">
    <div class="container px-4 mx-auto">
      <TimeLine v-show="currentPage === PAGE_TIMERS" :timeLines="timeLines" :taskListOption="taskListOption" />
      <Tasks
        v-show="currentPage === PAGE_TASKS"
        :tasks="tasks"
        @removeTask="removeTaskOption"
        @addTask="addTaskOption"
      />
      <Progress v-show="currentPage === PAGE_PROGRESS" />
    </div>
  </main>
  <LayoutFooter @changeCurrentPage="newCurrentPage" :currentPage="currentPage" />
</template>

<style></style>
