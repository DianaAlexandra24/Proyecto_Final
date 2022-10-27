<template >
 
    <div class=" bg-neutral-800	w-full h-full	absolute ">
      <p v-if="loading">Loading ....</p>
      <main v-if="data">
      <div class="mt-60 mb-20">
        
      <p class="mb-3 font-light text-white dark:text-white first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">{{data.original_title}}</p>
      <p class="font-light text-white dark:text-gray-300">{{data.overview}}</p>



          <div v-if="data3">
            <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${data3}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
      </div>


    </main>
   


    </div>
      


</template>
    
    <script>

    import axios from "axios";

    

    
      export default {
        props:['id'],
      data() {
        return {
          data: null,
          data3:null,
          loading:false,
          autoplay:false
         
        };
      },
        methods:{
          getFilms(){
            axios.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=b22a57acb6df2a99f477aab48d4a36c3&language=en-US`)
          .then(response => {
            this.data = response.data
            
          })
          
        },
        getTrailer(){
          axios.get(`https://api.themoviedb.org/3/movie/${this.id}/videos?api_key=b22a57acb6df2a99f477aab48d4a36c3&language=en-US`)
          .then(response => {
            this.data3 = response.data.results[0].key
            console.log(this.data3) 
          })
          .catch(error => {
            console.log(error);
          })
          .then(() => {
            this.loading = false;
          })  
        },
        cleaning(){
          this.search=""
        }
    
        },
        mounted(){
          this.getFilms(),
          this.getTrailer()
        },

    }
        

    
      </script>