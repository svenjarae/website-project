<template>
  <div>
    <div class="iframeContainer">
        <img :src="spainTitle"/>
        <div class="copyright">&copy; <a href="https://www.instagram.com/lennyunderwater/">Lennart Voßgätter</a></div>
      <div class="containerDownBtn" @click="goto('page2')">
        <DownBtn></DownBtn>
      </div>
    </div>
    <div style="height: 100vh; width: 100vw;"></div>
    <div ref="page2" class="projectContentContainer">
      <h1 class="projectTitle">Spain</h1>
      <div class="factsContainer">
        <ul>
          <li>
            <h2>Short</h2>
          </li>
          <li>North of Spain</li>
          <li class="link"><a href="https://www.instagram.com/ocean_collective_agency/">Ocean Collective</a></li>
          <li>08/2023</li>
        </ul>
        <ul>
          <li>
            <h2>Description</h2>
          </li>
          <li>In this project, we embarked on a thrilling adventure in the North of Spain, inviting ocean enthusiasts to join our collective of researchers, guides, and nature filmmakers in an immersive journey into marine biology in August 2023!</li>
          <li>A 7-day expedition, where we contributed to research, engaged in animal encounters, and protected endangered species. Explored marine habitats, learned freediving, and made a positive impact with expert training. Follow @ocean_collective_agency for memories of our unforgettable journey! 🌊❤️</li>
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
            :data-src="spainTitle"
        >
          <img
              class="img-responsive"
              :src="spainTitle"
          />
          <div class="copyright">&copy; <a href="https://www.instagram.com/lennyunderwater/">Lennart Voßgätter</a></div>
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
          <div class="copyright">&copy; <a href="https://www.instagram.com/lennyunderwater/">Lennart Voßgätter</a></div>
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
          <div class="copyright">&copy; <a href="https://www.instagram.com/lennyunderwater/">Lennart Voßgätter</a></div>
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="three"
        >
          <img
              class="img-responsive"
              :src="three"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="four"
        >
          <img
              class="img-responsive"
              :src="four"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="five"
        >
          <img
              class="img-responsive"
              :src="five"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="six"
        >
          <img
              class="img-responsive"
              :src="six"
          />
        </a>

        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="seven"
        >
          <img
              class="img-responsive"
              :src="seven"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="eight"
        >
          <img
              class="img-responsive"
              :src="eight"
          />
        </a>
          <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="nine"
        >
          <img
              class="img-responsive"
              :src="nine"
          />
        </a>
         <!-- Image --->
         <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="ten"
        >
          <img
              class="img-responsive"
              :src="ten"
          />
        </a>
         <!-- Image --->
         <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="eleven"
        >
          <img
              class="img-responsive"
              :src="eleven"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="twelve"
        >
          <img
              class="img-responsive"
              :src="twelve"
          />
        </a>
         <!-- Image --->
         <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="thirteen"
        >
          <img
              class="img-responsive"
              :src="thirteen"
          />
          <div class="copyright">&copy; <a href="https://www.instagram.com/lennyunderwater/">Lennart Voßgätter</a></div>
        </a>
        <!-- VImeo Video --->
        <a  v-if="filter === 'all' || filter === 'video'"
            data-lg-size="1280-720"
            data-src="//vimeo.com/906167320"
            data-poster=""
        >
          <img
            width="300"
            height="100"
            class="img-responsive"
            :src="titleImgVideo1"
          />
          <span class="play-icon fa fa-play" aria-hidden="true"></span>
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="fourteen"
        >
          <img
              class="img-responsive"
              :src="fourteen"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="fiveteen"
        >
          <img
              class="img-responsive"
              :src="fiveteen"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="sixteen"
        >
          <img
              class="img-responsive"
              :src="sixteen"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="seventeen"
        >
          <img
              class="img-responsive"
              :src="seventeen"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="eighteen"
        >
          <img
              class="img-responsive"
              :src="eighteen"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="nineteen"
        >
          <img
              class="img-responsive"
              :src="nineteen"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="twenty"
        >
          <img
              class="img-responsive"
              :src="twenty"
          />
        </a>
        <!-- Image --->
        <a  v-if="filter === 'all' || filter === 'photo'"
            data-lg-size="1400-1400"
            class="gallery-item"
            :data-src="twentyone"
        >
          <img
              class="img-responsive"
              :src="twentyone"
          />
        </a>
      </lightgallery>
    </div>
  </div>
