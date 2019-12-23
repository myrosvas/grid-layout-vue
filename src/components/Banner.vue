<template>
  <img class="image" :src="src" />
</template>

<script>
export default {
  props: {
    src: String
  }
}
</script>