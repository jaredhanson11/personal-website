<template>
  <div id="sticky-footer">
    <img
      :key="idx"
      v-for="(item, idx) in items"
      id="sticky-footer-icon"
      :src="require(`@/assets/img/${item.img}`)"
    />
  </div>
</template>

<script>
export default {
  name: 'TheStickyFooter',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
#sticky-footer {
  display: fixed;
  bottom: 0;
}
#sticky-footer-icon {
  height: 40px;
  width: auto;
}
</style>
