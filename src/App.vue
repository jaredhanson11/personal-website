<template>
  <div id="app">
    <TheNavbar :items="navItems" />
    <HomePage />
    <TheStickyFooter :items="footerItems" />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import HomePage from '@/components/home/HomePage.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheStickyFooter from '@/components/TheStickyFooter.vue'
export default {
  name: 'App',
  components: {
    TheNavbar,
    HomePage,
    TheStickyFooter,
    TheFooter
  },
  data() {
    return {
      navItems: this.$store.state.nav.items,
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
  padding-top: 70px; /* Height of navbar */
}
</style>
