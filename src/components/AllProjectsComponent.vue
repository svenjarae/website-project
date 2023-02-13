<template>
  <TabNav :selected="selected" :tabs="['all', 'animation', 'photo/video']"
          @selected="setSelected">
    <TabContent :is-selected="selected === 'all' ">
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
        <div class="2" v-show="selected === 'all' || 'animation'">
          <router-link to="/projects/animations/triangle">
            <NewsCard title="TRIANGLE" :icon-src=titleImgTrip></NewsCard>
          </router-link>
        </div>
        <div class="2" v-show="selected === 'all' || 'animation'">
          <router-link to="/projects/animations/bird">
            <NewsCard title="BIRD" :icon-src=titleImgBird></NewsCard>
          </router-link>
        </div>
        <div class="1" v-show="selected === 'all' || 'photo/video'">
          <router-link to="/projects/onistudio">
            <NewsCard title="ONI STUDIO" :icon-src=titleImgOni></NewsCard>
          </router-link>
        </div>
        <div class="2" v-show="showAnime">
          <router-link to="/projects/animations/pixelgrid">
            <NewsCard title="3D GRID" :icon-src=pixelGridTitleImg></NewsCard>
          </router-link>
        </div>
        <div>
          <router-link to="/projects/galapagos">
            <NewsCard title="GALAPAGOS" :icon-src=titleImgSeal></NewsCard>
          </router-link>
        </div>
      </div>
    </TabContent>
    <TabContent :is-selected="selected === 'photo/video' ">
      <div class="grid-container">
        <div class="1" v-if="selected === 'all' || 'photo/video'">
          <router-link to="/projects/taliarte">
            <NewsCard title="TALIARTE" :icon-src=ivonOne></NewsCard>
          </router-link>
        </div>
        <div class="1" v-if="selected === 'all' || 'photo/video'">
          <router-link to="/projects/gcsealife">
            <NewsCard title="GC SEALIFE" :icon-src=squid1></NewsCard>
          </router-link>
        </div>
        <div class="1" v-show="selected === 'all' || 'photo/video'">
          <router-link to="/projects/onistudio">
            <NewsCard title="ONI STUDIO" :icon-src=titleImgOni></NewsCard>
          </router-link>
        </div>
        <div class="1" v-show="selected === 'all' || 'photo/video'">
          <router-link to="/projects/galapagos">
            <NewsCard title="GALAPAGOS" :icon-src=titleImgSeal></NewsCard>
          </router-link>
        </div>
      </div>
    </TabContent>
    <TabContent :is-selected="selected === 'animation' ">
      <div class="grid-container">
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
          <router-link to="/projects/animations/pixelgrid">
            <NewsCard title="3D GRID" :icon-src=pixelGridTitleImg></NewsCard>
          </router-link>
        </div>

      </div>
    </TabContent>
  </TabNav>


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
import TabNav from "@/components/tabs/TabNav";
import TabContent from "@/components/tabs/TabContent";

export default {
  name: 'AllProjectsComponent',
  components: {
    TabContent,
    TabNav,
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

.active{
  background-color: orangered!important;
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
