<template>
    <simple-carousel-container loop :watch-it="photos">
        <simple-carousel-item v-for="(photo, index) in photos" :key="index">
            <img :src="photo">
        </simple-carousel-item>
    </simple-carousel-container>
</template>
 
<script>
    import { SimpleCarouselContainer, SimpleCarouselItem } from 'vue-simple-carousel';

    export default {
      components: {
        SimpleCarouselContainer,
        SimpleCarouselItem
      },
      data() {
        return {
          photos: [
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            'https://images.pexels.com/photos/146083/pexels-photo-146083.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          ]       
        }
      }
    };
</script> 