import { defineStore } from 'pinia'

const MAX = 5

export const useMyTeamStore = defineStore({
  id: 'myTeamStore',
  state: () => ({
    members: [] as Character[]
  }),
  actions: {
    addToTeam(character: Character) {
      if (this.members.length < MAX) {
        this.members.push(character)
      }
    },
    removeFromTeam(character: Character) {
      this.members = this.members.filter(member => member.id !== character.id)
    }
  },
})
