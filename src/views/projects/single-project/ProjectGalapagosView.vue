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
            <h2>Short</h2>
          </li>
          <li>Galapagos Island</li>
          <li>10/2018</li>
          <li>Perfect example of evolution & unique wildlife.</li>
        </ul>
        <ul>
          <li>
            <h2></h2>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
    <div class="galleryContainer">
      <div class="filter-buttons">
        <button @click="setFilter('all')" :class="{ 'active': filter === 'all' }">All</button>
        <button @click="setFilter('photo')" :class="{ 'active': filter === 'photo' }">Photos</button>
        <button @click="setFilter('video')" :class="{ 'active': filter === 'video' }">Videos</button>
      </div>
      <lightgallery
          :settings="{ speed: 500, plugins: plugins }"
          :onInit="onInit"
          :onBeforeSlide="onBeforeSlide"
      >
        <!-- Vimeo Video --->
        <a  v-if="filter === 'all' || filter === 'video'"
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
          <span class="play-icon fa fa-play" aria-hidden="true"></span>
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="waterHighSat"
        >
          <img
              class="img-responsive"
              :src="waterHighSat"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="waterTurtle"
        >
          <img
              class="img-responsive"
              :src="waterTurtle"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="sealionsCuddle"
        >
          <img
              class="img-responsive"
              :src="sealionsCuddle"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="galapagosShark"
        >
          <img
              class="img-responsive"
              :src="galapagosShark"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="manta"
        >
          <img
              class="img-responsive"
              :src="manta"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="bwWhitetips"
        >
          <img
              class="img-responsive"
              :src="bwWhitetips"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="island"
        >
          <img
              class="img-responsive"
              :src="island"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="puertoVillamil"
        >
          <img
              class="img-responsive"
              :src="puertoVillamil"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="landscape"
        >
          <img
              class="img-responsive"
              :src="landscape"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="birdDry"
        >
          <img
              class="img-responsive"
              :src="birdDry"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="iguana"
        >
          <img
              class="img-responsive"
              :src="iguana"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="iguanas"
        >
          <img
              class="img-responsive"
              :src="iguanas"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="galapagosExe"
        >
          <img
              class="img-responsive"
              :src="galapagosExe"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="turtles"
        >
          <img
              class="img-responsive"
              :src="turtles"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="whitetip"
        >
          <img
              class="img-responsive"
              :src="whitetip"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="sharkFin"
        >
          <img
              class="img-responsive"
              :src="sharkFin"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="iDive"
        >
          <img
              class="img-responsive"
              :src="iDive"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="molamola"
        >
          <img
              class="img-responsive"
              :src="molamola"
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
import waterHighSat from "/././././././src/assets/images/projects/glowing-turts/water-high-saturation.jpg";
import waterTurtle from "/././././././src/assets/images/projects/glowing-turts/water-turtle.jpg";
import birdDry from "/././././././src/assets/images/projects/galapagos/galleryImgs/birdDry.jpg";
import galapagosExe from "/src/assets/images/projects/galapagos/galleryImgs/galapagosExe.jpg";
import landscape from "/src/assets/images/projects/galapagos/galleryImgs/landscape.jpg";
import bwWhitetips from "/src/assets/images/projects/galapagos/galleryImgs/bw-whitetips.jpg";
import whitetip from "/src/assets/images/projects/galapagos/galleryImgs/whitetip.jpg";
import iguana from "/src/assets/images/projects/galapagos/galleryImgs/galapagos-iguana.jpg";
import iguanas from "/src/assets/images/projects/galapagos/galleryImgs/galapagos-iguanas.jpg";
import turtles from "/src/assets/images/projects/galapagos/galleryImgs/galapagos-turtles.jpg";
import molamola from "/src/assets/images/projects/galapagos/galleryImgs/molamola.jpg";

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
    waterHighSat: waterHighSat,
    waterTurtle: waterTurtle,
    birdDry: birdDry,
    galapagosExe: galapagosExe,
    landscape: landscape,
    bwWhitetips: bwWhitetips,
    iguana: iguana,
    iguanas: iguanas,
    turtles: turtles,
    molamola: molamola,
    whitetip: whitetip,

    plugins: [lgZoom, lgVideo],

    filter: 'all', // 'all', 'photo', 'video'
  }),
  methods: {
    setFilter(filter) {
      this.filter = filter;
    },
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
  font-size: 12vw;
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
  display: flex;
  flex-direction: column;
}

.lightgallery-vue img{
  object-fit: cover;
  height: 100%;
  width: 100%;
  max-width: 600px;
  min-width: 200px;
  transition: all 0.5s ease-in-out;
  border-radius: 1px;
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
  text-align: left;
  color: darkgray;
  text-transform: uppercase;
  z-index: 100;
  padding-inline-start: 0;
  padding: 80px;
  letter-spacing: 0.1em;
  display: flex;
  gap: 80px;
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

.icon-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5em;
  color: white;
  opacity: 0.4;
  transition: all 0.5s ease-in-out;
}

.filter-buttons {
  flex-direction: column;
  position: sticky;
  top: 100px;
  max-width: 100px;
  display: flex;
  z-index: 1;
}

.filter-buttons button {
  margin-bottom: 10px;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.filter-buttons button.active {
  background-color: blue;
}

.link a{
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-color: blue;
  transition: all 0.3s ease-in-out 0s;
  color: darkgray;
}

.link:hover a{
  text-decoration-color: white;
  color: blue;
}

.play-icon{
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


@media screen and (max-width: 1100px) {
  .filter-buttons {
    position: sticky;
    top: calc(100vh - 50px);
    left: unset;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-end;
    margin-right: -40px;
    max-width: none;
  }
}

@media screen and (max-width: 780px) {
  .factsContainer {
  display: block;
  position: unset;
  padding: 20px;
  font-size: 14px;
}
.projectTitle{
      position: unset;
      transform: translate(0, 0);
      padding-top: 30px;
    }
.projectContentContainer{
  height: auto;
}

.galleryContainer{
  padding: 60px;
}
}

</style>
