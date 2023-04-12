<template>
  <div class="wrap">
    <button class="button">HAVE A LOOK</button>
  </div>
</template>

<script>

export default {
  name: 'TextAnime',
  data(){
    return{
    }
  },
  props: {

  }

}
</script>

<style scoped>

.wrap {
  margin-top: 60px;
  margin-left: -5px;
  display: inline-block;
}

.button {
  font-size: 16px;
  letter-spacing: 0.1em;
  font-weight: 500;
  min-width: 300px;
  min-height: 60px;
  text-transform: uppercase;
  color: #313133;
  background: white;
  border: none;
  border-radius: 1000px;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
}

button::before {
  content: '';
  border-radius: 1000px;
  min-width: calc(300px + 12px);
  min-height: calc(60px + 12px);
  border: 6px solid rgb(26, 26, 147);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

.button:hover, .button:focus {
  color: #313133;
  transform: translateY(-6px);
}

button:hover::before, button:focus::before {
  opacity: 1;
}

button::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 100%;
  border: 6px solid blue;
  position: absolute;
  z-index: 11;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

button:hover::after, button:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}


</style>

