<template >
 
    <div class=" bg-neutral-800	w-full h-full	absolute ">
      <p v-if="loading">Loading ....</p>
      <main v-if="data">
      <div class="mt-60 mb-20">
        
      <p class="mb-3 font-light text-white dark:text-white first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">{{data.original_title}}</p>
      <p class="font-light text-white dark:text-gray-300">{{data.overview}}</p>

          <video class="mt-10" src="public\Germán Barceló-Bombitas de agua-Video-Backstage (720p_25fps_H264-128kbit_AAC).mp4" autoplay muted loop  controls></video>
          <video class="w-full" autoplay controls>
            <source src="public\Germán Barceló-Bombitas de agua-Video-Backstage (720p_25fps_H264-128kbit_AAC).mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>



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
        play(){
          
        }
      
    
        },
        mounted(){
          this.getFilms()
        },

    }
        

    
      </script>