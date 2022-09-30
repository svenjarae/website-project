<template>
  <div>
    <router-link to="/">
      <BackBtn></BackBtn>
    </router-link>
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

</style>
