<template>
  <div class="news-card-container">
    <div>
      <h1 class="cardTitle">{{title}}</h1>
      <img :src=iconSrc alt="">
    </div>
  </div>
</template>

<script>

export default {
  name:'NewsCard',
  components: {

  },
  props: {
    iconSrc: String,
    title: String,
  },
  data(){
    return{

    }
  },
  computed:{

  },
  methods:{

  },
}
</script>

<style scoped>

  .news-card-container{
    height: 100%;
    position: relative;
    cursor: pointer;
    background-color: black;
  }
  .cardTitle {
    font-size: 20px;
    font-family: myFirstFont;
    font-weight: 500;
    opacity: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: white;
    transition: all 330ms ease-in-out;
    letter-spacing: 10px;
    text-transform: uppercase;
  }

  .news-card-container:hover .cardTitle {
    font-size: 30px;
    opacity: 1;
  }

  .news-card-container:hover img{
    opacity: 0.8;
  }

  img{
    left: 50%;
    width: 100%;
    transform: translate(-50%);
    position: absolute;
    top: 0;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease-in-out;
    border-radius: 1px;
    /*filter: grayscale(1);*/
    opacity: 0.2;
  }

  p{
    font-weight: normal;
  }

</style>
