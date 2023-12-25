<template>
  <div>
    <div class="iframeContainer">
      <TripAnimation></TripAnimation>
      <div class="containerDownBtn" @click="goto('page2')">
        <div>CLICK TO SCROLL</div>
        <DownBtn></DownBtn>
      </div>
    </div>
    <div style="height: 100vh; width: 100vw;"></div>
    <div ref="page2" class="projectContentContainer">
      <h1 class="projectTitle">TRIANGLE</h1>
      <div class="factsContainer">
        <ul>
          <li>
            <h2>What</h2>
          </li>
          <li>CSS ANIMATION</li>
        </ul>
        <ul>
          <li>
            <h2>Description</h2>
          </li>
          <li>Of course you can get all kinds of crazy with CSS and only one element. The triangle is just always particularly compelling because it’s so practical</li>
        </ul>
      </div>
    </div>
    <div class="codeContainer">
      <h3 style="letter-spacing: 0.1em; font-size: 16px; padding: 0">HTML</h3>
      <pre><code>{{htmlCodeSample}}</code></pre>
      <h3 style="letter-spacing: 0.1em; font-size: 16px; padding: 0">CSS</h3>
      <pre><code>{{cssCodeSample}}</code></pre>
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


import DownBtn from "@/components/buttons/DownBtn";
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import TripAnimation from "@/components/animations/TripAnimation";

export default {
  name: 'ProjectTripView',
  components: {
    TripAnimation,
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
    plugins: [lgZoom, lgVideo],
    cssCodeSample:`
    html{
      height: 100%;
    }
    body {
      height: 100%;
      background: #642B73;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to left, #C6426E, #642B73);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to left, #C6426E, #642B73); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .wrapper {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .triangle-canvas {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
    }
    .triangle {
      fill: none;
      stroke: #fff;
      stroke-width: 15;
      transform-origin: center center;
      animation: triangle-animation 10s linear infinite;
    }
    .triangle-1 {
      animation-delay: 0s;
    }
    .triangle-2 {
      animation-delay: -0.5s;
    }
    .triangle-3 {
      animation-delay: -1s;
    }
    .triangle-4 {
      animation-delay: -1.5s;
    }
    .triangle-5 {
      animation-delay: -2s;
    }
    .triangle-6 {
      animation-delay: -2.5s;
    }
    .triangle-7 {
      animation-delay: -3s;
    }
    .triangle-8 {
      animation-delay: -3.5s;
    }
    .triangle-9 {
      animation-delay: -4s;
    }
    .triangle-10 {
      animation-delay: -4.5s;
    }
    .triangle-11 {
      animation-delay: -5s;
    }
    .triangle-12 {
      animation-delay: -5.5s;
    }
    .triangle-13 {
      animation-delay: -6s;
    }
    .triangle-14 {
      animation-delay: -6.5s;
    }
    .triangle-15 {
      animation-delay: -7s;
    }
    .triangle-16 {
      animation-delay: -7.5s;
    }
    .triangle-17 {
      animation-delay: -8s;
    }
    .triangle-18 {
      animation-delay: -8.5s;
    }
    .triangle-19 {
      animation-delay: -9s;
    }
    .triangle-20 {
      animation-delay: -9.5s;
    }
    @keyframes triangle-animation{
      0%{
        transform: scale(0) rotate(0deg);
      opacity: 1;
      }
        100%{
          transform: scale(3) rotate(45deg);
        opacity: 0;
      }
    }
    `,
    htmlCodeSample: `
      <div class="wrapper">
        <svg class="triangle-canvas" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <polygon class="triangle triangle-1" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-2" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-3" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-4" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-5" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-6" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-7" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-8" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-9" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-10" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-11" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-12" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-13" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-14" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-15" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-16" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-17" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-18" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-19" points="500,200 759,650 241,650" />
          <polygon class="triangle triangle-20" points="500,200 759,650 241,650" />
        </svg>
       </div>
        `
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

pre{
  background-color: #202023;
  color: white;
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

.codeContainer{
  text-align: left;
  padding: 80px;
}

</style>
