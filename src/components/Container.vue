<template>
<div class="container"
  :style="{
    'grid-template-columns': columns
  }"
>
  <div
    v-for="image in images"
    :key="image.src"
    class="image-wrapper"
    :class="[`row${image.row}`, `column${image.column}`]"
  >
    <Banner v-if="image.type === 'banner'" :src="image.src" />
  </div>
  <!-- <Slider /> -->
</div>
</template>

<script>
import Banner from './Banner';
import Slider from './Slider';

export default {
  components: {
    Banner,
    Slider
  },
  props: {
    columns: String,
    images: Array
  },
  data: () => {
    return ({
        images: images
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';

  .container {
    width: 100%;
    display: grid;
    grid-template-rows: fit-content(100%);

    .image {
      width: 100%;
      height: 100%;
    }

    .image-wrapper {
      display: flex;
    }

    .row1 {
      grid-row: 1;
    }

    .row2 {
      grid-row: 2;
    }

    .row1-2 {
      grid-row: 1 / 3;
    }

    .column1 {
      grid-column: 1;
    }

    .column2 {
      grid-column: 2;
    }

    .column3 {
      grid-column: 3;
    }

    .column4 {
      grid-column: 4;
    }

    .column1-2 {
      grid-column: 1 / 3;
    }

    .column1-3 {
      grid-column: 1 / 4;
    }

    .column1-4 {
      grid-column: 1 / 5;
    }

    .column2-3 {
      grid-column: 2 / 4;
    }

    .column2-4 {
      grid-column: 2 / 5;
    }

    .column3-4 {
      grid-column: 3 / 5;
    }
  }
</style>