import { reactive } from "vue";
import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", () => {
  const state = reactive({
    searches: [],
  });

  function addSearch(query) {
    if (query.length >= 3 && !state.searches.includes(query)) {
      state.searches.push(query);
    }
  }

  function removeSearch(query) {
    const newSearches = state.searches.filter((search) => search !== query);
    state.searches = newSearches;
  }

  return { state, addSearch, removeSearch };
});
