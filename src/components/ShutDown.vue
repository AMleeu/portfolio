<template>
  <div class="shutdown-container">
    <h1>shutting down</h1>
    <div class="shutdown-clock">
      <span ref="seconds"></span>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            timeLeft:5
        }
    },
    methods:{
        countDown(){
            this.$refs.seconds.innerHTML = this.timeLeft.toString()
            this.timeLeft--;
            if(this.timeLeft >= 0){
                setTimeout(this.countDown, 1000);
            }
        }
    },
    mounted(){
        this.countDown();
    }
}
</script>
<style>
.shutdown-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url('../assets/img/bg.jpg') ;
  background-repeat: repeat;
}
.shutdown-container h1 {
  font-size: 100px;
  line-height: 100px;
  font-weight: 600;
  text-transform: lowercase;
  padding: 20px;
  background: var(--bg-black-100);
  color: var(--text-black-900);
  transform: skewY(-10deg);
  box-shadow: 10px 10px 20px rgb(0 0 0 / 0.3);
}
.shutdown-container .shutdown-clock {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  position: absolute;
  display: inline-block;
  font-size: 30px;
  line-height: 30px;
  text-transform: uppercase;
  padding: 20px;
  padding-bottom: 0px;
  bottom: 52vh;
  right:calc(40vw -180);
  z-index: 10;
  background: var(--primary);
  color: var(--bg-black-100);
  font-weight: 500;
  transform: skewY(-10deg);
  box-shadow: 10px 10px 20px rgb(0 0 0 / 0.3);
}

.shutdown-container .shutdown-clock span {
  display: block;
  width: 100%;
  margin: auto;
  padding-top: 50px;
  padding-left:-120px;
  text-align: center;
  font-size: 120px;
}
</style>
