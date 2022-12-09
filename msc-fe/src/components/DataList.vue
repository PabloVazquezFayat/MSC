<template>
  <ul class="data-list">
    <DataItem
      v-for="contact in contactsStore.state.contacts"
      :key="`${contact._id}-${contact.name}`"
      :contact="contact"
    />
  </ul>
</template>

<script setup>
import { onBeforeMount } from "vue";
import DataItem from "./DataItem.vue";
import { useSearchStore } from "../stores/search";
import { useContactsStore } from "../stores/contacts";
import { decodeSearch } from "../util/routeUtil";

const searchStore = useSearchStore();
const contactsStore = useContactsStore();

onBeforeMount(() => {
  const searchObj = decodeSearch();
  if (searchObj) {
    searchObj.search
      .split(",")
      .forEach((search) => searchStore.addSearch(search));
  }
  contactsStore.getAllContacts(searchObj || null);
});
</script>

<style lang="css" scoped>
.data-list {
  background-color: var(--white);
  padding: 10px 7px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  box-shadow: -4px 4px 11px -4px rgba(0, 0, 0, 0.52);
  -webkit-box-shadow: -4px 4px 11px -4px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: -4px 4px 11px -4px rgba(0, 0, 0, 0.52);
}
</style>
