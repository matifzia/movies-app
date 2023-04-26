import { defineStore } from "pinia";
import lodash from "lodash";
const omdbKey = import.meta.env.VITE_OMDB_API_KEY;

export const useMoviesStore = defineStore("movies", {
  state: () => ({ movies: [] }),
  getters: {
    moviesSortedByType: (state) => {
      return ({ type, asc }) =>
        lodash.orderBy(state.movies, type, asc ? "asc" : "desc");
    },
  },
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
