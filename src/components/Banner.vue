<template>
  <img
    class="image"
    :src="src"
    tabindex="0"
  />
</template>

<script>
export default {
  props: {
    src: String,
    url: String
  }
}
</script>

<style lang="scss" scoped>
</style>