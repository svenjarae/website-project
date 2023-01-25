<template>
  <div>
    <router-link class="backBtnContainer" to="/">
      <BackBtn></BackBtn>
    </router-link>

    <div class="layoutWrapper" style="margin-bottom: 40px;">
      <div class="mainDescriptionWrapper">
        <h1 style="    font-family: MyFirstFont;
    font-size: 4em;">ALL PROJECTS</h1>
        <p>DIGITAL CONTENT MIX</p>
      </div>
      <div class="flexContainer">
      </div>
    </div>

    <div style="max-width: 1000px; margin: auto;">
      <AllProjectsComponent></AllProjectsComponent>
    </div>
  </div>
</template>
<script>

import BackBtn from "@/components/buttons/BackBtn";
import AllProjectsComponent from "@/components/AllProjectsComponent";

export default {
  name: 'ProjectsView',
  components: {
    AllProjectsComponent,
    BackBtn,
  },
  data(){
    return{
    }
  },
}
</script>
<style scoped>
  .backBtnContainer{
    background-color: white;
    border-radius: 2px;
    z-index: 1000;
  }

  .flexContainer{
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  .mainDescriptionWrapper{
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 50%;
    border-radius: 50px;
  }
  .mainDescriptionWrapper h1{
    font-family: MyFirstFont;
    font-size: 4em;
    text-transform: uppercase;
  }
</style>
