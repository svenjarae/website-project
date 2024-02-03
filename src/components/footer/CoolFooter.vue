<template>
    <footer class="cool-footer">
      <div class="footer-content">
        <div class="footer-partners">
          <img src="@/assets/images/logos/rhm-logo-positiv.png">
          <img src="@/assets/images/logos/codevance_logo_positiv.svg">
          <img src="@/assets/images/logos/OC_Logo_Hero.png">
          <img src="@/assets/images/logos/oceanwildlife-logo.png">
          <img src="@/assets/images/logos/Logo-white-IRS.svg">
          
        </div>
        <div class="footer-social">
          <router-link to="/dataprivacy">Data Privacy</router-link>
          <router-link to="/">Impress</router-link>
          <button @click="triggerPopup">Contact</button>
          <router-link to="/skills">Skills</router-link>
          <Popup ref="popupRef" />
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import Popup from "@/components/popup/PopUp.vue";
  export default {
    name: "CoolFooter",
    methods: {
      triggerPopup() {
        this.$refs.popupRef.openPopup();
      },
    },
    components: {
      Popup,
    },
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
    max-width: 120px;
    max-height: 80px;
    width: 100%;
    object-fit: contain;
    object-position: left;
  }
  
  button{
    background-color: transparent;
    box-shadow: none;
    border: none;
    color: white;
    margin-right: 10px;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {

    .footer-content{
      flex-direction: column;
    }
    .footer-social{
      margin-top: 20px;
    }
    .footer-partners{
  overflow: auto;
}
}

@media screen and (max-width: 500px) {

.footer-content{
  flex-direction: column;
}

.footer-partners img{
  object-position: center;
}

.footer-social{
  flex-direction: column;
    display: flex;
    gap: 16px;
}

}
  </style>