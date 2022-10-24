<template>
  <nav class="navContainer">
    <div class="layoutWrapper">
      <div v-if="this.$route.name === 'svenjaraetzsch'" class="waterAnimationContainer">
        <WaterAnimation></WaterAnimation>
      </div>
      <div class="flexColumn smallFont" style="align-items: flex-start;">
        <a href="mailto:svenjaraetzsch@gmail.com">SVENJARAETZSCH@GMAIL.COM</a>
        <div>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--dark)"><path d="M17 16.99c-1.35 0-2.2.42-2.95.8-.65.33-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm0-4.45c-1.35 0-2.2.43-2.95.8-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V5.04c-.9 0-1.4-.25-2.05-.58zM17 8.09c-1.35 0-2.2.43-2.95.8-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V9.49c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8z"/></svg>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--dark)"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--dark)"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
          </span>
        </div>
      </div>
      <div class="socialMediaContainer">
        <a href="https://vimeo.com/user182333690?embedded=true&source=owner_portrait&owner=182333690">
          <span>VIMEO</span>
        </a>
        <div>
          <a href="https://www.linkedin.com/in/svenja-raetzsch-9970b0205/" style="margin-right: 5px;">
            <span>LINKEDIN</span>
          </a>
          <a href="https://github.com/svenjarae" style="margin-left: 5px;">
            <span>GITHUB</span>
          </a>
        </div>
      </div>
      <div class="flexColumn smallFont" style="align-items: flex-end;">
        <router-link to="/" style="position: relative;" class="padding">
          <span>HOME</span>
        </router-link>
        <router-link to="/projects" style="position: relative;" class="padding">
          <span>See all Projects</span>
        </router-link>
      </div>
    </div>
  </nav>
  <div :class="this.$route.name === 'svenjaraetzsch' ? 'audioPlayerBig' : 'audioPlayerSmall'" style="position: fixed; top: 20px; right: 20px;">
    <AudioPlayer></AudioPlayer>
  </div>
  <router-view>
  </router-view>
</template>

<script>

import AudioPlayer from "@/components/audio/AudioPlayer";
import WaterAnimation from "@/components/buttons/WaterAnimation";
export default {
  name: 'App',
  components: {
    AudioPlayer,
    WaterAnimation
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
.audioPlayerSmall{
  display: none;
}

.audioPlayerBig{
  display: block;
  z-index: 100000000000000000;
}
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;500;600;700&display=swap');
@font-face {
  font-family: myFirstFont;
  src: url("/src/assets/fonts/FHGiselle-Light.ttf");
}

@font-face {
  font-family: BlueScreen;
  src: url("/src/assets/fonts/BlueScreen.ttf");
}

:root {
  --bright: #fff;
  --dark:  #000;
  --1stColor: rgb(112, 158, 187);
  --2ndColor: orangered;
  --5thColor: rgb(255, 168, 0);
  --6thColor: rgb(129, 74, 106);

  --primaryFont: 'Montserrat', sans-serif;
  --secondaryFont: 'myFirstFont', serif;

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
  cursor: url('/src/assets/logo.png'), default;
  margin: 0;
}

/* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: orangered;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

h1, h2, h3, h4, h5, h6, p{
  margin: 0;
  font-weight: normal;
}

a{
  text-decoration: underline;
  color: inherit;
}

a.router-link-exact-active{
}

.navContainer{
  color: var(--dark);
  position: fixed;
  bottom: 0;
  background-color: white;
  left: 0;
  right: 0;
  z-index: 1000;
}

.waterAnimationContainer{
  height: 320px;
  width: 320px;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  right: 20px;
  bottom: 80px;
  z-index: 2;
}

.socialMediaContainer{
  font-size: var(--smallFont);
  color: var(--dark);
  text-transform: uppercase;
  font-weight: 500;
}

.layoutWrapper{
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: auto;
  padding: 0 20px;
}

.flexColumn{
  display: flex;
  flex-direction: column;
}

.flexRow{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.centerWrapper{
  margin: auto;
  text-align: center;
  max-width: 600px;
}

.margin-right-small{
  margin-right: 5px;
}

.marginTopBottom{
  margin-top: 40px;
  margin-bottom: 40px;
}

.bold{
  font-weight: bold;
}

.primaryFont{
  font-family: var(--primaryFont);
}

.secondaryFont{
  font-family: var(--secondaryFont);
}

.bigFont{
  font-size: var(--bigFont);
}
.mediumFont{
  font-size: var(--mediumFont);
  font-family: BlueScreen;
  color: var(--1stColor);
}
.normalFont{
  font-size: var(--normalFont);
  color: var(--2ndColor);
  font-weight: 500;
}
.smallFont{
  font-size: var(--smallFont);
  color: var(--dark);
  text-transform: uppercase;
  font-weight: 500;
}
</style>
