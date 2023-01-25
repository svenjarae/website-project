<template>
  <div style="transform: rotate(-180deg); position:absolute; right: 20px; z-index: 1000000;">
    <router-link to="/projects" style="z-index: 1000">
      <BackBtn></BackBtn>
    </router-link>
  </div>

  <div style="position: absolute;
    bottom: 0;
    right: 0;
    top: 100px;
    max-width: 800px;
opacity: 0.8">
    <img :src="image7" alt="image01" />
  </div>
  <div class="home__wrapper">
    <div class="sky">

      <!-- We are making divisions, every div.
      represent a single roundabout balls -->
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
    </div>
    <div class="about">
      <div style="display:flex;">
        <div class="flexRowWrapper">
            <div style="position:absolute; top: -10px;">
              <span>FRONTEND</span>
            </div>
            <div style="display: flex; align-items: center;">
              <span style="font-size: 80px; font-family: myFirstFont;">DEVELOPMENT</span>
              <div style="display: flex; flex-direction: column; justify-content: center">
                <span style="font-size: 35px;margin-top: 5px; font-weight: bold;">ANIMATION</span>
                <span style="font-size: 26px">DIGITAL DESIGN</span>
              </div>
            </div>
            <div style="display: flex">
              <span style="font-size: 64px; margin-top: -9px">PHOTOGRAPHY & FILM</span>
            </div>
        </div>
        <div class="flexRowWrapper" style="text-align: right; margin-top: -10px;">
          <span style="font-size: 85px;">UI/UX</span>
          <div style="margin-top: -5px; display: flex; flex-direction: column">
            <span style="font-size: 32px; ">PROTOTYPING</span>
            <span style="letter-spacing: 4px;">CONTENT CREATION</span>
          </div>
        </div>
      </div>
      
      <div class="waterAnimeContainer">
        <WaterAnimation></WaterAnimation>
      </div>
      <div>
        <RollingText></RollingText>
      </div>
      <router-link to="/projects">
        <div style="text-align: left">
          <TextAnime></TextAnime>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

import titleVideo from "/././././././src/assets/videos/titlevid.mp4";

import image1 from "/././././././src/assets/images/projects/animations/trip/titleimg-trip.png";
import image2 from "/././././././src/assets/images/projects/glowing-turts/water-high-saturation.jpg";
import image3 from "/././././././src/assets/images/projects/gc-sealife/squid1.png";
import image4 from "/././././././src/assets/images/projects/oni-studio/carla2.jpg";
import image6 from "/././././././src/assets/images/projects/animations/pixel-grid/pixelGridTitleImg.png";
import image5 from "/././././././src/assets/images/projects/taliarte/aguaTitleimg.png";

import image7 from "/././././././src/assets/images/bg/AdobeStock_533955453.png";

import bg2 from "/././././././src/assets/images/bg/AdobeStock_443389277.jpeg";
import bg1 from "/././././././src/assets/images/bg/AdobeStock_503185672.jpeg";


import gsap from 'gsap'
import RollingText from "@/components/animations/RollingText";
import WaterAnimation from "@/components/buttons/WaterAnimation";
import BackBtn from "@/components/buttons/BackBtn";
import TextAnime from "@/components/animations/TextAnime";

export default {
  name: 'SvenjaRaetzsch',
  components: {
    TextAnime,
    BackBtn,
    WaterAnimation,
    RollingText
  },
  data(){
    return{
      titleVideo: titleVideo,
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      image5: image5,
      image6: image6,
      image7: image7,
      bg1: bg1,
      bg2:bg2,

    }
  },
  methods: {
    // where the animation will start from
    beforeEnter(el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(-100px)'
    },
    // where the animation will end up
    enter(el) {
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
      })
    },
    beforeWaterAnimation(el) {
      el.style.opacity = '0'
      el.style.transform = 'translateX(-100px)'
    },
    afterWaterAnimation(el) {
      gsap.to(el, {
        delay: 0.5,
        duration: 1,
        x: 0,
        opacity: 1,
      })
    }
  }

}
</script>

<style>

