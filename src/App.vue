<template>
  <div class="joy">
  <navbar-comp/>
  <!-- <router-view/> -->
   <home-view/>
  <about-view/>
  <resume-view/>
  <projects-view/>
  <testimonials-view/>
  <contact-view/>
  <footer-comp/>
  </div>
  </template>
<script>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ResumeView from '@/views/ResumeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import TestimonialsView from '@/views/TestimonialsView.vue'
import ContactView from '@/views/ContactView.vue'
export default{
  components:{
    NavbarComp,
    FooterComp,
    HomeView,
    AboutView,
    ResumeView,
    ProjectsView,
    TestimonialsView,
    ContactView
  }
}
</script>
<style>
body{
  background: rgb(116, 114, 114);
}
*{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: white;

}

nav{
  padding: 30px;
  
}

/* .ho{
  overflow: hidden;
  } */
  nav a {
  background-color: rgb(116, 114, 114);
  border-radius: 2rem;
  padding: 5px;
  font-weight: bold;
  color: white;
  margin: 2px;
}

/* .nav-item a.exact-active {
  color: #76b942;
} */
/* .joy{
  overflow: hidden;
} */
@media screen and (max-width:780px) {
    /* body{
        color: white;
      } */
      .joy{
        display: grid;
        /* overflow: hidden; */
        
    }
    img{
      width: 20%;
    }
    
}
</style>
