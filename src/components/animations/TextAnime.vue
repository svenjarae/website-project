<template>
<div>
  <svg viewbox="0 0 100 20" data-v-01c3b717=""><defs data-v-01c3b717=""><linearGradient id="gradient" data-v-01c3b717=""><stop color="#000" data-v-01c3b717=""></stop></linearGradient><pattern id="wave" x="0" y="-0.5" width="100%" height="100%" patternUnits="userSpaceOnUse" data-v-01c3b717=""><path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)" data-v-01c3b717=""><animateTransform attributeName="transform" begin="0s" dur="1.5s" type="translate" from="0,0" to="40,0" repeatCount="indefinite" data-v-01c3b717=""></animateTransform></path></pattern></defs><text text-anchor="middle" x="50" y="18" font-size="18" fill="url(#wave)" fill-opacity="1" data-v-01c3b717="">SKILLS</text></svg>
</div>
</template>

<script>

export default {
  name: 'TextAnime',
  data(){
    return{
    }
  },
  props: {

  }

}
</script>

<style scoped>

@font-face {
  font-family: 'Cabin Condensed';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/cabincondensed/v19/nwpMtK6mNhBK2err_hqkYhHRqmwqaOLY1HY.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Cabin Condensed';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/cabincondensed/v19/nwpMtK6mNhBK2err_hqkYhHRqmwqaeLY1HY.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Cabin Condensed';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/cabincondensed/v19/nwpMtK6mNhBK2err_hqkYhHRqmwqZ-LY.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body,html{margin:0;padding:0;height:100%;}
body{
  background: #f1f1f1;
  background-size:cover;
  font-family: 'Cabin Condensed', sans-serif;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
svg{
  font-weight:bold;
  width: 100px;
  height: 22px;
}


</style>

