<template>
  <b-row
    id="landing-intro"
    :style="`height: calc(100vh - ${navHeight})`"
    align-v="center"
    align-h="center"
  >
    <b-col>
      <div id="landing-text">{{ landingText }}</div>
      <div id="landing-cursor" :class="{ hidden: hideCursor }">
        &#9611;
      </div>
    </b-col>
  </b-row>
</template>

<script>
const BLINK_INTERVAL = 1500
export default {
  name: 'LandingIntro',
  data() {
    return {
      navHeight: this.$store.state.nav.height
    }
  },
  computed: {
    hideCursor() {
      return !this.$store.state.landing.cursorShown
    },
    landingText() {
      return this.$store.state.landing.text
    }
  },
  mounted() {
    const store = this.$store
    setInterval(() => {
      store.commit('toggleCursor')
    }, BLINK_INTERVAL)
  }
}
</script>

<style scoped>
#landing-intro {
  text-align: center;
}
#landing-text,
#landing-cursor {
  display: inline;
}
#landing-cursor {
  transition: opacity 0.5s ease-in;
  -webkit-transition: opacity 0.5s ease-in;
  -moz-transition: opacity 0.5s ease-in;
  -ms-transition: opacity 0.5s ease-in;
  -o-transition: opacity 0.5s ease-in;
}
#landing-cursor.hidden {
  opacity: 0;
}
</style>
