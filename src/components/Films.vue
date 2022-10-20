<template>
  <div>
    <p v-if=loading>"Cargando informacion...."</p>
    <h1 class="text-white" v-if="data">Detalles Peli {{data.overview}}</h1>


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
            axios.get(`https://api.themoviedb.org/3/find/${this.id}?api_key=b22a57acb6df2a99f477aab48d4a36c3&language=en-US&external_source=imdb_id`)
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

    }
    
      </script>