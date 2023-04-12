<template>
  <div class="outerContainer">
    <div class="innerContainer" style="background-color: #202023;">
      <div class="ocean">
        <div class="bubble bubble--1"></div>
        <div class="bubble bubble--2"></div>
        <div class="bubble bubble--3"></div>
        <div class="bubble bubble--4"></div>
        <div class="bubble bubble--5"></div>
        <div class="bubble bubble--6"></div>
        <div class="bubble bubble--7"></div>
        <div class="bubble bubble--8"></div>
        <div class="bubble bubble--9"></div>
        <div class="bubble bubble--10"></div>
        <div class="bubble bubble--11"></div>
        <div class="bubble bubble--12"></div>
        <div id="octocat"></div>
      </div>
      <div class="animationContainer">
        <WaterAnimation></WaterAnimation>
      </div>
    </div>
    <div class="innerContainer" style="background-color: #17191CFF;">
      <router-link to="/projects" class="buttonContainer">
        <TextAnime></TextAnime>
      </router-link>
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
@keyframes animateSprite {
  0% {
    background-position: -600px; /* Starting position moving left sprite */
  }
  20% {
    background-position: 0px; /* Straight on sprite */
  }
  25% {
    background-position: -200px; /* Moving up sprite */
  }
  35% {
    background-position: -400px; /* Moving right sprite */
  }
  40% {
    background-position: -400px;
  }
  50% {
    background-position: -200px;  /* Moving up sprite */
  }
  60% {
    background-position: -0px; /* Straight on sprite */
  }
  67% {
    background-position: -600px; /* Moving up sprite */
  }

  100% {
    background-position: -600px;
  }
}

@keyframes swim {
  0% {
    transform: translate(0, 0); /* Starting position */
  }
  20% {
    transform: translate(calc(-50vw - 100px), 0); /* Animate to center of screen */
  }
  25% {
    transform: translate(calc(-50vw - 100px), 0); /* Stay at the center for 1 second */
  }
  35% {
    transform: translate(calc(-50vw - 100px), -20vh); /* Animate up for 2 seconds */
  }
  50% {
    transform: translate(-25vw, 15vh); /* Animate bottom right for 3 seconds */
  }
  60% {
    transform: translate(-25vw, -20vh); /* Animate up at right of the screen */
  }
  67% {
    transform: translate(-25vw, -20vh);
  }

  100% {
    transform: translate(calc(-100vw - 300px), 0); /* Animate past left past the screen */
  }
}
.ocean {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.bubble {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  background-color: white;
  bottom: -30px;
  opacity: 0.2;
  animation: bubble 15s ease-in-out infinite,
  sideWays 4s ease-in-out infinite alternate;
}

@keyframes bubble {
  0% {
    transform: translateY(0%);
    opacity: 0.06;
  }
  100% {
    transform: translateY(-120vh);
  }
}

.bubble--1 {
  left: 10%;
  animation-delay: 0.5s;
  animation-duration: 16s;
  opacity: 0.2;
}

.bubble--2 {
  width: 15px;
  height: 15px;
  left: 40%;
  animation-delay: 1s;
  animation-duration: 10s;
  opacity: 0.1;
}

.bubble--3 {
  width: 10px;
  height: 10px;
  left: 30%;
  animation-delay: 5s;
  animation-duration: 20s;
  opacity: 0.3;
}

.bubble--4 {
  width: 25px;
  height: 25px;
  left: 40%;
  animation-delay: 8s;
  animation-duration: 17s;
  opacity: 0.2;
}

.bubble--5 {
  width: 30px;
  height: 30px;
  left: 60%;
  animation-delay: 10s;
  animation-duration: 15s;
  opacity: 0.1;
}

.bubble--6 {
  width: 10px;
  height: 10px;
  left: 80%;
  animation-delay: 3s;
  animation-duration: 30s;
  opacity: 0.4;
}

.bubble--7 {
  width: 15px;
  height: 15px;
  left: 90%;
  animation-delay: -7s;
  animation-duration: 25s;
  opacity: 0.3;
}

.bubble--9 {
  width: 20px;
  height: 20px;
  left: 50%;
  bottom: 30px;
  animation-delay: -5s;
  animation-duration: 19s;
  opacity: 0.2;
}

.bubble--10 {
  width: 40px;
  height: 40px;
  left: 30%;
  bottom: 30px;
  animation-delay: -21s;
  animation-duration: 16s;
  opacity: 0.3;
}

.bubble--11 {
  width: 30px;
  height: 30px;
  left: 60%;
  bottom: 30px;
  animation-delay: -13.75s;
  animation-duration: 20s;
  opacity: 0.3;
}

.bubble--11 {
  width: 25px;
  height: 25px;
  left: 90%;
  bottom: 30px;
  animation-delay: -10.5s;
  animation-duration: 19s;
  opacity: 0.3;
}

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

