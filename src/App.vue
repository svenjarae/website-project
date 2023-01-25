<template>
    <!--
    <nav class="navContainer">
      <div class="navigation">
            <div style="display: flex; align-items: center;  margin-bottom: 20px;">
          <span style="background-color: black; display: flex; border-radius: 4px;">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"/></svg>
          </span>
              <span style="margin-left: 5px">/HAVE A LOOK</span>
            </div>
            <div style="font-size: 20px;">
              <div style="display: flex; flex-direction: column; text-align: left; margin-bottom: 20px;">
                <router-link to="/">
                  <span>HOME</span>
                </router-link>
                <router-link to="/projects">PROJECTS</router-link>
                <router-link to="/info">INFO</router-link>
              </div>
              <div style="display: flex; flex-direction: column; text-align: left; margin-bottom: 20px;">
                <a href="https://vimeo.com/user182333690?embedded=true&source=owner_portrait&owner=182333690">
                  <span>VIMEO</span>
                </a>
                <a href="https://www.linkedin.com/in/svenja-raetzsch-9970b0205/" style="margin-right: 5px;">
                  <span>LINKEDIN</span>
                </a>
                <a href="https://github.com/svenjarae">
                  <span>GITHUB</span>
                </a>
              </div>
              <a href="mailto:svenjaraetzsch@gmail.com">
                <span>SAY HELLO</span>
              </a>
              <div style="display: flex; justify-content: right;">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M23,17c0,3.31-2.69,6-6,6v-1.5c2.48,0,4.5-2.02,4.5-4.5H23z M1,7c0-3.31,2.69-6,6-6v1.5C4.52,2.5,2.5,4.52,2.5,7H1z M8.01,4.32l-4.6,4.6c-3.22,3.22-3.22,8.45,0,11.67s8.45,3.22,11.67,0l7.07-7.07c0.49-0.49,0.49-1.28,0-1.77 c-0.49-0.49-1.28-0.49-1.77,0l-4.42,4.42l-0.71-0.71l6.54-6.54c0.49-0.49,0.49-1.28,0-1.77s-1.28-0.49-1.77,0l-5.83,5.83l-0.71-0.71 l6.89-6.89c0.49-0.49,0.49-1.28,0-1.77s-1.28-0.49-1.77,0l-6.89,6.89L11.02,9.8l5.48-5.48c0.49-0.49,0.49-1.28,0-1.77 s-1.28-0.49-1.77,0l-7.62,7.62c1.22,1.57,1.11,3.84-0.33,5.28l-0.71-0.71c1.17-1.17,1.17-3.07,0-4.24l-0.35-0.35l4.07-4.07 c0.49-0.49,0.49-1.28,0-1.77C9.29,3.83,8.5,3.83,8.01,4.32z"/></svg>
              </div>
            </div>
          </div>
          </nav>
    -->

    <router-view>
    </router-view>

</template>

<script>

//import AudioPlayer from "@/components/audio/AudioPlayer";

export default {
  name: 'App',
  components: {
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
  cursor: pointer;
}

a.router-link-exact-active{
  color: orangered;
}

.audioPlayerSmall{
  display: none;
  z-index: 100000000000000000;
  background-color: #fff;
  border-radius: 20px;
}

.audioPlayerBig{
  display: block;
  z-index: 100000000000000000;
  position: absolute;
  bottom: 70px;
}

.navContainer{
  color: var(--dark);
  z-index: 1000;
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
  font-family: monospace;
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

.p-heading{
  font-weight: bold;
}

@media screen and (max-width: 720px) {
  .waterAnimationContainer{
    height: 100px;
    width: 100px;
  }

  .audioPlayerBig, .audioPlayerSmall{
    display: none;
  }

  .layoutWrapper{
    display: block;
  }
}


</style>
