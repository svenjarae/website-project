<template>
  <div class="collage-container">
    <div class="collage">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        :style="{
          width: `${getRandomSize()}px`,
          height: 'auto',
          margin: '5px',
          transition: 'transform 0.3s ease-out',
        }"
        @mouseover="handleMouseOver(index)"
        @mouseout="handleMouseOut"
      />
    </div>
  </div>
</template>

<script>
  import svenjashark from "@/assets/images/profile/svenja-2.jpg";
  import svenjabw from "@/assets/images/profile/Bretagne2023_LVossgaetter-1.jpg";
  import svenja from "/././././././src/assets/images/projects/gc-sealife/squid1.png";
  import squid1 from "@/assets/images/profile/Bretagne2023LVossgaetter.jpg";
  import svenja2 from "@/assets/images/profile/OC_Season_SR_bw.jpg";
  import turtlegalapagos from "@/assets/images/projects/glowing-turts/water-turtle.jpg";
  import sealgalapagos from "@/assets/images/projects/galapagos/titleImg.png";
  import bubble from "@/assets/images/projects/sub/bubble.jpg";

  import onisstudio from "@/assets/images/projects/oni-studio/Sequence2-Stil1.jpg";
  import svenja3 from "@/assets/images/profile/Svenja.jpg";
  import svenja4 from "@/assets/images/profile/OC_Season_23_SR.jpg";
  import morena from "@/assets/images/projects/gc-sealife/morrenaTitleimg.jpg";
  import pulpo from "@/assets/images/projects/buceo-nocturno/pulpo.jpg";
  import fish from "@/assets/images/projects/galapagos/galleryImgs/fish.png";

export default {
  data() {
    return {
      images: [
        { src: svenjashark, alt: 'Image 1' },
        { src: svenjabw, alt: 'Image 40' },
        { src: svenja, alt: 'Image 40' },
        { src: bubble, alt: 'Image 40' },
        { src: squid1, alt: 'Image 40' },
        { src: turtlegalapagos, alt: 'Image 40' },
        { src: sealgalapagos, alt: 'Image 40' },
        { src: svenja2, alt: 'Image 40' },
        { src: svenjashark, alt: 'Image 1' },

        { src: onisstudio, alt: 'Image 40' },
        { src: svenja3, alt: 'Image 40' },

        { src: svenja4, alt: 'Image 1' },

        { src: svenja4, alt: 'Image 40' },
        { src: morena, alt: 'Image 40' },
        { src: pulpo, alt: 'Image 40' },
        { src: svenjashark, alt: 'Image 1' },
        { src: fish, alt: 'Image 40' },


      ],
      hoveredIndex: null,
    };
  },
  methods: {
    getRandomSize() {
      // Generate a random size with small differences
      return Math.random() * 40 + 80; // Width between 80 and 120 pixels
    },
    handleMouseOver(index) {
      this.hoveredIndex = index;
    },
    handleMouseOut() {
      this.hoveredIndex = null;
    },
  },
};
</script>

<style scoped>
.collage-container {
  width: 500px;
  height: 500px;
  overflow: hidden;
  border-radius: 50%; /* Make the container circular */
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.2;
}

.collage {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.collage img {
  transform-origin: top left; /* Ensure images scale from top left */
}

.hovered {
  transform: translate(-5px, -5px) scale(1.05);
  transition: transform 0.3s ease-out;
}

img{
  object-fit: cover;
}

@media screen and (max-width: 720px) {
.collage-container{
    right: 0;
    bottom: 0;

    transform: none;
  }
}
</style>