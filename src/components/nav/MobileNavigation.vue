<template>
  <div class="container">
    <div class="mobile-header">
      <div class="logo-container">SVENJA RAETZSCH</div>
      <div class="button-container">
        <input type="checkbox" id="checkbox3" class="checkbox3 visuallyHidden">
        <label for="checkbox3">
          <div @click="this.isOpen = !this.isOpen" class="hamburger">
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
            <span class="bar bar3"></span>
          </div>
        </label>
      </div>
      <div v-if="isOpen">
        <div class="outerNavContainer">
          <div class="navigation-container" @click="this.navigate('/')">
            <router-link to="/">START</router-link>
          </div>
          <div class="navigation-container" @click="this.navigate('/projects')">
            <router-link to="/projects">PROJECTS</router-link>
          </div>
          <div class="navigation-container" @click="this.navigate('/who')">
            <router-link to="/who">WHO</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "MobileNavigation",
  data(){
    return{
      isOpen: false,
    }
  },
  methods:{
// navigate to a view, by providing the path.
    // each path needs to be registered inside the router
    // component first.
    navigate(extension){
      this.$router.push({
        path: extension,
      })
      this.isOpen = false;
    },
  }
}

</script>

<style scoped>

.outerNavContainer{
  padding: 10px 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 70px);
}

.mobile-header{
  background-color: var(--darkgrey);
  height: 50px;
  position:fixed;
  width:100%;
  z-index: 1000;
}

.logo-container {
  letter-spacing: 10px;
  margin: 16px 24px 15px 24px;
  font-weight: 500;
  font-family: var(--secondaryFont);
  display: flex;
  justify-content: right;
  color: white;
}

.navigation-container{
  height: 50vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation-container:nth-child(even) {
  background-color: lightgray;
}

a{
  font-size: 24px;
  transition: all 330ms ease-in-out;
}

.navigation-container:hover{
  cursor:pointer;
}

.navigation-container:hover a{
  font-size: 30px;
}

/* GENERAL STYLES */
.visuallyHidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px; width: 1px;
  margin: -1px; padding: 0; border: 0;
}

.hamburger {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 16px;
  left: 24px;
  cursor: pointer;
}

.hamburger .bar {
  padding: 0;
  width: 30px;
  height: 3px;
  background-color: white;
  display: block;
  transition: all 0.4s ease-in-out;
  position: absolute;
}

.bar1 {
  top: 0;
}

.bar2,
.bar3 {
  top: 13.5px;
}

.bar3 {
  right: 0;
}

/* HAMBURGER 3 */

.hamburger .bar1 {
  transform-origin: 5%;
}

.checkbox3:checked + label > .hamburger > .bar1{
  transform: rotate(45deg);
  height: 3px;
  width: 35px;
}

.checkbox3:checked + label > .hamburger > .bar2{
  transform: rotate(-45deg);
  height: 3px;
  background-color: transparent;
}

.checkbox3:checked + label > .hamburger > .bar3{
  transform: rotate(-45deg);
  height: 3px;
  width: 35px;
  top: 11.5px;
}

</style>