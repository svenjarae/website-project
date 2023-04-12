<template>
  <div id="parent">
    <div class="pageOne">
      <div class="iframeContainer">
        <img :src="ivonOne"/>
        <div class="containerDownBtn" @click="goto('page2')">
          <h1 class="projectTitle">SCROLL DOWN</h1>
          <DownBtn></DownBtn>
        </div>
      </div>
    </div>
    <div ref="page2" class="projectContentContainer">
      <div>
        <div>
          <span>WHERE</span>
          <span>bdbfhdb</span>
        </div>
        <div>
          <span>WHO</span>
          <span>bdbfhdb</span>
        </div>
        <div>
          <span>WHAT</span>
          <span>bdbfhdb</span>
        </div>
      </div>
      <div>
        card
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
            :data-src="water"
        >
          <img
              class="img-responsive"
              :src="water"
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
import water from "/src/assets/images/projects/taliarte/P1044050.MOV.05_59_46_44.Still001.jpg";
import lilly from "/src/assets/images/projects/taliarte/Sequence 01.00_03_10_00.Still005.jpg";
import bgWater from "/src/assets/images/projects/taliarte/Sequence 01.00_00_09_34.Still016.jpg";
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
    water: water,
    lilly: lilly,
    bgWater: bgWater,
    titleImgAgua: titleImgAgua,

    plugins: [lgZoom, lgVideo],
  }),
  methods: {
    onInit: () => {
      console.log('lightGallery has been initialized');
    },
    onBeforeSlide: () => {
      console.log('calling before slide');
    },
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
  },
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');

.galleryContainer{
  margin: auto;
  padding: 80px;
}

.projectTitle{
  color: white;
  font-size: 16px;
  letter-spacing: 0.1em;
  font-weight: 500;
  margin-bottom: 24px;
}

.containerDownBtn{
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translate(-50%);
  cursor: pointer;
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
.mainDescriptionWrapper h1{
  font-family: MyFirstFont;
  font-size: 4em;
  text-transform: uppercase;
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
