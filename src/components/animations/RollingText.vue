<template>
  <div class="skills">
    <marquee-text :repeat="10" :duration="8" :reverse="false">
      <span class="small">{{textBig}} - </span>
    </marquee-text>
    <span style="margin: 0 10px">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V15.2H7V37Zm8-3.6-2.1-2.1 5.15-5.2-5.2-5.2L15 18.8l7.3 7.3Zm9.5.2v-3h11v3Z"/></svg>
    </span>
    <marquee-text :repeat="10" :duration="8" :reverse="true">
      <span class="small">{{textSmall}} - </span>
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