import Vue from 'vue'
import Vuex from 'vuex'
import navItems from '@/store/navItems.js'
import footerItems from '@/store/footerItems.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nav: {
      items: navItems,
      height: '70px'
    },
    footer: {
      items: footerItems
    },
    landing: {
      cursorShown: true,
      text: 'Hello',
      message: ['Hi, my name is Jared.', 'Welcome!']
    }
  },
  mutations: {
    typeLandingText(state, payload) {
      Vue.set(state.landing, 'text', payload)
    },
    toggleCursor(state) {
      const toggle = !state.landing.cursorShown
      Vue.set(state.landing, 'cursorShown', toggle)
    }
  },
  actions: {},
  modules: {}
})
