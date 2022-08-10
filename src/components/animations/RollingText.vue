<template>
  <div class="skills">
    <marquee-text :repeat="10">
      <span>Photoshop </span>
      <span>Illustrator </span>
      <span>XD </span>
      <span>InDesign </span>
      <span>Premiere </span>
      <span style="margin-right: 20px">AfterEffects </span>
    </marquee-text>
    <marquee-text :repeat="10" :reverse="true">
      <span>HTML </span>
      <span>CSS </span>
      <span>Animation </span>
      <span>Javascript </span>
      <span style="margin-right: 20px">Vue </span>
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
}
</script>

<style scoped>

.marquee-text-content{
  font-size: 100px;
  text-transform: uppercase;
}

</style>