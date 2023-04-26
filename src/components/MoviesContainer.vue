<script setup>
import SearchMovies from "./SearchMovies.vue";
import MoviesList from "./MoviesList.vue";
import {useMoviesStore} from "../store/useMoviesStore";

const moviesStore = useMoviesStore();
</script>

<template>
  <span>
    <SearchMovies @on-search="moviesStore.searchMovies"/>
    <MoviesList />
  </span>
</template>
