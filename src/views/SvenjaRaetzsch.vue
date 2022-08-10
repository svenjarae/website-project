<template>
  <div class="home">
    <div id="parent">
      <div class="pageOne">
        <div style="padding: 60px">
          <TextAnime></TextAnime>
        </div>
        <div>
          <RollingText></RollingText>
        </div>
        <div class="mediumFont skillsContainer">
          <span>Development</span>
          <span>Design</span>
          <span>Digital</span>
          <span>Content</span>
          <span>Ideas</span>
        </div>
        <div class="containerSmall"></div>
        <div class="containerBig"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TextAnime from "@/components/animations/TextAnime";
import RollingText from "@/components/animations/RollingText";

export default {
  name: 'SvenjaRaetzsch',
  components: {
    TextAnime,
    RollingText,

  },
}
</script>

<style>
#parent { position: absolute; top: 0; left: 0; height: 100%; width: 100%; }
#parent > div { height: 100%; width: 100%; }
#parent > div:nth-child(1) { background: var(--bright); }
#parent > div:nth-child(2) { background: whitesmoke; }

.skillsContainer{
  display: flex;
  flex-direction: column;
  margin-top: 60px;
}

.containerSmall{
  height: 200px;
  width: 200px;
  background-color: whitesmoke;
  position: absolute;
  right: 80px;
  top: 250px;
}

.containerBig{
  height: 400px;
  width: 400px;
  background-color: whitesmoke;
  position: absolute;
  bottom: 20px;
  left: 20px;
}




</style>

