<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['onSearch'])
const searchOptions=reactive({
  title:"",
  year:""
})
</script>

<template>
  <div class="flex">
    <div class="w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right md:mb-0 pr-4"
        for="inline-full-name"
      >
        Title
      </label>
    </div>
    <div class="w-2/3">
      <input
        class="border border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight"
        id="inline-full-name"
        type="text"
        v-model="searchOptions.title"
      />
    </div>
    <div class="w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right md:mb-0 px-4"
        for="inline-full-name"
      >
        Year
      </label>
    </div>
    <div class="w-2/3">
      <input
        class="border border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight"
        id="inline-full-name"
        type="text"
        v-model="searchOptions.year"
      />
    </div>
    <button
      class="ml-2 w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      type="button"
      @click="emit('onSearch',searchOptions)"
    >
      Search Movies
    </button>
  </div>
</template>
