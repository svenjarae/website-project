<template>
  <div class="skills">
    <marquee-text :repeat="10" :duration="8" :reverse="false">
      <span class="small">HTML CSS SASS GS VUE JS PHP . </span>
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
    textSmall: String,
    textBig: String,
  }
}
</script>

<style scoped>

.skills{
  display: flex;
  text-align: center;
  text-transform: uppercase;
  align-items: center;
  margin-left: 8px;
  margin-right: 5px;
}

.skills .small{
  color: white;
  font-size: 200px;
  letter-spacing: 4px;
  font-family: var(--secondaryFont);
}

</style>