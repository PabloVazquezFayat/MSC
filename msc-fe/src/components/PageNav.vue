<template>
  <div class="page-nav">
    <button class="page-nav__button" @click="handlePrevClick">
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </button>
    <span>
      {{ contactStore.state.currentPage }} of {{ contactStore.state.pages }}
    </span>
    <button class="page-nav__button" @click="handleNextClick">
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </button>
  </div>
</template>

<script setup>
import { updateRoute } from "../util/routeUtil";
import { useSearchStore } from "../stores/search";
import { useContactsStore } from "../stores/contacts";
const contactStore = useContactsStore();
const searchStore = useSearchStore();

function handlePrevClick() {
  if (contactStore.state.currentPage - 1 !== 0) {
    const payload = {
      page: contactStore.state.currentPage - 1,
      search: searchStore.state.searches,
    };
    contactStore.getAllContacts(payload);
    updateRoute(payload);
  }
}

function handleNextClick() {
  if (contactStore.state.currentPage + 1 <= contactStore.state.pages) {
    const payload = {
      page: contactStore.state.currentPage + 1,
      search: searchStore.state.searches,
    };
    contactStore.getAllContacts(payload);
    updateRoute(payload);
  }
}
</script>

<style lang="css" scoped>
.page-nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-nav span {
  margin: 8px;
}

.page-nav__button {
  background-color: var(--drk-gray);
  border: none;
  border-radius: 2px;
  padding: 5px 8px;
  cursor: pointer;
}

.page-nav__button:active {
  transform: scale3d(0.95, 0.95, 0.95);
}

.page-nav svg {
  color: var(--white);
}
</style>
