export const state = () => ({
  list: []
})

export const mutations = {
  addList(state, nVal) {
    state.list.push(nVal)
  },

  decreaseList(state) {
    if (state.list.length) {
      state.list.pop()
    }
  }
}