<!-- Breadcrumbs.vue -->
<template>
    <div class="breadcrumbs">
      <router-link v-for="(crumb, index) in breadcrumbs" :to="crumb.to" :key="index">
        {{ crumb.label }}
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      breadcrumbs() {
        // Extract breadcrumbs from the route meta information
        const routeMeta = this.$route.meta;
        return routeMeta ? routeMeta.breadcrumbs || [] : [];
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your breadcrumb styling here */
  .breadcrumbs {
    display: flex;
    gap: 7px;
    color: darkgray;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 0.1em;
    position: fixed;
    z-index: 1;
    right: 16px;
    top: 40px;

    writing-mode: vertical-rl;
    position: fixed;
    top: 50%;
    transform: translate(0, -50%);
    right: 0;
    z-index: 100;
    margin: 16px;
    display: flex;
    font-size: 16px;
    letter-spacing: 0.1em;
  }
  
  .router-link-exact-active {
    color: white;
  }
  </style>
  