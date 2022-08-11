<template>
  <div class="content-row" id="services">
    <div class="container">
      <div class="row mt-5 pt-5 pb-5">
        <div class="col-sm-12">
          <h5 class="main-heading fw-bold text-end">SERVICES</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-lg-4 pb-4">
          <div class="service p-5 rounded">
            <div class="service-icon text-left circle">
              <font-awesome-icon icon="fa-solid fa-exchange-alt" />
            </div>
            <h5 class="mt-4 mb-4 text-center">
              i convert static web pages and designs into scallable web
              applications
            </h5>
            <a href="mailto:albert.m.leeu@gmail.com" class="content-cta mb-4"
              >hire me</a
            >
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 pb-4">
          <div class="service p-5 rounded">
            <div class="service-icon text-left circle">
              <font-awesome-icon icon="fa-solid fa-network-wired" />
            </div>
            <h5 class="mt-4 mb-4 text-center">
              i develop intuitive User Interfaces that consume and present API data in custom ways
            </h5>
            <a href="mailto:albert.m.leeu@gmail.com" class="content-cta mb-4"
              >hire me</a
            >
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 pb-5">
          <div class="service p-5 rounded">
            <div class="service-icon text-left circle">
              <font-awesome-icon icon="fa-solid fa-code-compare" />
            </div>
            <h5 class="mt-4 mb-4 text-center">
              i refactor legacy jQuery code to modern JavaScript code that uses best
              practices
            </h5>
            <a href="mailto:albert.m.leeu@gmail.com" class="content-cta mb-4"
              >hire me</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*
  import required font-awesome modules & components
*/
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCodeCompare,
  faExchangeAlt,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

library.add(faExchangeAlt, faNetworkWired, faCodeCompare);
export default {};
</script>

<style>
#services h5 {
  line-height: 25px;
}
.service {
  background: var(--bg-black-900);
  box-shadow: 3px 3px 5px 0px rgb(0 0 0 / 20%);
  transition: all 0.2s ease-out;
}
.service:hover {
  background: var(--bg-black-900);
  box-shadow: 3px 3px 0 0 var(--bg-black-50);
}
.service .service-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  background-color: var(--text-black-900);
  color: var(--bg-black-900);
  border-radius: 50%;
  box-shadow: 3px 3px 5px 0px rgb(0 0 0 / 20%);
  animation-name: headShake;
  animation-duration: 1s;
  animation-delay: 4s;
  animation-iteration-count: 3;
  animation-timing-function: ease-in;
  animation-fill-mode: initial
}
.service .content-cta {
  font-weight: 700;
  font-size: 17px;
  position: relative;
  text-transform: uppercase;
  float: right;
  color: var(--text-black-700);
  letter-spacing: 1.05px;
  margin-top: -5px;
  animation-name: swing;
  animation-duration: 2s;
  animation-delay: 6s;
  animation-timing-function: ease-in;
  animation-fill-mode:forwards;
}
.service .content-cta::after {
  content: "";
  width: 25%;
  height: 2px;
  background-color: var(--primary);
  position: absolute;
  right: 0;
  margin-top: 30px;
  transition: width 0.4s ease-out;
}
.service .content-cta:hover,
.service .content-cta:focus {
  color: var(--bg-black-50);
  cursor: pointer;
}
.service .content-cta:hover::after,
.service .content-cta:focus::after {
  width: 65%;
  margin-left: 52%;
}
</style>
