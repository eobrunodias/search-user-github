<script setup lang="ts"></script>

<template>
  <button type="button"><slot></slot></button>
</template>

<style scoped>
button {
  color: #fff;
  text-align: center;
  font-weight: 400;
  padding: 0.5rem 1rem;
  background-color: var(--secondary-color);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;

  font-size: 1rem;

  & + & {
    margin-left: 1rem;
  }
}
</style>
