<template>
  <div class="skills">
    <div style="color: orangered;">
      <marquee-text :repeat="10" :duration="25">
        <span>Development </span>
        <span>Design </span>
        <span>Digital </span>
        <span>Content </span>
        <span style="margin-right: 5px">Ideas </span>
      </marquee-text>
    </div>
    <marquee-text :repeat="10" :duration="8">
      <span>Photoshop </span>
      <span>Illustrator </span>
      <span>XD </span>
      <span>InDesign </span>
      <span>Premiere </span>
      <span style="margin-right: 5px">AfterEffects </span>
    </marquee-text>
    <marquee-text :repeat="10" :reverse="true">
      <span>HTML </span>
      <span>CSS </span>
      <span>Animation </span>
      <span>Javascript </span>
      <span style="margin-right: 5px">Vue </span>
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

.skills{
  column-gap: 0;
  text-align: center;
  font-size: 40px;
}

.marquee-text-text{

}

.marquee-text-content{
  font-size: 100px;
  text-transform: uppercase;
}

</style>