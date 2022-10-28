<template>
<div></div>
</template>

<script>

export default {
  name: 'BirdAnimation',
  data(){
    return{
    }
  },
  props: {

  }

}
</script>

<style scoped>
HTML {
  height: 100%;
  background: #000;
}

DIV {
  margin: auto;
  max-width: 400px;
  height: 400px;
  background-color: black;
  background-image: url(https://img-fotki.yandex.ru/get/3111/5091629.a2/0_85f54_7fb379e6_orig),
  linear-gradient(45deg, white 50%, transparent 50%),
  linear-gradient(-45deg, white 50%, transparent 50%);
  background-repeat: no-repeat, repeat, repeat;
  background-position:
      50% -15%,
      50% 50%,
      50% 50%;
  background-blend-mode: difference;
  background-size: auto, 5em 5em, 5em  5em;
  border-radius: 50%;
  box-shadow: 0 0 0 5px #FFF;
  animation: move 1.68s infinite ease-out;
}

@keyframes move {
  50% {
    background-position:
        50% 95%,
        50% 50%,
        50% 50%;
  }
}
</style>
