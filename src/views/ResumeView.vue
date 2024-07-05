<template>
    <div id="resume">
        <h1>Resume</h1>
<card-comp>
    <template #resumeSlot>
        <section id="educa">
            <div v-for="education in education()" :key="education" class="res">
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
<button type="button" id="download"><a href="https://ntandomabuto.github.io/images/cv.docx"><i class="fa-solid fa-arrow-right-to-bracket">Curriculum Vitae</i></a></button>
<h2>Skills</h2>
        <section class="skills">
            <div class="js">
                <i class="fa-brands fa-js fa-10x" style="color: #40d317;"></i>
                <h4>JAVASCRIPT</h4>
            </div>
            <div class="html">
                <i class="fa-brands fa-html5 fa-10x" style="color: #40d317;"></i>
                <h4>HTML</h4>
            </div>
            <div class="css">
                <i class="fa-brands fa-css3 fa-10x" style="color: #40d317;"></i>
                <h4>CSS</h4>
            </div>
            <div class="figma">
                <i class="fa-brands fa-figma fa-10x" style="color: #40d317;"></i>
                <h4>FIGMA</h4>
            </div>
            <div class="boot">
                <i class="fa-brands fa-bootstrap fa-10x" style="color: #40d317;"></i>
                <h4>BOOTSTRAP</h4>
            </div>
            <div class="vue">
                <i class="fa-brands fa-vuejs fa-10x" style="color: #40d317;"></i>
                <h4>VUE</h4>
            </div>
        </section>

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
/* h4{
    margin: 50px;
} */
.skills div{
    margin-bottom: 10%;
    margin-left: 25%;
    width: 250px;

    transition: transform linear 1s;
    
}
.skills div:hover{
    /* transform: scale(1,2); */
    transform:scale(1.2);
    box-shadow: 0 0 15px 2px black;
    border-radius: 2rex;
}
h1{
  text-shadow: 3px 5px 3px black;
  transition: transform linear 2s;
}
h1:hover{
  color: #40d317;
}
.skills{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-content: center;
    
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
    grid-template-columns: repeat(2,1fr);
}
@media screen and (max-width:780px) {
      .educa{
        display: grid;
        
    }
    
}
</style>