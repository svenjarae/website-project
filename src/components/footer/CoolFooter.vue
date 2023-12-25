<template>
    <footer class="cool-footer">
      <div class="footer-content">
        <div class="footer-logo">Your Logo</div>
        <div class="footer-links">
          <router-link to="/">Start</router-link>
          <router-link to="/about">Info</router-link>
          <router-link to="/about">Projects</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
        <div class="footer-social">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
    <div style="background-color: blue;">
      <div class="footer-partners">
          <img src="">Ocean Collective
          <img src="">Ocean Wildlife Project
          <img src="">Codevance
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CoolFooter",
  };
  </script>
  
  <style scoped>
  .cool-footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  .footer-links {
    display: flex;
    gap: 20px;
  }
  
  .footer-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
  }
  
  .footer-social {
    font-size: 24px;
  }
  
  .footer-social a {
    color: white;
    margin-right: 10px;
  }

  .footer-partners{
    display: flex;
    gap: 20px;
    justify-content: center;
    padding: 20px;
    color: white;
    font-weight: bold;
  }
  
  /* Add your own styles to make it even cooler! */
  </style>