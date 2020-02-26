<template>
  <b-navbar id="navbar" fixed="top" variant="light">
    <b-navbar-brand id="navbar-brand" to="/">
      <img src="@/assets/img/jh-logo-transparent-bg.png" />
    </b-navbar-brand>
    <b-navbar-nav id="navbar-nav" class="ml-auto">
      <b-nav-item
        exact-active-class="active"
        :to="item.to"
        :key="idx"
        v-for="(item, idx) in items"
        >{{ item.name }}</b-nav-item
      >
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'TheNavbar',
  props: {
    items: {
      type: Array,
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
#navbar {
  height: 70px;
}
</style>
