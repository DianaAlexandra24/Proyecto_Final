<template>
  <div class="main  relative">
    <div class=" mt-20">
          <div class="flex   ml-10"> <h2 class="text-white text-2xl font-semibold	mb-0 "> Tendencias ahora</h2></div>
      <swiper 
        :slidesPerView="6"
        :spaceBetween="10"
        :slidesPerGroup="3"
        :loop="true"
        :loopFillGroupWithBlank="false"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper mt-10  "> 
        <swiper-slide v-for="film in data" :key="film.id"><router-link :to="`Films/${film.id}`"><img class="hover:scale-110 transition duration-300 ease-in-out" :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`"></router-link></swiper-slide>
        </swiper>
    </div>
    <div class="mt-20 ">
         <h2 class="text-white text-2xl font-semibold	 "> Los 10 mas populares hoy</h2>
    <swiper 
      :slidesPerView="6"
      :spaceBetween="10"
      :slidesPerGroup="3"
      :loop="true"
      :loopFillGroupWithBlank="false"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper mt-10  "> 
      <swiper-slide v-for="film in data" :key="film.id"><router-link :to="`Films/${film.id}`"><img class="hover:scale-110 transition duration-300 ease-in-out" :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`"></router-link></swiper-slide>
      </swiper>
      
    </div>
</div>

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
        props:{
   

        },
        getId(url) {
      return url.split("/").reverse()[1];
    },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>