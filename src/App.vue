<template>
  <div id="app">
    <MainContainer/>
  </div>
</template>

<script>
import MainContainer from "./components/MainContainer.vue"

export default {
  name: 'App',
  components:{
    MainContainer,
  }
}
</script>

<style>
:root{
    --bg-black-900: #f2f2fc;
    --bg-black-100: #fdf9ff;
    --bg-black-50: #e8dfec;
    --text-black-900: #302e4d;
    --text-black-700: #504e70;
}
*{
    margin:0px;
    padding:0px;
    outline:none;
    text-decoration:none;
    box-sizing: border-box;  
}
body{
    line-height:1.5;
    font-size:16px;
}
::before, ::after{
    box-sizing: border-box;
}
</style>
