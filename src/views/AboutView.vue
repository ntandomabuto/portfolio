<template>
  <div id="about">
    <h1>About</h1>
    <div class="about">
    <h5>{{ aboutMe }}.</h5>
    <div>
    <img alt="" src="https://ntandomabuto.github.io/images/siw.jpg" width="70%">
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
img{
  border-radius: 2rem;
  margin-left:5px ;
}
h1{
  text-shadow: 3px 5px 3px black;
  transition: transform linear 2s;
}
h1:hover{
  color: #40d317;
}
h5{
  align-content: center;
  text-align: start;
  margin-left: 5px;
  text-shadow: 2px 2px 2px black;
}
</style>