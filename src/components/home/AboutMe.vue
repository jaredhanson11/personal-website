<template>
  <b-container id="about-me" class="text-center">
    <b-row align-v="center" align-h="center">
      <b-col>
        <VSectionHeader :header="header" />
      </b-col>
    </b-row>
    <b-row id="aboutme-body" align-v="center" align-h="center">
      <b-col md="6" class="order-md-first">
        <p class="text-justify">{{ aboutMe }}</p>
      </b-col>
      <img
        id="aboutme-img"
        class="rounded order-first"
        :src="require(`@/assets/img/${img}`)"
      />
    </b-row>
    <b-row> </b-row>
  </b-container>
</template>

<script>
import VSectionHeader from '@/components/common/VSectionHeader.vue'
export default {
  name: 'AboutMe',
  components: {
    VSectionHeader
  },
  computed: {
    header() {
      return this.$store.state.aboutme.header
    },
    aboutMe() {
      return this.$store.state.aboutme.text
    },
    img() {
      return this.$store.state.aboutme.img
    }
  }
}
</script>

<style scoped>
#aboutme-img {
  max-height: 275px;
}
</style>
