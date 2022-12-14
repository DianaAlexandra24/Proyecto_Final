 import Morefilms from   "./components/Morefilms.vue"
 import Home from "./components/Home.vue"
 import PeliculasAPI from "./components/PeliculasAPI.vue"
 import Films from "./components/Films.vue"
 import Search from "./components/Search.vue"
 
 
 
 export const routes = [
    {path:'/', component: Home},
    {path:'/PeliculasAPI', component: PeliculasAPI},
    {path:'/Morefilms', component: Morefilms},
    {path:'/Films/:id', component: Films, props:true},
    {path:'/Search/:search', component: Search, props:true},

  ]