<template>
    <router-view>


        <section class="  w-screen  ">
            <div class=" w-full h-full flex relative">
            <div class=" bg-gradient-to-t from-black w-full h-1/2   ">
                <video  autoplay loop muted src="public\Germán Barceló-Bombitas de agua-Video-Backstage (720p_25fps_H264-128kbit_AAC).mp4"  class="  object-cover w-full "></video>
                <button @click="PlayVideo()" class=" rounded-lg bg-white py-2 justify-center item-center flex h-12 w-48  ml-12 absolute bottom-20">
                    <span class="text-gray-800 font-semibold "> <i class="fa-solid fa-play "> </i>  Reproducir</span>
                </button>
                <button  class="rounded-lg bg-white py-2 justify-center flex h-12 w-48  ml-80 absolute  item-center bottom-20">
                 <span class="text-gray-800 font-semibold"><i class="fa-solid fa-circle-info"></i> Mas Informacion</span>
                 </button>       

            </div>
        </div>
    
                
            
        </section>


                <PeliculasAPI></PeliculasAPI>

        </router-view>


</template>



<script>
import NavBar from './NavBar.vue';
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
    components: { NavBar, Films, PeliculasAPI }
}
</script>

