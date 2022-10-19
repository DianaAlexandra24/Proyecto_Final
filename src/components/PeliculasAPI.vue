<template>
  <swiper 
    :slidesPerView="6"
    :spaceBetween="30"
    :slidesPerGroup="3"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper mt-80  " 
  > 
    <swiper-slide v-for="film in data"> <a href="#"><img class="w-full h-full" :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`" alt=""></a></swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import axios from "axios";


// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  data() {
        return {
          data: null,
          loading:false,
        }
      },
    components: {
    Swiper,
    SwiperSlide,
  },
    methods:{
          getFilms(){
            axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b22a57acb6df2a99f477aab48d4a36c3&language=en-US&page=1')
          .then(response => {
            this.data = response.data.results
          })
          .catch(error => {
            console.log(error);
          })
          .then(() => {
            this.loading = false;
          })      
        },
    
        },
        mounted(){
          this.getFilms()
        },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
