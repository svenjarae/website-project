<template>
<div class="b_circle">
  <span class="s_circle"></span>
  <span class="s_circle"></span>
  <span class="s_circle"></span>
  <span class="s_circle"></span>
</div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'CircleDots',

}
</script>

<style scoped>
@keyframes orbit1 {
  from {
    transform: rotate(0deg) translate(150px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translate(150px) rotate(-360deg);
  }
}
@keyframes orbit2 {
  from {
    transform: rotate(90deg) translate(150px) rotate(90deg);
  }
  to {
    transform: rotate(450deg) translate(150px) rotate(-450deg);
  }
}
@keyframes orbit3 {
  from {
    transform: rotate(180deg) translate(150px) rotate(180deg);
  }
  to {
    transform: rotate(540deg) translate(150px) rotate(-540deg);
  }
}
@keyframes orbit4 {
  from {
    transform: rotate(270deg) translate(150px) rotate(270deg);
  }
  to {
    transform: rotate(630deg) translate(150px) rotate(-630deg);
  }
}
.b_circle {
  position: relative;
  height: 300px;
  width: 300px;
  border: 1px solid black;
  border-radius: 50%;
  margin: auto;
}
.s_circle {
  position: absolute;
  height: 50px;
  width: 50px;
  background: var(--2ndColor);
  border-radius: 50%;
  top: 125px;
  left: 125px;
}
.s_circle:nth-child(1) {
   animation: orbit1 4s linear infinite;
 }
.s_circle:nth-child(2) {
   animation: orbit2 4s linear infinite;
 }
.s_circle:nth-child(3) {
   animation: orbit3 4s linear infinite;
 }
.s_circle:nth-child(4) {
   animation: orbit4 4s linear infinite;
 }
</style>
