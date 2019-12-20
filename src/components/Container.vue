<template>
<div class="container">
  <div
    v-for="image in images"
    :key="image.src"
    class="image-wrapper"
    :class="[`row${image.row}`, `column${image.column}`]"
  >
    <img class="image" :src="image.src" />
  </div>
</div>
</template>

<script>
import { images } from '../../config/data';

export default {
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
    height: 600px;
    width: 100%;
    display: grid;
    grid-template-rows: 300px 300px;
    grid-template-columns: repeat(4, 1fr);

    .image {
      width: 100%;
      height: 100%;
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