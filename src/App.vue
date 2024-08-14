<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import { useSearchHistory } from "./stores/useSearchHistory"

const searchHistory = useSearchHistory()

searchHistory.loadFromLocalStorage()

import { useRoute } from "vue-router"

const route = useRoute()

const isActive = (path: string) => {
  return route.path === path
}
</script>

<template>
  <div class="app-container">
    <Header>
      <li :class="{ active: isActive('/') }">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li :class="{ active: isActive('/history') }">
        <RouterLink to="/history">History</RouterLink>
      </li>
    </Header>

    <RouterView />

    <Footer />
  </div>
</template>

<style scoped>
nav a:hover:not(.active) {
  padding: 0;
  border-radius: 10px 10px 0 0;
  border-bottom: 4px solid var(--accent);
  transition: 0.2ms;
}

nav .active a {
  border-bottom: 4px solid var(--accent);
}
</style>
