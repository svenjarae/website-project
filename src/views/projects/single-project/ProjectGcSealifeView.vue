<template>
  <div>
    <div class="iframeContainer">
      <img :src="squid1"/>
      <div class="containerDownBtn" @click="goto('page2')">
        <div>CLICK TO SCROLL</div>
        <DownBtn></DownBtn>
      </div>
    </div>
    <div style="height: 100vh; width: 100vw;"></div>
    <div ref="page2" class="projectContentContainer">
      <h1 class="projectTitle">GC SEALIFE</h1>
      <div class="factsContainer">
        <ul>
          <li>
            <h2>Info</h2>
          </li>
          <li>TUFIA, EL CABRON & SARDINA DEL NORTE</li>
          <li>Scuba Diving with
            <a href="https://www.karapatdive.com/">Karapat Dive</a>
          </li>
          <li>A combination of North Atlantic, Mediterranean, and endemic species.</li>
        </ul>
      </div>
    </div>
    <div class="galleryContainer">
      <lightgallery
          :settings="{ speed: 500, plugins: plugins }"
          :onInit="onInit"
          :onBeforeSlide="onBeforeSlide"
      >
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="squid1"
            data-sub-html="<h4>Photos & Videos taken & edited by SR - </h4><p>Squids</p>"
        >
          <img
              class="img-responsive"
              :src="squid1"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="squid2"
        >
          <img
              class="img-responsive"
              :src="squid2"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="squid3"
        >
          <img
              class="img-responsive"
              :src="squid3"
          />
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/826681609"
            data-poster=""
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="titleImgVideoCuttlefish"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="glow"
        >
          <img
              class="img-responsive"
              :src="glow"
          />
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/826688340"
            data-poster=""
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="titleImgVideoAngelshark"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="part1"
        >
          <img
              class="img-responsive"
              :src="part1"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="part2"
        >
          <img
              class="img-responsive"
              :src="part2"
          />
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/826704970"
            data-poster=""
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="titleImgVideoMorrena"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="fishColors"
        >
          <img
              class="img-responsive"
              :src="fishColors"
          />
        </a>
      </lightgallery>
    </div>
  </div>
</template>
<script>

// images
import image from "/src/assets/logo.png";
import squid2 from "/src/assets/images/projects/gc-sealife/squid2.png";
import squid1 from "/src/assets/images/projects/gc-sealife/squid1.png";
import squid3 from "/src/assets/images/projects/gc-sealife/squid3.png";
import titleImgVideoCuttlefish from "/src/assets/images/projects/gc-sealife/cuttleTitleimg.jpg";
import titleImgVideoMorrena from "/src/assets/images/projects/gc-sealife/morrenaTitleimg.jpg";
import titleImgVideoAngelshark from "/src/assets/images/projects/gc-sealife/angelsharkTitleimg.jpg";

import part1 from "/src/assets/images/projects/gc-sealife/part1.jpg";
import part2 from "/src/assets/images/projects/gc-sealife/part2.jpg";
import glow from "/src/assets/images/projects/gc-sealife/glow.png";
import fishColors from "/src/assets/images/projects/gc-sealife/fishColors.png";


import DownBtn from "@/components/buttons/DownBtn";
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

export default {
  name: 'GcSealifeView',
  components: {
    Lightgallery,
    DownBtn,
  },
  props:{

  },
  data: () => ({
    image: image,
    squid1: squid1,
    squid2: squid2,
    squid3: squid3,
    part1: part1,
    part2: part2,
    glow: glow,
    fishColors: fishColors,
    titleImgVideoCuttlefish: titleImgVideoCuttlefish,
    titleImgVideoMorrena: titleImgVideoMorrena,
    titleImgVideoAngelshark: titleImgVideoAngelshark,

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
