<script setup>
import SearchBar from "./components/SearchBar.vue";
import DataList from "./components/DataList.vue";
import PageNav from "./components/PageNav.vue";
</script>

<template>
  <header>
    <SearchBar />
  </header>

  <main>
    <DataList />
  </main>

  <footer>
    <PageNav />
  </footer>
</template>

<style scoped>
header {
  width: 100%;
}

main {
  width: 100%;
  padding: 25px;
}

footer {
  width: 100%;
}
</style>
