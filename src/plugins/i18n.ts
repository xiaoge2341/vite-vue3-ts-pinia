import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import zh from '@/assets/js/language/zh.json'
import en from '@/assets/js/language/en.json'
import { getCookie } from '../utils';

export const i18n = createI18n({
  globalInjection: true,
  legacy: false, // you must specify 'legacy: false' option
  locale: getCookie("language") === "zh" ? "zh" : "en",
  messages: { zh, en },
});

