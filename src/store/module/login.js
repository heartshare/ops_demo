const types = {
  SET_AUTH: 'SET_AUTH',
  SET_USER: 'SET_USER'
}

const login = {
  state: {
    isAuth: false,
    loginUser: {}
  },
  getters: {
    isAuth: state => state.isAuth,
    loginUser: state => state.loginUser
  },
  mutations: {
    [types.SET_AUTH] (state, isAuth) {
      if (isAuth) {
        state.isAuth = isAuth
      } else {
        state.isAuth = false
      }
    },
    [types.SET_USER] (state, loginUser) {
      if (loginUser) {
        state.loginUser = loginUser
      } else {
        state.loginUser = {}
      }
    }
  },
  actions: {
    setAuth: ({commit}, isAuth) => {
      commit(types.SET_AUTH, isAuth)
    },
    setUser: ({commit}, loginUser) => {
      commit(types.SET_USER, loginUser)
    },
    clearCurrentState: ({commit}) => {
      commit(types.SET_AUTH, false)
      commit(types.SET_USER, null)
    }
  }
}
export default login
