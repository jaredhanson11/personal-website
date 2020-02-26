import Vue from 'vue'
import Vuex from 'vuex'
import navItems from '@/store/navItems.js'
import footerItems from '@/store/footerItems.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nav: {
      items: navItems
    },
    footer: {
      items: footerItems
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
