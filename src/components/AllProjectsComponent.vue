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
      <router-link to="/projects/animations/trip">
        <NewsCard title="TRIP" :icon-src=titleImgTrip></NewsCard>
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
        <NewsCard title="3D GRID" :icon-src=pixelGridTitleImg></NewsCard>
      </router-link>
    </div>
    <div>
      <router-link to="/projects/galapagos">
        <NewsCard title="GALAPAGOS" :icon-src=titleImgSeal></NewsCard>
      </router-link>
    </div>
    <!--
    <div>
      <router-link to="/projects/paradise">
        <NewsCard title="ސުވަރުގެ" :icon-src=titleImgSeal></NewsCard>
      </router-link>
    </div>
    -->
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
    }
  },
  methods:{

  }
}
</script>
<style scoped>

.title-animation{
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  font-size: 40px;
  font-family: myFirstFont;
  opacity: 1;
  color: orangered;
}

.grid-container {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
  background-color: var(--bright);
  margin: auto auto 80px auto;;
  max-width: 1000px;

}

.grid-container div {
  text-align: center;
  font-size: 30px;
  border-radius: 20px;
  height: 300px;
}

@media screen and (max-width: 720px) {
.grid-container{
  margin-bottom: 150px;
}
}


</style>
