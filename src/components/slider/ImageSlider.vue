<template>
  <div>
    <transition-group name="fade" tag="div">
      <div class="imgContainer" v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <div class="prev" @click="prev">
      <BackBtn></BackBtn>
    </div>
    <div class="next" @click="next" style="transform: rotate(180deg)">
      <BackBtn></BackBtn>
    </div>
  </div>
</template>
<script>
import image1 from "/././././././src/assets/images/projects/galapagos/galleryImgs/seelions-cuddle.jpg";
import image2 from "/././././././src/assets/images/projects/galapagos/galleryImgs/galapagos-shark.jpg";
import image3 from "/././././././src/assets/images/projects/glowing-turts/water-high-saturation.jpg";
import BackBtn from "@/components/buttons/BackBtn";

export default {
  name: "Image-Slider",
  components: {BackBtn},
  data() {
    return {
      images: [
        image1,
        image2,
        image3,
      ],
      timer: null,
      currentIndex: 0
    };
  },

  methods: {
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
  opacity: 0;
  height: 0%;
}

.fade-enter,
.fade-leave-to {
  transform: scale(1.5);
}

.imgContainer{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  height: 500px;
  width: 500px;
}

img {
  height:100%;
  width: 100%;
  object-fit: cover;
}

.prev{
  position: absolute;
  left: 100px;
  top: 50%;
}

.next{
  position: absolute;
  right: 100px;
  top: 50%;
}

</style>