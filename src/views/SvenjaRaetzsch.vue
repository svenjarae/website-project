<template>
  <div class="outerContainer">
    <div class="innerContainer" style="background-color: #202023;">
      <ul class="factsContainer">
        <li>
          <h2>Make a happy face</h2>
        </li>
        <li>This website presents a mix of my previous works</li>
        <li>Spend as much time underwater as you can</li>
        <li>Currently working at <a style="text-decoration: underline;" href="https://codevance.de/">CODEVANCE</a> as Frontend Developer</li>
      </ul>
      <router-link to="/projects" class="buttonContainer">
        <TextAnime></TextAnime>
      </router-link>
    </div>
  </div>
</template>

<script>

import image1 from "/././././././src/assets/images/bg/AdobeStock_533955412.png";
import image2 from "/././././././src/assets/images/bg/AdobeStock_533955453.png";
import video1 from "/././././././src/assets/videos/titlevid.mp4";
import TextAnime from "@/components/animations/TextAnime";

export default {
  name: 'SvenjaRaetzsch',
  components: {
    TextAnime,

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
    list-style: decimal;
    margin: 8px 0;
  }
  .innerContainer{
    height: calc(100vh + 20px);
    width: 100%;
    position: relative;
  }

  .buttonContainer{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  img{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.1;
  }

  @media screen and (max-width: 1100px) {
    .factsContainer{
      position: inherit;
      max-width: inherit;
      padding: 100px 50px;
    }
    .buttonContainer{
      position: inherit;
      top: inherit;
      left: inherit;
      transform: inherit;
    }
  }

</style>

