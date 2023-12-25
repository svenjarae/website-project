<template>
    <div class="grid-container">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="grid-item"
        :style="{
          backgroundImage: `url(${image.src})`,
          gridRow: image.row,
          gridColumn: image.column,
          width: image.width,
          height: image.height
        }"
      >
        <div class="overlay"></div>
      </div>
    </div>
  </template>
  
  <script>

    import oct1 from "@/assets/images/projects/buceo-nocturno/pulpo.jpg";
    import ivonOne from "@/assets/images/projects/taliarte/P1033667.00_00_26_02.Still002.jpg";
    import bubble2 from "/././././././src/assets/images/projects/sub/bubble2.jpg";
    import titleImgSeal from "/././././././src/assets/images/projects/galapagos/titleImg.png";
    import titleImgOni from "/././././././src/assets/images/projects/oni-studio/Sequence2-Stil1.jpg";
    import titleImgBird from "/././././././src/assets/images/projects/animations/bird/bird-titleimg.png";
    import titleImgTrip from "/././././././src/assets/images/projects/animations/trip/titleimg-trip.png";
    import squid1 from "/././././././src/assets/images/projects/gc-sealife/squid1.png";
    import pixelGridTitleImg from "/././././././src/assets/images/projects/animations/pixel-grid/pixelGridTitleImg.png";
  export default {
    data() {
      return {
        images: [
          { src: ivonOne, row: '1 / 3', column: '1 / 3', width: '100%', height: '100%' },
          { src: oct1, row: '1 / 2', column: '3 / 4', width: '100%', height: '200px' },
          { src: bubble2, row: '2 / 4', column: '2 / 3', width: '150px', height: '150px' },
          { src: titleImgSeal, row: '2 / 4', column: '2 / 3', width: '150px', height: '150px' },
          { src: titleImgOni, row: '2 / 4', column: '2 / 3', width: '150px', height: '150px' },
          { src: titleImgBird, row: '2 / 4', column: '2 / 3', width: '150px', height: '150px' },
          { src: titleImgTrip, row: '2 / 4', column: '2 / 3', width: '150px', height: '150px' },
          { src: squid1, row: '2 / 4', column: '3 / 3', width: '150px', height: '150px' },
          { src: pixelGridTitleImg, row: '2 / 4', column: '2 / 3', width: '150px', height: '150px' },
          // Add more images with different positions, widths, and heights
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
    height: 100vh; /* Adjust the height as needed */
    position: absolute;
    top: 20%;
    opacity: 0.3;
    left: 70%;
  }
  
  .grid-item {
    position: relative;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    border-radius: 8px; /* Optional: Add border radius for rounded corners */
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust the color and opacity as needed */
  }

  @media screen and (max-width: 1100px) {
    .grid-container {
    left: 0;
  }
}
  
  /* Customize additional styles as needed */
  </style>