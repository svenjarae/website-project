<template>
  <div v-if="!isStartPage" class="buttonContainer">
    <!-- Stylischer Zurück-Button -->
    <button @click="goBack" class="back-button">
      <span class="arrow">&larr;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BackBtn',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    // ... (Ihre anderen Methoden) ...
  },
  computed: {
    isStartPage() {
      // Adjust the condition based on your actual start page route
      return this.$route.path === '/';
    },
  },
};
</script>

<style scoped>

.buttonContainer{
  position: fixed;
  bottom: 16px;
  left: 16px;
  z-index: 1000;
}
.back-button {
  font-size: 16px;
  padding: 20px;
  color: var(--darkgrey);
  border: none;
  border-radius: 1000px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: transparent;
  text-transform: uppercase;
  background-color: darkgrey;
}

.back-button:hover {
  background-color: white;
  color: black;
}

</style>