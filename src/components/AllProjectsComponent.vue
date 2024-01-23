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

import seal01 from "@/assets/images/projects/liberte/seal-still001.jpg";
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
      { title: 'liberte', iconSrc: seal01, category: 'film' },
      { title: 'taliarte', iconSrc: ivonOne, category: 'film' },
      { title: 'canarias', iconSrc: squid1, category: 'film' },
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
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: 20px;
  position: fixed;
  z-index: 3;
  bottom: 0;
  right: 20px;
  position: sticky;
  top: calc(100vh - 50px);
  flex-direction: row;
  margin-right: -60px;
  justify-content: flex-end;
  max-width: none;
}

button {
  margin-left: 10px;
    padding: 8px 12px;
    cursor: pointer;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

.active {
  background-color: blue;
}

@media only screen and (max-width: 720px) {
  .grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); /* Adjusted for mobile */
  grid-gap: clamp(1rem, 2vw, 1rem);
}
.filterContainer{
  margin-right: 20px;
}
}
</style>