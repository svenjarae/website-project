<template>
  <nav style="color: var(--dark);">
    <div class="layoutWrapper">
      <div class="flexColumn smallFont">
        <a href="mailto:svenjaraetzsch@gmail.com">SVENJARAETZSCH@GMAIL.COM</a>
        <div class="padding">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--dark)"><path d="M17 16.99c-1.35 0-2.2.42-2.95.8-.65.33-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm0-4.45c-1.35 0-2.2.43-2.95.8-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V5.04c-.9 0-1.4-.25-2.05-.58zM17 8.09c-1.35 0-2.2.43-2.95.8-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V9.49c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8z"/></svg>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--dark)"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--dark)"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
          </span>
        </div>
      </div>
      <div class="flexColumn smallFont">
        <span>THE_WHISPERING_SEA</span>
        <router-link to="/projects" style="position: relative;" class="padding">
          <span>Last Project </span>
        </router-link>
      </div>
    </div>
  </nav>
  <router-view>
  </router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;500;600;700&display=swap');
@font-face {
  font-family: myFirstFont;
  src: url("/src/assets/fonts/FHGiselle-Light.ttf");
}

@font-face {
  font-family: BlueScreen;
  src: url("/src/assets/fonts/BlueScreen.ttf");
}

:root {
  --bright: #fff;
  --dark:  #000;
  --1stColor: rgb(112, 158, 187);
  --2ndColor: rgb(255, 100, 18);
  --5thColor: rgb(255, 168, 0);
  --6thColor: rgb(129, 74, 106);

  --primaryFont: 'Montserrat', sans-serif;
  --secondaryFont: 'myFirstFont', serif;

  --bigFont: 150px;
  --mediumFont: 100px;
  --normalFont: 1.2rem;
  --smallFont: 14px;
}

html {
  scroll-behavior: smooth;
}

#app {
  font-family: var(--primaryFont);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark);
}

body {
  cursor: url('/src/assets/logo.png'), default;
  margin: 0;
  padding-bottom: 80px;
}

/* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #fff;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

h1, h2, h3, h4, h5, h6, p{
  margin: 0;
  font-weight: normal;
}

a{
  text-decoration: underline;
  color: inherit;
}

a.router-link-exact-active{
}

.layoutWrapper{
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: auto;
  padding: 10px;
}

.flexColumn{
  display: flex;
  flex-direction: column;
}

.flexRow{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.centerWrapper{
  margin: auto;
  text-align: center;
  max-width: 600px;
}

.padding{
  padding: 10px;
}

.marginTopBottom{
  margin-top: 40px;
  margin-bottom: 40px;
}

.bold{
  font-weight: bold;
}

.primaryFont{
  font-family: var(--primaryFont);
}

.secondaryFont{
  font-family: var(--secondaryFont);
}

.bigFont{
  font-size: var(--bigFont);
}
.mediumFont{
  font-size: var(--mediumFont);
  font-family: BlueScreen;
  color: var(--1stColor);
}
.normalFont{
  font-size: var(--normalFont);
  color: var(--2ndColor);
  font-weight: 500;
}
.smallFont{
  font-size: var(--smallFont);
  color: var(--dark);
  text-transform: uppercase;
  font-weight: 500;
}
</style>
