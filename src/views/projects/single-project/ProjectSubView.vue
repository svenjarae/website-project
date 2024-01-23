<template>
  <div>
    <div class="iframeContainer">
      <img :src="bubble2"/>
      <div class="containerDownBtn" @click="goto('page2')">
        <DownBtn></DownBtn>
      </div>
    </div>
    <div style="height: 100vh; width: 100vw;"></div>
    <div ref="page2" class="projectContentContainer">
      <h1 class="projectTitle">SUB</h1>
      <div class="factsContainer">
        <ul>
          <li>
            <h2>Short</h2>
          </li>
          <li>Collection of Seascape</li>
        </ul>
        <ul>
          <li>
            <h2>Description</h2>
          </li>
          <li>It seems big enough to contain everything anyone could ever feel.</li>
          <li>It contains so many colors. Silver at dawn, green at noon, dark blue in the evening. Sometimes it looks almost red. Or it will turn the color of old coins.</li>
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
            :data-src="bubble2"
        >
          <img
              class="img-responsive"
              :src="bubble2"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="bubble"
        >
          <img
              class="img-responsive"
              :src="bubble"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="bubble3"
        >
          <img
              class="img-responsive"
              :src="bubble3"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="sparks"
        >
          <img
              class="img-responsive"
              :src="sparks"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="bg"
        >
          <img
              class="img-responsive"
              :src="bg"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="shallow"
        >
          <img
              class="img-responsive"
              :src="shallow"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="wave"
        >
          <img
              class="img-responsive"
              :src="wave"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="one"
        >
          <img
              class="img-responsive"
              :src="one"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="two"
        >
          <img
              class="img-responsive"
              :src="two"
          />
        </a>
      </lightgallery>
    </div>
  </div>
</template>
<script>

// images

import bg from "/src/assets/images/projects/sub/bg.jpg";
import bubble from "/src/assets/images/projects/sub/bubble.jpg";
import bubble2 from "/src/assets/images/projects/sub/bubble2.jpg";
import bubble3 from "/src/assets/images/projects/sub/bubble3.png";
import pop from "/src/assets/images/projects/sub/pop.jpg";
import shallow from "/src/assets/images/projects/sub/shallow.jpg";
import sparks from "/src/assets/images/projects/sub/sparks.jpg";
import wave from "/src/assets/images/projects/sub/wave.jpg";
import one from "/src/assets/images/projects/sub/1-1.jpg";
import two from "/src/assets/images/projects/sub/1-2.jpg";
//import titleImgAgua from "/src/assets/images/projects/sub/wave.jpg";

import DownBtn from "@/components/buttons/DownBtn";
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

export default {
  name: 'ProjectSubView',
  components: {
    Lightgallery,
    DownBtn,
  },
  data: () => ({

    bg: bg,
    bubble: bubble,
    bubble2: bubble2,
    bubble3: bubble3,
    pop: pop,
    shallow: shallow,
    sparks: sparks,
    wave: wave,
    one: one,
    two: two,

    //titleImgAgua: titleImgAgua,

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
