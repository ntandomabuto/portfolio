<template>
    <nav>
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/resume">Resume</router-link> |
        <router-link to="/projects">Projects</router-link> |
        <router-link to="/testimonials">Testimonials</router-link> |
        <router-link to="/contact">Contact</router-link>  -->
        <ul class="nav justify-content-lg-start fixed-top">
            <img src="https://ntandomabuto.github.io/images/s.png" alt="" class="im">
        </ul>
        <ul class="nav justify-content-end fixed-top" style="margin-top: 30px;">

        <li class="nav-item nav-pills"><a href="#home">Home</a></li>
        <li class="nav-item"><a href="#about">About</a></li>
        <li class="nav-item"><a href="#resume">Resume</a></li>
        <li class="nav-item"><a href="#projects">Projects</a></li>
        <li class="nav-item"><a href="#testimonials">Testimonials</a></li>
        <li class="nav-item"><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>
<style>
ul li a{
    text-decoration: none;
    transition: transform linear 1s;
    /* background-color: #ffffff; */
    opacity: .7;
}
ul li a:hover{
    color:#76b942;
}
@media screen and (max-width:780px) {
   .nav{
    display: grid;
}
}
.im{
    border-radius: 5rem;
    width: 10%;
    background-color: #ffffff;
    opacity: .6;
}
</style>
