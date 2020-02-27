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
      text: '',
      line: 0,
      letter: 0,
      lines: ['Hi, my name is Jared.', 'Welcome!']
    }
  },
  mutations: {
    nextLetter(state) {
      const currText = state.landing.text
      const currLine = state.landing.lines[state.landing.line]
      const isLastLine = state.landing.line == state.landing.lines.length - 1
      if (currText == currLine) {
        if (!isLastLine) {
          Vue.set(state.landing, 'letter', 0)
          Vue.set(state.landing, 'line', state.landing.line + 1)
          Vue.set(state.landing, 'text', '')
        }
      } else {
        const nextLetter = state.landing.letter + 1
        Vue.set(state.landing, 'letter', nextLetter)
        Vue.set(state.landing, 'text', currLine.substr(0, nextLetter))
      }
    },
    toggleCursor(state, payload) {
      var toggle = !state.landing.cursorShown
      if (payload != undefined) {
        toggle = payload
      }
      Vue.set(state.landing, 'cursorShown', toggle)
    }
  },
  actions: {},
  modules: {}
})
