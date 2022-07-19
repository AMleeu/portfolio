<template>
  <div class="shutdown-container">
    <h1 ref="heading">please wait</h1>
    <div class="shutdown-clock">
      <span ref="seconds" v-show="timeLeft > 0">
        <font-awesome-icon icon="fa-solid fa-power-off"  @click="switchOn" />
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
  data() {
    return {
      timeLeft: 5,
    };
  },
  watch: {
    /*
        keep track on changes to this.timeLeft 
        if == 0
          what for a 0.25 seconds (so the 0 can display) 
          & then 
            change the h1 inner HTML to 'switch on'
      */
    timeLeft(val) {
      if (val == 0) {
        setInterval(() => {
          this.$refs.heading.innerHTML = "switch on";
        }, 500);
      }
    },
  },
  methods: {
    countDown() {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }
      if (this.timeLeft > 0) {
        this.$refs.seconds.innerHTML = this.timeLeft.toString();
        setTimeout(this.countDown, 1000);
      }
    },
    switchOn() {
      this.$emit("switchOn");
      this.$destroy();
    },
  },
  mounted() {
    // wait a second before stating the count down
    this.countDown();
  },
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
}
.shutdown-container .shutdown-clock span .svg-inline--fa:hover {
  cursor: pointer;
  opacity: 0.75;
  transform: scale(0.95);
}
</style>
