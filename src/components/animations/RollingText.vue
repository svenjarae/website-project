<template>
  <div class="skills">
    <marquee-text :repeat="10" :duration="8">
      <span class="small">HTML CSS/SASS JS VUE GREENSOCKS ANIMATION ILLUSTRATOR PHOTOSHOP PREMIERE</span>
    </marquee-text>
  </div>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "RollingText",
  components: {

    MarqueeText
  },
  props:{
    text: String,
  }
}
</script>

<style scoped>

.skills{
  column-gap: 0;
  padding: 20px 0;
  text-align: center;
  text-transform: uppercase;
}
.skills .big{
  margin-right: 5px;
  margin-left: 5px;
  color: black;
  font-size: 60px;
}

.skills .small{
  margin-right: 5px;
  margin-left: 5px;
  color: black;
  font-size: 22px;
  font-family: monospace;
}

</style>