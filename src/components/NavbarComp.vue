<template>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="nav justify-content-lg-start fixed-top" id="nav1">
            <img src="https://ntandomabuto.github.io/images/nt.png" class="im">
        </ul>
        <ul class="nav justify-content-end fixed-top" style="margin-top: 20px;" id="nav">
            
        <li class="nav-item nav-pills"><a href="#home">Home</a></li>
        <li class="nav-item"><a href="#about">About</a></li>
        <li class="nav-item"><a href="#resume">Education</a></li>
        <li class="nav-item"><a href="#projects">Projects</a></li>
        <li class="nav-item"><a href="#contact">Contact</a></li>
    </ul>
    </div>
        </div>
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/resume">Resume</router-link> |
        <router-link to="/projects">Projects</router-link> |
        <router-link to="/contact">Contact</router-link>  -->
        
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
.im{
    width: 120px;
    height: 80px;
    margin-left: 20px;
}
#nav{
    /* width: 650px; */
    /* border-radius: 2rem; */
    /* justify-content: end; */
    /* margin-left: 780px; */
    opacity: .7;
}
.nav li{
    margin-right: 50px;
}
#nav1{
    background-color: rgb(116, 114, 114);
    opacity: .9;
}
nav ul{
    /* background-color: rgb(116, 114, 114); */
    /* opacity: .9; */
    /* padding-bottom: 20px; */
}
/* @media screen and (max-width:780px) {
   .nav{
    display: grid;
}
} */
.im{
    border-radius: 5rem;
    width: 10%;
    background-color: #ffffff;
    opacity: .6;
}
</style>
