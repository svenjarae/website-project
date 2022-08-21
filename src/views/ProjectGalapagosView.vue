<template>
  <div id="parent">
    <div class="pageOne">
      <div class="iframeContainer">
        <img :src="sealion"/>
      </div>
    </div>
    <div class="divContainer">
      <div>
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
        <a
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="waterTurtle"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
        >
          <img
              class="img-responsive"
              :src="waterTurtle"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="waterHigh"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"
        >
          <img
              class="img-responsive"
              :src="waterHigh"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="puertoVillamil"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
        >
          <img
              class="img-responsive"
              :src="puertoVillamil"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="iDive"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
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
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
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
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
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
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
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
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
        >
          <img
              class="img-responsive"
              :src="island"
          />
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="sharkFin"
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
        >
          <img
              class="img-responsive"
              :src="sharkFin"
          />
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/738656811"
            data-poster=""
            data-sub-html="<h4>Nature</h4><p>Video by <a target='_blank' href='https://vimeo.com/charliekaye'>Charlie Kaye</a></p>"
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="sealion"
          />
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/741586500"
            data-poster=""
            data-sub-html="<h4>Nature</h4><p>Video by <a target='_blank' href='https://vimeo.com/charliekaye'>Charlie Kaye</a></p>"
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
            data-sub-html="<h4>Nature</h4><p>Video by <a target='_blank' href='https://vimeo.com/charliekaye'>Charlie Kaye</a></p>"
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
            data-sub-html="<h4>Nature</h4><p>Video by <a target='_blank' href='https://vimeo.com/charliekaye'>Charlie Kaye</a></p>"
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="whiteTips"
          />
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/741586442"
            data-poster=""
            data-sub-html="<h4>Nature</h4><p>Video by <a target='_blank' href='https://vimeo.com/charliekaye'>Charlie Kaye</a></p>"
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="islandSealions"
          />
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/741586482"
            data-poster=""
            data-sub-html="<h4>Nature</h4><p>Video by <a target='_blank' href='https://vimeo.com/charliekaye'>Charlie Kaye</a></p>"
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="fish"
          />
        </a>
      </lightgallery>
    </div>
  </div>
  <div class="leftCorner">
    <router-link to="/projects">
      <span>/ PROJECTS</span>
    </router-link>
    <router-link to="/projects/galapagos">
      <span class=""> / GALAPAGOS</span>
    </router-link>
  </div>
</template>
<script>

// images
import image from "/src/assets/logo.png";

import waterTurtle from "/././././././src/assets/images/projects/galapagos/galleryImgs/water-turtle.jpg";
import waterHigh from "/././././././src/assets/images/projects/galapagos/galleryImgs/water-high-saturation.jpg";
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
  name: 'ProjectGalapagosView',
  components: {
    Lightgallery,
  },
  data: () => ({
    image: image,
    sealionsCuddle: sealionsCuddle,
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

.lightgallery-vue{
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
  position: absolute;
  left: 60px;
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
  left: -78px;
  bottom: 285px;
  z-index: 99;
  transform: rotate(-90deg);
}

.iframeContainer{
  background-color: #007385;
  position: absolute;
  left: 60px;
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
  gap: 20px;
}

.flexWrapper{
  display: flex;
  flex-direction: column;
  text-align: left;
}

.landingImg{
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
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



</style>
