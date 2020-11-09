export const state = () => ({
  activePage: null,
})

export const getters = {
  getActivePage(state) {
    return state.activePage
  },
}

export const mutations = {
  setActivePage(state, payload) {
    state.activePage = payload
  },
}

export const actions = {
  updateActivePage({ commit }, payload) {
    commit('setActivePage', payload)
  },
}
