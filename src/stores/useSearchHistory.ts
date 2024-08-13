import { defineStore } from "pinia"

export const useSearchHistory = defineStore("searchHistory", {
  state: () => {
    return {
      users: [] as string[]
    }
  },
  actions: {
    pushToHistory(username: string) {
      this.users.unshift(username)
    }
  }
})
