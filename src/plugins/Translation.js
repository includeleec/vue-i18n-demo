import axios from 'axios'
import { i18n } from '../i18n'
import Cookies from 'js-cookie'

const Trans = {
  get defaultLocale() {
    return process.env.VUE_APP_I18N_LOCALE
  },
  get supportedLocales() {
    return process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
  },
  get currentLocale() {
    return i18n.locale
  },
  set currentLocale(locale) {
    console.log("set currentLocale", locale)
    i18n.locale = locale
    Cookies.set("locale", locale)
  },
  getUserSupportedLocale() {
    const userPreferredLocale = Trans.getUserLocale()

    console.log("userPreferredLocale", userPreferredLocale)

    if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale
    }

    if (Trans.isLocaleSupported(userPreferredLocale.localeNoISO)) {
      return userPreferredLocale.localeNoISO
    }
    return Trans.defaultlocale
  },
  getUserLocale() {
    const locale = Cookies.get("locale") || window.navigator.language || window.navigator.userLanguage || Trans.defaultLocale
    return {
      locale: locale,
      localeNoISO: locale.split('-')[0]
    }
  },
  setI18nLocaleInServices(locale) {
    Trans.currentLocale = locale
    axios.defaults.headers.common['Accept-Language'] = locale
    document.querySelector('html').setAttribute('lang', locale)
    return locale
  },
  changeLocale(locale) {
    if (!Trans.isLocaleSupported(locale)) return Promise.reject(new Error('Locale not supported'))
    if (i18n.locale === locale) return Promise.resolve(locale)
    return Trans.loadLocaleFile(locale).then(msgs => {
      i18n.setLocaleMessage(locale, msgs.default || msgs)
      return Trans.setI18nLocaleInServices(locale)
    })
  },
  loadLocaleFile(locale) {
    return import(`@/locales/${locale}.json`)
  },
  isLocaleSupported(locale) {
    return Trans.supportedLocales.includes(locale)
  },
  routeMiddleware(to, from, next) {

    // const locale = to.params.locale
    console.log(to);

    // if (!Trans.isLocaleSupported(locale)) return next(Trans.getUserSupportedLocale())
    
    // return Trans.changeLocale(locale).then(() => next())

    next();
  },
  i18nRoute(to, locale) {
    return {
      ...to,
      params: {
        locale: locale || this.currentLocale,
        ...to.params
      }
    }
  }
}

export {
  Trans
}
