<template>
<div class="dashboard">
  <ul v-for="(image, index) in images" :key="image">
    <li class="list-item">
      <a :href="image" class="image-link">Image {{index + 1}}</a>
        <div class="select-wrapper">row:
          <select id="row">
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div class="select-wrapper">column:
          <select id="column">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>1-2</option>
            <option>1-3</option>
            <option>1-4</option>
            <option>2-3</option>
            <option>2-4</option>
            <option>3-4</option>
          </select>
        </div>
    </li>
  </ul>
</div>
</template>

<script>
import { images } from '../../config/index';

export default {
  data: () => {
    return ({
        images: images
    })
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  .image-link {
    margin-right: 20px;
  }

  .select-wrapper {
    margin: 0 15px;
  }

  .list-item {
    display: flex;
  }
}

</style>