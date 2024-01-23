<template>
  <div class="projectsContainer">
    <AllProjectsComponent></AllProjectsComponent>
  </div>
</template>
<script>

import AllProjectsComponent from "@/components/AllProjectsComponent";

export default {
  name: 'ProjectsView',
  components: {
    AllProjectsComponent,
  },
  data(){
    return{
    }
  },
}
</script>
<style scoped>
  .projectsContainer{
    margin: auto;
    padding: 80px;
    background-color: var(--darkgrey);
    min-height: calc(100vh - 160px);
  }
  @media screen and (max-width: 720px) {
    .projectsContainer{
      padding: 10px 0 0 0;
  }
}
  
</style>
