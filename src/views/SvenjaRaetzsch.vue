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
            <h1>ALL PROJECTS</h1>
          </router-link>
        </div>

        <div class="mediumFont skillsContainer">
          <span>Development</span>
          <span>Design</span>
          <span>Digital</span>
          <span>Content</span>
          <span>Ideas</span>
        </div>

        <div>
          <RollingText></RollingText>
        </div>

        <div class="containerBig">
          <video autoplay loop>
            <source :src="titleVideo" type="video/mp4">
            Your browser does not support HTML video.
          </video>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextAnime from "@/components/animations/TextAnime";
import RollingText from "@/components/animations/RollingText";
import DownBtn from "@/components/buttons/DownBtn";

import titleVideo from "/././././././src/assets/videos/titlevid.mp4";

export default {
  name: 'SvenjaRaetzsch',
  components: {
    TextAnime,
    RollingText,
    DownBtn,
  },
  data(){
    return{
      titleVideo: titleVideo,
    }
  }
}
</script>

<style>
#parent { position: absolute; top: 0; left: 0; height: 100%; width: 100%; }
#parent > div:nth-child(1) { background: var(--bright); }

.skillsContainer{
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: flex-end;
  padding: 60px;
}

.containerBig{
  height: 200px;
  width: 920px;
  background-color: whitesmoke;
  bottom: 20px;
  left: 60px;
  margin: 60px auto;
}

.liquidContainer {
  position: absolute;
  left: 60px;
  top: 195px;
}

video{
  width: 100%;
  height: 100%;
  object-fit: cover;
}


</style>

