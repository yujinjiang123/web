// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式
Vue.use(iView);
var mavonEditor = require('mavon-editor')
import 'mavon-editor/dist/css/index.css'
import Vuex from 'vuex'
Vue.use(Vuex);
Vue.prototype.$http = axios;
Vue.config.productionTip = false

// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
import  VueQuillEditor from 'vue-quill-editor'

Vue.use(VueQuillEditor);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
