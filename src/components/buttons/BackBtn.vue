<template>
  <div class="button">
    <div class="button__wrapper">
      <div class="button__arrow"></div>
      <div class="button__border-circle"></div>
      <div class="button__mask-circle">
        <div class="button__small-circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackBtn',
  props: {
    val: String
  }
}
</script>

<style scoped>

.button {
  display: flex;
  cursor: pointer;
  align-items: center;
  z-index: 10000;
}
.button:hover .button__border-circle{
  transform: translateX(60px);
}
.button:hover  .button__border-circle {
    transform: translateX(60px);
  }

.button:hover .button__mask-circle {
    clip-path: circle(25px at 85px);
}

.button__text {
  z-index: 1;
  font-size: 14px;
  margin-right: -18px;
  color: lightgrey;
  letter-spacing: 0.05em;
}

.button__wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.button__arrow {
  left: 35px;
  height: 3px;
  width: 50px;
  display: flex;
  position: absolute;
  align-items: center;
  background-color: var(--2ndColor);
  transform: rotate(180deg);
}

.button__arrow:after {
   content: '';
   width: 0;
   height: 0;
   top: -5px;
   right: -7px;
   position: absolute;
   border-top: 7px solid transparent;
   border-bottom: 7px solid transparent;
   border-left: 7px solid var(--2ndColor);
}


.button__border-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid grey;
  transition: transform 987ms;
}

.button__mask-circle {
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: circle(25px);
  transition: clip-path 987ms;
}

.button__small-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transform: translateX(60px);
  background-color: var(--2ndColor);
}

</style>
