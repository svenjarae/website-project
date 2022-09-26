<template>
  <div id="parent">
    <div class="pageOne">
      <div class="iframeContainer">
        <img :src="sequ5stil1"/>
      </div>
    </div>
    <div class="divContainer">
      <div class="mainDescriptionWrapper">
        <h1>Title</h1>
        <p>Content</p>
      </div>
      <div class="flexContainer">
        <div class="flexWrapper">
          <span class="p-heading">Heading</span>
          <span class="p-content">Description</span>
        </div>
        <div class="flexWrapper">
          <span class="p-heading">Heading</span>
          <span class="p-content">Description</span>
        </div>
        <div class="flexWrapper">
          <span class="p-heading">Heading</span>
          <span class="p-content">Description</span>
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
            data-src="//vimeo.com/740775943"
            data-poster=""
            data-sub-html="<h4>Nature</h4><p>Video by <a target='_blank' href='https://vimeo.com/charliekaye'>Charlie Kaye</a></p>"
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="sequ5stil1"
          />
          <span class="playBtn">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" y="0"/></g><g><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M9.5,16.5v-9l7,4.5L9.5,16.5z"/></g></svg>
          </span>
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/740779236"
            data-poster=""
            data-sub-html="<h4>Nature</h4><p>Video by <a target='_blank' href='https://vimeo.com/charliekaye'>Charlie Kaye</a></p>"
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="sequ4stil1"
          />
          <span class="playBtn">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" y="0"/></g><g><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M9.5,16.5v-9l7,4.5L9.5,16.5z"/></g></svg>
          </span>
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/740767794"
            data-poster=""
            data-sub-html="<h4>Nature</h4><p>Video by <a target='_blank' href='https://vimeo.com/charliekaye'>Charlie Kaye</a></p>"
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="sequ3stil1"
          />
          <span class="playBtn">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" y="0"/></g><g><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M9.5,16.5v-9l7,4.5L9.5,16.5z"/></g></svg>
          </span>
        </a>

        <a
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="sequ2stil1"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
        >
          <img
              class="img-responsive"
              :src="sequ2stil1"
          />
          <span class="imgBtn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          </span>
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/740764055"
            data-poster=""
            data-sub-html="<h4>Nature</h4><p>Video by <a target='_blank' href='https://vimeo.com/charliekaye'>Charlie Kaye</a></p>"
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="sequ2stil2"
          />
          <span class="playBtn">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" y="0"/></g><g><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M9.5,16.5v-9l7,4.5L9.5,16.5z"/></g></svg>
          </span>
        </a>

        <a
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="sequ2stil3"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
        >
          <img
              class="img-responsive"
              :src="sequ2stil3"
          />
          <span class="imgBtn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          </span>
        </a>
      </lightgallery>
    </div>
  </div>
  <div class="leftCorner">
    <router-link to="/projects">
      <span>/ PROJECTS</span>
    </router-link>
    <router-link class="currentLink" to="/projects/onistudio">
      <span> / ONI STUDIO</span>
    </router-link>
  </div>
</template>
<script>

// images
import image from "/src/assets/logo.png";


import sequ2stil1 from "/././././././src/assets/images/projects/oni-studio/Sequence2-Stil1.jpg";
import sequ2stil2 from "/././././././src/assets/images/projects/oni-studio/Sequence2-Stil2.png";
import sequ2stil3 from "/././././././src/assets/images/projects/oni-studio/Sequence2-Stil3.jpg";

import sequ5stil1 from "/././././././src/assets/images/projects/oni-studio/Sequence5-Stil1.png";
import sequ4stil1 from "/././././././src/assets/images/projects/oni-studio/Sequence4-Stil1.png";
import sequ3stil1 from "/././././././src/assets/images/projects/oni-studio/Sequence3-Stil1.jpg";




import waterTurtle from "/././././././src/assets/images/projects/glowing-turts/water-turtle.jpg";
import waterHigh from "/././././././src/assets/images/projects/glowing-turts/water-turtle.jpg";
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
import islandSealions from "/././././././src/assets/images/projects/galapagos/galleryImgs/islandSealions.png";
import fish from "/././././././src/assets/images/projects/galapagos/galleryImgs/fish.png";
import whiteTips from "/././././././src/assets/images/projects/galapagos/galleryImgs/whiteTips.png";




import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

export default {
  name: 'ProjectOniStudio',
  components: {
    Lightgallery,
  },
  data: () => ({

    image: image,

    sequ2stil1: sequ2stil1,
    sequ2stil2:  sequ2stil2,
    sequ2stil3: sequ2stil3,
    sequ5stil1: sequ5stil1,
    sequ3stil1: sequ3stil1,
    sequ4stil1: sequ4stil1,

    seq5stil1: sealionsCuddle,
    whiteTips: whiteTips,
    sharkFin: sharkFin,
    sharksWhiteTips: sharksWhiteTips,
    fish: fish,
    manta: manta,
    island: island,
    galapagosShark: galapagosShark,
    islandSealions: islandSealions,
    iDive: iDive,
    waterTurtle: waterTurtle,
    waterHigh: waterHigh,
    puertoVillamil: puertoVillamil,
    sealion: sealion,
    pingu: pingu,

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
  position: relative;
}

.galleryContainer a{
  position: relative;
}
.galleryContainer a:hover svg{
  fill: orangered;
}
.playBtn, .imgBtn{
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px;
  background-color: white;
  display: flex;
}

.lightgallery-vue{
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
  gap: 20px;
  position: absolute;
  left: 70px;
  top: 0;
  bottom: 20px;
  right: 0;
}

.lightgallery-vue img{
  object-fit: cover;
  height: 100%;
  width: 100%;
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

.leftCorner{
  position: fixed;
  left: -76px;
  bottom: 281px;
  z-index: 99;
  transform: rotate(-90deg);
}

.iframeContainer{
  background-color: #007385;
  position: absolute;
  left: 70px;
  top: 0;
  bottom: 0;
  right: 0;
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

}

.mainDescriptionWrapper{
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
