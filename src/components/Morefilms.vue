<template >
 
  <div class=" bg-neutral-800	w-full h-full	absolute ">
    <p v-if="loading">Loading ....</p>
    <main v-if="data2">
    <div class="mt-60 mb-20">
      
    <p class="mb-3 font-light text-white dark:text-white first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">{{data2.results[0].title}}</p>
    <p class="font-light text-white dark:text-gray-300">{{data2.results[0].overview}}</p>
    <video class="mt-10" src="../../public/BombitasDeAgua.mp4" autoplay  controls></video>



    </div>

    
  </main>
 


  </div>
    
  </template>
  
  <script>

  import axios from "axios";

  
    export default {
    data() {
      return {
        data2: null,
        loading:false,
       
      };
    },
      methods:{
        getFilms2(){
          axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b22a57acb6df2a99f477aab48d4a36c3&language=en-US&query=Harry%20Potter&page=1&include_adult=false`)
        .then(response => {
          this.data2 = response.data
          console.log(response.this.data2.results[0].title)
        })
        
      },
  
      },
      mounted(){
        this.getFilms2()
      },

  }
      

  
    </script>