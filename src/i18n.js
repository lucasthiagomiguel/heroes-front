import { createI18n } from "vue-i18n";
import en from "./locales/en.json";


function loadLocaleMessagens(){
    const locales = [{en:en}]
    const messages = {}
    locales.forEach(lang => {
        const key = Object.keys(lang)
        messages[key] = lang[key]
    })
    return messages
}

export default createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: loadLocaleMessagens()
})