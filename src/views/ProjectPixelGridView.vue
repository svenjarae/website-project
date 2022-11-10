<template>
  <div id="parent">
    <div class="pageOne">
      <div class="iframeContainer">
        <h1 class="projectTitle">3D GRID</h1>
        <div style="margin: 60px auto;">
        <PixelGrid></PixelGrid>
        </div>
        <div class="containerDownBtn">
          <DownBtn></DownBtn>
        </div>
      </div>
    </div>
    <router-link class="backBtnContainer" to="/projects">
      <BackBtn></BackBtn>
    </router-link>
    <div class="layoutWrapper" style="margin-top: 80px;margin-bottom: 80px;">
      <div class="mainDescriptionWrapper">
        <h1>3D GRID</h1>
        <p>ILLUSTRATION</p>
      </div>
      <div class="flexContainer">
        <div class="flexWrapper">
          <span class="p-heading">WHAT</span>
          <span class="p-content">A 3D GRID ILLUSTRATION</span>
        </div>
        <div class="flexWrapper">
          <span class="p-heading">WHY</span>
          <span class="p-content">I DONT KNOW</span>
        </div>
        <div class="flexWrapper">
          <span class="p-heading">WHEN</span>
          <span class="p-content">04/2021</span>
        </div>
      </div>
    </div>
    <div class="galleryContainer">

    </div>
  </div>
</template>
<script>

// images
import image from "/src/assets/logo.png";
import ivonOne from "/src/assets/images/projects/taliarte/P1033667.00_00_26_02.Still002.jpg";
import ivonTwo from "/src/assets/images/projects/taliarte/P1033667.00_00_02_20.Still004.jpg";
import ivonThree from "/src/assets/images/projects/taliarte/P1033667.00_00_01_08.Still005.jpg";
import ivonFour from "/src/assets/images/projects/taliarte/Sequence 01.00_00_08_31.Still005.jpg";
import water from "/src/assets/images/projects/taliarte/P1044050.MOV.05_59_46_44.Still001.jpg";
import lilly from "/src/assets/images/projects/taliarte/Sequence 01.00_03_10_00.Still005.jpg";
import bgWater from "/src/assets/images/projects/taliarte/Sequence 01.00_00_09_34.Still016.jpg";


import DownBtn from "@/components/buttons/DownBtn";
import BackBtn from "@/components/buttons/BackBtn";
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import PixelGrid from "@/components/animations/PixelGrid";

export default {
  name: 'ProjectPixelGridView',
  components: {
    PixelGrid,
    DownBtn,
    BackBtn
  },
  props:{

  },
  data: () => ({
    image: image,
    ivonOne: ivonOne,
    ivonTwo: ivonTwo,
    ivonThree: ivonThree,
    ivonFour: ivonFour,
    water: water,
    lilly: lilly,
    bgWater: bgWater,

    plugins: [lgZoom, lgVideo],
  }),
  methods: {
    onInit: () => {
      console.log('lightGallery has been initialized');
    },
    onBeforeSlide: () => {
      console.log('calling before slide');
    },
  },
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');

.galleryContainer{
  padding-bottom: 60px;
}

.projectTitle{
  position: absolute;
  font-size: 100px;
  text-transform: uppercase;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: orangered;
  font-family: myFirstFont;
}

.containerDownBtn{
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translate(-50%);
}

.galleryContainer a{
  position: relative;
}
.galleryContainer a:hover svg{
  fill: orangered;
}

.backBtnContainer{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 2px;
  z-index: 1000;
}

.lightgallery-vue{
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
  gap: 20px;
  max-width: 1000px;
  margin: auto;
}

.lightgallery-vue img{
  object-fit: cover;
  height: 300px;
  width: 100%;
  border-radius: 20px;
  min-width: 200px;
}

#parent {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

#parent > div:nth-child(1) {
  height: 100%;
  width: 100%;
}
#parent > div:nth-child(2) {
  padding: 60px;
}

.iframeContainer{
  background-color: #000;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
}

.iframeContainer img{
  object-fit: cover;
  height: 100%;
  width: 100%;
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
  gap: 10px;
}

.mainDescriptionWrapper{
  text-align: left;
  display: flex;
  flex-direction: column;
}

.flexWrapper{
  display: flex;
  flex-direction: column;
  text-align: left;
}

iframe{
  display: block;
  justify-content: inherit !important;

  align-items: center;
}

iframe .vp-center {
  display: block;
  justify-content: inherit !important;

  align-items: center;
}

.vp-center {
  display: block;
  justify-content: inherit !important;

  align-items: center;
}

.currentLink{
  margin-left: 5px;
}


</style>
