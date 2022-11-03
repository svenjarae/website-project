<template>
  <div class="">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
  </div>
</template>
<script>
import image1 from "/././././././src/assets/images/projects/galapagos/galleryImgs/seelions-cuddle.jpg";
import image2 from "/././././././src/assets/images/projects/galapagos/galleryImgs/galapagos-shark.jpg";
import image3 from "/././././././src/assets/images/projects/glowing-turts/water-high-saturation.jpg";

export default {
  name: "Image-Slider",
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

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 500);
    },

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
  transition: all 0.9s ease;
}

.fade-enter,
.fade-leave-to {
}

img {
  height:180px;
  width: 100%;
  max-width: 1000px;
  object-fit: cover;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border-radius: 30px;
}

</style>