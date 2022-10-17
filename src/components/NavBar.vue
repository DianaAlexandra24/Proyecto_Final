<template>
<div class="text-white body-font fixed top-0 bg-gradient-to-b from-black w-full z-50">
  <div class=" px-16 flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png" class="w-24" alt="Netflix Logo">
        </a>
        <vs-navbar target-scroll="#padding-scroll-content" padding-scroll center-collapsed v-model="active" class="flex gap-5 ml-5">

        <vs-navbar-item  class="font-semibold hover:text-red-700	cursor-pointer" >
          Inicio
        </vs-navbar-item>
        
        <vs-navbar-item  class="font-semibold hover:text-red-700	cursor-pointer" >
        
          <router-link to="/PeliculasAP">Peliculas</router-link>

        </vs-navbar-item>
        <vs-navbar-item  class="font-semibold hover:text-red-700	cursor-pointer">
          <router-link to="/PeliculasAP">Proximos estrenos!! </router-link>

          
        </vs-navbar-item>

        </vs-navbar>

          <div class="nav_end md:ml-auto hidden lg:flex flex-wrap space-x-6 items-center text-base justify-center font-semibold ">
              <div v-on:click="inputing =true" v-if="!inputing"><button><i class="fa-solid fa-magnifying-glass"></i></button></div>  
              <div v-else="inputing"><input class="text-black	" v-model="search" placeholder="search"/> <button v-on:click="cleaning() "><i class="fa-solid fa-magnifying-glass"></i></button></div>
                <div><i class="fa-solid fa-bell cursor-pointer"></i></div>
                 <div class="account_login">
                  <button class="Salir"> Salir</button> 
                  </div>
                        
            </div>

          


  </div>
</div>  

<router-view></router-view>

</template>

<script>
import PeliculasAPI from "./PeliculasAPI.vue"

  export default {
    data:() => ({
      active: 'guide',
      inputing:false,
      search:""
    }),
    components:{PeliculasAPI},
    methods :{
      UserInput(){
        inputing=true
        search=""
        
      },
      cleaning(){
        
     
          this.inputing=false
          this.search=""
          
        }
        
      
    },
    mounted() {
    if (localStorage.search) {
      this.search = localStorage.search;
    }
  },

  
  }
  </script>