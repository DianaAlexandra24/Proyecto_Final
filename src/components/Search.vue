<template >
 
    <div class=" bg-neutral-800	w-full h-full	absolute ">
      <p v-if="loading">Loading ....</p>
      <div v-if="data2">
        <div class="mt-60 mb-20">
        
        <p class="font-light text-white dark:text-gray-300">{{data2.results[0].overview}}</p>
  
            <video class="mt-10" src="../../public/BombitasDeAgua.mp4" autoplay muted loop controls></video>
        </div>
        
      </div>

    </div>
      


</template>
    
    <script>

    import axios from "axios";

      export default {
        props:['search'],
      data() {
        return {
          data2:null,
          loading:false,
          autoplay:false
         
        };
      },
        methods:{

        getFilmsByName(){
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b22a57acb6df2a99f477aab48d4a36c3&language=en-US&query=${this.search}&page=1&include_adult=false`)
            .then(response => {
            this.data2 = response.data

          })
          
        },
      
    
        },
        mounted(){
          this.getFilmsByName()
        },

    }
        

    
      </script>