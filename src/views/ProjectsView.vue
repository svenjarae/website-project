<template>
  <div class="leftCorner">
    <router-link to="/projects">
      <span class="projectPar">/ PROJECTS</span>
    </router-link>
  </div>
  <div class="about" id="parentAbout">
    <div class="grid-container">
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
      <div>
        <router-link to="/projects/project">
          <NewsCard title="hello" subtitle="subhello" icon-src="require('../assets/logo')"></NewsCard>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import NewsCard from "@/components/news/NewsCard";

export default {
  name: 'ProjectsView',
  components: {
    NewsCard
  },
  methods:{

  }
}
</script>
<style scoped>

#parentAbout {
  position: absolute;
  top: 20px;
  left: 50px;
  right: 20px;
  bottom: 20px;
}

#parentAbout > div {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.leftCorner{
  position: fixed;
  left: -20px;
  bottom: 220px;
  z-index: 10000;
  transform: rotate(-90deg);
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
  background-color: var(--bright);
  overflow: auto;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  border: 3px solid whitesmoke;
  text-align: center;
  font-size: 30px;
  background-color: whitesmoke;
  border-radius: 2px;
}

.grid-container > div:hover {
  border: 3px solid var(--green);
}

.grid-container > div:hover .show{
  display: block;
}

</style>
