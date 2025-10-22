// stores/team.ts
import { defineStore } from 'pinia'

export type Character = {
  id: number
  name: string
  image?: string
  gender?: string
  // add these to enforce the "no evil" rule in the store as well
  affiliations?: string[] | null
  masters?: string[] | null
}

const MAX = 5

/** Evil rule: 'darth' or 'sith' in name, any affiliation, or any master */
export function isEvilCharacter(c: Partial<Character>): boolean {
  const t = (x: any) => String(x || '').toLowerCase()
  if (/(darth|sith)/.test(t(c.name))) return true
  if (Array.isArray(c.affiliations) && /(darth|sith)/.test(t(c.affiliations.join(' ')))) return true
  if (Array.isArray(c.masters) && /(darth)/.test(t(c.masters.join(' ')))) return true
  return false
}

export const useMyTeamStore = defineStore('myTeamStore', {
  state: () => ({
    members: [] as Character[],
    max: MAX
  }),

  getters: {
    size: (s) => s.members.length,
    isFull: (s) => s.members.length >= s.max,
    isInTeam: (s) => (id: number) => s.members.some(m => m.id === id),
  },

  actions: {
    addToTeam(character: Character) {
      if (this.isInTeam(character.id)) return { ok: true, already: true }
      if (isEvilCharacter(character)) return { ok: false, reason: 'EVIL_FORBIDDEN' as const }
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

    // simple persistence without extra plugins
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
