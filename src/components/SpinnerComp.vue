<template>
    <div class="loading">
      <div class="spinner"></div>
    </div>
  </template>
  
  <style scoped>
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .spinner {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top: 4px solid #333;
    animation: spin 1s linear infinite;
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