<template>
  <div>
    <router-link class="backBtnContainer" to="/">
      <BackBtn></BackBtn>
    </router-link>

    <div class="layoutWrapper" style="margin-top: 60px;margin-bottom: 60px;">
      <div class="mainDescriptionWrapper">
        <h1 style="font-family: myFirstFont">ALL PROJECTS</h1>
        <p>DIGITAL CONTENT MIX</p>
      </div>
      <div class="flexContainer" style="font-family: BlueScreen">
        <div>
          <span class="p-heading">VIDEOS & IMAGES</span>
        </div>
        <div>
          <span class="p-heading">ANIMATIONS & GRAPHIC ARTS</span>
        </div>
        <div>
          <span class="p-heading">PROGRAMMED & ILLUSTRATED</span>
        </div>
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
    position: fixed;
    top: 0;
    left: 0;
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
  }

</style>
