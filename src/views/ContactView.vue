<template>
    <div id="contact">
        <h1 class="head-cont">Contact</h1>
        <div class="container-cont">
            <div class="contact-details">
                <h2>Get in Touch</h2>
                <p><i class="fas fa-phone"></i> +27 60 309 8353</p>
                <p><i class="fas fa-envelope"></i> Email: ntandomabuto@gmail.com</p>
                <p><i class="fas fa-map-marker-alt"></i>Philippi, Cape Town</p>
                <p>Western Cape, South Africa</p>
            </div>
            <form id="contact-form" action="https://formcarry.com/s/P-WfBRMqUZH"
  method="POST"
  enctype="multipart/form-data" target="_blank">
                <h2>Send a message</h2>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name here">
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="example@email.com">
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Send a message to me"></textarea>
                </div>
                <button type="submit" id="cont">Send <i class="fas fa-paper-plane"></i></button>
                <button type="reset" id="cont">Clear <i class="fas fa-eraser"></i></button>
            </form>
        </div>
    </div>
    <hr>
</template>
<script>
export default {
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
.container-cont{
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: space-evenly;
    padding: 100px;
}
.form-group{
    /* padding: 10px; */
    display: grid;
    text-align: center;
}
#cont{
    color: white;
    background-color: #40d317;

}
#cont{
    margin: 5px;
    /* background: grey; */
    text-decoration: solid black ;
    border-radius: 2rem;
}
#cont:hover{
    color: white;
    background-color: black;
}
@media screen and (max-width:780px) {
    *{
        color: white;
      }
    .container-cont{
        display: grid;
    }
    
}
</style>