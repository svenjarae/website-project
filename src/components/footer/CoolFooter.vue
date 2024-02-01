<template>
    <footer class="cool-footer">
      <div class="footer-content">
        <div class="footer-logo">SR</div>
        <div class="footer-links">

        </div>
        <div class="footer-social">
          <router-link to="/dataprivacy">Data Privacy</router-link>
          <router-link to="/">Impress</router-link>
        </div>
      </div>
    </footer>
    <div style="background-color: blue;">
      <div class="footer-partners">
          <img src="">
          <img src="">
          <img src="">
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
    font-size: 12px;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-logo {
    letter-spacing: 10px;
    margin: 16px 24px;
    font-weight: 500;
    font-family: var(--secondaryFont);
    font-size: 40px;
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
  }
  
  /* Add your own styles to make it even cooler! */
  </style>