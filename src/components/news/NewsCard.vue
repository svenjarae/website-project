<template>
  <div class="news-card-container">
    <div>
      <img style="width: 100%;
                  height: 150px;
                  border-top-right-radius: 5px;
                  border-top-left-radius: 5px;
                  filter: blur(2px);
                  opacity: 0.9;
                  object-fit: cover;
                  -webkit-filter: blur(2px);" :src=iconSrc alt="">
      <img style="left: 50%;
                  width: 100%;
                  transform: translate(-50%);
                  position: absolute;
                  top: 0;
                  height: 150px;
                  object-fit: contain;" :src=iconSrc alt="">
    </div>
    <!--<div class="contentContainer">
      <div class="titleContainer mediumFont">
        <h3>{{title}}</h3>
      </div>
      <div class="subTitleContainer">
        <p>{{subtitle}}</p>
      </div>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></svg>
    </div>-->
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
    subtitle: String,
    date: String,
    button: String,
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
    transition: transform 330ms ease-in-out;
    cursor: pointer;
  }

  .news-card-container svg{
    fill: var(--green);
  }

  .news-card-container:hover{
    transform: scale(90%);
  }

  .news-card-container:hover svg{
    fill: red;
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

</style>
