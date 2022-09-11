<template>
  <div class="news-card-container">
    <div>
      <h1 class="cardTitle">{{title}}</h1>
      <img style="left: 50%;
                  width: 100%;
                  transform: translate(-50%);
                  position: absolute;
                  top: 0;
                  height: 100%;
                  object-fit: cover;" :src=iconSrc alt="">
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
    min-width: 300px;
    min-height: 300px;
  }

  .cardTitle {
    opacity: 0;
  }

  .news-card-container:hover .cardTitle {
    font-size: 24px;
    opacity: 1;
  }

  .news-card-container:hover svg{
    fill: orangered;
  }

  .contentContainer{
    padding: 10px;
  }

  .titleContainer, .subTitleContainer{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p{
    font-weight: normal;
    font-size: 12px;
  }

  .cardTitle{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: orangered;
    font-size: 16px;
    transition: font-size 330ms ease-in-out;
  }

</style>
