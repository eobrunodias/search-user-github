<script setup lang="ts">
defineProps(["full_name", "description", "html_url"])

export interface Repo {
  id: string
  full_name: string
  description: string
  html_url: string
}
</script>

<template>
  <article>
    <h3 class="limited-text">{{ full_name }}</h3>
    <p class="limited-text">{{ description }}</p>
    <a :href="html_url" target="_blank">Ver no GitHub</a>
  </article>
</template>

<style scoped>
a {
  text-transform: uppercase;
  margin: 1rem 0;
  display: block;
  align-self: center;
  text-decoration: none;
  color: var(--text-color);
  font-weight: bold;
  border-radius: 10px;
  padding: 1rem;
  background-color: var(--secondary-color);
  width: 100%;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.5);
  }
}

article {
  display: grid;
  grid-template-rows: 4rem 1fr 5rem;

  background-color: var(--white-color);
  border-radius: 10px;
  padding: 2rem;

  h3 {
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 1rem;
    color: var(--background-color);
  }

  p {
    color: var(--background-color);
    text-align: left;
    margin-bottom: 1rem;
  }
}

article:hover {
  transform: scale(1.01);
}

h3 {
  margin: 1rem auto 0.25rem;
}
</style>
