<script setup lang="ts">
import { ref } from "vue"

const emit = defineEmits(["formSubmit", "update:modelValue"])
const searchInput = ref("")

function handleSubmit(ev: Event) {
  ev.preventDefault()
  emit("formSubmit", searchInput.value)
}
</script>

<template>
  <form @submit="handleSubmit">
    <input
      type="text"
      v-model="searchInput"
      @input="$emit('update:modelValue', $event.target!.value)"
      placeholder="Type the username."
    />
    <button type="submit">
      <img src="../assets/search.svg" />
    </button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

input {
  background-color: transparent;
  border: 1px solid var(--text-color);
  border-right: none;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 10px 0 0 10px;
  color: #e5e5e5;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--text-color);
    opacity: 0.7;
    font-style: italic;
  }
}

button {
  background-color: transparent;
  border: 1px solid var(--text-color);
  border-left: none;
  border-radius: 0 10px 10px 0;
  cursor: pointer;

  & + & {
    margin-left: 1rem;
  }
}

button:hover {
  cursor: pointer;
  filter: brightness(0.95);
}

img {
  padding: 0.7625rem 1rem;
}
</style>
