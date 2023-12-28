<template>
  <div>
    <div class="iframeContainer">
      <img :src="sealion"/>
      <div class="containerDownBtn" @click="goto('page2')">
        <DownBtn></DownBtn>
      </div>
    </div>
    <div style="height: 100vh; width: 100vw;"></div>
    <div ref="page2" class="projectContentContainer">
      <h1 class="projectTitle">GALAPAGOS</h1>
      <div class="factsContainer">
        <ul>
          <li>
            <h2>Info</h2>
          </li>
          <li>Galapagos Island</li>
          <li>10/2018</li>
        </ul>
        <ul>
          <li>
            <h2>Description</h2>
          </li>
        <li>Perfect example of evolution & unique wildlife.</li>
        </ul>
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
            :data-src="turtle"
        >
          <img
              class="img-responsive"
              :src="turtle"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="bwWhitetips"
        >
          <img
              class="img-responsive"
              :src="bwWhitetips"
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
            :data-src="iguana"
        >
          <img
              class="img-responsive"
              :src="iguana"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="iguanas"
        >
          <img
              class="img-responsive"
              :src="iguanas"
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
            :data-src="turtles"
        >
          <img
              class="img-responsive"
              :src="turtles"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="mobulas"
        >
          <img
              class="img-responsive"
              :src="mobulas"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="whitetip"
        >
          <img
              class="img-responsive"
              :src="whitetip"
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
            :data-src="molamola"
        >
          <img
              class="img-responsive"
              :src="molamola"
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
import waterHighSat from "/././././././src/assets/images/projects/glowing-turts/water-high-saturation.jpg";
import waterTurtle from "/././././././src/assets/images/projects/glowing-turts/water-turtle.jpg";
import birdDry from "/././././././src/assets/images/projects/galapagos/galleryImgs/birdDry.jpg";
import galapagosExe from "/src/assets/images/projects/galapagos/galleryImgs/galapagosExe.jpg";
import landscape from "/src/assets/images/projects/galapagos/galleryImgs/landscape.jpg";


import bwWhitetips from "/src/assets/images/projects/galapagos/galleryImgs/bw-whitetips.jpg";
import whitetip from "/src/assets/images/projects/galapagos/galleryImgs/whitetip.jpg";
import iguana from "/src/assets/images/projects/galapagos/galleryImgs/galapagos-iguana.jpg";
import iguanas from "/src/assets/images/projects/galapagos/galleryImgs/galapagos-iguanas.jpg";
import turtle from "/src/assets/images/projects/galapagos/galleryImgs/galapagos_turtle.jpg";
import turtles from "/src/assets/images/projects/galapagos/galleryImgs/galapagos-turtles.jpg";
import molamola from "/src/assets/images/projects/galapagos/galleryImgs/molamola.jpg";
import mobulas from "/src/assets/images/projects/galapagos/galleryImgs/galapagos-mobulas.jpg";

import DownBtn from "@/components/buttons/DownBtn";
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

export default {
  name: 'ProjectGalapagosView',
  components: {
    Lightgallery,
    DownBtn,
  },
  props:{

  },
  data: () => ({
    image: image,
    sealionsCuddle: sealionsCuddle,
    sharkFin: sharkFin,
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

    bwWhitetips: bwWhitetips,
    iguana: iguana,
    iguanas: iguanas,
    mobulas: mobulas,
    turtle: turtle,
    turtles: turtles,
    molamola: molamola,
    whitetip: whitetip,

    plugins: [lgZoom, lgVideo],
  }),
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
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
  margin: auto;
  padding: 120px 80px;
  background-color: #17191CFF;
}

.projectTitle{
  color: white;
  font-size: 100px;
  letter-spacing: 0.1em;
  font-weight: 500;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translate(-50%, 0);
  font-family: var(--secondaryFont);
  text-transform: uppercase;
}

.containerDownBtn{
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
  color: white;
}

.containerDownBtn div{
  margin-bottom: 16px;
  letter-spacing: 0.1em;
}

.galleryContainer a{
  position: relative;
}
.galleryContainer a:hover svg{
  fill: orangered;
}

.lightgallery-vue{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
  grid-gap: clamp(1rem, 2vw, 1rem)
}

.lightgallery-vue img{
  object-fit: cover;
  height: 300px;
  width: 100%;
  min-width: 200px;
}

.projectContentContainer{
  height: 100vh;
  background-color: #202023;
  position: relative;
}

.factsContainer {
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 350px;
  text-align: left;
  color: darkgray;
  text-transform: uppercase;
  z-index: 100;
  padding-inline-start: 0;
  padding: 80px;
  letter-spacing: 0.1em;
}

.factsContainer h2{
  color: white;
  font-weight: 500;
  display: inline-block;
}

.factsContainer li{
  list-style: none;
  margin: 8px 0;
}

.iframeContainer{
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}

.iframeContainer img{
  object-fit: cover;
  height: 100%;
  width: 100%;
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

</style>
