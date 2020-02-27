<template>
  <b-navbar
    id="navbar"
    :style="`height: ${height}`"
    fixed="top"
    variant="light"
    toggleable="md"
  >
    <b-navbar-brand id="navbar-brand" to="/#">
      <img src="@/assets/img/jh-logo-transparent-bg.png" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav id="navbar-nav" class="ml-auto">
        <b-nav-item
          exact-active-class="active"
          :to="item.to"
          :key="idx"
          v-for="(item, idx) in items"
          class="ml-auto"
          >{{ item.name }}</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'TheNavbar',
  props: {
    items: {
      type: Array,
      required: true
    },
    height: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar-brand {
  height: 100%;
}
#navbar-brand img {
  height: 100%;
}
</style>
