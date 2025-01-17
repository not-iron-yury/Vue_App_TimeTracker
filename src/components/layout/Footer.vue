<script setup>
import FooterLink from './FooterLink.vue';

const pages = [
  {
    label: 'Таймеры',
    link: '#',
    icon: 'clock',
    id: 1,
  },
];
</script>

<template>
  <footer class="sticky bottom-0 z-10 py-3 text-base bg-white border-t">
    <div class="container px-4 mx-auto">
      <nav>
        <ul class="flex items-center justify-around flex-wrap gap-2">
          <footer-link label="Таймеры" link="#" icon="clock" />
          <footer-link label="Задачи" link="#" icon="list-check" />
          <footer-link label="Прогресс" link="#" icon="chart-line" />
        </ul>
      </nav>
    </div>
  </footer>
</template>