</template>
<script>

// images
import spainTitle from "@/assets/images/projects/spain/svenja-2.jpg";
import titleImgVideo1 from "@/assets/images/projects/spain/titleImgVideo1.png";
import one from "@/assets/images/projects/spain/OC_Season_23_SR.jpg";
import two from "@/assets/images/projects/spain/OC_Season_SR_bw.jpg";
import three from "@/assets/images/projects/spain/P1055097.00_00_10_46.Still001.jpg";
import four from "@/assets/images/projects/spain/P1055097.00_00_30_40.Still005.jpg";
import five from "@/assets/images/projects/spain/P1055097.00_00_46_28.Still004.jpg";
import six from "@/assets/images/projects/spain/emelieP1055163.MOV.11_43_46_09.Still002.jpg";
import seven from "@/assets/images/projects/spain/P1055124.MOV.10_59_24_48.Still004.jpg";
import eight from "@/assets/images/projects/spain/P1055124.MOV.10_59_27_49.Still002.jpg";
import nine from "@/assets/images/projects/spain/P1055129.MOV.11_07_14_12.Still005-1.jpg";
import ten from "@/assets/images/projects/spain/P1055129.MOV.11_10_39_12.Still007-2.jpg";
import eleven from "@/assets/images/projects/spain/P1055318.jpg";
import twelve from "@/assets/images/projects/spain/P1055116.MOV.10_44_33_20.Still007.jpg";
import thirteen from "@/assets/images/projects/spain/svenja-3.jpg";
import fourteen from "@/assets/images/projects/spain/P1055129.MOV.11_07_14_12.Still005.jpg";
import fiveteen from "@/assets/images/projects/spain/P1055130.00_00_01_14.Still017.jpg";
import sixteen from "@/assets/images/projects/spain/P1055130.00_00_13_06.Still003.jpg";
import seventeen from "@/assets/images/projects/spain/P1055130.00_00_24_49.Still014.jpg";
import eighteen from "@/assets/images/projects/spain/P1055130.00_00_28_27.Still016.jpg";
import nineteen from "@/assets/images/projects/spain/P1055130.00_04_40_31.Still008.jpg";
import twenty from "@/assets/images/projects/spain/P1055135.MOV.11_20_57_18.Still001.jpg";
import twentyone from "@/assets/images/projects/spain/P1055139.MOV.11_24_57_36.Still001.jpg";

import DownBtn from "@/components/buttons/DownBtn";
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

export default {
  name: 'ProjectLiberteView',
  components: {
    Lightgallery,
    DownBtn,
  },
  data: () => ({
    spainTitle: spainTitle,
    titleImgVideo1:titleImgVideo1,
    one:one,
    two:two,
    three:three,
    four:four,
    five:five,
    six:six,
    seven:seven,
    eight:eight,
    nine:nine,
    ten:ten,
    eleven:eleven,
    twelve:twelve,
    thirteen:thirteen,
    fourteen:fourteen,
    fiveteen:fiveteen,
    sixteen:sixteen,
    seventeen:seventeen,
    eighteen:eighteen,
    nineteen:nineteen,
    twenty:twenty,
    twentyone:twentyone,

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
  max-width: 600px;
  margin: auto;
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

.copyright{
  color: white; 
  position: absolute; 
  bottom: 20px; 
  right: 20px;
  font-size: 12px;
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
