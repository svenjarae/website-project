<template>
  <div class="grid-container">
    <div>
      <router-link to="/projects/taliarte">
        <NewsCard title="TALIARTE" :icon-src=ivonOne></NewsCard>
      </router-link>
    </div>
    <div>
      <router-link to="/projects/gcsealife">
        <NewsCard title="GC SEALIFE" :icon-src=squid1></NewsCard>
      </router-link>
    </div>
    <div>
      <router-link to="/projects/onistudio">
        <NewsCard title="ONI STUDIO" :icon-src=titleImgOni></NewsCard>
      </router-link>
    </div>
    <div>
      <router-link to="/projects/galapagos">
        <NewsCard title="GALAPAGOS" :icon-src=titleImgSeal></NewsCard>
      </router-link>
    </div>
    <div>
      <router-link to="/projects/paradise">
        <NewsCard title="ސުވަރުގެ" :icon-src=titleImgSeal></NewsCard>
      </router-link>
    </div>
  </div>
</template>
<script>
import NewsCard from "@/components/news/NewsCard";

import ivonOne from "/././././././src/assets/images/projects/taliarte/P1033667.00_00_26_02.Still002.jpg";
import titleImgSeal from "/././././././src/assets/images/projects/galapagos/titleImg.png";
import titleImgOni from "/././././././src/assets/images/projects/oni-studio/Sequence2-Stil1.jpg";

import squid1 from "/././././././src/assets/images/projects/gc-sealife/squid1.png";

export default {
  name: 'AllProjectsComponent',
  components: {
    NewsCard
  },
  data(){
    return{
      ivonOne: ivonOne,
      titleImgSeal: titleImgSeal,
      titleImgOni: titleImgOni,
      squid1: squid1,
    }
  },
  methods:{

  }
}
</script>
<style scoped>

.grid-container {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
  background-color: var(--bright);
  margin: auto auto 60px auto;;
  max-width: 1000px;

}

.grid-container div {
  text-align: center;
  font-size: 30px;
  border-radius: 20px;
  height: 300px;
}

</style>
