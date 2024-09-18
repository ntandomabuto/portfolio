<template>
  <div id="about"></div>
  <div id="ab">
    <div class="about">
      <div class="h5">
        <h1 class="text-center">About</h1>
      <h5>{{ aboutMe }}.</h5>

      </div>
    <div>
    <!-- <img alt="" src="https://ntandomabuto.github.io/images/siw.jpg" width="70%"> -->
    <h3 class="ski">Skills</h3>
    <section class="skills">
            <div class="html">
                <i class="fa-brands fa-html5 fa-5x" style="color: rgb(116, 114, 114);"></i>
                <h6>HTML</h6>
            </div>
            <div class="css">
                <i class="fa-brands fa-css3 fa-5x" style="color:rgb(116, 114, 114);"></i>
                <h6>CSS</h6>
            </div>
            <div class="boot">
                <i class="fa-brands fa-bootstrap fa-5x" style="color: rgb(116, 114, 114);"></i>
                <h6>BOOTSTRAP</h6>
            </div>
            <div class="js">
                <i class="fa-brands fa-js fa-5x" style="color: rgb(116, 114, 114);"></i>
                <h6>JAVASCRIPT</h6>
            </div>
            <div class="figma">
                <i class="fa-brands fa-figma fa-5x" style="color: rgb(116, 114, 114);"></i>
                <h6>FIGMA</h6>
            </div>
            <div class="vue">
                <i class="fa-brands fa-vuejs fa-5x" style="color: rgb(116, 114, 114);"></i>
                <h6>VUE</h6>
            </div>
            <div class="node">
                <i class="fa-brands fa-node-js fa-5x" style="color: rgb(116, 114, 114);"></i>
                <h6>Node</h6>
            </div>
            <div class="mysql">
                <i class="fa-solid fa-database fa-5x" style="color:rgb(116, 114, 114);"></i>
                <h4>MySql</h4>
            </div>
        </section>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    aboutMe() {
      return this.$store.state.aboutMe
    }
  },
  mounted() {
    this.$store.dispatch('getAboutMe')
  }
}
</script>
<style scoped>
.about{
  display: flex;
  margin: 50px;
  }
  #about{
    /* margin-top: 7em; */
    height: 10vh;
  }
.ski{
  margin-left: 100px;
}
h1{
  /* margin-left: 70px; */
  margin: 50px;
}
#ab{
  /* text-shadow: 5px 5px 7px black; */
  position: relative; 
  background-size: cover;
  text-align: center;
  justify-content: center;
  align-items: center;
  animation: fadeIn 5s ease-in-out;
  height: 80vh; 
  margin:10px;
}
.skills div{
    margin-bottom: 10%;
    margin-left: 25%;
    width: 150px;

    transition: transform linear 1s;
    
}
.skills{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-content: center;
    
}
.skills div:hover{
    /* transform: scale(1,2); */
    transform:scale(1.2);
    box-shadow: 0 0 15px 2px black;
    border-radius: 2rex;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity:1;
  }
}
img{
  border-radius: 3rem;
  margin-left:5px ;
}
h1{
  text-shadow: 3px 5px 3px black;
  transition: transform linear 2s;
  
}
h1:hover{
  color: #40d317;
}
.h5{
  align-content: center;
  text-align: start;
  margin-left: 5px;
  text-shadow: 2px 2px 2px black;
}
@media screen and (max-width:780px) {
    *{
        color: white;
      }
      .about{
        display: grid;
    }
    .skills{
      display: grid;
      grid-template-columns: repeat(4,1fr);
    }
    
}
</style>