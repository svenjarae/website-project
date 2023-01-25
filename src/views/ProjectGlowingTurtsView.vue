<template>
  <div id="parent">
    <div class="pageOne">
      <div class="iframeContainer">
        <h1 class="projectTitle">GLOWING TURTS</h1>
        <img :src="waterHigh"/>
        <div class="containerDownBtn">
          <DownBtn></DownBtn>
        </div>
      </div>
    </div>
    <div class="divContainer">
      <div class="mainDescriptionWrapper">
        <h1>Title</h1>
        <p>Content</p>
      </div>
      <div class="flexContainer">
        <div class="flexWrapper">
          <span class="p-heading">UW</span>
          <span class="p-content">PHOTOS & VIDEO</span>
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
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="waterHigh"
        >
          <img
              class="img-responsive"
              :src="waterHigh"
          />
          <span class="imgBtn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          </span>
        </a>
        <a
            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="waterTurtle"
        >
          <img
              class="img-responsive"
              :src="waterTurtle"
          />
          <span class="imgBtn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          </span>
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="glowingTurt1"
        >
          <img
              class="img-responsive"
              :src="glowingTurt1"
          />
          <span class="imgBtn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          </span>
        </a>
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="glowingTurt2"
        >
          <img
              class="img-responsive"
              :src="glowingTurt2"
          />
          <span class="imgBtn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          </span>
        </a>
        <!-- VImeo Video --->
        <a
            data-lg-size="1280-720"
            data-src="//vimeo.com/745431515"
            data-poster=""
        >
          <img
              width="300"
              height="100"
              class="img-responsive"
              :src="titleImg"
          />
          <span class="playBtn">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" y="0"/></g><g><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M9.5,16.5v-9l7,4.5L9.5,16.5z"/></g></svg>
          </span>
        </a>
      </lightgallery>
    </div>
  </div>
  <div class="leftCorner">
    <router-link to="/projects">
      <span>/ PROJECTS</span>
    </router-link>
    <router-link class="currentLink" to="/projects/galapagos">
      <span> / GALAPAGOS</span>
    </router-link>
  </div>
</template>
<script>

// images
import image from "/src/assets/logo.png";

import waterTurtle from "/././././././src/assets/images/projects/glowing-turts/water-turtle.jpg";
import waterHigh from "/././././././src/assets/images/projects/glowing-turts/water-high-saturation.jpg";
import titleImg from "/././././././src/assets/images/projects/glowing-turts/titleimg-vid.jpeg";
import glowingTurt1 from "/././././././src/assets/images/projects/glowing-turts/glowing-turtle.jpg";
import glowingTurt2 from "/././././././src/assets/images/projects/glowing-turts/flurid-turtle2.jpg";
import glowingTurt3 from "/././././././src/assets/images/projects/glowing-turts/glowing-turtle2.jpg";


import DownBtn from "@/components/buttons/DownBtn";

import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

export default {
  name: 'ProjectGalapagosView',
  components: {
    Lightgallery,
    DownBtn
  },
  props:{

  },
  data: () => ({
    image: image,
    titleImg: titleImg,
    glowingTurt1: glowingTurt1,
    glowingTurt2: glowingTurt2,
    glowingTurt3: glowingTurt3,
    waterTurtle: waterTurtle,
    waterHigh: waterHigh,


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
<style scoped>@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');

.galleryContainer{
  position: relative;
}

.lightgallery-vue{
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
  gap: 20px;
  position: absolute;
  left: 70px;
  top: 0;
  bottom: 20px;
  right: 0;
}

.lightgallery-vue > *:nth-child(3n-1) {
  justify-self: center;
  text-align: center;
}

.lightgallery-vue > *:nth-child(3n) {
  justify-self: end;
  text-align: right;
}

.lightgallery-vue > *:nth-child(3n-1):nth-last-of-type(1) {
  border-color: red;
  grid-column: span 2;
  width: 100%;
  height: 300px;
}

.lightgallery-vue > *:nth-child(3n-2):nth-last-of-type(1) {
  border-color: red;
  grid-column: span 3;
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

.leftCorner {
  position: fixed;
  left: -81px;
  bottom: 286px;
  z-index: 99;
  transform: rotate(-90deg);
}

.iframeContainer{
  background-color: #007385;
  position: absolute;
  left: 70px;
  top: 0;
  bottom: 0;
  right: 0;
}

.iframeContainer img{
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.projectTitle{
  position: absolute;
  font-size: 100px;
  text-transform: uppercase;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: orangered;
}

.containerDownBtn{
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
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

.flexContainer{
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

.galleryContainer a{
  position: relative;
}
.galleryContainer a:hover svg{
  fill: orangered;
}
.playBtn, .imgBtn{
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px;
  background-color: white;
  display: flex;
}




</style>
