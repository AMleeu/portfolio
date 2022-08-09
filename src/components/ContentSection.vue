<template>
  <div id="content-section">
    <HomeContent />
  </div>
</template>

<script>
import HomeContent from "./HomeContent.vue";

export default {
  components: {
    HomeContent,
  }
};
</script>

<style>
/*
    generic styling for each section that gets 
    placed in content-section
*/
section {
  background-image: url('../assets/img/bg.jpg') ;
  background-repeat: repeat;
  min-height: 100vh;
  background-color: var(--bg-black-900);
  display: block;
  margin-left: 0px !important;
  z-index: 0;
}
/*
    each content component placed in section will have a div.content-container
    this is the global styling for it
*/
section .content-container {
  max-width: 90%;
  width: 100%;
  margin: auto;
}
/*
    every content component placed in section will have a di.content-row 
    this is the global styling for it
*/
section .content-container .content-row {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
/*
    most content placed in section will have a a.btn 
    this is the global styling for it
*/
.btn {
  font-size: 15px;
  font-weight:600;
  padding: 12px 35px;
  background: var(--primary);
  color: #fff;
  letter-spacing: 1.12px;
  font-weight: 500;
  border-radius: 40px;
  display: inline-block;
  white-space: nowrap;
  border: none;
  box-shadow: 3px 3px 5px 0px rgb(0 0 0 / 20%);
  transition: all 0.25s ease-in;
  animation-name: jello;
  animation-duration: 2s;
  animation-delay: 8s;
  animation-iteration-count: 3;
  animation-timing-function: ease-out;
  animation-fill-mode: initial;
}
.btn:hover {
  transform: scale(1.05);
  box-shadow: none;
  font-weight: 600;
}
</style>
