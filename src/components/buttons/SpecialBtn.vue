<template>
  <router-link to="/projects" style="text-decoration: none">
    <div class="wrap">
      <button class="button">{{val}}</button>
    </div>
  </router-link>

</template>

<script>
export default {
  name: 'SpecialBtn',
  props: {
    val: String
  }
}
</script>

<style scoped>
.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  width: 100px;
  min-height: 100px;
  font-size: 16px;
  text-transform: uppercase;
  background: orange;
  border: none;
  border-radius: 50%;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
}

button::before {
  content: '';
  min-width: calc(300px + 12px);
  min-height: calc(60px + 12px);
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
  border: 6px solid orange;
  position: absolute;
  z-index: -1;
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