.home__wrapper {
  max-width: 1000px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.subtitle{
  font-family: MyFirstFont;
  font-size: 5em;
}

.mainWrapper{
  display: flex;
  flex-direction: column;
  text-align: left;
}

.imgContainer{
  width: 60px;
  height: 60px;
  margin: 0 10px;
}

img{
  box-sizing: border-box;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.flexRowWrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.waterAnimeContainer{
  position: absolute;
  width: 400px;
  box-sizing: border-box;
  height: 400px;
  bottom: 80px;
  display: none;
}

@keyframes animate {
  from{
    filter: blur(0);
  }
  to{
    filter: blur(5px);
  }
}

/* Here using -webkit, we make angle
of 45 degree of falling star */
.sky {
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}

/* Here we are making roundabout balls  */
.star {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 2px;
  border-radius: 885px;
  background: linear-gradient(-45deg,
  #eef0f5, rgba(0, 0, 255, 0));

  -webkit-filter: drop-shadow(0 0 6px #eef1f8);
  filter: drop-shadow(0 0 6px #d7dff0);
  -webkit-animation: tail 3000ms ease-in-out infinite,
  shooting 3000ms ease-in-out infinite;
  animation: tail 3000ms ease-in-out infinite,
  shooting 3000ms ease-in-out infinite;
}

/* Here we add before and after effect to star */
.star::before,
.star::after {
  content: "";
  position: absolute;
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(
      -45deg,
      rgba(0, 0, 255, 0),
      #eaeef8,
      rgba(0, 0, 255, 0)
  );
  -webkit-transform: translateX(50%) rotateZ(45deg);
  transform: translateX(50%) rotateZ(45deg);
  border-radius: 100%;
  -webkit-animation: shining 3000ms ease-in-out infinite;
  animation: shining 3000ms ease-in-out infinite;
}
.star::after {
  -webkit-transform: translateX(50%) rotateZ(-45deg);
  transform: translateX(50%) rotateZ(-45deg);
}

/* Here we are adding location of each
   nth-child, animations, delays, and
   before and after effects to each
   and every balls(stars) */
.star:nth-child(1) {
  top: calc(50% - -119px);
  left: calc(50% - 43px);
  -webkit-animation-delay: 4000ms;
  animation-delay: 4000ms;
}
.star:nth-child(1)::before,
.star:nth-child(1)::after {
  -webkit-animation-delay: 4000ms;
  animation-delay: 4000ms;
}
.star:nth-child(2) {
  top: calc(50% - -43px);
  left: calc(50% - 37px);
  -webkit-animation-delay: 5000ms;
  animation-delay: 5000ms;
}
.star:nth-child(2)::before,
.star:nth-child(2)::after {
  -webkit-animation-delay: 5000ms;
  animation-delay: 5000ms;
}
.star:nth-child(3) {
  top: calc(50% - -40px);
  left: calc(50% - 222px);
  -webkit-animation-delay: 7000ms;
  animation-delay: 7000ms;
}
.star:nth-child(3)::before,
.star:nth-child(3)::after {
  -webkit-animation-delay: 7000ms;
  animation-delay: 7000ms;
}
.star:nth-child(4) {
  top: calc(50% - -29px);
  left: calc(50% - 113px);
  -webkit-animation-delay: 7000ms;
  animation-delay: 7000ms;
}
.star:nth-child(4)::before,
.star:nth-child(4)::after {
  -webkit-animation-delay: 7000ms;
  animation-delay: 7000ms;
}
.star:nth-child(5) {
  top: calc(50% - 146px);
  left: calc(50% - 112px);
  -webkit-animation-delay: 3000ms;
  animation-delay: 3000ms;
}
.star:nth-child(5)::before,
.star:nth-child(5)::after {
  -webkit-animation-delay: 3000ms;
  animation-delay: 3000ms;
}
.star:nth-child(6) {
  top: calc(50% - -108px);
  left: calc(50% - 160px);
  -webkit-animation-delay: 3000ms;
  animation-delay: 3000ms;
}
.star:nth-child(6)::before,
.star:nth-child(6)::after {
  -webkit-animation-delay: 3000ms;
  animation-delay: 3000ms;
}
.star:nth-child(7) {
  top: calc(50% - 52px);
  left: calc(50% - 72px);
  -webkit-animation-delay: 7000ms;
  animation-delay: 7000ms;
}
.star:nth-child(7)::before,
.star:nth-child(7)::after {
  -webkit-animation-delay: 7000ms;
  animation-delay: 7000ms;
}

/* This code will help to generate
effect in tail of star */
@keyframes tail {
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
}

/* This code will generate shining
effect in head of star */
@keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
}

/* Here we are adding webkit-animation
to head of star for shining */
@-webkit-keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
}

/* Here we are adding webkit-animation
to tail of star */
@-webkit-keyframes tail {
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
}

/* Here we are adding webkit-animation
for shooting effect */
@-webkit-keyframes shooting {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(270px);
    transform: translateX(270px);
  }
}

/* Here we make shooting effect */
@keyframes shooting {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(270px);
    transform: translateX(270px);
  }
}


</style>

