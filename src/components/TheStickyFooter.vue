<template>
  <div id="sticky-footer">
    <a :href="item.to" v-for="(item, idx) in items" :key="idx">
      <img id="sticky-footer-icon" :src="require(`@/assets/img/${item.img}`)" />
    </a>
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
  position: fixed;
  bottom: 2%;
  left: 2%;
}
#sticky-footer-icon {
  height: 40px;
  width: auto;
  border-radius: 50%;
}
</style>
