 import NavBar from   "./components/NavBar.vue"
 import Home from "./components/Home.vue"
 import PeliculasAPI from "./components/PeliculasAPI.vue"
 import  Carrousel  from "./components/Carrousel.vue"
 
 
 
 export const routes = [
    {path:'/', component: Home},
    {path:'/PeliculasAPI', component: PeliculasAPI},
    {path:'/components/NavBar.vue', component: NavBar},
    {path:'/Carrousel', component: Carrousel}
  ]