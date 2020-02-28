<template>
  <b-container
    id="my-projects"
    :style="`padding-top: ${navHeight}; margin-top: -${navHeight}`"
  >
    <b-row align-v="center" align-h="center"
      ><VSectionHeader :header="`Projects`"
    /></b-row>
    <b-row></b-row>
  </b-container>
</template>

<script>
import VSectionHeader from '@/components/common/VSectionHeader.vue'
export default {
  name: 'MyProjects',
  components: { VSectionHeader },
  computed: {
    navHeight() {
      return this.$store.state.nav.height
    }
  }
}
</script>

<style scoped>
#my-projects {
  height: 100vh;
}
</style>
