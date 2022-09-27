<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "Image-Slider",
  data() {
    return {
      images: [
        "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",

        "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
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
      this.timer = setInterval(this.next, 2000);
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
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

img {
  height:600px;
  width: 100%;
  max-width: 1300px;
  object-fit: cover;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border-radius: 30px;
}
</style>