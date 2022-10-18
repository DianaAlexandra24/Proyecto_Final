<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper  mt-80">

      <swiper-slide v-if="data"  v-for="film in data"  >
        
          <img 
              className="object-fill w-full "
              :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`"
              alt="image slide 1" 
          /> 

      </swiper-slide>
                

  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";


import { Navigation } from "swiper";

export default {
  data() {
    return {
      data: null,
      loading:false
    };
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
  components: {
      Swiper,
      SwiperSlide,
  },
  setup() {
      return {
          modules: [Navigation],
      };
  },
};
</script>