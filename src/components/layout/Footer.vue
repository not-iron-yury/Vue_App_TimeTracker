<script setup></script>

<template>
  <footer class="sticky bottom-0 z-10 py-3 text-base bg-white border-t">
    <div class="container px-4 mx-auto">
      <nav>
        <ul class="flex items-center justify-around flex-wrap gap-2">
          <li class="flex-1 text-center">
            <a href="#" class="flex flex-col items-center px-3 py-2 text-nowrap">
              <font-awesome-icon :icon="['fas', 'clock']" class="mr-0.5 text-blue-500 h-6" />
              Таймеры
            </a>
          </li>
          <li class="flex-1 text-center">
            <a href="#" class="flex flex-col items-center px-3 py-2 text-nowrap">
              <font-awesome-icon :icon="['fas', 'list-check']" class="mr-0.5 text-blue-500 h-6" />
              Задачи
            </a>
          </li>
          <li class="flex-1 text-center">
            <a href="#" class="flex flex-col items-center px-3 py-2 text-nowrap">
              <font-awesome-icon :icon="['fas', 'chart-line']" class="mr-0.5 text-blue-500 h-6" />
              Прогресс
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
