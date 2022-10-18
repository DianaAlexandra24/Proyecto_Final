<template>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-80">
        <div class="rounded overflow-hidden shadow-lg" v-for=" film in data" :key="film.episode_id">
      <img class="w-full" src="/mountain.jpg" alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{film.title}}</div>
        <p class="text-gray-700 text-base">{{film.overview}}</p>
      </div>
      <div class="aspect-w-16 aspect-h-9">
        <button></button>
  <iframe src="https://www.youtube.com/embed/r9jwGansp1E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

    </div>
    </div>




</template>

<script>
import axios from "axios";

  // Import Swiper styles
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
    }
  }

  </script>
