<script setup>
defineProps({
  allMovies: {
    type:Array,
    default:[]
  }
})
</script>

<template>
  <table class="table-auto">
  <thead>
    <tr>
      <th>Title</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(movie,i) in allMovies" :key="i">
      <td>{{movie.Title}}</td>
      <td>{{movie.Year}}</td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
