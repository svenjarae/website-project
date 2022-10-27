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
  }

  .news-card-container img{
    border-radius: 20px;
  }

  .cardTitle {
    font-size: 40px;
    font-family: myFirstFont;
    opacity: 1;
  }

  .news-card-container:hover .cardTitle {
    font-size: 24px;
    opacity: 1;
  }

  .news-card-container:hover img{
    filter: grayscale(0%);
  }

  .news-card-container:hover svg{
    fill: orangered;
  }

  img{
    left: 50%;
    width: 100%;
    transform: translate(-50%);
    position: absolute;
    top: 0;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.5s ease-in-out;
    border-radius: 1px;
  }

  p{
    font-weight: normal;
  }

  .cardTitle{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: orangered;
    font-size: 30px;
    transition: font-size 330ms ease-in-out;
  }

</style>
