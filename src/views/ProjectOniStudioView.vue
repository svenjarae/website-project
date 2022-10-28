<template>
  <div id="parent">
    <div class="pageOne">
      <div class="iframeContainer">
        <h1 class="projectTitle">ONI STUDIO</h1>
        <img :src="sequ2stil1"/>
        <div class="containerDownBtn">
          <DownBtn></DownBtn>
        </div>
      </div>
    </div>
    <router-link class="backBtnContainer" to="/projects">
      <BackBtn></BackBtn>
    </router-link>
    <div class="layoutWrapper" style="margin-top: 60px;margin-bottom: 60px;">
      <div class="mainDescriptionWrapper">
        <h1>ONI STUDIO</h1>
        <p>Jewellery, designed and crafted in Berlin.</p>
        <a href="https://www.oni-studio.com/">Link to website</a>
      </div>
      <div class="flexContainer">
        <div class="flexWrapper">
          <span class="p-heading">WHO</span>
          <span class="p-content">CARLA & TONI</span>
        </div>
        <div class="flexWrapper">
          <span class="p-heading">WHEN</span>
          <span class="p-content">07/2022</span>
        </div>
        <div class="flexWrapper">
          <span class="p-heading">WHAT</span>
          <span class="p-content">PLAYING WITH SOME LIGHT, WATER & JEWELLERY</span>
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
            :data-src="sequ2stil1"
        >
          <img
              class="img-responsive"
              :src="sequ2stil1"
          />
        </a>

        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/740767794"
            data-poster=""
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="sequ3stil1"
          />
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/740775943"
            data-poster=""
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="sequ5stil1"
          />
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/740764055"
            data-poster=""
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="sequ2stil2"
          />
        </a>

        <a
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="sequ2stil3"
        >
          <img
              class="img-responsive"
              :src="sequ2stil3"
          />
        </a>


        <a
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="carla2"
        >
          <img
              class="img-responsive"
              :src="carla2"
          />
        </a>
        <a
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="carla"
        >
          <img
              class="img-responsive"
              :src="carla"
          />
        </a>
        <a
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="carla3"
        >
          <img
              class="img-responsive"
              :src="carla3"
          />
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/740779271"
            data-poster=""
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="titleimgsequenz6"
          />
        </a>

        <a
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="imageW"
        >
          <img
              class="img-responsive"
              :src="imageW"
          />
        </a>
        <a
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="imgSequenz7"
        >
          <img
              class="img-responsive"
              :src="imgSequenz7"
          />
        </a>
        <a
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="redBlue2"
        >
          <img
              class="img-responsive"
              :src="redBlue2"
          />
        </a>
        <a
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="toni"
        >
          <img
              class="img-responsive"
              :src="toni"
          />
        </a>

        <a
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="toni2"
        >
          <img
              class="img-responsive"
              :src="toni2"
          />
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/740789436"
            data-poster=""
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="titleimgsequenz1"
          />
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="https://vimeo.com/740789047"
            data-poster=""
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="bwTitleImg"
          />
        </a>
        <a
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="titleImgSequ8"
        >
          <img
              class="img-responsive"
              :src="titleImgSequ8"
          />
        </a>
      </lightgallery>
    </div>
  </div>
</template>
<script>

// images
import image from "/src/assets/logo.png";


import sequ2stil1 from "/././././././src/assets/images/projects/oni-studio/Sequence2-Stil1.jpg";
import sequ2stil2 from "/././././././src/assets/images/projects/oni-studio/Sequence2-Stil2.png";
import sequ2stil3 from "/././././././src/assets/images/projects/oni-studio/Sequence2-Stil3.jpg";

import sequ5stil1 from "/././././././src/assets/images/projects/oni-studio/Sequence5-Stil1.png";
import sequ3stil1 from "/././././././src/assets/images/projects/oni-studio/Sequence3-Stil1.jpg";

import titleimgsequenz1 from "/././././././src/assets/images/projects/oni-studio/titelimg-sequenz1.jpg";

import carla from "/././././././src/assets/images/projects/oni-studio/carla.png";
import carla2 from "/././././././src/assets/images/projects/oni-studio/carla2.jpg";
import carla3 from "/././././././src/assets/images/projects/oni-studio/carla3.jpg";
import toni from "/././././././src/assets/images/projects/oni-studio/toni.jpg";
import toni2 from "/././././././src/assets/images/projects/oni-studio/toni2.jpg";

import imageW from "/././././././src/assets/images/projects/oni-studio/image.jpg";
import imgSequenz7 from "/././././././src/assets/images/projects/oni-studio/image-sequenz7.jpg";
import titleImgSequ8 from "/././././././src/assets/images/projects/oni-studio/titleimg-sequenz8.jpg";
import titleimgsequenz6 from "/././././././src/assets/images/projects/oni-studio/titleimg-sequenz6.png";
import redBlue2 from "/src/assets/images/projects/oni-studio/red-blue2.jpg";

import bwTitleImg from "/src/assets/images/projects/oni-studio/bw-titleimg.png";

import Lightgallery from 'lightgallery/vue';
import DownBtn from "@/components/buttons/DownBtn";
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

import BackBtn from "@/components/buttons/BackBtn";

export default {
  name: 'ProjectOniStudio',
  components: {
    BackBtn,
    Lightgallery,
    DownBtn
  },
  data: () => ({
    image: image,
    sequ2stil1: sequ2stil1,
    sequ2stil2:  sequ2stil2,
    sequ2stil3: sequ2stil3,
    sequ5stil1: sequ5stil1,
    sequ3stil1: sequ3stil1,
    titleImgSequ8: titleImgSequ8,
    titleimgsequenz6: titleimgsequenz6,
    titleimgsequenz1: titleimgsequenz1,
    carla: carla,
    carla2: carla2,
    carla3: carla3,
    toni: toni,
    toni2: toni2,
    redBlue2: redBlue2,
    imageW: imageW,
    imgSequenz7:imgSequenz7,
    bwTitleImg: bwTitleImg,

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

.leftCorner{
  position: fixed;
  left: -79px;
  bottom: 285px;
  z-index: 99;
  transform: rotate(-90deg);
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
