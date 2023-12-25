<template>
  <div class="container">
    <div class="mobile-header">
      <div class="logo-container">SVENJA RAETZSCH</div>
      <div class="button-container">
        <input type="checkbox" id="checkbox3" class="checkbox3 visuallyHidden">
        <label for="checkbox3">
          <div @click="toggleMenu" class="hamburger">
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
            <span class="bar bar3"></span>
          </div>
        </label>
      </div>
      <transition name="menu-slide">
        <div v-if="isOpen" class="outerNavContainer">
          <div class="navigation-container" @click="navigate('/')">
            <router-link to="/">START</router-link>
          </div>
          <div class="navigation-container" @click="navigate('/projects')">
            <router-link to="/projects">PROJECTS</router-link>
          </div>
          <div class="navigation-container" @click="navigate('/who')">
            <router-link to="/who">WHO</router-link>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileNavigation",
  data() {
    return {
      isOpen: false,
      routeChanged: false,
    };
  },
  watch: {
    // Watch for route changes and set the flag
    $route(to, from) {
      this.routeChanged = to.path !== from.path;
    },
  },
  methods: {
    // Toggle the menu
    toggleMenu() {
      this.isOpen = !this.isOpen;
      // If the route has changed, reset the flag
      if (this.routeChanged) {
        this.routeChanged = false;
      }
    },
    // Navigate to a view by providing the path
    navigate(extension) {
      this.$router.push({
        path: extension,
      });
      // Close the menu after navigation
      this.isOpen = false;
    },
  },
  beforeRouteLeave(to, from, next) {
    // Set the flag to indicate that the route is changing
    this.routeChanged = true;
    next();
  },
  beforeRouteEnter(to, from, next) {
    // Ensure the component is fully loaded before opening the menu
    next(vm => {
      vm.routeChanged = false;
    });
  },
};
</script>

<style scoped>

.outerNavContainer{
  padding: 10px 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 70px);
  width: 70%;
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


.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: transform 0.3s;
}

.menu-slide-enter, .menu-slide-leave-to /* .menu-slide-leave-active in <2.1.8 */ {
  transform: translateX(-100%);
}

</style>