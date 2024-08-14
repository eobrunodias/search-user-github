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
  const count = searchHistory.users.length
  if (count === 0) {
    return "There are no records in history"
  } else if (count === 1) {
    return "There is 1 record in history"
  } else {
    return `There are ${count} records in history`
  }
})
</script>

<template>
  <h3>{{ handleCountRecords }}</h3>

  <div class="history-wrapper">
    <div class="history-container" v-for="(user, index) in searchHistory.users" :key="index">
      <div class="history-tab">
        <p>{{ user.recordedAt }}</p>
        <button class="delete-btn" @click="handleRemoveUser(index)">
          <img src="../assets/remove.svg" alt="" />
        </button>
      </div>
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

.history-tab {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(4, 0, 66);
  padding: 0.7rem 0;
  border-radius: 10px 10px 0 0;

  p {
    margin: 0 2rem;
  }

  .delete-btn {
    margin: 0 2rem;
    border: none;
    background-color: transparent;

    img {
      height: 1.9rem;
      width: 1.9rem;
      cursor: pointer;
    }
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
