<template>
    <div id="projects" data-aos="fade-up"
    data-aos-duration="1000">
    <h1>Projects</h1>
        <card-comp>
        <template #proSlot>
            <section>
         <div class="card" style="width: 20rem;" v-for="project in projects()" :key="project">
             <img v-bind:src="project.image" class="card-img-top" alt="">
             <div class="card-body">
                 <h5 class="card-title">{{project.name}}</h5>
                 <p class="card-text">{{project.description}}</p>
                 <a v-bind:href="project.github" class="btn btn-primary" target="_blank"><i class="fa-brands fa-github fa-xl">{{github}}</i></a>
                 <a v-bind:href="project.vercel" class="btn btn-primary" target="_blank"><i class="fa-solid fa-server">{{vercel}}</i>Visit</a>
             </div>
        </div>
    </section>
        </template>
</card-comp>

    </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue'
export default {
    methods:{
        projects(){
            return this.$store.state.projects

        }
    },
    components:{
        CardComp
    },
    computed:{
        getProjects(){
           return this.$store.dispatch('getProjects')
        }
    },
    mounted(){
        this.getProjects
    }

}
</script>
<style scoped>
    h1{
  text-shadow: 3px 5px 3px black;
  transition: transform linear 2s;
}
h1:hover{
  color: #40d317;
}
section{
    display: grid;
    grid-template-columns: repeat(3,1fr);
}
.card-body a{
    background-color: #40d317;
    margin: 10px;
    transition: transform linear 1s;
    /* border-radius: 2rex; */
    
}
.card-body a:hover{
    transform: scale(1,2);
    transform:scale(1.2);
    /* box-shadow: 0 0 15px 2px black; */
}
.card{
    margin: 15%;
    background: rgb(116, 114, 114);
    border-radius: 5rem;
    color: white;
    box-shadow: 2px 3px 5px black;
}

</style>