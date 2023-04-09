<template>
  <div>
    <nav>
      <main-nav></main-nav>
    </nav>
    <router-view>
    </router-view>
  </div>
</template>

<script>

//import AudioPlayer from "@/components/audio/AudioPlayer";

import MainNav from "@/components/nav/mainNav";
export default {
  name: 'App',
  components: {
    MainNav
    //AudioPlayer
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  data(){
    return{
      homePage: true,
    }
  },
  methods: {
    mounted() {
      window.scrollTo(0, 0)
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;500;600;700&display=swap');
@font-face {
  font-family: myFirstFont;
  src: url("/src/assets/fonts/FHGiselle-Light.ttf");
}

:root {
  --bright: #fff;
  --dark:  #000;
  --1stColor: rgb(112, 158, 187);
  --2ndColor: orangered;
  --5thColor: rgb(255, 168, 0);
  --6thColor: rgb(129, 74, 106);

  --primaryFont: Montserrat, serif;
  --secondaryFont: 'myFirstFont', serif;
  --googleFont: 'Roboto', sans-serif;

  --bigFont: 150px;
  --mediumFont: 100px;
  --normalFont: 1.2rem;
  --smallFont: 14px;
}

html {
  scroll-behavior: smooth;
}

#app {
  font-family: var(--primaryFont);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark);
}

body {
  margin: 0;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: black;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

h1, h2, h3, h4, h5, h6, p{
  margin: 0;
  font-weight: inherit;
  font-size: inherit;
  padding: inherit;
}

a{
  text-decoration: none;
  color: inherit;
}
</style>
