<template>
  <div class="container">
    <div id="circle1" class="circle"></div>
    <div id="circle2" class="circle"></div>
    <div id="circle3" class="circle"></div>
    <div id="circle4" class="circle"></div>

    <div id="circle5" class="circle"></div>
    <div id="circle6" class="circle"></div>
    <div id="circle7" class="circle"></div>
    <div id="circle8" class="circle"></div>

    <div id="circle9" class="circle"></div>
    <div id="circle10" class="circle"></div>
    <div id="circle11" class="circle"></div>
    <div id="circle12" class="circle"></div>
  </div>
</template>

<script>

export default {
  name: 'BorderCircleAnimation',
  data(){
    return{
    }
  },
  props: {

  }

}
</script>

<style scoped>@-webkit-keyframes loadingAnim1{
                0%{
                  border-color: #fff;
                }
                20%{
                  border-color: #fff;
                  border-top-color: #a0f;

                }
                40%{
                  border-color: #fff;
                  border-left-color: #a0f;

                }
                /*
                50%{
                  border-color: #a0f;
                }
                */
                60%{
                  border-color: #fff;
                  border-bottom-color: #a0f;

                }
                80%{
                  border-color: #fff;
                  border-right-color: #a0f;

                }
                100%{
                  border-color: #fff;
                }
              }
@keyframes loadingAnim1{
  0%{
    border-color: #fff;
  }
  20%{
    border-color: #fff;
    border-top-color: var(--1stColor);

  }
  40%{
    border-color: #fff;
    border-left-color: var(--1stColor);

  }

  50%{
    border-color: var(--1stColor);
  }

  60%{
    border-color: #fff;
    border-bottom-color: var(--1stColor);

  }
  80%{
    border-color: #fff;
    border-right-color: var(--1stColor);

  }
  100%{
    border-color: #fff;
  }
}


#circle1{
  width: 5em;
  height: 5em;
  position: absolute;
  top: 4em;
  left: 0em;
  /*background-color: #aabbcc;*/
  -webkit-animation: 1.5s 0s loadingAnim1 linear infinite;
  animation: 1.5s 0s loadingAnim1 linear infinite;
  border: 1em solid #000;
  border-radius: 50%;
}


#circle2{
  width: 5em;
  height: 5em;
  position: absolute;
  top: 4em;
  left: 4em;
  /*background-color: #aabbcc;*/
  -webkit-animation: 2s 0s loadingAnim1 linear infinite alternate;
  animation: 2s 0s loadingAnim1 linear infinite alternate;
  border: 1em solid #000;
  border-radius: 50%;
}


#circle3{
  width: 5em;
  height: 15em;
  position: absolute;
  top: 8em;
  left: 20em;
  /*background-color: #aabbcc;*/
  -webkit-animation: 1s 0s loadingAnim1 linear infinite;
  animation: 1.5s 0s loadingAnim1 linear infinite;
  border: 1em solid #000;
  border-radius: 50%;
}


#circle4{
  width: 15em;
  height: 5em;
  position: absolute;
  top: 12em;
  left: 16em;
  /*background-color: #aabbcc;*/
  -webkit-animation: 2s 0s loadingAnim1 linear infinite alternate;
  animation: 2s 0s loadingAnim1 linear infinite alternate;
  border: 1em solid #000;
  border-radius: 50%;
}

#circle5{
  width: 5em;
  height: 15em;
  position: absolute;
  top: 8em;
  left: 22em;
  /*background-color: #aabbcc;*/
  -webkit-animation: 1.5s 0s loadingAnim1 linear infinite;
  animation: 1s 0s loadingAnim1 linear infinite;
  border: 1em solid #000;
  border-radius: 50%;
}


#circle6{
  width: 15em;
  height: 5em;
  position: absolute;
  top: 14em;
  left: 16em;
  /*background-color: #aabbcc;*/
  -webkit-animation: 2s 0s loadingAnim1 linear infinite alternate;
  animation: 2s 0s loadingAnim1 linear infinite alternate;
  border: 1em solid #000;
  border-radius: 50%;
}


/*---------------------------------------*/



#circle9{
  width: 20em;
  height: 20em;
  position: absolute;
  top: 6em;
  left: 14em;
  /*background-color: #aabbcc;*/
  -webkit-animation: 1.5s 0s loadingAnim1 linear infinite;
  animation: 1.5s 0s loadingAnim1 linear infinite;
  border: 1em solid #000;
  border-radius: 50%;
}


#circle10{
  width: 22em;
  height: 22em;
  position: absolute;
  top: 6em;
  left: 14em;
  /*background-color: #aabbcc;*/
  -webkit-animation: 1.5s 0s loadingAnim1 linear infinite;
  animation: 1.5s 0s loadingAnim1 linear infinite;
  border: 1em solid #000;
  border-radius: 50%;
}


#circle11{
  width: 24em;
  height: 24em;
  position: absolute;
  top: 6em;
  left: 14em;
  /*background-color: #aabbcc;*/
  -webkit-animation: 1.5s 0s loadingAnim1 linear infinite;
  animation: 1.5s 0s loadingAnim1 linear infinite;
  border: 1em solid #000;
  border-radius: 50%;
}
</style>
