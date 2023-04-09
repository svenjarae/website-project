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
  }
</style>
