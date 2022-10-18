<template>
<div>
    <div class="peliculas-recomendadas contenedor mt-80">
			<div class="contenedor-titulo-controles">
				<h3>Películas Recomendadas</h3>
				<div class="indicadores"></div>
			</div>

			<div class="contenedor-principal">
				<button role="button" id="flecha-izquierda" class="flecha-izquierda"><i class="fas fa-angle-left"></i></button>

				<div class="contenedor-carousel " >
					<div class="carousel"  >
						<div class="pelicula " v-for="film in data">
							<a href="#"><img :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`" alt=""></a>
						</div>
					
					</div>
				</div>

				<button role="button" id="flecha-derecha" class="flecha-derecha"><i class="fas fa-angle-right"></i></button>
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
