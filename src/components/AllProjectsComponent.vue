<template>
  <!-- Filter-Buttons -->
  <div class="filterContainer">
      <button @click="setSelected('all')" :class="{ 'active': selected === 'all' }">Alle</button>
      <button @click="setSelected('film')" :class="{ 'active': selected === 'film' }">Film</button>
      <button @click="setSelected('animation')" :class="{ 'active': selected === 'animation' }">Animation</button>
    </div>
  <div class="grid-container">
    <div v-for="project in filteredProjects" :key="project.title">
      <router-link :to="'/projects/' + project.title.toLowerCase()">
        <NewsCard :title="project.title" :icon-src="project.iconSrc"></NewsCard>
      </router-link>
    </div>
  </div>
</template>

<script>
import NewsCard from "@/components/news/NewsCard";

import oct1 from "@/assets/images/projects/buceo-nocturno/pulpo.jpg";
import ivonOne from "@/assets/images/projects/taliarte/P1033667.00_00_26_02.Still002.jpg";
import bubble2 from "/././././././src/assets/images/projects/sub/bubble2.jpg";
import titleImgSeal from "/././././././src/assets/images/projects/galapagos/titleImg.png";
import titleImgOni from "/././././././src/assets/images/projects/oni-studio/Sequence2-Stil1.jpg";
import titleImgBird from "/././././././src/assets/images/projects/animations/bird/bird-titleimg.png";
import titleImgTrip from "/././././././src/assets/images/projects/animations/trip/titleimg-trip.png";
import squid1 from "/././././././src/assets/images/projects/gc-sealife/squid1.png";
import pixelGridTitleImg from "/././././././src/assets/images/projects/animations/pixel-grid/pixelGridTitleImg.png";
// ... (weitere Bilder importieren)

export default {
  name: 'AllProjectsComponent',
  components: {
    NewsCard
  },
  data() {
    return {
      projects: [
      { title: 'nocturno', iconSrc: oct1, category: 'film' },
      { title: 'taliarte', iconSrc: ivonOne, category: 'film' },
      { title: 'gcsealife', iconSrc: squid1, category: 'film' },
      { title: 'triangle', iconSrc: titleImgTrip, category: 'animation' },
      { title: 'bird', iconSrc: titleImgBird, category: 'animation' },
      { title: 'onistudio', iconSrc: titleImgOni, category: 'film' },
      { title: 'pixelgrid', iconSrc: pixelGridTitleImg, category: 'animation' },
      { title: 'sub', iconSrc: bubble2, category: 'film' },
      { title: 'galapagos', iconSrc: titleImgSeal, category: 'film' },
      // Add more projects as needed
    ],
      selected: 'all',
    };
  },
  computed: {
    filteredProjects() {
      if (this.selected === 'all') {
        return this.projects;
      } else {
        return this.projects.filter(project => project.category === this.selected);
      }
    },
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
  grid-gap: clamp(1rem, 2vw, 1rem);
}

.grid-container div {
  text-align: center;
  font-size: 30px;
  height: 300px;
}

.filterContainer{
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

button {
  letter-spacing: 0.1em;
    font-weight: 500;
    text-transform: uppercase;
    color: #313133;
    background: white;
    border: none;
    border-radius: 1000px;
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    outline: none;
    position: relative;
    padding: 10px;
}

.active {
  background-color: blue;
  color: white;
}

@media only screen and (max-width: 720px) {
  .grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); /* Adjusted for mobile */
  grid-gap: clamp(1rem, 2vw, 1rem);
}

.filterContainer {
  display: flex;
  flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */
  gap: 10px;
    margin-left: 20px;
    position: fixed;
    z-index: 1;
    bottom: 40px;
}
}
</style>