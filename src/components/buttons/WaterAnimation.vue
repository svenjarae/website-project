<template>
  <div class="liquid"></div>
</template>

<script>
export default {
  name: 'WaterAnimation',
  props: {
    val: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.liquid {
  position: absolute;
  width: 100%;
  height: 100%;
  background: orangered;
  box-shadow: inset 0 0 50px rgb(0 0 0 / 50%);
  transition: .5s;
  overflow: hidden;
  z-index: 201;
  border-radius: 20px;
}

.liquid::after,
.liquid::before {
  content: '';
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);
  background: #000;
}

.liquid::before {

  border-radius: 45%;
  background: rgba(20, 20, 20, 1);
  animation: animate 5s linear infinite;
}

.liquid::after {

  border-radius: 40%;
  background: rgba(20, 20, 20, .5);
  animation: animate 10s linear infinite;
}

@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>
