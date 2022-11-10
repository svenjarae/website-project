<template>
  <div id="parent">
    <div class="pageOne">
      <div class="iframeContainer">
        <h1 class="projectTitle">GALAPAGOS</h1>
        <img :src="sealion"/>
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
        <h1>GALAPAGOS</h1>
        <p>Galapagos islands</p>
      </div>
      <div class="flexContainer">
        <div class="flexWrapper">
          <span class="p-heading">THIS IS</span>
          <span class="p-content">INSIGHT OF A TRUE NATURAL WONDER</span>
        </div>
        <div class="flexWrapper">
          <span class="p-heading">I DID</span>
          <span class="p-content">NOTHING BUT TRYING TO NOT WIGGLE THE CAM</span>
        </div>
        <div class="flexWrapper">
          <span class="p-heading">CRAZY DIVERSITY OF LIFE</span>
          <span class="p-content">SHARKS, PENGUINS, TURTLES, SEALS & IGUANAS</span>
        </div>
      </div>
    </div>
    <div class="galleryContainer">
      <lightgallery
          :settings="{ speed: 500, plugins: plugins }"
          :onInit="onInit"
          :onBeforeSlide="onBeforeSlide"
      >
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/738656811"
            data-poster=""
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="sealion"
          />
        </a>

        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="waterHighSat"
        >
          <img
              class="img-responsive"
              :src="waterHighSat"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="waterTurtle"
        >
          <img
              class="img-responsive"
              :src="waterTurtle"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="iDive"
        >
          <img
              class="img-responsive"
              :src="iDive"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="galapagosShark"
        >
          <img
              class="img-responsive"
              :src="galapagosShark"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="manta"
        >
          <img
              class="img-responsive"
              :src="manta"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="sealionsCuddle"
        >
          <img
              class="img-responsive"
              :src="sealionsCuddle"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="island"
        >
          <img
              class="img-responsive"
              :src="island"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="puertoVillamil"
        >
          <img
              class="img-responsive"
              :src="puertoVillamil"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="landscape"
        >
          <img
              class="img-responsive"
              :src="landscape"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="birdDry"
        >
          <img
              class="img-responsive"
              :src="birdDry"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="galapagosExe"
        >
          <img
              class="img-responsive"
              :src="galapagosExe"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="pinguLandscape"
        >
          <img
              class="img-responsive"
              :src="pinguLandscape"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="sharkFin"
        >
          <img
              class="img-responsive"
              :src="sharkFin"
          />
        </a>

        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/741586500"
            data-poster=""
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="pingu"
          />
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/741586539"
            data-poster=""
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="sharksWhiteTips"
          />
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/741586552"
            data-poster=""
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="whiteTips"
          />
        </a>
      </lightgallery>
    </div>
  </div>
</template>
<script>

// images
import image from "/src/assets/logo.png";
import puertoVillamil from "/././././././src/assets/images/projects/galapagos/galleryImgs/puertovillamil.jpg";
import galapagosShark from "/././././././src/assets/images/projects/galapagos/galleryImgs/galapagos-shark.jpg";
import iDive from "/././././././src/assets/images/projects/galapagos/galleryImgs/i-dive.png";
import sealion from "/././././././src/assets/images/projects/galapagos/titleImg.png";
import island from "/././././././src/assets/images/projects/galapagos/galleryImgs/island-and-bird.jpg";
import manta from "/././././././src/assets/images/projects/galapagos/galleryImgs/manta.jpg";
import sealionsCuddle from "/././././././src/assets/images/projects/galapagos/galleryImgs/seelions-cuddle.jpg";
import sharkFin from "/././././././src/assets/images/projects/galapagos/galleryImgs/sharkfin.jpg";
import pingu from "/././././././src/assets/images/projects/galapagos/galleryImgs/piingu.png";
import sharksWhiteTips from "/././././././src/assets/images/projects/galapagos/galleryImgs/sharksWhiteTips.png";
import whiteTips from "/././././././src/assets/images/projects/galapagos/galleryImgs/whiteTips.png";
import waterHighSat from "/././././././src/assets/images/projects/glowing-turts/water-high-saturation.jpg";
import waterTurtle from "/././././././src/assets/images/projects/glowing-turts/water-turtle.jpg";

import birdDry from "/././././././src/assets/images/projects/galapagos/galleryImgs/birdDry.jpg";
import galapagosExe from "/src/assets/images/projects/galapagos/galleryImgs/galapagosExe.jpg";
import landscape from "/src/assets/images/projects/galapagos/galleryImgs/landscape.jpg";
import pinguLandscape from "/src/assets/images/projects/galapagos/galleryImgs/pinguLandscape.jpg";

import DownBtn from "@/components/buttons/DownBtn";
import BackBtn from "@/components/buttons/BackBtn";
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

export default {
  name: 'ProjectGalapagosView',
  components: {
    Lightgallery,
    DownBtn,
    BackBtn
  },
  props:{

  },
  data: () => ({
    image: image,
    sealionsCuddle: sealionsCuddle,
    whiteTips: whiteTips,
    sharkFin: sharkFin,
    sharksWhiteTips: sharksWhiteTips,
    manta: manta,
    island: island,
    galapagosShark: galapagosShark,
    iDive: iDive,
    puertoVillamil: puertoVillamil,
    sealion: sealion,
    pingu: pingu,
    waterHighSat: waterHighSat,
    waterTurtle: waterTurtle,

    birdDry: birdDry,
    galapagosExe: galapagosExe,
    landscape: landscape,
    pinguLandscape: pinguLandscape,

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
  background-color: #007385;
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
