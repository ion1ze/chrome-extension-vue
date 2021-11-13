import Vue from "vue";
import Options from "./Options";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) { return h(Options); }
}).$mount("#app");