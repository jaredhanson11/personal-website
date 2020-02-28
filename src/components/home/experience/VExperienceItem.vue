<template>
  <b-row>
    {{ name }}
    {{ position }}
    {{ timeline }}
    {{ bullets }}
  </b-row>
</template>

<script>
export default {
  name: 'MyExperienceItem',
  props: {
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    bullets: {
      type: Array,
      required: true
    },
    timeline: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped></style>
