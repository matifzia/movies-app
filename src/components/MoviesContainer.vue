<script setup>
import MoviesList from "./MoviesList.vue";
import { onMounted, reactive } from "vue";

const omdbKey = import.meta.env.VITE_OMDB_API_KEY;

let movies = reactive([]);

onMounted(() => {
  fetch(`http://www.omdbapi.com/?s=a&page=1&apikey=${omdbKey}&`).then(
    async (res) => {
      const data = await res.json();
      movies = data.Response == "True" ? data.Search : [];
    }
  );
});
</script>

<template>
  <span>
    <MoviesList  />
  </span>
</template>
