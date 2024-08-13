<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import Header from "./components/Header.vue"
</script>

<template>
  <Header>
    <li>
      <RouterLink to="/">Home</RouterLink>
    </li>
    <li>
      <RouterLink to="/history">History</RouterLink>
    </li>
  </Header>

  <RouterView />

  <Footer />
</template>

<style>
a {
  text-decoration: none;
  color: white;
}

li {
  & + & {
    margin-left: 1.5rem;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Sora", sans-serif;

  color: var(--text-color);
}

body {
  background-color: var(--background-color);
}

ul {
  list-style: none;
}
</style>
