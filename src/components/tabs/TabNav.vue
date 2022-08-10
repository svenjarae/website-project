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
  overflow: auto;
}
.nav-list li {
  padding-right: 24px;
}

a:hover{
  cursor: pointer;
  /*color: var(--primary-color);*/
}

a{
  color: var(--darkBlue);
  text-decoration: underline;
}

.active {
  color: black;
  text-decoration: none;
}
</style>