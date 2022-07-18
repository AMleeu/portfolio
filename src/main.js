import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./assets/css/responsive.css";
import App from "./App";
import "animate.css";

/*
  register the Font Awesome icon component
*/
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
/*
  make window available as a global property to our applications
*/
Vue.prototype.window = window;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
