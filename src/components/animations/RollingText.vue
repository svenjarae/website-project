<template>
  <div class="skills">
    <marquee-text :repeat="10" :duration="8">
      <span>{{text}}</span>
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
  text-align: center;
  font-size: var(--bigFont);
  text-transform: uppercase;
}
.skills span{
  margin-right: 30px;
  color: black;
}

</style>