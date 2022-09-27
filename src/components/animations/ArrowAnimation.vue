<template>
  <div class="box">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>

export default {
  name: 'ArrowAnimation',
  data(){
    return{
    }
  },
}
</script>

<style scoped>

.box {
  position: absolute;
  right: 20px;
  top: -4px;
  transform: rotate(-90deg);
}

span {
  display:block;
  width:10px;
  height:10px;
  border-bottom:2px solid red;
  border-right:2px solid red;
  box-shadow: 4px 4px 4px -1px #fff;
  transform:rotate(45deg);
  margin:-20px;
  animation: animate 2s infinite;
}

span:nth-child(1) {
  animation-delay:-0.2s;
}

span:nth-child(2) {
  animation-delay:-0.4s;
}

span:nth-child(3) {
  animation-delay:-0.6s;
}

@keyframes animate {
  0% {
    opacity:0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity:1;
  }
  100% {
    opacity:0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}
</style>
