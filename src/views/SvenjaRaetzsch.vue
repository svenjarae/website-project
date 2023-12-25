<template>
  <div class="outerContainer">
    <div class="innerContainer" style="background-color: #202023;">
      <ul class="factsContainer">
        <li>
          <h2>Make a happy face</h2>
        </li>
        <li>Soaking up the sun and creative vibes in the coastal haven of <h2>Gran Canaria</h2></li>
        <li>Let's create something extraordinary together!</li>
      </ul>
      <router-link to="/projects" class="buttonContainer">
        <TextAnime></TextAnime>
      </router-link>
    </div>
    <div>
        <GridImgs></GridImgs>
    </div>
  </div>
</template>

<script>
import TextAnime from "@/components/animations/TextAnime";
import GridImgs from "@/components/grid/GridImgs";

export default {
  name: 'SvenjaRaetzsch',
  components: {
    TextAnime,
    GridImgs,
  },
  data(){
    return{
    }
  },
  methods: {
  }

}
</script>

<style scoped>

  .outerContainer{
    position: relative;
  }
  .factsContainer {
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: 300px;
    text-align: left;
    color: darkgray;
    text-transform: uppercase;
    z-index: 100;
    padding-inline-start: 0;
    padding: 80px;
    letter-spacing: 0.1em;
  }

  .factsContainer h2{
    color: white;
    font-weight: 500;
  }

  .factsContainer li{
    list-style: decimal;
    margin: 8px 0;
  }
  .innerContainer{
    height: calc(100vh + 20px);
    width: 100%;
    position: relative;
  }

  .buttonContainer{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  img{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.1;
  }

  @media screen and (max-width: 1100px) {
    .factsContainer{
      position: inherit;
      max-width: inherit;
      padding: 100px 50px;
    }
    .buttonContainer{
      position: inherit;
      top: inherit;
      left: inherit;
      transform: inherit;
    }
  }

</style>

