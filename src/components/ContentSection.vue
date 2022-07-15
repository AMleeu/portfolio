<template>
  <div class="content-section">
    <HomeContent />
  </div>
</template>

<script>
import HomeContent from "./HomeContent.vue";

export default {
  components: {
    HomeContent,
  },
  created() {},
};
</script>

<style>
/*
    generic styling for each section that gets 
    placed in content-section
*/
section {
  background: var(--bg-black-900);
  min-height: 100vh;
  display: block;
  /*position: fixed;
  left: 270px;
  top: 0;
  right: 0;
  opacity: 1;*/
  z-index: 0;
  padding: 0 30px;
}
/*
    each content placed in section will have a div.content-container
    this is the global styling for it
*/
section .content-container {
  max-width: 1100px;
  width: 100%;
  margin: auto;
}
/*
    every content placed in section will have a div.row 
    this is the global styling for it
*/
section .content-container .row {
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;
  position: relative;
}
/*
    most content placed in section will have a a.btn 
    this is the global styling for it
*/
.btn {
  font-size: 16px;
  font-weight: 500;
  padding: 12px 35px;
  background: var(--primary);
  color: #fff;
  letter-spacing: 1.05px;
  font-weight: 600;
  border-radius: 40px;
  display: inline-block;
  white-space: nowrap;
  border: none;
  box-shadow: 3px 3px 5px 0px rgb(0 0 0 / 20%);
  transition: all 0.25s ease-in;
}
.btn:hover {
  transform: scale(1.02);
  box-shadow: none;
}
</style>
