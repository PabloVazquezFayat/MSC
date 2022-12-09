<template>
  <li>
    <span>{{ searchText }}</span>
    <button class="close-btn" @click="handleRemoveSearch(searchText)">
      <font-awesome-icon icon="fa-solid fa-circle-xmark" />
    </button>
  </li>
</template>

<script setup>
defineProps({
  searchText: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["remove-search"]);

function handleRemoveSearch(search) {
  emit("remove-search", search);
}
</script>

<style lang="css" scoped>
.searchbar-wrapper__items ul li {
  background-color: var(--gray);
  padding: 5px 9px;
  margin: 2px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.searchbar-wrapper__items ul li span {
  font-size: 12px;
  color: var(--drk-gray);
}

.close-btn {
  height: 13px;
  border: none;
  color: var(--drk-gray);
  padding: 0;
  margin-left: 8px;
}
</style>
