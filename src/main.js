import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import ImageUploader from 'vue-image-upload-resize';

Vue.use(BootstrapVue);
Vue.use(ImageUploader);

new Vue({
  el: '#app',
  render: h => h(App)
})
