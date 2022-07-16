<template>
  <div id="app">
    <MainContainer />
  </div>
</template>

<script>
import MainContainer from "./components/MainContainer.vue"

export default {
  name: "App",
  components:{
    MainContainer
  }
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
  --accent: #FFBFF8;
}
* {
  margin: 0px;
  padding: 0px;
  outline: none;
  text-decoration: none;
  box-sizing: border-box;
}
body {
  line-height: 1.5;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
}
::before,
::after {
  box-sizing: border-box;
}
</style>
