<template>
  <ScrollTopComponent>
    <a class="btn">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#007AC2"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>
    </a>
  </ScrollTopComponent>
</template>

<script>
import ScrollTopComponent from "./ScrollTopComponent";

export default {
  components: {
    ScrollTopComponent
  }
}
</script>

<style scoped>
.btn {
  border-radius: 100%;
  text-align: center;
  border: 2px solid orangered;
  flex-direction: column;
  align-items: center;
  color: black;
  background-color: var(--bright);
  vertical-align: middle;
  display:table-cell;
}

.btn:hover{
  box-shadow: 0 0 5px rgb(169 191 203);
}

.btn svg{
  display: table;
}
</style>
