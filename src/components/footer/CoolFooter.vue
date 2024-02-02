<template>
    <footer class="cool-footer">
      <div class="footer-content">
        <div class="footer-partners">
          <img src="@/assets/images/logos/codevance_logo_positiv.svg">
          <img src="@/assets/images/logos/OC_Logo_Hero.png">
          <img src="@/assets/images/logos/oceanwildlife-logo.png">
        </div>
        <div class="footer-social">
          <router-link to="/dataprivacy">Data Privacy</router-link>
          <router-link to="/">Impress</router-link>
        </div>
      </div>
    </footer>
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
  
  .footer-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
  }
  
  .footer-social a {
    color: white;
    margin-right: 10px;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .footer-partners{
    display: flex;
    gap: 20px;
    justify-content: center;
    padding: 20px;
    color: white;
  }

  .footer-partners img{
    max-width: 200px;
    max-height: 100px;
    width: 100%;
    object-fit: contain;
    object-position: left;
  }
  
  /* Add your own styles to make it even cooler! */
  </style>