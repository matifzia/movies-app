<script setup>
import { reactive } from "vue";
import { useMoviesStore } from "../store/useMoviesStore";
import { storeToRefs } from "pinia";

const moviesStore = useMoviesStore();
const { moviesSortedByType } = storeToRefs(moviesStore);

const searchCriteria = reactive({
  asc: false,
  type: "",
});

const updateSearchCriteria = (type) => {
  searchCriteria.asc =
    type === searchCriteria.type ? !searchCriteria.asc : true;
  searchCriteria.type = type;
};

const getIconByCriteria = (asc, type) => {
  return !asc && searchCriteria.type === type
    ? "/icons/up-arrow.svg"
    : asc && searchCriteria.type === type
    ? "/icons/down-arrow.svg"
    : null;
};
</script>

<template>
  <table class="w-full text-left text-gray-500 dark:text-gray-400">
    <thead>
      <tr class="border border-gray-200">
        <th @click="updateSearchCriteria('Title')">
          <span class="flex"
            >Title
            <img
              class="ml-1"
              :src="getIconByCriteria(!searchCriteria.asc, 'Title')"
            />
          </span>
        </th>
        <th @click="updateSearchCriteria('Year')">
          <span class="flex"
            >Year
            <img
              class="ml-1"
              :src="getIconByCriteria(!searchCriteria.asc, 'Year')"
            />
          </span>
        </th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 border border-gray-200"
        v-for="(movie, i) in moviesSortedByType(searchCriteria)"
        :key="i"
      >
        <td>{{ movie.Title }}</td>
        <td>{{ movie.Year }}</td>
        <td>{{ 0 }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
