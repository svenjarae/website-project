<template>
  <nav>
    <!--<div class="leftTopCorner">
      <router-link to="/">
        <img alt="Vue logo" src="./assets/logo.png">
      </router-link>
    </div>-->

    <div class="leftBottomCorner">
      <SelectLanguage></SelectLanguage>
    </div>
    <div class="rightLeftCorner">
      <router-link to="/projects">
        <div class="arrow-container">
          <DownBtn></DownBtn>
        </div>
        <span class="projectPar">PROJECTS</span>
      </router-link>
    </div>
    <div class="leftBottom">
      <router-link to="/">
        <span>SVENJA RAETZSCH</span>
      </router-link>
    </div>
  </nav>
  <router-view/>
</template>

<script>
import SelectLanguage from "@/components/settings/language/SelectLanguage";
import DownBtn from "@/components/buttons/DownBtn";

export default {
  name: 'App',
  components: {
    DownBtn,
    SelectLanguage
  },
  methods: {

  }
}
</script>


<style>

:root {
  --bright: #fff;
  --dark:  #000;
  --darkBlue: #2c3e50;
  --blue: #0000FFFF;
  --green: #00a200;
}

html {
  scroll-behavior: smooth;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark);
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
  background: #fff;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

h1, h2, h3, h4, h5, h6, p{
  margin: 0;
  font-weight: normal;
}

a {
  color: var(--green);
  text-decoration: none;
  cursor: pointer;
}

a:hover{
  color: red;
}

a.router-link-exact-active .arrow-container {
  display: none;
}

a.router-link-exact-active{
  color: red;
}

.arrow-container{
  display: block;
}

.projectPar{
  font-size: 40px;
}

a.router-link-exact-active .projectPar{
  font-size: 16px!important;
}

.mediumFont{
  column-gap: 0;
  text-align: center;
  font-size: 19px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 8px;
}

.leftBottomCorner {
  position: fixed;
  left: -20px;
  top: 60px;
  z-index: 10000;
  transform: rotate(-90deg);
}

.rightLeftCorner{
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 10000;
}

.leftBottom {
  position: absolute;
  left: -50px;
  bottom: 90px;
  z-index: 10000;
  transform: rotate(-90deg);
}

</style>
