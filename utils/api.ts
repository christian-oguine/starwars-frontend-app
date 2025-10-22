export const API_BASE_URL = 'https://akabab.github.io/starwars-api/api'

export const API_ENDPOINTS = {
  allCharacters: `${API_BASE_URL}/all.json`,
  characterById: (id: number | string) => `${API_BASE_URL}/id/${id}.json`,
}
