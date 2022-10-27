<template>
  <div class="ia-container">

      <figure>
        <img :src="image1" alt="image01" />
        <input type="radio" name="radio-set" checked="checked" />
        <figcaption>
          <router-link to="/projects/taliarte">
            <span>Link</span>
          </router-link>
        </figcaption>

        <figure>
          <img :src="image2" alt="image02" />
          <input type="radio" name="radio-set" />
          <figcaption>
            <router-link to="/projects/galapagos">
              <span>Link</span>
            </router-link>
          </figcaption>

          <figure>
            <img :src="image2" alt="image02" />
            <input type="radio" name="radio-set" />
            <figcaption><span>Honest Light</span></figcaption>

            <figure>
              <img :src="image2" alt="image02" />
              <input type="radio" name="radio-set" />
              <figcaption><span>Honest Light</span></figcaption>

              <figure>
                <img :src="image2" alt="image02" />
                <input type="radio" name="radio-set" />
                <figcaption><span>Honest Light</span></figcaption>

                <figure>
                  <img :src="image2" alt="image02" />
                  <input type="radio" name="radio-set" />
                  <figcaption><span>Honest Light</span></figcaption>

                  <figure>
                    <img :src="image2" alt="image02" />
                    <input type="radio" name="radio-set" />
                    <figcaption><span>Honest Light</span></figcaption>

                    <figure>
                      <img :src="image2" alt="image02" />
                      <input type="radio" name="radio-set" />
                      <figcaption><span>Honest Light</span></figcaption>
                    </figure>

                  </figure>

                </figure>

              </figure>

            </figure>

          </figure>

        </figure>

      </figure>

    </div>
</template>
<script>
import image1 from "/src/assets/images/projects/gc-sealife/titleImg.png";
import image2 from "/././././././src/assets/images/projects/galapagos/titleImg.png";
export default {
  name: "AccSlider",
  data(){
    return{
      image1: image1,
      image2: image2,
    }
  }
};
</script>
<style scoped>

.ia-container figure {
  position: absolute;
  top: -16px;
  left: 0; /* width of visible piece */
  width: 182px;
  height: 182px;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.6);
  transition: all 0.3s ease-in-out;
}
.ia-container > figure {
  position: relative;
  left: 0 !important;
  margin: 0;
}

.ia-container img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ia-container input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* just cover visible part */
  height: 100%;
  cursor: pointer;
  border: 0;
  padding: 0;
  opacity: 0;
  z-index: 100;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.ia-container input:checked ~ figure {
  left: 140px;
  transition: all 0.7s ease-in-out;
}
.ia-container figcaption {
  width: 100%;
  height: 100%;
  background: rgba(87, 73, 81, 0.1);
  position: absolute;
  top: 0px;
  transition: all 0.2s linear;
}
.ia-container figcaption span {
  position: absolute;
  top: 40%;
  margin-top: -30px;
  right: 20px;
  left: 20px;
  overflow: hidden;
  text-align: center;
  background: rgba(87, 73, 81, 0.3);
  line-height: 20px;
  font-size: 18px;
  opacity: 0;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 700;
  padding: 20px;
  color: #fff;
}
.ia-container input:checked + figcaption,
.ia-container input:checked:hover + figcaption{
  background: rgba(87, 73, 81, 0);
}
.ia-container input:checked + figcaption span {
  transition: all 0.4s ease-in-out 0.5s;
  opacity: 1;
  top: 50%;
}
.ia-container #ia-selector-last:checked + figcaption span {
  transition-delay: 0.3s;
}
.ia-container input:hover + figcaption {
  background: rgba(87, 73, 81, 0.03);
}
.ia-container input:checked ~ figure input{
  z-index: 1;
}
@media screen and (max-width: 720px) {
  .ia-container {
    width: 540px;
  }

  .ia-container figure {
    left: 40px;
    width: 260px;
  }

  .ia-container input {
    width: 40px;
  }

  .ia-container input:checked ~ figure {
    left: 260px;
  }

  .ia-container figcaption span {
    font-size: 16px;
  }
}

@media screen and (max-width: 520px) {
  .ia-container {
    width: 320px;
  }

  .ia-container figure {
    left: 20px;
    width: 180px;
  }

  .ia-container input {
    width: 20px;
  }

  .ia-container input:checked ~ figure {
    left: 180px;
  }

  .ia-container figcaption span {
    font-size: 12px;
    letter-spacing: 2px;
    padding: 10px;
    margin-top: -20px;
  }

}

</style>