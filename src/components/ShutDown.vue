<template>
  <div class="shutdown-container">
    <h1 ref="heading">{{ shutDownMsg }}</h1>
    <div class="shutdown-clock">
      <span ref="seconds" v-show="timeLeft > 0">
      </span>
      <span v-show="timeLeft == 0">
        <font-awesome-icon icon="fa-solid fa-power-off" @click="switchOn" />
      </span>
    </div>
  </div>
</template>
<script>
/*
  import required font-awesome modules & components
*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

library.add(faPowerOff);
export default {
  emits: ["switchOn"],
  props:{
    shutDownCausedBy:String
  },
  data() {
    return {
      timeLeft: 6,
      /*
        for storing Timeout IDs
        so they can be cleared whe component is detroyed
      */
     timeOutID_heading:null,
     timeOutID_seconds:null,
    };
  },
  watch: {
    /*
        keep track on changes to this.timeLeft 
        if == 0
          what for a 0.5 seconds (so the 0 can display) 
          & then 
            change the h1 inner HTML to 'switch on'
      */
    timeLeft(val) {
      if (val == 0) {
        this.timeOutID_heading = setTimeout(() => {
          this.$refs.heading.innerHTML = "switch on";
        }, 500);
      }
    },
  },
  computed:{
    shutDownMsg(){
      if(this.shutDownCausedBy == "user"){
        return "good bye";
      }else{
        return "hello"; 
      }
    }
  },
  methods: {
    countDown() {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }
      if (this.timeLeft > 0) {
        this.$refs.seconds.innerHTML = this.timeLeft.toString();
        this.timeOutID_seconds = setTimeout(this.countDown, 1000);
      }
    },
    switchOn() {
      this.$emit("switchOn");
      this.$destroy();
    },
  },
  mounted() {
    /*
      reset this.timeLeft to 6
    */
    this.timeLeft = 6;
    this.countDown();
  },
  destroyed(){
      /*
        clear timeouts when component is unmounted
      */
      clearTimeout(this.timeOutID_heading);
      clearTimeout(this.timeOutID_seconds);
  }
};
</script>
<style>
.shutdown-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url("../assets/img/bg.jpg");
  background-repeat: repeat;
}
.shutdown-container h1 {
  font-size: 10vw;
  line-height: 10vw;
  font-weight: 600;
  text-transform: lowercase;
  padding: 20px;
  background: var(--bg-black-900);
  color: var(--text-black-900);
  transform: skewY(-10deg);
  box-shadow: 10px 10px 20px rgb(0 0 0 / 0.3);
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-fill-mode: initial;
}
.shutdown-container h1::before {
  content: "";
  width: 60%;
  height: 2px;
  position: absolute;
  bottom: -50px;
  left: 0;
  background: var(--bg-black-50);
  box-shadow: 10px 10px 20px rgb(0 0 0 / 0.3);
}
.shutdown-container h1::after {
  content: "";
  width: 60%;
  height: 2px;
  position: absolute;
  top: -50px;
  right: 0;
  background: var(--bg-black-50);
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
  right: calc(40vw -180);
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
  padding-left: -120px;
  text-align: center;
  font-size: 120px;
}

.shutdown-container .shutdown-clock span .svg-inline--fa {
  margin-top: -50px;
  transition: all 0.25s ease-in;
  animation-name: flash;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
  animation-fill-mode: initial;
}
.shutdown-container .shutdown-clock span .svg-inline--fa:hover {
  cursor: pointer;
  opacity: 0.75;
  transform: scale(0.95);
}

@media(max-width:978px){
 .shutdown-container .shutdown-clock {
  width: 80px;
  height: 80px;
  padding: 5px;
 } 
 .shutdown-container .shutdown-clock span {
  font-size: 60px;
  padding-top: 18px;
  padding-left: -60px; 
}
.shutdown-container .shutdown-clock span .svg-inline--fa {
  margin-top: -15px;
}
}
@media(max-width:508px){
 .shutdown-container .shutdown-clock {
  width: 55px;
  height: 55px;
  padding: 2.5px;
 } 
 .shutdown-container .shutdown-clock span {
  font-size: 30px;
  padding-top: 9px;
  padding-left: -30px; 
}
.shutdown-container .shutdown-clock span .svg-inline--fa {
  margin-top: -10px;
}
}
</style>
