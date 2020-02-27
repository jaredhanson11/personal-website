<template>
  <b-container
    id="my-experience"
    :style="`padding-top: ${navHeight}; margin-top: -${navHeight}`"
  >
    <b-row align-v="center" align-h="center"
      ><VSectionHeader :header="`My Experience`"
    /></b-row>
    <b-row></b-row>
  </b-container>
</template>

<script>
import VSectionHeader from '@/components/common/VSectionHeader.vue'
export default {
  name: 'MyExperience',
  components: {
    VSectionHeader
  },
  computed: {
    navHeight() {
      return this.$store.state.nav.height
    }
  }
}
</script>

<style scoped>
#my-experience {
  height: 100vh;
}
</style>
