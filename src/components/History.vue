<script setup lang="ts">
import User from "./User.vue"
// import type { TypeUser } from "./Profile.vue"
import { useSearchHistory } from "@/stores/useSearchHistory"

const searchHistory = useSearchHistory()

import { computed, onMounted } from "vue"

onMounted(() => {
  searchHistory.loadFromLocalStorage()
})

function handleRemoveUser(index: number) {
  searchHistory.removeUser(index)
}

const handleCountRecords = computed(() => {
  return searchHistory.users.length > 0
    ? `There are ${searchHistory.users.length} records in history`
    : `There are no records in history`
})
</script>

<template>
  <h3>{{ handleCountRecords }}</h3>

  <div class="history-wrapper">
    <div class="history-container" v-for="(user, index) in searchHistory.users" :key="index">
      <button class="delete-btn" @click="handleRemoveUser(index)">
        <img src="../assets/trash.svg" alt="" />
      </button>
      <User
        class="user"
        :key="index"
        :login="user.login || `User Not Found`"
        :name="user.name"
        :company="user.company"
        :bio="user.bio"
        :followers="user.followers"
        :following="user.following"
        :avatar_url="user.avatar_url"
      />
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.delete-btn {
  background-color: var(--secondary-color);
  border-radius: 10px 10px 0 0;
  padding: 1rem 0 0 0;
  font-size: 1rem;

  border: none;

  img {
    height: 1.9rem;
    width: 1.9rem;
    background-color: transparent;
    cursor: pointer;
  }
}

.user {
  border-radius: 0 0 10px 10px;
}

.history-container {
  display: flex;
  flex-direction: column;
}

.history-wrapper {
  min-height: 100vh;
  max-width: 80rem;
  margin: 0 auto;

  padding: 0 1rem;
}
</style>
