<template>
    <router-view>


        <section class="  w-screen  ">
            <div class=" w-full h-full flex relative">
            <div class=" bg-gradient-to-t from-black w-full h-1/2   ">
<<<<<<< HEAD
                <img  src="public\galeria\80594.jpg"  class="object-cover md:h-full md:w-full "> <img>
                <router-link to="/Morefilms"> <button class=" rounded-lg bg-white py-2 justify-center item-center flex h-12 w-48  ml-12 absolute bottom-10 invisible  sm:visible">
=======
                <img  src="public\galeria\80594.jpg"  class=" w-full "> <img>
                <router-link to="/Morefilms"> <button class=" rounded-lg bg-white py-1 sm:py-2 justify-center item-center flex h-8 w-28 sm:h-12 w-48  ml-12 absolute bottom-10">
>>>>>>> 722bdf40d2c09a804ed8dd77c2f33110782f6cfa
                    <span class="text-gray-800 font-semibold "> <i class="fa-solid fa-play "> </i>  Reproducir</span>
                </button></router-link>

              
<<<<<<< HEAD
                <router-link to="/Morefilms"> <button  class="rounded-lg bg-transparent py-2 justify-center flex h-12 w-48  ml-80 absolute  item-center bottom-10  invisible sm:visible" muted loop>
=======
                <button  class="rounded-lg bg-transparent invisible sm:visible py-2 justify-center flex h-12 w-48  ml-80 absolute  item-center bottom-10">
>>>>>>> 722bdf40d2c09a804ed8dd77c2f33110782f6cfa
                 <span class="text-gray-100 font-semibold"><i class="fa-solid fa-circle-info"></i> Mas Informacion</span>

                 </button>  </router-link>

            </div>
          
        </div>
    
                
            
        </section>



        </router-view>
        <PeliculasAPI></PeliculasAPI>



</template>



<script>
import Morefilms from './Morefilms.vue';
import Films from "./Films.vue"
import PeliculasAPI from "./PeliculasAPI.vue"


export  default{
    data() {
        return {
            playing: false,
            video: "./public/video/bombitas.mp4"
        };
    },
    methods: {
        PlayVideo() {
            alert("aca")
        }
    },
    components: { Morefilms, Films, PeliculasAPI }
}
</script>

