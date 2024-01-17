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
            <h2>Short</h2>
          </li>
          <li>Gran Canaria, Taliarte</li>
          <li><a href="https://www.instagram.com/ivonzi/"></a>Ivon</li>
          <li>09/2022</li>
        </ul>
        <ul>
          <li>
            <h2>Description</h2>
          </li>
          <li>A rocky Bay close to Taliarte, Gran Canaria, offers calm waters protected by the harbor, with a maximum depth of 6 meters. The site, suitable for all skill levels, features clear visibility and gentle currents, making it ideal for capturing Ivon against the blue water and sandy surroundings.
</li>
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
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="ivonOne"
        >
          <img
              class="img-responsive"
              :src="ivonOne"
          />
          <span class="fa fa-camera icon-photo"></span>
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="ivonTwo"
        >
          <img
              class="img-responsive"
              :src="ivonTwo"
          />
          <span class="fa fa-camera icon-photo"></span>
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="ivonThree"
        >
          <img
              class="img-responsive"
              :src="ivonThree"
          />
          <span class="fa fa-camera icon-photo"></span>
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="ivonFour"
        >
          <img
              class="img-responsive"
              :src="ivonFour"
          />
          <span class="fa fa-camera icon-photo"></span>
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="bgWater"
        >
          <img
              class="img-responsive"
              :src="bgWater"
          />
          <span class="fa fa-camera icon-photo"></span>
        </a>
        <!-- VImeo Video --->
        <a  v-if="filter === 'all' || filter === 'video'"
            data-lg-size="1280-720"
            data-src="//vimeo.com/764521178"
            data-poster=""
            class="fullWidthGridCard"
        >
        <img
            width="300"
            height="100"
            class="img-responsive"
            :src="titleImgAgua"
        />
        <span class="fa fa-video icon-video"></span>
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
    bgWater: bgWater,
    titleImgAgua: titleImgAgua,

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
  transition: all 0.5s ease-in-out;
  border-radius: 1px;
  opacity: 0.2;
}

.lightgallery-vue a:hover img{
  opacity: 1;
}
.lightgallery-vue a:hover span{
  opacity: 0;
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

.fullWidthGridCard{
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 1;
  
}

.icon-photo, .icon-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5em;
  color: white;
  opacity: 0.1;
  transition: all 0.5s ease-in-out;
}

.filter-buttons {
  margin: 20px 0;
  display: flex;
}

.filter-buttons button {
  margin-right: 10px;
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
</style>
