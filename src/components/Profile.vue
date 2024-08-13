<script setup lang="ts">
import { reactive, ref, computed } from "vue"
import User from "./User.vue"
import Repository from "./Repository.vue"
import type { Repo } from "./Repository.vue"
import Form from "./Form.vue"

const username = ref("")

const state = reactive<TypeUser>({
  login: "",
  name: "",
  bio: "",
  company: "",
  avatar_url: "",
  followers: "",
  following: "",
  repos: []
})

type TypeUser = {
  login: string
  name: string
  bio: string
  company: string
  followers: string
  following: string
  avatar_url: string
  repos: Repo[]
}

async function fetchGithubUser(searchInput: string) {
  const res = await fetch(`https://api.github.com/users/${searchInput}`)
  const { login, name, bio, company, followers, following, avatar_url } = await res.json()

  state.login = login
  state.name = name
  state.bio = bio
  state.company = company
  state.followers = followers
  state.following = following
  state.avatar_url = avatar_url
  state.repos = []

  await fetchUserRepositores(login)
}

async function fetchUserRepositores(login: string) {
  const res = await fetch(`https://api.github.com/users/${login}/repos`)
  const repos = await res.json()
  state.repos = repos
}

const reposCountMessage = computed(() => {
  return state.repos.length > 0
    ? `${state.login} possui ${state.repos.length} repositórios públicos.`
    : `${state.login} não possui nenhum repositório público.`
})
</script>

<template>
  <Form @form-submit="fetchGithubUser" v-model="username" />

  <div class="empty-search" v-if="!username">
    <p>Digite o nome do usuário na barra de pesquisa.</p>
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
    />
  </div>

  <h3 v-if="state.login && username !== ''" class="repos-count">
    {{ reposCountMessage }}
  </h3>

  <section class="repos" v-if="state.repos.length > 0">
    <Repository
      v-for="repo in state.repos"
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

.repos {
  margin-bottom: 2rem;
}

.empty-search,
.not-found {
  font-size: 1.2rem;
  text-align: center;
}

section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
