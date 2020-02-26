<template>
  <div id="home-page">
    <LandingIntro />
    <AboutMe />
    <MyProjects />
    <MyExperience />
  </div>
</template>

<script>
import LandingIntro from '@/components/home/LandingIntro.vue'
import AboutMe from '@/components/home/AboutMe.vue'
import MyProjects from '@/components/home/MyProjects.vue'
import MyExperience from '@/components/home/MyExperience.vue'
export default {
  name: 'Home',
  components: {
    LandingIntro,
    AboutMe,
    MyProjects,
    MyExperience
  },
  data() {
    return {}
  }
}
</script>

<style scoped></style>
