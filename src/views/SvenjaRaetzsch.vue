<template>
  <div class="home">
    <div id="parent">
      <div class="pageOne">
        <!--<div class="rightLeftCorner">
          <router-link to="/projects">
            <div class="arrow-container">
              <DownBtn></DownBtn>
            </div>
            <h1>ALL PROJECTS</h1>
          </router-link>
        </div>-->
        <div>
          <WaterAnimation></WaterAnimation>
        </div>
        <acc-slider></acc-slider>
        <div class="containerBig">
          <video muted autoplay loop preload="auto">
            <source :src="titleVideo" type="video/mp4">
            Your browser does not support HTML video.
          </video>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
//import DownBtn from "@/components/buttons/DownBtn";

import titleVideo from "/././././././src/assets/videos/titlevid.mp4";
import videoTitleImg from "/././././././src/assets/images/projects/uw-plants/titleImg.png";
import WaterAnimation from "@/components/buttons/WaterAnimation";
import AccSlider from "@/components/slider/AccSlider";

export default {
  name: 'SvenjaRaetzsch',
  components: {
    AccSlider,
    WaterAnimation,
    //DownBtn,
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
#parent { position: absolute; top: 0; left: 0; height: 100%; width: 100%; }
#parent > div:nth-child(1) { background: var(--bright); }

.skillsContainer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 40px;
}

.skillsContainer span{
  margin-right: 20px;
}

.skillsContainer span:last-child{
  margin-right: 0;
}

.containerBig {
  height: 200px;
  background-color: whitesmoke;
  bottom: 20px;
  left: 70px;
  right: 0;
  margin: 60px auto;
  z-index: 98;
  position: absolute;
}

.liquidContainer {
  position: absolute;
  top: 195px;
}

video{
  width: 100%;
  height: 100%;
  object-fit: cover;
}


</style>

