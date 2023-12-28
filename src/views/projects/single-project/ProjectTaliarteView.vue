<template>
  <div>
    <div class="iframeContainer">
      <img :src="ivonOne"/>
      <div class="containerDownBtn" @click="goto('page2')">
        <DownBtn></DownBtn>
      </div>
    </div>
    <div style="height: 100vh; width: 100vw;"></div>
    <div ref="page2" class="projectContentContainer">
      <h1 class="projectTitle">TALIARTE</h1>
      <div class="factsContainer">
        <ul>
          <li>
            <h2>Info</h2>
          </li>
          <li>Gran Canaria, Taliarte</li>
          <li>Ivon, Lilly</li>
          <li>09/2022</li>
        </ul>
        <ul>
          <li>
            <h2>Description</h2>
          </li>
          <li>every single day the Telde coastline is the setting for a fantastic colourful dawn. The early hours are the ideal moment to enjoy the beautiful morning sea which provides very good visibility to take great pictures and videos.</li>
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
            :data-src="ivonOne"
        >
          <img
              class="img-responsive"
              :src="ivonOne"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="ivonTwo"
        >
          <img
              class="img-responsive"
              :src="ivonTwo"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="ivonThree"
        >
          <img
              class="img-responsive"
              :src="ivonThree"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="ivonFour"
        >
          <img
              class="img-responsive"
              :src="ivonFour"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="lilly"
        >
          <img
              class="img-responsive"
              :src="lilly"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="bgWater"
        >
          <img
              class="img-responsive"
              :src="bgWater"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="yo"
        >
          <img
              class="img-responsive"
              :src="yo"
          />
        </a>
        <!-- VImeo Video --->
        <a
          data-lg-size="1280-720"
          data-src="//vimeo.com/764521178"
          data-poster=""
        >
        <img
            width="300"
            height="100"
            class="img-responsive"
            :src="titleImgAgua"
        />
        </a>
      </lightgallery>
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
import lilly from "/src/assets/images/projects/taliarte/Sequence 01.00_03_10_00.Still005.jpg";
import bgWater from "/src/assets/images/projects/taliarte/Sequence 01.00_00_09_34.Still016.jpg";
import yo from "/src/assets/images/projects/taliarte/yo-master.jpg";
import titleImgAgua from "/src/assets/images/projects/taliarte/aguaTitleimg.png";


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
    ivonOne: ivonOne,
    ivonTwo: ivonTwo,
    ivonThree: ivonThree,
    ivonFour: ivonFour,
    lilly: lilly,
    bgWater: bgWater,
    yo:yo,
    titleImgAgua: titleImgAgua,

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
