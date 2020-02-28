<template>
  <div id="home-page">
    <LandingIntro />
    <AboutMe />
    <hr />
    <MyProjects />
    <hr />
    <MyExperience />
  </div>
</template>

<script>
import LandingIntro from '@/components/home/LandingIntro.vue'
import AboutMe from '@/components/home/AboutMe.vue'
import MyProjects from '@/components/home/projects/MyProjects.vue'
import MyExperience from '@/components/home/experience/MyExperience.vue'
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
