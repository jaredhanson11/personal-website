<template>
  <b-container
    id="my-experience"
    :style="`padding-top: ${navHeight}; margin-top: -${navHeight}`"
  >
    <b-row align-v="center" align-h="center"
      ><VSectionHeader :header="`My Experience`"
    /></b-row>
    <VExperienceItem
      :key="idx"
      v-for="(item, idx) in experienceItems"
      :name="item.name"
      :position="item.position"
      :timeline="item.timeline ? item.timeline : ''"
      :bullets="item.bullets"
    />
    <b-row></b-row>
  </b-container>
</template>

<script>
import VSectionHeader from '@/components/common/VSectionHeader.vue'
import VExperienceItem from '@/components/home/experience/VExperienceItem.vue'
export default {
  name: 'MyExperience',
  components: {
    VSectionHeader,
    VExperienceItem
  },
  computed: {
    navHeight() {
      return this.$store.state.nav.height
    },
    experienceItems() {
      return this.$store.state.experience.items
    }
  }
}
</script>

<style scoped>
#my-experience {
  height: 100vh;
}
</style>
