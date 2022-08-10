<template>
  <div class="aside-section" v-if="hideAside == false">
    <div id="logo">
      <a href="#"><span>A</span>lbert</a>
    </div>
    <ul class="aside-nav">
      <li>
        <a
          href="#"
          :class="[content == 'home' ? 'active' : '']"
          @click="$emit('updateContent', 'home')"
        >
          <font-awesome-icon icon="fa-solid fa-home-alt" />
          &nbsp; home
        </a>
      </li>
      <li>
        <a
          href="#"
          :class="[content == 'services' ? 'active' : '']"
          @click="$emit('updateContent', 'services')"
        >
          <font-awesome-icon icon="fa-solid fa-user-gear" /> &nbsp; services
        </a>
      </li>
      <li>
        <a
          href="#"
          @click="$emit('shutdown')"
        >
          <font-awesome-icon icon="fa-solid fa-power-off" />
          &nbsp; shutdown
        </a>
      </li>
      <!--
      <li>
        <a
          href="#"
          :class="[content == 'my projects' ? 'active' : '']"
          @click="$emit('updateContent', 'my projects')"
        >
          <font-awesome-icon icon="fa-solid fa-box-open" /> &nbsp; my projects
        </a>
      </li>
      <li>
        <a
          href="#"
          :class="[content == 'reach me' ? 'active' : '']"
          @click="$emit('updateContent', 'reach me')"
        >
          <font-awesome-icon icon="fa-solid fa-fingerprint" /> &nbsp; reach me
        </a>
      </li>
      -->
    </ul>
  </div>
</template>

<script>
/*
  import required font-awesome modules & components
*/
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHomeAlt,
  faPowerOff,
  faEnvelopeCircleCheck,
  faUserGear,
  faBoxOpen,
  faBars,
  faFingerprint,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHomeAlt, faPowerOff, faEnvelopeCircleCheck, faUserGear, faFingerprint, faBoxOpen, faBars);

export default {
  emits: ["updateContent", "shutdown"],
  props: {
    hideAside: Boolean,
    content: {
      type: String,
      default: "home",
    },
  },
  methods: {
    selectContent(content) {
      this.updateContent(content);
    },
  },
};
</script>

<style>
.aside-section {
  width: 270px;
  background: var(--bg-black-900);
  padding: 30px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center; 
  align-items: center;
  border-right: 1px solid var(--bg-black-50);
  transition: all 0.25s ease-in;
}
.aside-section.hide {
  left: -270px !important;
}
/*=================================
logo
==================================*/
.aside-section #logo {
  transition: all 0.25s ease-in;
}
.aside-section #logo {
  position: absolute;
  top: 50px;
  text-transform: capitalize;
  animation-name: bounceInDown;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-fill-mode: initial;
}
.aside-section #logo a {
  color: var(--text-black-900);
  font-weight: 600;
  padding: 15px 20px;
  font-size: 31px;
  letter-spacing: 5px;
  position: relative;
}
.aside-section #logo a::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-top: 5px solid var(--primary);
  border-left: 5px solid var(--primary);
  top: 0;
  left: 0;
}
.aside-section #logo a::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-bottom: 5px solid var(--primary);
  border-right: 5px solid var(--primary);
  bottom: 0;
  right: 0;
}
.aside-section #logo span {
  font-size: 37px;
  font-family: "Edu TAS Beginner", cursive;
}

/*=================================
nav
==================================*/
.aside-section .aside-nav {
  list-style: none;
  margin-top: 50px;
  animation-name: bounceInUp;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-fill-mode: initial;
}
.aside-section .aside-nav li {
  margin-top: var(--text-margin-top);
  display: block;
}
.aside-section .aside-nav li a {
  position:relative;
  font-size: 20px;
  width:auto;
  font-weight: 400;
  color: var(--text-black-900);
  padding: 5px 15px;
}
.aside-section .aside-nav li a::after{
  content: "";
  width:0%;
  height: 2px;
  background-color: var(--primary);
  position:absolute;
  left:0;
  margin-top:30px;
  transition: all 0.4s ease-out;
}
.aside-section .aside-nav li a:hover,
.aside-section .aside-nav li a:focus{
  color:var(--bg-black-50);
}
.aside-section .aside-nav li a:hover::after,
.aside-section .aside-nav li a:focus::after{
  width:20%;
  margin-left:80px;
}
.aside-section .aside-nav a.active {
  color: var(--primary);
}
.aside-section .aside-nav a.active::after{
  width:10%;
}
.aside-section .aside-nav li a.active:hover,
.aside-section .aside-nav li a.active:focus {
  color: var(--primary);
  cursor: default;
  margin-left:none;
}
.aside-section .aside-nav li a.active:hover::after,
.aside-section .aside-nav li a.active:focus::after {
  width:10%;
}
/*
  give each icon a standard width
*/
.aside-section li .svg-inline--fa {
  width: 18px;
}
</style>
