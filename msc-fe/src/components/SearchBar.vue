<template>
  <div class="searchbar">
    <div class="searchbar-wrapper">
      <div class="searchbar-wrapper__items">
        <div class="searchbar-wrapper__items-icon">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
        <ul>
          <SearchChip
            v-for="(search, i) in searchStore.state.searches"
            :search-text="search"
            :key="`${i}-${search}`"
            @remove-search="removeSearch"
          />
        </ul>
        <input type="text" v-model="search" @keyup.enter="handleSearch" />
      </div>
      <button class="search-wrapper__button" @click="handleSearch">
        search
      </button>
    </div>
  </div>
</template>

<script setup>
import SearchChip from "./SearchChip.vue";
import { ref } from "vue";
import { useSearchStore } from "../stores/search";
import { useContactsStore } from "../stores/contacts";
import { updateRoute } from "../util/routeUtil";

const searchStore = useSearchStore();
const contactsStore = useContactsStore();
const search = ref("");

function handleSearch() {
  searchStore.addSearch(search.value);
  const payload = {
    page: 1,
    search: searchStore.state.searches,
  };
  contactsStore.getAllContacts(payload);
  search.value = "";
  updateRoute(payload);
}

function removeSearch(query) {
  searchStore.removeSearch(query);
  const payload = {
    page: 1,
    search: searchStore.state.searches,
  };
  contactsStore.getAllContacts(payload);
  updateRoute(payload);
}
</script>

<style lang="css" scoped>
.searchbar {
  background-color: var(--black);
  padding: 30px 50px;
  width: 100%;
}

.searchbar-wrapper {
  background: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 6px;
}

.searchbar-wrapper__items {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.searchbar-wrapper__items-icon {
  width: 29px;
  height: 29px;
  margin: 2px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.searchbar-wrapper__items-icon svg {
  margin-top: 2px;
}

.searchbar-wrapper__items ul {
  width: fit-content;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.searchbar-wrapper__items input {
  border: none;
  height: 29px;
  flex-grow: 1;
  margin: 2px 0;
}

.searchbar-wrapper__items input:focus {
  outline: 0;
}

.search-wrapper__button {
  background-color: var(--drk-gray);
  border: none;
  border-radius: 2px;
  text-transform: uppercase;
  padding: 5px 10px;
  color: var(--white);
  cursor: pointer;
}

.search-wrapper__button:active {
  transform: scale3d(0.95, 0.95, 0.95);
}
</style>
