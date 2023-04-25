import { defineStore } from "pinia";
const omdbKey = import.meta.env.VITE_OMDB_API_KEY;

export const useMoviesStore = defineStore("movies", {
  state: () => ({ movies: [] }),
  actions: {
    searchMovies(criteria) {
      const { title, year } = criteria;
      fetch(
        `http://www.omdbapi.com/?s=${title}&y=${year}&type=movie&apikey=${omdbKey}`
      ).then(async (res) => {
        const data = await res.json();
        this.movies = data.Response == "True" ? data.Search : [];
      });
    },
  },
});
