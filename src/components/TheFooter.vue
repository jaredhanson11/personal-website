<template>
  <footer id="the-footer" class="w-100 text-muted text-center">
    Copyright © 2016-{{ new Date().getFullYear() }} Jared Hanson
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {}
}
</script>

<style scoped>
#the-footer {
}

#the-footer-copyright {
}
</style>
