<template>
  <div class="skills">
    <marquee-text :repeat="10" :duration="8" :reverse="false">
      <span class="small">{{textBig}}</span>
    </marquee-text>
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M4 40V8h40v32Zm3-3h34V11H7Zm4-4h26V15H11Z"/></svg>
    </span>
    <marquee-text :repeat="10" :duration="8" :reverse="true">
      <span class="small">{{textSmall}}</span>
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
}

.skills > div{
  width: 50%;
}
.skills .big{
  color: black;
  font-size: 38px;
  font-family: var(--secondaryFont);
}

.skills .small{
  color: black;
  font-size: 35px;
  letter-spacing: 4px;
  font-family: var(--primaryFont);
}

</style>