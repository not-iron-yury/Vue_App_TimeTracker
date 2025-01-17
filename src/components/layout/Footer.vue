<script setup>
import { ref } from 'vue';
import FooterLink from './FooterLink.vue';
import { PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS } from '../../constants';

const currentPage = ref(PAGE_TIMERS);

const changeCurrentPage = newpage => {
  currentPage.value = newpage;
};
</script>

<template>
  <footer class="sticky bottom-0 z-10 text-base bg-white border-t">
    <div class="container px-4 mx-auto">
      <nav>
        <ul class="flex items-center justify-around flex-wrap gap-2">
          <footer-link
            label="Таймеры"
            :link="PAGE_TIMERS"
            icon="clock"
            :currentPage="currentPage"
            @new-page="changeCurrentPage"
          />
          <footer-link
            label="Задачи"
            :link="PAGE_TASKS"
            icon="list-check"
            :currentPage="currentPage"
            @new-page="changeCurrentPage"
          />
          <footer-link
            label="Прогресс"
            :link="PAGE_PROGRESS"
            icon="chart-line"
            :currentPage="currentPage"
            @new-page="changeCurrentPage"
          />
        </ul>
      </nav>
    </div>
  </footer>
</template>
