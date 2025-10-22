import { defineStore } from 'pinia';

const MAX = 5;
function isEvilCharacter(c) {
  const t = (x) => String(x || "").toLowerCase();
  if (/(darth|sith)/.test(t(c.name))) return true;
  if (Array.isArray(c.affiliations) && /(darth|sith)/.test(t(c.affiliations.join(" ")))) return true;
  if (Array.isArray(c.masters) && /(darth)/.test(t(c.masters.join(" ")))) return true;
  return false;
}
const useMyTeamStore = defineStore("myTeamStore", {
  state: () => ({
    members: [],
    max: MAX
  }),
  getters: {
    size: (s) => s.members.length,
    isFull: (s) => s.members.length >= s.max,
    isInTeam: (s) => (id) => s.members.some((m) => m.id === id)
  },
  actions: {
    addToTeam(character) {
      if (this.isInTeam(character.id)) return { ok: true, already: true };
      if (isEvilCharacter(character)) return { ok: false, reason: "EVIL_FORBIDDEN" };
      if (this.isFull) return { ok: false, reason: "TEAM_FULL" };
      this.members.push(character);
      this.save();
      return { ok: true };
    },
    removeFromTeam(characterOrId) {
      const id = typeof characterOrId === "number" ? characterOrId : characterOrId.id;
      this.members = this.members.filter((m) => m.id !== id);
      this.save();
    },
    toggle(character) {
      return this.isInTeam(character.id) ? (this.removeFromTeam(character.id), { removed: true }) : this.addToTeam(character);
    },
    clear() {
      this.members = [];
      this.save();
    },
    // simple persistence without extra plugins
    save() {
    },
    load() {
    }
  }
});

export { isEvilCharacter as i, useMyTeamStore as u };
//# sourceMappingURL=team-89d0l36M.mjs.map
