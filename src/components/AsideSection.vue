<template>
  <div id="aside-section">
    <div id="logo">
      <a href="#"><span>A</span>lbert</a>
    </div>
    <div class="nav">
      <li>
        <a href="">
          <font-awesome-icon icon="fa-solid fa-home-alt" />
          &nbsp; home
        </a>
      </li>
      <li>
        <a href="">
          <font-awesome-icon icon="fa-solid fa-user-gear" /> &nbsp; my services
        </a>
      </li>
      <li>
        <a href="">
          <font-awesome-icon icon="fa-solid fa-box-open" /> &nbsp; my projects
        </a>
      </li>
      <li>
        <a href="">
          <font-awesome-icon icon="fa-solid fa-phone-square-alt" /> &nbsp; Get
          in Touch
        </a>
      </li>
    </div>
  </div>
</template>

<script>
/*
  set up font-awesom and import required modules
*/
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHomeAlt,
  faUserGear,
  faPhoneSquareAlt,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHomeAlt, faUserGear, faPhoneSquareAlt, faBoxOpen);

export default {};
</script>

<style>
#aside-section {
  width: 270px;
  background: var(--bg-black-100);
  padding: 30px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 10;
}
#aside-section li {
  list-style: none;
  margin-top: var(--text-margin-top);
}
</style>
