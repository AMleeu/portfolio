<template>
  <div id="content-section">
    <section>
      <div class="content-container">
        <ServicesContent v-show="content=='services'"/>
        <HomeContent v-show="content=='home'"/>
        <ProjectsContent v-show="content=='projects'"/>
      </div>
    </section>
  </div>
</template>

<script>
import HomeContent from "./HomeContent.vue";
import ServicesContent  from "./ServicesContent.vue"
import ProjectsContent from "./ProjectsContent.vue"

export default {
  components: {
    HomeContent,
    ServicesContent,
    ProjectsContent,
  },
  props:{
    content:String,
  },
};
</script>

<style>
/*
    generic styling for each section that gets 
    placed in content-section
*/
section {
  background-image: url("../assets/img/bg.jpg");
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
    every content component placed in section will have a div.content-row 
    this is the global styling for it
*/
section .content-container .content-row {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
/*
    most child components share these classes in common 
    this is the central styling for them
*/
.container {
  width: 100%;
}
.main-heading {
  position: relative;
  letter-spacing: 1.75px;
  color: var(--text-black-700);
  animation-name: fadeInDown;
  animation-duration: 2s;
  animation-timing-function: ease-in;
  animation-fill-mode: initial;
}
.main-heading::after {
  content: "";
  width: 5%;
  height: 5px;
  border-top: 5px solid var(--primary);
  right: 20px;
  position: absolute;
  margin-top: 30px;
  visibility:none;
  animation-name: zoomInRight;
  animation-duration: 4s;
  animation-timing-function: ease-in;
  animation-fill-mode:forwards;
}
</style>
