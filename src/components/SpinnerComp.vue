<template>
    <div class="spinner">
      <div class="spinner-inner">
        <div class="spinner-circle"></div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .spinner {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;
  }
  
  .spinner-inner {
    position: absolute;
    top:auto;
    left:auto;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top: 4px solid #333;
    animation: spin 1s linear infinite;
  }
  
  .spinner-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #bdb4b4;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>