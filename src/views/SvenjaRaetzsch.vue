<template>
  <div class="home">
    <div id="parent">
      <div class="pageOne">
          <span class="sharkContainer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.44 103.47" id="svg2" height="103.47mm" width="234.44mm" version="1.0"> <metadata id="metadata11"> </metadata> <defs id="defs4"> <pattern y="0" x="0" height="6" width="6" patternUnits="userSpaceOnUse" id="EMFhbasepattern"/> </defs> <path id="path7" d="m 113.68418,9.3070962 c -5.1085,1.3960688 -11.13677,15.0182858 -15.05006,24.8118768 -0.941211,1.374987 -2.146864,2.876691 -4.209344,3.722794 -4.124678,1.755704 -7.953304,3.130691 -20.687171,6.959317 C 59.163649,48.301769 32.638429,61.543353 20.264086,69.475491 12.924163,73.970444 0.49707746,81.045756 0.02114632,84.09178 0.2961296,85.308158 6.8428385,88.766509 12.871303,89.115618 l 11.105049,-0.592385 c 0.222109,0.888436 -0.666298,0.983545 -1.163376,1.48082 0.327857,0.169051 0.95185,0.296051 0.846102,0.496994 -0.09519,0.200942 -1.025906,0.433493 -1.448957,0.719102 5.690023,2.157589 12.564731,3.067191 20.898753,3.384409 15.462391,-1.015154 32.320935,-4.082345 45.869013,-7.276536 14.489573,6.684434 20.443893,14.098128 47.159613,15.748278 0.52889,-1.00499 -3.9449,-3.765404 -7.93214,-6.652538 -3.99796,-2.897858 -13.59041,-8.820573 -15.88544,-10.946553 -0.0847,-0.549769 1.01516,-1.089378 1.52287,-1.628705 l -1.48082,-0.496993 c 7.18143,-3.194191 14.74357,-5.341055 21.92472,-8.545689 7.22348,-3.553742 19.48152,-10.089726 21.69188,-10.671386 l 12.91364,1.74498 c 0.0316,-0.814212 -1.64987,-2.485249 -1.27987,-3.892127 l 4.52684,-2.696916 -1.30104,-0.888435 c 4.52684,-2.189198 10.50233,-4.441896 15.94894,-6.303434 l 3.80746,0.03189 c -0.0844,-1.004712 -0.64516,-1.279878 -0.13744,-2.284589 0.96237,-0.602827 13.28391,-5.499665 16.42505,-5.372665 2.48525,1.321929 8.6724,12.226149 14.39418,17.440205 1.77687,1.882704 3.69118,3.373966 6.13438,3.670017 0.47583,-1.036602 -1.02588,-3.003691 -1.54432,-4.505395 -0.12672,-5.372947 -1.17376,-10.089727 -1.96709,-15.145173 -0.74027,-2.348089 -1.61826,-5.172005 -1.90387,-7.593754 0.28561,-3.680742 6.39882,-18.07495 9.59273,-27.107049 l -0.24327,-1.152821 1.18448,-0.3384413 c 0.9415,-3.1094116 1.76643,-8.3235123 1.58666,-9.7195782 -0.80377,0.11633883 -2.84509,3.3526731 -6.3881,7.6677944 -3.53258,4.3256761 -10.28023,12.0569281 -14.82796,18.2546131 -2.49597,3.765127 -6.31416,10.174393 -8.28125,11.094438 -2.06219,0.83566 -12.06754,0.740269 -18.10653,1.110544 l -2.21036,-1.850813 c -0.35955,-0.930769 -0.51816,-2.189198 -0.87799,-2.781582 -1.56521,0.719102 -2.70736,1.216377 -4.09279,3.543017 -8.92641,-0.222108 -47.59311,-0.697935 -50.67103,-1.311486 -3.6909,-2.157589 -5.5736,-3.839069 -7.18114,-5.61594 -1.5971,-1.776871 -1.71337,-4.029541 -2.41131,-5.044864 l -1.74526,-1.025906 0.9731,-0.296135 -3.46907,-9.888785 c -0.38072,-1.522984 -0.35955,-4.2410942 -1.14216,-4.5689518 z" style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none"/> </svg>
          </span>
          <div class="containerBig">
          <video muted autoplay loop preload="auto">
            <source :src="titleVideo" type="video/mp4">
            Your browser does not support HTML video.
          </video>
        </div>
        <div class="contactContainer">
          <span>DIGITAL CONTENT MIX</span>
          <a href="mailto:svenjaraetzsch@gmail.com">SVENJARAETZSCH@GMAIL.COM</a>
        </div>
        <div>
          <div style="position: absolute; bottom: 310px;right: 84px;">
            <router-link to="/projects/galapagos">
              <button class="btn-hover color-2">LAST PROJECT</button>
            </router-link>
          </div>
          <div style="position: absolute; right: 20px; bottom: 20px; width: 264px; height: 264px;">
            <WaterAnimation></WaterAnimation>
          </div>
        </div>
        <div>
          <div style="position: absolute;bottom: 310px;left: 70px;">
            <router-link to="/projects">
              <button class="btn-hover color-1">All PROJECTS</button>
            </router-link>
          </div>
          <div class="accordionSliderContainer">
            <acc-slider></acc-slider>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import titleVideo from "/././././././src/assets/videos/titlevid.mp4";
import videoTitleImg from "/././././././src/assets/images/projects/uw-plants/titleImg.png";
import WaterAnimation from "@/components/buttons/WaterAnimation";
import AccSlider from "@/components/slider/AccSlider";

export default {
  name: 'SvenjaRaetzsch',
  components: {
    AccSlider,
    WaterAnimation,
  },
  data(){
    return{
      titleVideo: titleVideo,
      videoTitleImg: videoTitleImg,
    }
  }
}
</script>

<style>
#parent { position: absolute; top: 0; left: 0; height: 100%; width: 100%; }
#parent > div:nth-child(1) { background: var(--bright); }

.skillsContainer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 40px;
}

.skillsContainer span{
  margin-right: 20px;
}

.accordionSliderContainer{
  margin: auto;
  right: 0;
  position: absolute;
  bottom: 4px;
  left: 70px;
  z-index: 100;
  overflow: hidden;}
.skillsContainer span:last-child{
  margin-right: 0;
}

.containerBig {
  height: 170px;
  margin-left: 70px;
}

.liquidContainer {
  position: absolute;
  top: 195px;
}

video{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.link {
  color: white;
  background-color: black;
  border-radius: 1px;
  padding: 5px;
}

.btn-hover {
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  height: 55px;
  text-align:center;
  border: none;
  background-size: 300% 100%;

  border-radius: 2px;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.btn-hover:hover {
  background-position: 100% 0;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.btn-hover:focus {
  outline: none;
}

.btn-hover.color-1 {
  background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
}

.btn-hover.color-2 {
  background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);
}

.contactContainer{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 20px
}

.contactContainer a{
  font-size: 40px;
}

.sharkContainer{
  position: absolute;opacity: 0.2;right: 10px;
}

.sharkContainer svg{
  width: 100px;
}

</style>

