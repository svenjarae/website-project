<template>
  <div class="language-btn-container">
    <div>
      <a v-if="$i18n.locale !== 'de'" @click="setLocale('de')">DE</a>
      <span class="active" v-if="$i18n.locale === 'de'">DE</span>
      <span>&nbsp;|&nbsp;</span>
      <a v-if="$i18n.locale !== 'en'" @click="setLocale('en')">EN</a>
      <span class="active" v-if="$i18n.locale === 'en'">EN</span>
      &nbsp;|&nbsp;
      <a v-if="$i18n.locale !== 'es'" @click="setLocale('es')">ES</a>
      <span class="active" v-if="$i18n.locale === 'es'">ES</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SelectLanguage',
  methods:{
    /*
    Sets the i18n locale
     */
    setLocale(locale){
      this.$i18n.locale = locale;
      /*
      Save to local storage and give it the name locale and in the second arg we pass in the locale that needs to be saved.
       */
      localStorage.setItem('locale', locale);
    }
  }
})
</script>
<style scoped>
.language-btn-container div{
  display: flex;
}
.language-btn-container button{
  color:lightgrey;
  background-color: transparent;
  border: none;
  padding: 0;
}

.active{
  color: red;
}
</style>
