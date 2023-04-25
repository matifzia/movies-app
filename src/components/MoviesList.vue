<script setup>
import { useMoviesStore } from "../store/useMoviesStore";
const moviesStore = useMoviesStore();
</script>

<template>
  <table class="table-auto w-full">
    <thead>
      <tr>
        <th>Title</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(movie, i) in moviesStore.movies" :key="i">
        <td>{{ movie.Title }}</td>
        <td>{{ movie.Year }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
