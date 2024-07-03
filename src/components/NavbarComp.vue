<template>
    <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/resume">Resume</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/testimonials">Testimonials</router-link> |
    <router-link to="/contact">Contact</router-link>  -->
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
}
ul li a:hover{
    color:#76b942
}
</style>
