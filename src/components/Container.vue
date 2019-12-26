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
    :class="[`row${image.row}`, `column${image.column}`, {clickable: image.url}]"
    @click="redirect(image.url)"
  >
    <Banner
      v-if="image.type === 'banner'"
      :src="image.src"
    />
    <template v-if="image.text">
      <div class='text-wrapper' v-for="item in image.text" :key="item.text">
        <span
          :style="{
            position: 'absolute',
            top: item.top,
            left: item.left,
            fontSize: item.fontSize,
            color: item.color,
            fontFamily: item.fontFamily
          }"
        >
          {{item.text}}
        </span>
      </div>
    </template>
    <template v-if="image.type === 'banner'">
      <div
        class="link-wrapper"
        v-for="link in image.links"
        :key="link.text"
      >
        <a
          class="banner-link"
          :style="{
            top: link.top,
            left: link.left,
            fontSize: link.fontSize,
            fontFamily: link.fontFamily,
            color: link.color,
            zIndex: 1
          }"
          :href="link.url"
        >
          {{link.text}}
        </a>
      </div>
    </template>
    <Slider v-else />
  </div>
</div>
</template>

<script>
import Banner from './Banner';
import Slider from './Slider';

export default {
  // mounted: function () {
  //   console.log(this.images)
  // },
  components: {
    Banner,
    Slider
  },
  props: {
    columns: String,
    images: Array
  },
  methods: {
    redirect: (url) => {
      if(url) {
        window.open(url);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';

  .container {
    width: 100%;
    display: grid;
    grid-template-rows: fit-content(100%);
    grid-row-gap: 2px;
    grid-column-gap: 2px;

    .link-wrapper {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }

    .banner-link {
      position: absolute;
      text-decoration: underline;

      &:hover {
        cursor: pointer;
      }
    }

    .image {
      width: 100%;
      height: 100%;
    }

    .image-wrapper {
      display: flex;
      position: relative;
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

    .row2-3 {
      grid-row: 2 / 4;
    }

    .row3-4 {
      grid-row: 3 / 5;
    }

    .row4-5 {
      grid-row: 4 / 6;
    }

    .row5-6 {
      grid-row: 5 / 7;
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

    .clickable {
      cursor: pointer;
    }
  }
</style>