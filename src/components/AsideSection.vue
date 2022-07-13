<template>
  <div id="aside-section">
    <div id="logo">
      <a href="#"><span>A</span>lbert</a>
    </div>
    <div class="nav-toggler">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
    <ul class="nav">
      <li>
        <a href="" class="active">
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
          <font-awesome-icon icon="fa-solid fa-fingerprint" /> &nbsp; reach me
        </a>
      </li>
    </ul>
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
  faBoxOpen,
  faBars,
  faFingerprint
} from "@fortawesome/free-solid-svg-icons";

library.add(faHomeAlt, faUserGear, faFingerprint, faBoxOpen, faBars);

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
  display: flex;
  justify-content: center;
  align-items: center;
  border-right:1px solid var(--bg-black-50);
}
/*=================================
logo
==================================*/
#aside-section #logo{
  position:absolute;
  top:50px;
  font-size: 30px;
  text-transform: capitalize;
}
#aside-section #logo a{
  color: var(--text-black-900);
  font-weight: 600;
  padding: 15px 20px;
  font-size: 30px;
  letter-spacing: 5px;
  position: relative;
}
#aside-section #logo a::before{
  content: '';
  position: absolute;
  width: 20px;
  height:20px;
  border-top:5px solid var(--primary);
  border-left:5px solid var(--primary);
  top:0;
  left:0;
}
#aside-section #logo a::after{
  content: '';
  position: absolute;
  width: 20px;
  height:20px;
  border-bottom:5px solid var(--primary);
  border-right:5px solid var(--primary);
  bottom:0;
  right:0;
}
#aside-section #logo span{
  font-family: 'Edu TAS Beginner', cursive;
}

/*=================================
nav-toggler
==================================*/
#aside-section .nav-toggler{
  height:40px;
  width: 45px;
  border: 1px solid var(--bg-black-50);
  cursor:pointer;
  position:fixed; 
  left:300px;
  top: 20px;
  border-radius: 5px;
  background: var(--bg-black-100);
  display:none;
  justify-content: center;
  align-items: center;
}
#aside-section .nav-toggler .svg-inline--fa{
  color:var(--primary);
}

/*=================================
nav
==================================*/
#aside-section .nav{
  list-style: none;
  margin-top: 50px;
}
#aside-section .nav li{
  margin-top: var(--text-margin-top);
  display:block;
}
#aside-section .nav li a{
  font-size:16px;
  font-weight: 600;
  display:block;
  border-bottom: 1px solid var(--bg-black-50);
  color:var(--text-black-900);
  padding: 5px 15px;
}
#aside-section .nav li a:hover,
#aside-section .nav li a:focus{
  color:var(--bg-black-50);
}
#aside-section .nav a.active{
  color: var(--primary);
}
#aside-section .nav li a.active:hover,
#aside-section .nav li a.active:focus{
  color:var(--primary);
  cursor:default;
}
/*
  give each icon a standard width
*/
#aside-section li .svg-inline--fa{
  width:18px;
}
</style>
