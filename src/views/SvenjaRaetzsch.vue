<template>
  <div class="outerContainer">
    <div class="innerContainer">
      <img :src="image1" alt="image01" />
    </div>
    <div class="innerContainer">
      <div class="imgSliderContainer">
        <image-slider></image-slider>
      </div>
      <div>
        <h2 class="imageText">IMAGES</h2>
      </div>
    </div>
    <div class="innerContainer" style="background-color: black;">
      <div class="videoContainer">
        <video width="320" height="240" controls>
          <source src="movie.mp4" type="video/mp4">
        </video>
      </div>
      <div>
        <h2 class="videoText">VIDEOS</h2>
      </div>
    </div>
  </div>
</template>

<script>

import image1 from "/././././././src/assets/images/projects/animations/trip/titleimg-trip.png";
import ImageSlider from "@/components/slider/ImageSlider";

export default {
  name: 'SvenjaRaetzsch',
  components: {
    ImageSlider

  },
  data(){
    return{
      image1: image1,
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

  .videoContainer{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 500px;
    width: 500px;
  }

  video{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .imageText{
    opacity: 0.2;
    color: black;
    font-size: calc(9.25926vw + 70.37px);
    position: absolute;
    bottom: 0;
    left:24px;
    font-family: var(--secondaryFont)
  }
  .videoText{
    opacity: 0.2;
    color: white;
    font-size: calc(9.25926vw + 70.37px);
    position: absolute;
    bottom: 0;
    left:24px;
    font-family: var(--secondaryFont)
  }
  img{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.1;
  }

</style>

