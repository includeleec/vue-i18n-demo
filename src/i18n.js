import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'


Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export function getUserLocale() {
  const locale = Cookies.get("locale") || window.navigator.language || window.navigator.userLanguage;
  console.log(locale, Cookies.get("locale"), window.navigator.language,window.navigator.userLanguage);
  return {
    locale: locale,
    localeNoISO: locale.split('-')[0]
  }
}


export const i18n = new VueI18n({
  locale: getUserLocale().locale || process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})
