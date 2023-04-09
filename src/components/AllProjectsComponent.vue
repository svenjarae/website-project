<template>
      <div class="grid-container">
        <div>
          <router-link to="/projects/taliarte">
            <NewsCard title="TALIARTE" :icon-src=ivonOne></NewsCard>
          </router-link>
        </div>
        <div>
          <router-link to="/projects/gcsealife">
            <NewsCard title="GC SEALIFE" :icon-src=squid1></NewsCard>
          </router-link>
        </div>
        <div>
          <router-link to="/projects/animations/triangle">
            <NewsCard title="TRIANGLE" :icon-src=titleImgTrip></NewsCard>
          </router-link>
        </div>
        <div>
          <router-link to="/projects/animations/bird">
            <NewsCard title="BIRD" :icon-src=titleImgBird></NewsCard>
          </router-link>
        </div>
        <div>
          <router-link to="/projects/onistudio">
            <NewsCard title="ONI STUDIO" :icon-src=titleImgOni></NewsCard>
          </router-link>
        </div>
        <div>
          <router-link to="/projects/animations/pixelgrid">
            <NewsCard title="3DGRID" :icon-src=pixelGridTitleImg></NewsCard>
          </router-link>
        </div>
        <div>
          <router-link to="/projects/galapagos">
            <NewsCard title="GALAPAGOS" :icon-src=titleImgSeal></NewsCard>
          </router-link>
        </div>
      </div>
</template>
<script>
import NewsCard from "@/components/news/NewsCard";

import ivonOne from "/././././././src/assets/images/projects/taliarte/P1033667.00_00_26_02.Still002.jpg";
import titleImgSeal from "/././././././src/assets/images/projects/galapagos/titleImg.png";
import titleImgOni from "/././././././src/assets/images/projects/oni-studio/Sequence2-Stil1.jpg";
import titleImgBird from "/././././././src/assets/images/projects/animations/bird/bird-titleimg.png";
import titleImgTrip from "/././././././src/assets/images/projects/animations/trip/titleimg-trip.png";
import squid1 from "/././././././src/assets/images/projects/gc-sealife/squid1.png";
import pixelGridTitleImg from "/././././././src/assets/images/projects/animations/pixel-grid/pixelGridTitleImg.png";

export default {
  name: 'AllProjectsComponent',
  components: {

    NewsCard
  },
  data(){
    return{
      ivonOne: ivonOne,
      titleImgSeal: titleImgSeal,
      titleImgOni: titleImgOni,
      squid1: squid1,
      titleImgBird: titleImgBird,
      titleImgTrip: titleImgTrip,
      pixelGridTitleImg: pixelGridTitleImg,

      showPhoto: false,
      showAnime: false,
      showAll: true,

      selected: 'all',
    }
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
  }
}
</script>
<style scoped>

.filterContainer button{
  border-radius: 1000px;
  background-color: transparent;
  border: 2px solid orangered;
  font-size: 14px;
  font-family: monospace;
  padding: 0 8px;
  height: 24px;
}

.filterContainer button:hover{
  background-color: orangered;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
  grid-gap: clamp(1rem, 2vw, 1rem);
}

.grid-container div {
  text-align: center;
  font-size: 30px;
  height: 300px;
  box-shadow: lightgray 0px 0px 0px 0px, lightgrey 0px 4px 4px;
}

@media screen and (max-width: 720px) {
.grid-container{
  margin-bottom: 150px;
}
}


</style>
