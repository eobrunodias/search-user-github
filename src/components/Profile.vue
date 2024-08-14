<script setup lang="ts">
import { reactive, ref, computed } from "vue"
import User from "./User.vue"
import Repository from "./Repository.vue"
import type { Repo } from "./Repository.vue"
import Form from "./Form.vue"

import { useSearchHistory } from "@/stores/useSearchHistory"

const searchHistory = useSearchHistory()

const username = ref("")
const reposRef = ref<Repo[]>([])
const errorMessage = ref("")

const state = reactive<TypeUser>({
  login: "",
  name: "",
  bio: "",
  company: "",
  avatar_url: "",
  followers: "",
  following: ""
})

export type TypeUser = {
  login: string
  name: string
  bio: string
  company: string
  followers: string
  following: string
  avatar_url: string
  recordedAt?: string
}

async function fetchGithubUser(searchInput: string) {
  try {
    const res = await fetch(`https://api.github.com/users/${searchInput}`)
    const { login, name, bio, company, followers, following, avatar_url } = await res.json()

    if (!res.ok) {
      return (errorMessage.value = `User not found. Type a valid username.`)
    } else {
      errorMessage.value = ""
    }

    const user: TypeUser = {
      login,
      name,
      bio,
      company,
      followers,
      following,
      avatar_url
    }

    searchHistory.pushToHistory(user)

    state.login = login
    state.name = name
    state.bio = bio
    state.company = company
    state.followers = followers
    state.following = following
    state.avatar_url = avatar_url

    await fetchUserRepositores(login)
  } catch (error) {}
}

function handleSearchDate() {
  const date = Date.now()
  return date
}

async function fetchUserRepositores(login: string) {
  try {
    const res = await fetch(`https://api.github.com/users/${login}/repos`)

    const repos = await res.json()
    reposRef.value = repos
  } catch (error) {}
}

const reposCountMessage = computed(() => {
  return reposRef.value.length > 0
    ? `${state.login} has ${reposRef.value.length} public repositories.`
    : `${state.login} does not have any public repository.`
})
</script>

<template>
  <Form @form-submit="fetchGithubUser" v-model="username" />

  <div class="errorMessage" v-if="errorMessage">
    <p>{{ errorMessage }}</p>
  </div>

  <div class="empty-search" v-if="!username">
    <p>Type the username in the search bar.</p>
  </div>

  <div v-if="state.login && username !== ''">
    <User
      :login="state.login"
      :name="state.name"
      :bio="state.bio"
      :company="state.company"
      :followers="state.followers"
      :following="state.following"
      :avatar_url="state.avatar_url"
      :searchDate="handleSearchDate"
    />
  </div>

  <h3 v-if="state.login && username !== ''" class="repos-count">
    {{ reposCountMessage }}
  </h3>

  <section class="repos" v-if="reposRef.length > 0 && username !== ''">
    <Repository
      v-for="repo in reposRef"
      :key="repo.id"
      :description="repo.description"
      :full_name="repo.full_name"
      :html_url="repo.html_url"
    />
  </section>

  <slot name="footer"></slot>
</template>

<style scoped>
.view-search {
  margin: 2rem 0;
  border-radius: 10px;
}

.repos-count {
  margin: 3rem 0;
  text-align: center;
  border-radius: 10px;
  background-color: var(--secondary-color);
  padding: 1rem;
}

.empty-search,
.errorMessage {
  font-size: 1.2rem;
  text-align: center;
}

.repos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  margin-bottom: 2rem;
}

@media (max-width: 800px) {
  .repos {
    grid-template-columns: 1fr;
  }
}
</style>
