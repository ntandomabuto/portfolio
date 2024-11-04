<template>
    <div id="contact"></div>
    <div id="contac">
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
.contact-details p{
    text-align: start;
    margin-top: 25px;

}
h1:hover{
  color: #40d317;
}
.container-cont{
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: space-evenly;
    padding: 110px;
}
input,textarea{
    padding-left: 15px;
}

.form-group{
    /* padding: 10px; */
    display: grid;
    text-align: center;
}
h2,p,label{
    text-shadow: 2px 3px 3px black;

}
.form-group input{
    width: 300px;
    height: 5vh;
    border-radius:1rem ;
}
.form-group textarea{
    border-radius: 1rem;
}
#cont{
    color: white;
    background-color: #40d317;
    margin: 10px;
    margin-top: 15px;
    text-decoration: solid black ;
    border-radius: 2rem;
    width: 110px;

}

#cont:hover{
    color: black;
    background-color:grey;

}
#contact{
    height: 10vh;
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