<template>
    <router-view>


        <div class="w-full h-screen relative">
            <div class="absolute w-full h-full z-10 ">
                <div class="px-16  h-full flex items-center justify-start"> 
                    <div class="hidden lg:flex flex-col w-2/5 space-y-4 py-12 ">
                        <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABe_MJtJKPmsSU3pjUiW7bRyT8Hg_kAJPLRj6rNNltpjGgSphvfVGjXLQ-_Ic1FIYJ319RRDnIdqPk9D8Uq2X8oHSGVrwbHfx3j1dW_6GncJ2IKZ3OVRybWHjTMdUVY_CLeo3z2EQotzC1-faA7LSygaF5sxsqoskzrVPj6n-NS80jg.png?r=4af" alt="">
                            <h3 class="text-2xl font-semibold text-white ">Bombitas de Aguas</h3>
                            <p class="text-lg text-white">La canción, nostalgia en estado puro, apela a la memoria de un hombre de 40 años que repasa las mejores postales de su infancia.</p>
                            <div class="flex space-x-4 flex-row w-full">
                                <button  @click="PlayVideo()" class=" px-3 mt-5 items-center shadow-md rounded-lg bg-white  space-x-2 py-2 justify-center flex w-32">
                                    <span class="text-gray-800 font-semibold"> <i class="fa-solid fa-play  "></i>Reproducir</span>
                                </button>
                                <button  class=" px-3 mt-5 items-center shadow-md rounded-lg bg-gray-500 bg-opacity-50  space-x-2 py-2 justify-center flex w-auto">
                                    <span class="text-white font-semibold"><i class="fa-solid fa-circle-info"></i>Mas Informacion</span>
                                </button>
                                <!-- <iframe class="w-full h-screen aspect-video      muted " src="\public\galeria\bombitas.mp4"></iframe>*/-->


                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
                                   

        </router-view>


</template>



<script>
import NavBar from './NavBar.vue';


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
    components: { NavBar }
}
</script>

