<template>
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
  </div>
</template>
<script>
import NewsCard from "@/components/news/NewsCard";

import titleImgPlants from "/././././././src/assets/images/projects/uw-plants/titleImg.png";
import titleImgSeal from "/././././././src/assets/images/projects/galapagos/titleImg.png";
import titleImgOni from "/././././././src/assets/images/projects/oni-studio/Sequence5-Stil1.png";
import titleImgGlowTurts from "/././././././src/assets/images/projects/glowing-turts/water-high-saturation.jpg";

export default {
  name: 'AllProjectsComponent',
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

.grid-container {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
  background-color: var(--bright);
  margin: auto;
  max-width: 1000px;
}

.grid-container div {
  text-align: center;
  font-size: 30px;
  border-radius: 20px;
  height: 200px;
}

</style>
