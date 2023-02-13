<template>
  <div>
    <ul class="nav-list">
      <li v-for="tab in tabs" :key="tab">
        <a :class="{ active: tab === selected}" @click="setTab(tab)">
          {{ tab }}
        </a>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    }
  },
  methods: {
    setTab(tab){
      this.$emit('selected', tab);
    }
  }
}
</script>

<style scoped>

.nav-list {
  display: flex;
  text-decoration: none;
  list-style: none;
}
.nav-list li {
  padding-right: 24px;
}

a:hover{
  cursor: pointer;
  background-color: orangered!important;
}

a{
  text-decoration: none;
  color: black;
  border-radius: 1000px;
  background-color: transparent;
  border: 2px solid orangered;
  font-size: 14px;
  font-family: monospace;
  padding: 0 8px;
  height: 24px;
}

.active {
  background-color: orangered!important;
}
</style>