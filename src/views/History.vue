<script setup lang="ts">
import User from "@/components/User.vue"
import { useSearchHistory } from "../stores/useSearchHistory"

const searchHistory = useSearchHistory()
searchHistory.users.map((user) => user)
</script>

<template>
  <div class="history-wrapper">
    <div>
      <User
        v-for="(user, index) in searchHistory.users"
        :key="index"
        :login="user.login"
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
.history-wrapper {
  max-width: 80rem;
  margin: 0 auto;

  padding: 0 1rem;
}
</style>
