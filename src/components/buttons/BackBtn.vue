<template>
  <div class="buttonContainer">
    <!-- Stylischer Zurück-Button -->
    <button @click="goBack" class="back-button">
      <span class="arrow">&larr;</span> Zurück
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
};
</script>

<style scoped>

.buttonContainer{
  position: fixed;
  bottom: 40px;
  left: 40px;
  z-index: 1000;
}
.back-button {
  font-size: 16px;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: transparent;
  text-transform: uppercase;
}

.back-button:hover {
  background-color: white;
  color: black;
}

.arrow {
  margin-right: 5px;
}
</style>