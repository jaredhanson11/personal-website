<template>
  <div id="section-header">
    <h2>{{ header }}</h2>
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    header: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
#section-header {
  text-align: center;
}
</style>
