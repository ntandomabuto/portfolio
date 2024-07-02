<template>
  <div class="hello">
    <img alt="" src="https://ntandomabuto.github.io/images/siw.jpg" width="30%">

    <h1>{{ msg }}</h1>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
img{
  border-radius: 7rem;
}
h1{
  padding-left: 15px;
  /* color: white; */
  align-content: center;
}
</style>
