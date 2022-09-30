<template>
  <div>

    <div style="height: calc(100vh);">
      <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 100%;">
        <div class="bigFont flexColumn padding secondaryFont salutationWrapper layoutWrapper">
          <span>DIGITAL CONTENT MIX</span>
        </div>
        <div class="normalFont padding flexColumn" style="position: relative; display: inline-flex;">
          <span>Chaotic, Daring But Above</span>
          <span>All, Incisive</span>
          <div class="waterAnimationContainer">
            <WaterAnimation></WaterAnimation>
          </div>
          <div class="vidContainer">
            <video muted autoplay loop preload="auto">
              <source :src="titleVideo" type="video/mp4">
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
        <div class="layoutWrapper padding smallFont">
          <div class="flexColumn" style="align-items: flex-start; gap: 10px">
            <span>
              <span>1</span>
              <span class="padding">Turn your speakers up</span>
            </span>
            <span>
              <span>2</span>
              <span class="padding">Have a look</span>
            </span>
            <span>
              <span>3</span>
              <span class="padding">Put on a happy face</span>
            </span>
          </div>
        </div>
        <div>
          <CircleDots></CircleDots>
        </div>
      </div>
    </div>
    <div>
      <div style="height: 600px; position:relative;">
        <ImageSlider></ImageSlider>
      </div>
      <div class="layoutWrapper">
        <span>Gallery (18)</span>
        <router-link to="/projects">
          <span>See (all / projects)</span>
        </router-link>
      </div>
      <div class="padding secondaryFont">
        <RollingText text="MAKE A HAPPY FACE"></RollingText>
      </div>
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
  top: 60px;
  right: -155px;
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

.vidContainer {
  height: 200px;
  width: 200px;
  position: absolute;
  top: 0px;
  right: -230px;
  border-radius: 20px;
}

.vidContainer video{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.ghostContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>

