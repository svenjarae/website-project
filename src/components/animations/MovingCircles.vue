<template>
  <div class="liquidAnimationContainer">
    <div class="demo">
      <div id="large-header" class="large-header">
        <div class="main">
          <img
              :src="circleCenter"
              class="small no-border"
          />
          <div class="icons js">
            <img :src="circleOne" class="no-border" />
          </div>

          <div class="icons python">
            <img :src="circleTwo" class="no-border" />
          </div>

          <div class="icons git">
            <img :src="circleCenter" class="no-border" />
          </div>

          <div class="icons java">
            <img
                :src="circleCenter"
                class="no-border"
            />
          </div>

          <div class="icons Deno">
            <img :src="circleCenter"
                 class="no-border"
            />
          </div>

          <div class="icons vue">
            <img :src="circleCenter"
                 class="no-border"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import circleCenter from "/././././././src/assets/blue-circle-animation/blueCircle.svg";
import circleOne from "/././././././src/assets/blue-circle-animation/circleOne.png";
import circleTwo from "/././././././src/assets/blue-circle-animation/circleTwo.png";
export default {
  name: 'MovingCircles',
  data(){
    return{
      circleCenter: circleCenter,
      circleOne: circleOne,
      circleTwo: circleTwo,
    }
  },
  props: {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main {
  position: absolute;
  margin: 0;
  padding: 0;
  color: #f9f1e9;
  text-align: center;
  top: 40%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}

img {
  width: 100%;
}

.small {
  width: 200px;
  animation: 60s roundemovement linear infinite;
}

@keyframes roundemovement {
  0% {
    transform: rotate(360deg) translate(0px) rotate(360deg);
  }
  100% {
    transform: rotate(360deg) translate(0px) rotate(-360deg);
  }
}

.icons {
  width: 50px;
  height: 50px;
  position: absolute;
  margin: 0;
  padding: 0;
  color: #f9f1e9;
  text-align: center;
  top: 40%;
  left: 50%;
}

.js {
  animation: jscircle 10s linear infinite;
}

.python {
  animation: pycircle 10s linear infinite;
}
.java {
  animation: javacircle 10s linear infinite;
}
.git {
  animation: gitcircle 10s linear infinite;
}
.Deno {
  animation: denocircle 30s linear infinite;
}

.vue {
  animation: vuecircle 30s linear infinite;
}
@keyframes jscircle {
  0% {
    transform: rotate(0deg) translate(180px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translate(180px) rotate(-360deg);
  }
}

@keyframes pycircle {
  0% {
    transform: rotate(0deg) translate(180px) rotate(0deg);
  }
  100% {
    transform: rotate(-360deg) translate(180px) rotate(360deg);
  }
}

@keyframes javacircle {
  0% {
    transform: rotate(0deg) translate(-180px) rotate(0deg);
  }
  100% {
    transform: rotate(-360deg) translate(-180px) rotate(360deg);
  }
}

@keyframes gitcircle {
  0% {
    transform: rotate(0deg) translate(-180px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translate(-180px) rotate(-360deg);
  }
}

@keyframes denocircle {
  0% {
    transform: rotate(0deg) translate(180px) rotate(0deg);
  }
  100% {
    transform: rotate(720deg) translate(180px) rotate(-720deg);
  }
}

@keyframes vuecircle {
  0% {
    transform: rotate(0deg) translate(-180px) rotate(0deg);
  }
  100% {
    transform: rotate(-720deg) translate(-180px) rotate(720deg);
  }
}
</style>
