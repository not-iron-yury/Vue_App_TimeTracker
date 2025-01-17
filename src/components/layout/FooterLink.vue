<script setup>
const props = defineProps({
  link: {
    type: String,
    default: '#',
  },
  icon: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
  currentPage: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li
    :class="{
      'flex-1': true,
      'text-center': true,
      'bg-gray-100 pointer-events-none': currentPage === link,
    }"
    @click="$emit('new-page', link)"
  >
    <a :href="`#${link}`" class="flex flex-col items-center px-3 py-2">
      <font-awesome-icon :icon="['fas', icon]" class="mr-0.5 text-blue-500 h-6" />
      {{ label }}
    </a>
  </li>
</template>
