<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import { useSearchHistory } from "./stores/useSearchHistory"

const searchHistory = useSearchHistory()

searchHistory.loadFromLocalStorage()
</script>

<template>
  <div class="app-container">
    <Header>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/history">History</RouterLink>
      </li>
    </Header>

    <RouterView style="min-height: 100vh" />

    <Footer />
  </div>
</template>

<style scoped></style>
