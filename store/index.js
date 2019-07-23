export const state = () => ({
  count: 0
})

export const mutations = {
  setCount(state, nVal) {
    if (typeof nVal === 'number') {
      state.count = nVal
    }
  },

  add(state) {
    state.count += 1
  },

  decrease(state) {
    state.count -= 1
  }
}

export const actions = {
  SET_COUNT({commit}, nVal) {
    commit('setCount', nVal)
  }
}