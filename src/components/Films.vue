<template>
 
    <div class=" bg-red-100	 w-96 h-96 ">
      <p v-if="loading">Loading ....</p>
      <main v-if="data">
        <p> {{data.overview}}</p>
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
          loading:false,
         
        };
      },
        methods:{
          getFilms(){
            axios.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=b22a57acb6df2a99f477aab48d4a36c3&language=en-US`)
            //axios.get(`https://api.themoviedb.org/3/find/${this.id}?api_key=b22a57acb6df2a99f477aab48d4a36c3&language=en-US&external_source=imdb_id`)
          .then(response => {
            this.data = response.data
          })
          
        },
    
        },
        mounted(){
          this.getFilms()
        },

    }
    
      </script>