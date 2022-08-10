<template>
  <div class="home">
    <div id="parent">
      <div class="pageOne">
        <div class="liquidContainer">
          <TextAnime></TextAnime>
        </div>

        <div class="rightLeftCorner">
          <router-link to="/projects">
            <div class="arrow-container">
              <DownBtn></DownBtn>
            </div>
            <span class="projectPar">PROJECTS</span>
          </router-link>
        </div>

        <div class="mediumFont skillsContainer">
          <span>Development</span>
          <span>Design</span>
          <span>Digital</span>
          <span>Content</span>
          <span>Ideas</span>
        </div>

        <div style="margin-top: 60px">
          <RollingText></RollingText>
        </div>

        <div class="containerBig"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TextAnime from "@/components/animations/TextAnime";
import RollingText from "@/components/animations/RollingText";
import DownBtn from "@/components/buttons/DownBtn";

export default {
  name: 'SvenjaRaetzsch',
  components: {
    TextAnime,
    RollingText,
    DownBtn,
  },
}
</script>

<style>
#parent { position: absolute; top: 0; left: 0; height: 100%; width: 100%; }
#parent > div:nth-child(1) { background: var(--bright); }
#parent > div:nth-child(2) { background: whitesmoke; }

.skillsContainer{
  display: flex;
  flex-direction: column;
  margin-top: 60px;
}

.containerBig{
  height: 200px;
  width: 920px;
  background-color: whitesmoke;
  bottom: 20px;
  left: 60px;
  margin: 60px auto;
}

.liquidContainer{
  position: absolute;
  right: 220px;
  top: 100px;
}




</style>

