<template>
  <div id="app">
    <!--
      using v-if innstead of v-swoh because there's animations
      that require the mounted lifecycle method to run each time the 
      component is conditionally rendered
    -->
    <MainContainer v-if="shutdownVal == false" @shutdown="shutdown" />
    <ShutDown v-else-if="shutdownVal" @switchOn="switchOn" :shutDownCausedBy="shutDownCausedBy"/> 
  </div>
</template>

<script>
import MainContainer from "./components/MainContainer.vue"
import ShutDown from "./components/ShutDown.vue"

export default {
  name: "App",
  components:{
    MainContainer,
    ShutDown
  },
  data(){
    return{
      shutdownVal:true,
      shutDownCausedBy: "initial load"
    }
  },
  methods:{
    shutdown(shutDownCausedBy){
      this.shutDownCausedBy = shutDownCausedBy;
      this.shutdownVal = true;
    },
    switchOn(){
      this.shutdownVal = false;
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner:wght@500&family=Open+Sans:wght@300;500;600;800&display=swap");
:root {
  --bg-black-900: #f2f2fc;
  --bg-black-100: #fdf9ff;
  --bg-black-50: #cac7cc;
  --text-black-900: #302e4d;
  --text-black-700: #504e70;
  --text-margin-top: 20px;
  --padd-x-15:0 15px 0 15px;
  --margin-y-15:15px 0 15px 0;
  --primary: #ec1839;
  --accent: #f04661;
}
* {
  margin: 0px;
  padding: 0px;
  outline: none;
  text-decoration: none;
  box-sizing: border-box;
}
body {
  background-image: url("./assets/img/bg.jpg");
  background-repeat: repeat;
  line-height: 1.5;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  min-width:324px !important;
}
::before,
::after {
  box-sizing: border-box;
}
</style>
