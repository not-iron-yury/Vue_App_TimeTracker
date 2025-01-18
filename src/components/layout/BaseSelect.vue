<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="flex gap-2">
    <button
      class="px-4 pb-1 text-4xl rounded-sm bg-blue-50 enabled:hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
    >
      &#215;
    </button>
    <select name="" id="" class="w-full truncate bg-blue-50 rounded-sm px-2 py-2 text-2xl">
      <option selected disabled value="">Отдых</option>
      <option v-for="{ label, value } in options" :key="value" :value="value">
        {{ label }}
      </option>
    </select>
  </div>
</template>
