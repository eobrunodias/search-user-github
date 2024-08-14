import { defineStore } from "pinia"
import type { TypeUser } from "../components/Profile.vue"

export const useSearchHistory = defineStore("searchHistory", {
  state: () => {
    return {
      users: [] as TypeUser[]
    }
  },
  actions: {
    loadFromLocalStorage() {
      const storedUsers = localStorage.getItem("users")
      if (storedUsers) {
        this.users = JSON.parse(storedUsers)
      }
    },
    removeUser(index: number) {
      if (index > -1 && index < this.users.length) {
        this.users.splice(index, 1)
        this.saveLocalStorage()
      }
    },
    pushToHistory(user: TypeUser) {
      const currentDate = `${new Date().toLocaleString()}`.replace(", ", " | ")
      this.users.unshift({ ...user, recordedAt: currentDate })
      this.saveLocalStorage()
    },
    saveLocalStorage() {
      localStorage.setItem("users", JSON.stringify(this.users))
    }
  }
})
