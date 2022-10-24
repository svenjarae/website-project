<template>
  <div class="wrapper">
    <svg class="triangle-canvas" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <polygon class="triangle triangle-1" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-2" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-3" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-4" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-5" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-6" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-7" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-8" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-9" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-10" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-11" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-12" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-13" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-14" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-15" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-16" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-17" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-18" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-19" points="500,200 759,650 241,650" />
      <polygon class="triangle triangle-20" points="500,200 759,650 241,650" />
    </svg>
  </div>
</template>

<script>

export default {
  name: 'TripAnimation',
  data(){
    return{
    }
  },
  props: {

  }

}
</script>

<style scoped>
html{
  height: 100%;
}
body {
  height: 100%;
  background: #642B73;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #C6426E, #642B73);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #C6426E, #642B73); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}

.wrapper {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.triangle-canvas {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
}

.triangle {
  fill: none;
  stroke: #fff;
  stroke-width: 15;
  transform-origin: center center;
  animation: triangle-animation 10s linear infinite;
}
.triangle-1 {
  animation-delay: 0s;
}
.triangle-2 {
  animation-delay: -0.5s;
}
.triangle-3 {
  animation-delay: -1s;
}
.triangle-4 {
  animation-delay: -1.5s;
}
.triangle-5 {
  animation-delay: -2s;
}
.triangle-6 {
  animation-delay: -2.5s;
}
.triangle-7 {
  animation-delay: -3s;
}
.triangle-8 {
  animation-delay: -3.5s;
}
.triangle-9 {
  animation-delay: -4s;
}
.triangle-10 {
  animation-delay: -4.5s;
}
.triangle-11 {
  animation-delay: -5s;
}
.triangle-12 {
  animation-delay: -5.5s;
}
.triangle-13 {
  animation-delay: -6s;
}
.triangle-14 {
  animation-delay: -6.5s;
}
.triangle-15 {
  animation-delay: -7s;
}
.triangle-16 {
  animation-delay: -7.5s;
}
.triangle-17 {
  animation-delay: -8s;
}
.triangle-18 {
  animation-delay: -8.5s;
}
.triangle-19 {
  animation-delay: -9s;
}
.triangle-20 {
  animation-delay: -9.5s;
}

@keyframes triangle-animation{
  0%{
    transform: scale(0) rotate(0deg);
    opacity: 1;
  }

  100%{
    transform: scale(3) rotate(45deg);
    opacity: 0;
  }
}

</style>
