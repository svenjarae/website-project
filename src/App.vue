<template>
  <nav>
    <div class="leftBottomCorner">
      <SelectLanguage></SelectLanguage>
    </div>
    <div class="leftBottom">
      <router-link to="/">
        <span>SVENJA RAETZSCH</span>
      </router-link>
    </div>
  </nav>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
import SelectLanguage from "@/components/settings/language/SelectLanguage";

export default {
  name: 'App',
  components: {
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

body {
  cursor: url('/src/assets/logo.png'), default;
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
  color: black;
  padding: 5px;
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
  color: white;
  background-color: black;
  border-radius: 2px;
  padding: 5px;
}

.arrow-container{
  display: block;
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
  left: -30px;
  top: 60px;
  z-index: 99;
  transform: rotate(-90deg);
}

.rightLeftCorner{
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 99;
}

.leftBottom {
  position: fixed;
  left: -50px;
  bottom: 90px;
  z-index: 99;
  transform: rotate(-90deg);
}
</style>
