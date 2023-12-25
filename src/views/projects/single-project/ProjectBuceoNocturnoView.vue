<template>
  <div>
    <div class="iframeContainer">
      <img :src="oct1" alt="poster image"/>
      <div class="containerDownBtn" @click="goto('page2')">
        <DownBtn></DownBtn>
      </div>
    </div>
    <div style="height: 100vh; width: 100vw;"></div>
    <div ref="page2" class="projectContentContainer">
      <h1 class="projectTitle">NOCTURNO</h1>
      <div class="factsContainer">
        <ul>
          <li>
            <h2>Description</h2>
          </li>
          <li>Dive sites become a wonderland of activity once the sun disappears. Many of the creatures you search for in vain during the day are active at night, floating by when you least expect them. As a scuba diver, you miss out on half of the ocean’s life if you only dive during the day.</li>
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
            :data-src="oct1"
            data-sub-html="<h4>Photo taken & edited by SR - </h4><p>White spotted oct</p>"
        >
          <img
              class="img-responsive"
              :src="oct1"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="oct2"
            data-sub-html="<h4>Photo taken & edited by SR - </h4><p>White spotted oct</p>"
        >
          <img
              class="img-responsive"
              :src="oct2"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="oct3"
            data-sub-html="<h4>Photo taken & edited by SR - </h4><p>White spotted oct</p>"
        >
          <img
              class="img-responsive"
              :src="oct3"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="oct4"
            data-sub-html="<h4>Photo taken & edited by SR - </h4><p>White spotted oct</p>"
        >
          <img
              class="img-responsive"
              :src="oct4"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="fish1"
            data-sub-html="<h4>Photo taken & edited by SR - </h4><p>Smile!</p>"
        >
          <img
              class="img-responsive"
              :src="fish1"
          />
        </a>
        <!-- Image --->
        <a
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="fish2"
            data-sub-html="<h4>Photo taken & edited by SR - </h4><p>Hide!</p>"
        >
          <img
              class="img-responsive"
              :src="fish2"
          />
        </a>
      </lightgallery>
    </div>
  </div>
</template>
<script>

// images
import oct1 from "/src/assets/images/projects/buceo-nocturno/pulpo.jpg";
import oct2 from "/src/assets/images/projects/buceo-nocturno/pulpo-close-master.jpg";
import oct3 from "/src/assets/images/projects/buceo-nocturno/pulpili11.jpg";
import oct4 from "/src/assets/images/projects/buceo-nocturno/pulpi.jpg";
import fish1 from "/src/assets/images/projects/buceo-nocturno/fishi-gc-1.jpg";
import fish2 from "/src/assets/images/projects/buceo-nocturno/fishi-gc-4.jpg";



import DownBtn from "@/components/buttons/DownBtn";
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

export default {
  name: 'BuceoNocturnoView',
  components: {
    Lightgallery,
    DownBtn,
  },
  props:{

  },
  data: () => ({
    oct1: oct1,
    oct2: oct2,
    oct3: oct3,
    oct4: oct4,
    fish1: fish1,
    fish2: fish2,


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

@media only screen and (max-width: 720px){
  .projectTitle{
    font-size: 30px;
  }
}
</style>
