<script setup>
import FooterLink from './FooterLink.vue';
import { PAGE_TIMERS, PAGE_TASKS, PAGE_PROGRESS } from '../../constants';
import { isPageValid } from './../../validators';

const props = defineProps({
  currentPage: {
    type: String,
    required: true,
    validator: isPageValid,
  },
});

const emit = defineEmits({
  changeCurrentPage: isPageValid, // в данном случае функция isPageValid нам подходит
});

const changeCurrentPage = newpage => {
  emit('changeCurrentPage', newpage);
};
</script>

<template>
  <footer class="sticky bottom-0 z-10 text-base bg-white border-t">
    <div class="container px-4 mx-auto">
      <nav>
        <ul class="flex items-center justify-around flex-wrap gap-2">
          <FooterLink
            label="Таймеры"
            :link="PAGE_TIMERS"
            icon="clock"
            :currentPage="currentPage"
            @new-page="changeCurrentPage"
          />
          <FooterLink
            label="Задачи"
            :link="PAGE_TASKS"
            icon="list-check"
            :currentPage="currentPage"
            @new-page="changeCurrentPage"
          />
          <FooterLink
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
