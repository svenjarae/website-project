<template>
  <div class="outerContainer">
    <div class="factsContainer">
      <div>
        <ReusableTab :tabs="myTabs" />
      </div>
    </div>

    
  </div>
    <div class="container">
      <RollingText></RollingText><span style="margin-right: 10px"></span>
    </div>

</template>

<script>

import RollingText from "@/components/animations/RollingText";
import ReusableTab from "@/components/tabs/ReusableTab";
export default {
  name: 'SkillsView',
  components: {
    RollingText,
    ReusableTab
  },
  data(){
    return{
      myTabs: [
        {
          title: 'Dive Instructor',
          list: ['Item 1', 'Item 2', 'Item 3'],
          gallery: [
            ['image1.jpg', 'image2.jpg'],
            ['image3.jpg', 'image4.jpg'],
          ],
        },
        {
          title: 'Tab 2',
          list: ['Item A', 'Item B', 'Item C'],
          gallery: [
            ['image5.jpg', 'image6.jpg'],
            ['image7.jpg', 'image8.jpg'],
          ],
        },
        {
          title: 'Tab 3',
          list: ['Apple', 'Banana', 'Orange'],
          gallery: [
            ['image9.jpg', 'image10.jpg'],
            ['image11.jpg', 'image12.jpg'],
          ],
        },
      ],
    };

  },
  methods: {
  }

}
</script>

<style scoped>

.outerContainer{
  height: 100vh;
  background-color: rgb(32, 32, 35);
}

.container{
  padding: 40px;
  background-color: blue;
}

.factsContainer {
  text-align: left;
  text-transform: uppercase;
  z-index: 100;
  -webkit-padding-start: 0;
  padding-inline-start: 0;
  padding: 80px;
  letter-spacing: 0.1em;
  color: white;
}

.factsContainer span{
  color: darkgrey;
}

.factsContainer h2{
  color: white;
  font-weight: 500;
  display: inherit;
  display: inline-block;
}

</style>

