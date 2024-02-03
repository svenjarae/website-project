<template>
    <div>
      <div class="tab-buttons">
        <button v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)" :class="{ 'active': activeTab === index }">
          {{ tab.title }}
        </button>
      </div>
  
      <div class="tab-content">
        <div v-for="(tab, index) in tabs" :key="index" :class="{ 'show': activeTab === index }">
          <h2>{{ tab.title }}</h2>
          <p>{{ tab.text }}</p>
          <ul>
            <li v-for="(item, i) in tab.list" :key="i">{{ item }}</li>
          </ul>
          <div class="gallery">
            <div class="row" v-for="(row, rowIndex) in tab.gallery" :key="rowIndex">
              <img v-for="(image, imageIndex) in row" :src="image" :alt="`Image ${imageIndex + 1}`" :key="imageIndex">
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 0,
      };
    },
    props: {
      tabs: {
        type: Array,
        required: true,
      },
    },
    methods: {
      selectTab(index) {
        this.activeTab = index;
      },
    },
  };
  </script>
  <style scoped>
  .tab-buttons {
    display: flex;
    margin-bottom: 10px;
    gap: 10px;
  }
  
  .tab-buttons button {
    margin-bottom: 10px;
    padding: 8px 12px;
    cursor: pointer;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    transition: background-color 0.3s ease;
  }
  
  .tab-buttons button.active {
    background-color: blue;
  }
  
  .tab-content div {
    display: none;
  }
  
  .tab-content div.show {
    display: block;
  }
  
  .gallery {
    display: flex;
    flex-wrap: wrap;
  }
  
  .row {
    width: 50%;
    box-sizing: border-box;
    padding: 5px;
  }
  
  img {
    width: 100%;
    height: auto;
    margin-bottom: 5px;
  }
  </style>