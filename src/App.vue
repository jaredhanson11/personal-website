<template>
  <div id="app">
    <TheNavbar :height="navHeight" :items="navItems" />
    <Home />
    <TheStickyFooter :items="footerItems" />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import Home from '@/views/Home.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheStickyFooter from '@/components/TheStickyFooter.vue'
export default {
  name: 'App',
  components: {
    TheNavbar,
    Home,
    TheStickyFooter,
    TheFooter
  },
  data() {
    return {
      navItems: this.$store.state.nav.items,
      navHeight: this.$store.state.nav.height,
      footerItems: this.$store.state.footer.items
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
