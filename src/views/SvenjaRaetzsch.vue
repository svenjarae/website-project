<template>
  <div class="outerContainer">
    <div class="innerContainer" style="background-color: #202023;">
      <div class="animationContainer">
        <WaterAnimation></WaterAnimation>
      </div>
    </div>
    <div class="innerContainer" style="background-color: #17191CFF;">
      <div class="buttonContainer">
        <TextAnime></TextAnime>
      </div>
    </div>
    <div class="innerContainer" style="background-color: black;">
      <div class="heartContainer">
        <BeatingHeart></BeatingHeart>
      </div>
    </div>
  </div>
</template>

<script>

import image1 from "/././././././src/assets/images/bg/AdobeStock_533955412.png";
import image2 from "/././././././src/assets/images/bg/AdobeStock_533955453.png";
import video1 from "/././././././src/assets/videos/titlevid.mp4";
import BeatingHeart from "@/components/animations/BeatingHeart";
import WaterAnimation from "@/components/buttons/WaterAnimation";
import TextAnime from "@/components/animations/TextAnime";

export default {
  name: 'SvenjaRaetzsch',
  components: {
    TextAnime,
    WaterAnimation,
    BeatingHeart,

  },
  data(){
    return{
      image1: image1,
      image2: image2,
      video1: video1,
    }
  },
  methods: {

  }

}
</script>

<style scoped>
  .innerContainer{
    height: calc(100vh + 20px);
    width: 100%;
    position: relative;
  }

  .heartContainer{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .animationContainer{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 300px;
    width: 300px;
  }

  .buttonContainer{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .imageText{
    opacity: 0.2;
    color: black;
    font-size: 150px;
    position: absolute;
    bottom: 0;
    left:24px;
    font-family: var(--secondaryFont);
    letter-spacing: 20px;
  }
  .videoText{
    opacity: 0.2;
    color: white;
    font-size: 150px;
    position: absolute;
    bottom: 0;
    left:24px;
    font-family: var(--secondaryFont);
    letter-spacing: 20px;
  }
  img{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.1;
  }

</style>

