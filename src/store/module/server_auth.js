const types = {
  SET_SERVER: 'SET_SERVER',
  SET_GROUP: 'SET_GROUP'
}

const serverAuth = {
  state: {
    ServerList: [],
    GroupList: []
  },
  getters: {
    ServerList: state => state.ServerList,
    GroupList: state => state.GroupList
  },
  actions: {
    setServerList: ({commit}, data) => {
      commit(types.SET_SERVER, data)
    },
    setGroupList: ({commit}, data) => {
      commit(types.SET_GROUP, data)
    }
  },
  mutations: {
    [types.SET_SERVER] (state, data) {
      state.ServerList = data
    },
    [types.SET_GROUP] (state, data) {
      state.GroupList = data
    }
  }
}
export default serverAuth
