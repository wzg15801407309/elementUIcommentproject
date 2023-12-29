import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import App from './App.vue';
// 全部引入的方式 按需引用方式用在做项目中比较方便
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
