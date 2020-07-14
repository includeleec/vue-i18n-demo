<template>
<ul>
  <li v-for="locale in supportedLocales" :key="locale" @click="switchLocale(locale)">
    {{ $t('menu.' + locale) }}
  </li>
</ul>
</template>

<script>
import { Trans } from '@/plugins/Translation';

export default {
  name: 'LocaleSwitcher',
  computed: {
    supportedLocales () {
      return Trans.supportedLocales
    },
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        // const to = this.$router.resolve({ params: {locale} })
        // change moment locale
        this.$moment.locale(locale);
        Trans.changeLocale(locale);
      }
    }
  }
}
</script>

<style scoped>
li {
  text-decoration: underline;
  color: #459CE7;
  cursor: pointer;
}
</style>
