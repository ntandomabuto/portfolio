<template>
    <div id="testimonials" data-aos="zoom-in-down">
        <h1>Testimonials</h1>
<card-comp>
<template #review>
    <section>
        <div class="card" style="width: 20rem;" v-for="testimonial in testimonials()" :key="testimonial">
             <img v-bind:src="testimonial.image" class="card-img-top" alt="">
             <div class="card-body">
                 <h3 class="card-title"><b>{{testimonial.name}}</b></h3>
                 <h4><i>{{testimonial.position}}</i></h4>
                 <p class="card-text">{{testimonial.message}}</p>
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
        testimonials(){
            return this.$store.state.testimonials
        }
    },
    components:{
        CardComp
    },
    computed:{
        getTestimonials(){
            return this.$store.dispatch('getTestimonials')
        }
    },
    mounted(){
        this.getTestimonials
    }
}
</script>
<style scoped>
    section{
        display: grid;
        grid-template-columns: repeat(3,1fr);
    }
    .card{
        margin: 15%;
    background: #40d317;
    border-radius: 3rem;
    color: white;
    box-shadow: 2px 3px 5px black;
    }
    img{
        border-radius: 1rem;
    }
    h1{
  text-shadow: 3px 5px 3px black;
  transition: transform linear 2s;
}
h1:hover{
  color: #40d317;
}
@media screen and (max-width:780px) {
    *{
        color: white;
      }
      .card{
        display: grid;
        text-decoration: none;
        
    }
    
}
</style>