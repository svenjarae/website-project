<template>
  <div>
    <div class="iframeContainer">
      <img :src="sequ2stil1"/>
      <div class="containerDownBtn" @click="goto('page2')">
        <DownBtn></DownBtn>
      </div>
    </div>
    <div style="height: 100vh; width: 100vw;"></div>
    <div ref="page2" class="projectContentContainer">
      <h1 class="projectTitle">ONI STUDIO</h1>
      <div class="factsContainer">
        <ul>
          <li>
            <h2>Short</h2>
          </li>
          <li>Jewellery, designed and crafted in Berlin.</li>
          <li class="link"><a href="https://www.oni-studio.com/">Website</a></li>
          <li class="link"><a href="https://www.instagram.com/_oni_studio_jewelry/">Instagram</a></li>
          <li>09/2022</li>
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
        <a  v-if="filter === 'all' || filter === 'photo'"
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
        <a  v-if="filter === 'all' || filter === 'video'"
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
          <span class="play-icon fa fa-play" aria-hidden="true"></span>
        </a>
        <!-- VImeo Video --->
        <a  v-if="filter === 'all' || filter === 'video'"
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
          <span class="play-icon fa fa-play" aria-hidden="true"></span>
        </a>
        <!-- VImeo Video --->
        <a  v-if="filter === 'all' || filter === 'video'"
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
          <span class="play-icon fa fa-play" aria-hidden="true"></span>
        </a>

        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="sequ2stil3"
        >
          <img
              class="img-responsive"
              :src="sequ2stil3"
          />
        </a>


        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="carla2"
        >
          <img
              class="img-responsive"
              :src="carla2"
          />
        </a>
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="carla"
        >
          <img
              class="img-responsive"
              :src="carla"
          />
        </a>
        <a  v-if="filter === 'all' || filter === 'photo'"
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
        <a  v-if="filter === 'all' || filter === 'video'"
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
          <span class="play-icon fa fa-play" aria-hidden="true"></span>
        </a>

        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="imageW"
        >
          <img
              class="img-responsive"
              :src="imageW"
          />
        </a>
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="imgSequenz7"
        >
          <img
              class="img-responsive"
              :src="imgSequenz7"
          />
        </a>
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="redBlue2"
        >
          <img
              class="img-responsive"
              :src="redBlue2"
          />
        </a>
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="toni"
        >
          <img
              class="img-responsive"
              :src="toni"
          />
        </a>

        <a  v-if="filter === 'all' || filter === 'photo'"
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
          <span class="play-icon fa fa-play" aria-hidden="true"></span>
        </a>
        <!-- VImeo Video --->
        <a  v-if="filter === 'all' || filter === 'video'"
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
          <span class="play-icon fa fa-play" aria-hidden="true"></span>
        </a>
        <a  v-if="filter === 'all' || filter === 'photo'"
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
