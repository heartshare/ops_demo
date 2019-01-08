import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import login from './module/login'
import serverAuth from './module/server_auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    login,
    serverAuth
  }
})
