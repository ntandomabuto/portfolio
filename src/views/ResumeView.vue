<template>
    <div id="resume"></div>
    <div id="res">
        <h1>Education & Work</h1>
<card-comp>
    <template #resumeSlot>
        <section id="educa">
            <div v-for="education in education()" :key="education" class="res">
                <img :src="education.img" alt="" width="30%" height="250vh">
                <h5>  {{ education.description }}<br>
                    {{ education.institution }}{{ education.insititution }}<br>
                    {{ education.year }}<br>
                </h5>
            
                <h5 v-for="detail in education.contact" :key="detail">
                  Contact:  {{detail.name}} <br>
                 Telephone: {{detail.number}}<br>
                 email: {{detail.email}}
                </h5>

            </div>
        </section>
    </template>
</card-comp>
<button type="button" id="download"><a href="https://ntandomabuto.github.io/images/cv.docx"><i class="fa-solid fa-arrow-right-to-bracket">CV</i></a></button>


    </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue';

export default {
    methods:{
        education(){
            return this.$store.state.education
        }
    },
    components:{
        CardComp
    },
    computed:{
        getEducation(){
            return this.$store.dispatch('getEducation')
        }
    },
    mounted(){
        this.getEducation
    }
}
</script>
<style scoped>
    #download{
    margin: 5px;
    padding: 5px;
    border-radius: 3rex;
    background-color: white;
    text-decoration: none;
    transition: 2s transform linear;
    text-decoration: none;

}


h1{
  text-shadow: 3px 5px 3px black;
  transition: transform linear 2s;
}
h1:hover{
  color: #40d317;
}

h5{
    text-shadow: 5px 5px 7px black;

}
p{
    text-shadow: 2px 2px 2px black;
}
#download a{
    color:#76b942;
}
#download:hover{
    background-color: #76b942;
    color: white; 
}
#download a:hover{
    background-color: #76b942;
    color: black; 
}
#educa{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin-bottom: 100px;
}

img{
    border-radius: 2rem;
}
#resume{
    margin-top: 7em;
    height: 10vh;
}
@media screen and (max-width:780px) {
      #educa{
        display: grid;
        grid-template-columns: repeat(1,1fr);
    }
    #res{
        margin-top: 210px;
    }
    
}
@media screen and (max-width:1200px) {
    #educa{
        display: grid;
        grid-template-columns: repeat(1,1fr);
    }
    #res{
        margin-top: 210px;
    }
    
}
</style>