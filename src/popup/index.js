import Vue from "vue";
import Popup from "./Popup";

Vue.config.productionTip = false;

new Vue({
  render: function (h) { return h(Popup); }
}).$mount("#app");