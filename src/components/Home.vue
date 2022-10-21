<template>
    <router-view>


        <section class="  w-screen  ">
            <div class=" w-full h-full flex relative">
            <div class=" bg-gradient-to-t from-black w-full h-1/2   ">
                <div class="mt-20 relative"> <img src="public\galeria\80594.jpg " class="w-full h-full " alt="..." />

                
                <div class="p-6 max-w-sm bg-transparent rounded-lg  border-none shadow-md dark:bg-gray-900 dark:border-gray-800 absolute  mt-0  ">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Harry Potter y la piedra filosofal</h5>
                    </a>
                    <p class=" font-normal text-gray-700 dark:text-gray-400">La serie cinematográfica de Harry Potter comprende ocho películas basadas en Harry Potter, una serie de siete novelas juveniles escritas por la autora británica J. K. Rowling</p>
                    <a href="#" class=" mt-10 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-800 font-semibold  rounded-lg bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Reproducir
                    </a>
                </div>
            </div>

      

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

