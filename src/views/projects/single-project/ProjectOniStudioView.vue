<template>
  <div>
    <div class="iframeContainer">
      <img :src="sequ2stil1"/>
      <div class="containerDownBtn" @click="goto('page2')">
        <div>CLICK TO SCROLL</div>
        <DownBtn></DownBtn>
      </div>
    </div>
    <div style="height: 100vh; width: 100vw;"></div>
    <div ref="page2" class="projectContentContainer">
      <h1 class="projectTitle">ONI STUDIO</h1>
      <div class="factsContainer">
        <ul>
          <li>
            <h2>Info</h2>
          </li>
          <li>Jewellery, designed and crafted in Berlin.</li>
          <li style="text-decoration: underline"><a href="https://www.oni-studio.com/">Link to website</a></li>
          <li>07/2022</li>
        </ul>
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

export default {
  name: 'ProjectOniStudio',
  components: {
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
  max-width: 300px;
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
  z-index: 1000;
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
