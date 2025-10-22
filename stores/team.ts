// stores/team.ts
import { defineStore } from 'pinia'

// adjust to taste
export type Character = {
  id: number
  name: string
  image?: string
  gender?: string
}

export const useMyTeamStore = defineStore('myTeamStore', {
  state: () => ({
    members: [] as Character[],
    max: 5
  }),

  getters: {
    size: (s) => s.members.length,
    isFull: (s) => s.members.length >= s.max,
    isInTeam: (s) => (id: number) => s.members.some(m => m.id === id),
  },

  actions: {
    addToTeam(character: Character) {
      if (this.isInTeam(character.id)) return { ok: true, already: true }
      if (this.isFull) return { ok: false, reason: 'TEAM_FULL' as const }
      this.members.push(character)
      this.save()
      return { ok: true }
    },
    removeFromTeam(characterOrId: Character | number) {
      const id = typeof characterOrId === 'number' ? characterOrId : characterOrId.id
      this.members = this.members.filter(m => m.id !== id)
      this.save()
    },
    toggle(character: Character) {
      return this.isInTeam(character.id)
        ? (this.removeFromTeam(character.id), { removed: true })
        : this.addToTeam(character)
    },
    clear() {
      this.members = []
      this.save()
    },
    // simple persistence (works without extra plugins)
    save() {
      if (process.client) localStorage.setItem('team', JSON.stringify(this.members))
    },
    load() {
      if (process.client) {
        try { this.members = JSON.parse(localStorage.getItem('team') || '[]') }
        catch { this.members = [] }
      }
    },
  },

})
