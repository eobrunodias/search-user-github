import { defineStore } from "pinia"
import type { TypeUser } from "../components/Profile.vue"

export const useSearchHistory = defineStore("searchHistory", {
  state: () => {
    return {
      users: [] as TypeUser[]
    }
  },
  actions: {
    pushToHistory(username: TypeUser) {
      this.users.unshift(username)
    }
  }
})
