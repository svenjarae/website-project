<template>
  <div class="leftCorner">
    <router-link to="/projects">
      <span>/ PROJECTS</span>
    </router-link>
  </div>
  <div class="about" id="parentAbout">
    <div class="grid-container">
      <div>
        <router-link to="/projects/uw-plants">
          <NewsCard title="UW-PLANTS" subtitle="" :icon-src=titleImgPlants></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/galapagos">
          <NewsCard title="GALAPAGOS" subtitle="" :icon-src=titleImgSeal></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import NewsCard from "@/components/news/NewsCard";

import titleImgPlants from "/././././././src/assets/images/projects/uw-plants/titleImg.png";

import titleImgSeal from "/././././././src/assets/images/projects/galapagos/titleImg.png";

export default {
  name: 'ProjectsView',
  components: {
    NewsCard
  },
  data(){
    return{
      titleImgPlants: titleImgPlants,
      titleImgSeal: titleImgSeal,
    }
  },
  methods:{

  }
}
</script>
<style scoped>

#parentAbout {
  position: absolute;
  top: 20px;
  left: 60px;
  right: 20px;
  bottom: 20px;
}

#parentAbout > div {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.leftCorner{
  position: fixed;
  left: -20px;
  bottom: 225px;
  z-index: 99;
  transform: rotate(-90deg);
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
  background-color: var(--bright);
  overflow: auto;
}

.grid-container > div {
  text-align: center;
  font-size: 30px;
  border-radius: 2px;
  min-width: 200px;
}

</style>
