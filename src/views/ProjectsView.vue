<template>
  <div class="leftCorner">
    <router-link to="/projects">
      <span>/ PROJECTS</span>
    </router-link>
  </div>
  <div class="about" id="parentAbout">
    <div class="grid-container">
      <div>
        <router-link to="/projects/onistudio">
          <NewsCard title="ONI STUDIO" :icon-src=titleImgOni></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/glowingturts">
          <NewsCard title="GLOWING TURTS" :icon-src=titleImgGlowTurts></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/galapagos">
          <NewsCard title="GALAPAGOS" :icon-src=titleImgSeal></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/uw-plants">
          <NewsCard title="UWPLANTS" :icon-src=titleImgPlants></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" icon-src="require('../assets/logo')"></NewsCard>
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
import titleImgOni from "/././././././src/assets/images/projects/oni-studio/Sequence5-Stil1.png";
import titleImgGlowTurts from "/././././././src/assets/images/projects/glowing-turts/water-high-saturation.jpg";

export default {
  name: 'ProjectsView',
  components: {
    NewsCard
  },
  data(){
    return{
      titleImgPlants: titleImgPlants,
      titleImgSeal: titleImgSeal,
      titleImgOni: titleImgOni,
      titleImgGlowTurts: titleImgGlowTurts,
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
  left: 70px;
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
  gap: 20px;
  grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
  background-color: var(--bright);
}

.grid-container > div {
  text-align: center;
  font-size: 30px;
  border-radius: 1px;
}

</style>
