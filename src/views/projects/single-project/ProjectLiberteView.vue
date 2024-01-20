<template>
  <div>
    <div class="iframeContainer">
      <img :src="seal01"/>
      <div class="containerDownBtn" @click="goto('page2')">
        <DownBtn></DownBtn>
      </div>
    </div>
    <div style="height: 100vh; width: 100vw;"></div>
    <div ref="page2" class="projectContentContainer">
      <h1 class="projectTitle">LIBERTÉ</h1>
      <div class="factsContainer">
        <ul>
          <li>
            <h2>Short</h2>
          </li>
          <li>France, Bretagne</li>
          <li class="link"><a href="https://www.instagram.com/ocean_collective_agency/">Ocean Collective</a></li>
          <li>09/2023</li>
        </ul>
        <!-- <ul>
          <li>
            <h2>Description</h2>
          </li>
          <li>Blubb</li>
        </ul> -->
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
            :data-src="bird"
        >
          <img
              class="img-responsive"
              :src="bird"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="ow"
        >
          <img
              class="img-responsive"
              :src="ow"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="phil"
        >
          <img
              class="img-responsive"
              :src="phil"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="seal01"
        >
          <img
              class="img-responsive"
              :src="seal01"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="seal02"
        >
          <img
              class="img-responsive"
              :src="seal02"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="seal03"
        >
          <img
              class="img-responsive"
              :src="seal03"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="seal04"
        >
          <img
              class="img-responsive"
              :src="seal04"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="still08"
        >
          <img
              class="img-responsive"
              :src="still08"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="vero01"
        >
          <img
              class="img-responsive"
              :src="vero01"
          />
        </a>
          <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="vero02"
        >
          <img
              class="img-responsive"
              :src="vero02"
          />
        </a>
        <!-- VImeo Video --->
        <a  v-if="filter === 'all' || filter === 'video'"
            data-lg-size="1280-720"
            data-src="//vimeo.com/902794090"
            data-poster=""
        >
        <img
            width="300"
            height="100"
            class="img-responsive"
            :src="team"
        />
        <span class="play-icon fa fa-play" aria-hidden="true"></span>
        </a>
        
      </lightgallery>
    </div>
  </div>
</template>
<script>

// images
import bird from "/src/assets/images/projects/liberte/bird-still001.jpg";
import ow from "/src/assets/images/projects/liberte/ow-still001.jpg";
import phil from "/src/assets/images/projects/liberte/phil-bg.jpg";
import seal01 from "/src/assets/images/projects/liberte/seal-still001.jpg";
import seal02 from "/src/assets/images/projects/liberte/seal-still002.jpg";
import seal03 from "/src/assets/images/projects/liberte/sea-still003.jpg";
import seal04 from "/src/assets/images/projects/liberte/sea-still004.jpg";
import still08 from "/src/assets/images/projects/liberte/Still008.jpg";
import vero01 from "/src/assets/images/projects/liberte/vero-still001.jpg";
import vero02 from "/src/assets/images/projects/liberte/vero-still002.jpg";
import team from "/src/assets/images/projects/liberte/team.jpg";


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
    bird: bird,
    ow: ow,
    phil: phil,
    seal01: seal01,
    seal02: seal02,
    seal03: seal03,
    seal04: seal04,
    still08: still08,
    vero01: vero01,
    vero02: vero02,
    team: team,

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

</style>
