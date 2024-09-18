<template>
  <div class="hello">
    <img alt="" src="https://ntandomabuto.github.io/images/siw.jpg" width="30%">
    <div class="hey">
      <h1>Hello</h1>
      <h1>I am Ntando Mabuto</h1>
      <h1>{{ msg }}</h1>
      <button type="button"><a href="#about">About Me</a>
      </button>

    </div>
      

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.hello{
  display: flex;
  /* text-align: center; */
  justify-content: center;
}

.hey{
  justify-content: center;
  align-content: center;
}
button a{
  color: white;
  text-decoration: none;
}
button{
  background-color: grey;
  border-radius: 2rem;
  width: 100px;
  transition: transform linear 1s;
  margin: 20px;
}
/* button:hover{
  background: #76b942;
} */

button:hover {
   background: #76b942;
background: linear-gradient(0deg, #58922b 0%, rgb(116, 229, 127) 100%);
}
img{
  border-radius: 7rem;
}
h1{
  padding-left: 25px;
  color: white;
  align-content: center;
}
@media screen and (max-width:780px) {

}
</style>
