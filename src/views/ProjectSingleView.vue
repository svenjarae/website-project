<template>
  <div id="parent">
    <div class="pageOne">
        <img class="landingImg" :src="image" alt=""/>
    </div>
    <div class="divContainer">
      <div>
        <h1>Title</h1>
        <p>Content</p>
      </div>
      <div class="flexContainer">
        <div class="flexWrapper">
          <span class="p-heading">Heading</span>
          <span class="p-content">Description</span>
        </div>
        <div class="flexWrapper">
          <span class="p-heading">Heading</span>
          <span class="p-content">Description</span>
        </div>
        <div class="flexWrapper">
          <span class="p-heading">Heading</span>
          <span class="p-content">Description</span>
        </div>
      </div>
    </div>
  </div>
  <div class="leftCorner">
    <router-link to="/projects">
      <span>/ PROJECTS</span>
    </router-link>
    <router-link to="/projects/project">
      <span class="projectPar"> / PROJECTNAME</span>
    </router-link>
  </div>
</template>
<script>

// images
import image from "/src/assets/logo.png";
export default {
  name: 'ProjectSingleView',
  components: {
  },
  data(){
    return{
      image: image,
    }
  }
}
</script>
<style scoped>

#parent { position: absolute; top: 0; left: 0; height: 100%; width: 100%; }

#parent > div:nth-child(1) {
  height: 100%;
  width: 100%;
}
#parent > div:nth-child(2) {
  background: whitesmoke;
  padding: 60px;
}

.leftCorner{
  position: fixed;
  left: -90px;
  bottom: 287px;
  z-index: 10000;
  transform: rotate(-90deg);
}

.divContainer{
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 4.86em;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}

.flexContainer{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.flexWrapper{
  display: flex;
  flex-direction: column;
  text-align: left;
}

.landingImg{
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}


</style>
