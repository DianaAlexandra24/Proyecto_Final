<template>
  <div class="text-white body-font fixed top-0 bg-gradient-to-b from-black w-full z-50 scroll-smooth ">
    <div class=" px-16 flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <img src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png" class="w-24" alt="Netflix Logo">
          </a>
          <vs-navbar target-scroll="#padding-scroll-content" padding-scroll center-collapsed v-model="active" class="flex gap-5 ml-5   ">
  
          <vs-navbar-item  class="font-semibold hover:text-red-700	cursor-pointer" >
            <router-link to="/" v-on:click="cleaning()">Inicio</router-link>

          </vs-navbar-item>
          
          <vs-navbar-item  class="font-semibold hover:text-red-700	cursor-pointer" >
          
            <router-link to="/PeliculasAPI" v-on:click="cleaning()">Peliculas</router-link>
  
          </vs-navbar-item>


  
          </vs-navbar>
  
            <div class="nav_end md:ml-auto hidden lg:flex flex-wrap space-x-6 items-center text-base justify-center font-semibold ">
                <div ><input class="text-black	" v-model="search"  placeholder="search"/>
                  <router-link :to="`/Search/${search}`"><button  ><i class="fa-solid fa-magnifying-glass"></i> 
                  </button></router-link>
                  </div>
                  <div><i class="fa-solid fa-bell cursor-pointer"></i></div>
                   <div class="account_login">
                    <button class="Salir"> Salir</button> 
                    </div>
                          
              </div>
  
            
  
    </div>
    
  </div>
  
  
  <router-view/>
  
  </template>

<script>
import NavBar from "./components/Morefilms.vue"
import PeliculasAPI from "./components/PeliculasAPI.vue"
import Films from "./components/Films.vue"
import Search from "./components/Search.vue"


export default{
  components:{
    NavBar,
    PeliculasAPI,
    Films,
    Search
},
  data(){
    return {
      data:true,
      active: 'guide',
      inputing:false,
      search:null
      
    }
  },
  methods :{
      UserInput(){
        inputing=true
        
      },
      cleaning(){
        this.search=""

        }
        
      
    },
  
}
</script>

