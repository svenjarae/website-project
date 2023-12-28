<template>
  <div class="outerContainer">
    <div class="factsContainer">
      <span>I am experienced in <h2>developing</h2> web and desktop applications including full <h2>frontend</h2> design. This includes prototyping, brand identity, graphics and illustrations.</span>
      <br><br>
      <span>In addition my personal interests lie in <h2>uw photo & video creations</h2>, as I have a professional background in film making and visual effects.</span>
      <br><br>
      <span>Since 04/2023 I got my <h2>dive instructor</h2> license and I plan to continue teaching on the canary islands.</span>
    </div>
  </div>
  <div class="container">
    <RollingText></RollingText><span style="margin-right: 10px"></span>
  </div>

</template>

<script>

import RollingText from "@/components/animations/RollingText";
export default {
  name: 'SkillsView',
  components: {
    RollingText
  },
  data(){
    return{
    }
  },
  methods: {
  }

}
</script>

<style scoped>

.outerContainer{
  height: 100vh;
  background-color: rgb(32, 32, 35);
}

.container{
  padding: 40px;
  background-color: blue;
}

.factsContainer {
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 350px;
  text-align: left;
  text-transform: uppercase;
  z-index: 100;
  -webkit-padding-start: 0;
  padding-inline-start: 0;
  padding: 80px;
  letter-spacing: 0.1em;
  color: white;
}

.factsContainer span{
  color: darkgrey;
}

.factsContainer h2{
  color: white;
  font-weight: 500;
  display: inherit;
  display: inline-block;
}

</style>

