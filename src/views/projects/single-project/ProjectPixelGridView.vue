<template>
  <div>
    <div class="iframeContainer">
      <PixelGrid></PixelGrid>
      <div class="containerDownBtn" @click="goto('page2')">
        <DownBtn></DownBtn>
      </div>
    </div>
    <div style="height: 100vh; width: 100vw;"></div>
    <div ref="page2" class="projectContentContainer">
      <h1 class="projectTitle">3DGRID</h1>
      <div class="factsContainer">
        <ul>
          <li>
            <h2>Info</h2>
          </li>
          <li>CSS ANIMATION</li>
          <li>03/2022</li>
        </ul>
        <ul>
          <li>
            <h2>Description</h2>
          </li>
          <li>CSS Grid isn’t just for creating flat, 2D layouts — we can make the most of the CSS grid and combine it with other CSS properties to do a lot of amazing things, like 3D layouts (and also some great shapes too).</li>
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
import PixelGrid from "@/components/animations/PixelGrid";

export default {
  name: 'ProjectPixelGridView',
  components: {
    PixelGrid,
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

        cssCodeSample:`
    <style scoped>
      *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      /* scene set-up */
      [scene], [rotation], [center-z] { display: grid }
      [scene] :not(:empty) { transform-style: preserve-3d }
      [scene] { width: var(--size); perspective: calc(var(--size) * 2); aspect-ratio: 1 }

      /* rotate/animate scene  */
      [rotation][animate="true"] { animation: rotateScene 10s linear infinite }
      @keyframes rotateScene{ to { transform: rotateY(360deg) } }

      /* position contents to z-center */
      [center-z] { transform: translateZ(calc(var(--size) * .5)) }

      /* grid */
      [grid] {
        display: grid;
        grid-template-columns: repeat(var(--dimension), 1fr);
        grid-template-rows: repeat(var(--dimension), 1fr);
      }

      /* pixel */
      [pixel] {
        --pixel-size: calc(var(--size) / var(--dimension));
        grid-row: calc(var(--dimension) - var(--l) + 1);
        grid-column: var(--c);
        transform: translateZ(calc(var(--pixel-size) * (var(--dimension) - var(--r)) * -1));
        background-color: var(--color);
      }
      /* sides set up */
      [pixel], [pixel] > span { display: grid }
      [pixel] > span { background-color: inherit; transform-style: preserve-3d }
      [pixel]::before, [pixel]::after, [pixel] > span::before, [pixel] > span::after { content: ""; background-color: inherit }
      [pixel]::before, [pixel]::after, [pixel] > span, [pixel] > span::before, [pixel] > span::after { grid-column: 1; grid-row: 1 }

      /*sides orientation*/
      [pixel]::before { transform-origin: left; transform: rotateY(90deg) } /*left*/
      [pixel]::after { transform-origin: right; transform: rotateY(-90deg) } /*right*/
      [pixel] > span { transform: translateZ(calc(var(--pixel-size) * -1)) } /*back*/
      [pixel] > span::before { transform-origin: top; transform: rotateX(90deg) } /*top*/
      [pixel] > span::after { transform-origin: bottom; transform: rotateX(-90deg) } /*bottom*/

      /* shading */
      [pixel]::after{ background-image: linear-gradient(rgb(0 0 0 / .25) 100%, transparent) }/*right*/
      [pixel] > span::after { background-image: linear-gradient(rgb(0 0 0 / .375) 100%, transparent) }/*bottom*/

      /*lighting*/
      [pixel]::before { background-image: linear-gradient(rgb(255 255 255 / .25) 100%, transparent) }/*left*/
      [pixel] > span::before { background-image: linear-gradient(rgb(255 255 255 / .375) 100%, transparent) }/*top*/

    </style>
        `,
    htmlCodeSample: `
      <div scene style="--size: 50vmin">
        <div rotation animate="true">
          <div center-z>
            <div grid style="--dimension: 5">
              <!-- l: layers counted from bottom to top -->
              <!-- r: row counted from back to front -->
              <!-- c: column counted from left to right -->

              <!-- layer 1 -->
              <div pixel style="--l: 1; --r: 1; --c: 1; --color: #FF9000"><span></span></div>
              <div pixel style="--l: 1; --r: 5; --c: 1; --color: #0000FF"><span></span></div>
              <div pixel style="--l: 1; --r: 1; --c: 5; --color: #FFFF00"><span></span></div>
              <div pixel style="--l: 1; --r: 5; --c: 5; --color: #622DD1"><span></span></div>

              <!-- layer 2 -->
              <div pixel style="--l: 2; --r: 2; --c: 2; --color: #FF9000"><span></span></div>
              <div pixel style="--l: 2; --r: 4; --c: 2; --color: #0000FF"><span></span></div>
              <div pixel style="--l: 2; --r: 2; --c: 4; --color: #FFFF00"><span></span></div>
              <div pixel style="--l: 2; --r: 4; --c: 4; --color: #622DD1"><span></span></div>

              <!-- layer 3-->
              <div pixel style="--l: 3; --r: 3; --c: 3; --color: #DDDDDD"><span></span></div>

              <!-- layer 4-->
              <div pixel style="--l: 4; --r: 2; --c: 2; --color: #90FF00"><span></span></div>
              <div pixel style="--l: 4; --r: 4; --c: 2; --color: #900090"><span></span></div>
              <div pixel style="--l: 4; --r: 2; --c: 4; --color: #009090"><span></span></div>
              <div pixel style="--l: 4; --r: 4; --c: 4; --color: #FF0000"><span></span></div>

              <!-- layer 5-->
              <div pixel style="--l: 5; --r: 1; --c: 1; --color: #90FF00"><span></span></div>
              <div pixel style="--l: 5; --r: 5; --c: 1; --color: #900090"><span></span></div>
              <div pixel style="--l: 5; --r: 1; --c: 5; --color: #009090"><span></span></div>
              <div pixel style="--l: 5; --r: 5; --c: 5; --color: #FF0000"><span></span></div>

            </div>
          </div>
        </div>
      </div>
        `,

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

.codeContainer{
  text-align: left;
  padding: 80px;
}

</style>
