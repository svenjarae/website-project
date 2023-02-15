<template>
  <div class="bgImgContainer">
    <img :src="image7" alt="image01" />
  </div>
  <div class="home__wrapper">
    <div class="about">
      <div style="display:flex;">
        <div class="flexRowWrapper">
            <div style="display: flex; align-items: center;">
              <span style="font-size: 80px; font-family: myFirstFont;">DEVELOPMENT</span>
              <div style="display: flex; flex-direction: column; justify-content: center">
                <span style="font-size: 35px;margin-top: 5px; font-weight: bold;">ANIMATION</span>
                <span style="font-size: 26px">DIGITAL DESIGN</span>
              </div>
            </div>
            <div style="display: flex">
              <span style="font-size: 63px; margin-top: -9px">PHOTOGRAPHY & FILM</span>
            </div>
        </div>
        <div class="flexRowWrapper" style="text-align: right; margin-top: -10px;">
          <span style="    font-size: 90px;font-family: 'myFirstFont', serif; letter-spacing: 3px;">UI/UX</span>
          <div style="margin-top: -5px; display: flex; flex-direction: column">
            <span style="font-size: 34px; ">PROTOTYPING</span>
            <span style="letter-spacing: 6px; font-size: 14px;font-weight: bold;">CONTENT CREATION</span>
          </div>
        </div>
      </div>
      <div style="max-width: 1000px;">
        <RollingText repeat="10" textBig="HTML CSS/SASS JS VUE GREENSOCKS ANIMATION SEO/SEA" textSmall="XD ILLUSTRATOR PHOTOSHOP PREMIERE AFTEREFFECTS INDESIGN"></RollingText>
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
import TextAnime from "@/components/animations/TextAnime";

export default {
  name: 'SvenjaRaetzsch',
  components: {
    TextAnime,
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

.bgImgContainer{
  position: absolute;
  bottom: 4px;
  right: 0;
  top: 0;
  opacity: 0.6; z-index: -1;
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
  justify-content: flex-start;
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


</style>

