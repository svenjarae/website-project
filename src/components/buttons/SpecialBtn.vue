<template>

  <div class="text-container">
    <router-link to="/projects">
      <h2>EXPLORE</h2>
    </router-link>
  </div>

</template>

<script>
export default {
  name: 'SpecialBtn',
  props: {
    val: String
  }
}
</script>

<style scoped>

.text-container h2{
  color: rgba(255,255,255,.2);
  background-image: url('https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55a1e60cd6799d5761c7ec40c4954569&auto=format&fit=crop&w=500&q=60');
  /*   background-position: center; */
  background-size: 270px;
  background-repeat: repeat-x;
  -webkit-background-clip: text;
  animation: animate 15s linear infinite;
  font-size: 16px;
  font-weight: bold;
}

@keyframes animate {
  0% {
    background-position: left 0px top 0px;
  }
  40% {
    background-position: left 800px top 0px;
  }
}

.text-container {
  margin-top: 40px;
  text-align: center;
}
</style>
