<template>
  <div>

    <div style="height: calc(100vh);">
      <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 100%;">
        <div class="bigFont flexColumn padding secondaryFont salutationWrapper layoutWrapper">
          <span>DIGITAL CONTENT MIX</span>
          <div class="waterAnimationContainer">
            <WaterAnimation></WaterAnimation>
          </div>
        </div>
        <div class="normalFont padding flexColumn">
          <span>Chaotic, Daring But Above</span>
          <span>All, Incisive</span>
        </div>
        <!--
        <div class="vidContainer">
          <video muted autoplay loop preload="auto">
            <source :src="titleVideo" type="video/mp4">
            Your browser does not support HTML video.
          </video>
        </div>-->
        <div class="layoutWrapper padding smallFont">
          <div class="flexColumn" style="align-items: flex-start; gap: 10px">
            <span>
              <span class="margin-right-small">1</span>
              <span>Turn your speakers up</span>
            </span>
            <span>
              <span class="margin-right-small">2</span>
              <span>Have a look</span>
            </span>
            <span>
              <span class="margin-right-small">3</span>
              <span>Put on a happy face</span>
            </span>
          </div>
        </div>
        <div>
          <CircleDots></CircleDots>
        </div>
      </div>
    </div>
    <div class="bgColorOrange">
      <div class="imageSliderContainer">
        <ImageSlider></ImageSlider>
      </div>
      <div class="layoutWrapper">
        <router-link to="/projects">
          <span>GALLERY (18)</span>
        </router-link>
        <router-link to="/projects">
          <span>SEE (ALL / PROJECTS)</span>
        </router-link>
      </div>
    </div>
    <div class="padding secondaryFont">
      <RollingText text="MAKE A HAPPY FACE"></RollingText>
    </div>
    <div class="ghostContainer">
      <GhostAnimation></GhostAnimation>
    </div>
    <div class="flexColumn padding">
      <span class="normalFont">Break established canons as many times as necessary.</span>
      <span>HOLD THE VISION, TRUST THE PROCESS.</span>
    </div>
    <div>
      <SkillsComponent></SkillsComponent>
    </div>
    </div>
    <div style="margin-top: 40px">
      <AllProjectsComponent></AllProjectsComponent>
    </div>
</template>

<script>

import titleVideo from "/././././././src/assets/videos/titlevid.mp4";
import videoTitleImg from "/././././././src/assets/images/projects/uw-plants/titleImg.png";

import RollingText from "@/components/animations/RollingText";
import ImageSlider from "@/components/slider/ImageSlider";
import CircleDots from "@/components/animations/CircleDots";
import WaterAnimation from "@/components/buttons/WaterAnimation";
import AllProjectsComponent from "@/components/AllProjectsComponent";
import GhostAnimation from "@/components/animations/GhostAnimation";
import SkillsComponent from "@/components/SkillsComponent";

export default {
  name: 'SvenjaRaetzsch',
  components: {
    SkillsComponent,
    GhostAnimation,
    AllProjectsComponent,
    WaterAnimation,
    CircleDots,
    ImageSlider,
    RollingText,
  },
  data(){
    return{
      titleVideo: titleVideo,
      videoTitleImg: videoTitleImg,
    }
  }
}
</script>

<style>

.waterAnimationContainer{
  height: 150px;
  width: 150px;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  right: 0;
  z-index: 1;
}

.salutationWrapper{
  filter: blur(0px);
  transition: all 1s;
}

.salutationWrapper:hover{
  filter: blur(10px);
}

@keyframes animate {
  from{
    filter: blur(0);
  }
  to{
    filter: blur(5px);
  }
}

.ghostContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.imageSliderContainer{
  height: 600px;
  position:relative;
  margin: 0 40px 10px 40px;
}

.bgColorOrange{

}

</style>

