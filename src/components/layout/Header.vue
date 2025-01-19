<script setup>
import { PAGE_TIMERS, PAGE_PROGRESS } from '../../constants';
import { isPageValid } from './../../validators';

const emit = defineEmits({
  changeCurrentPage: isPageValid, // в данном случае функция isPageValid нам подходит
});
</script>

<template>
  <header class="sticky top-0 z-20 py-6 border-b bg-gray-100">
    <div class="container flex justify-between flex-wrap gap-2 px-4 mx-auto">
      <a
        :href="`#${PAGE_TIMERS}`"
        @click="emit('changeCurrentPage', PAGE_TIMERS)"
        class="flex items-center gap-2 text-3xl font-bold text-blue-600 text-nowrap"
      >
        <font-awesome-icon :icon="['fas', 'stopwatch']" class="h-10" />
        TimeTracker
      </a>
      <a
        :href="`#${PAGE_PROGRESS}`"
        @click="emit('changeCurrentPage', PAGE_PROGRESS)"
        class="text-lg font-semibold my-auto p-0"
      >
        <div class="flex items-center gap-2" v-if="false">
          <p>День закончен!</p>
          <font-awesome-icon :icon="['fas', 'circle-check']" class="h-5 text-green-600" />
        </div>
        <div class="flex items-center gap-2" v-else>
          <p>Прогресс: <span class="font-mono">10%</span></p>
          <font-awesome-icon :icon="['fas', 'bars-progress']" class="h-5 text-red-600" />
          <!-- <div class="h-3 w-3 rounded-full bg-red-600"></div> -->
        </div>
      </a>
    </div>
  </header>
</template>
