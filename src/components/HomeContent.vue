<template>
  <section class="home">
    <div class="content-container">
      <div class="row">
        <div class="home-details">
          <h3 class="greeting">Hi, i am <span>Albert</span></h3>
          <h3 class="profession">
            I am a <span>Front-End Developer</span>
          </h3>
          <p ref="typeP"></p>
          <a href="#contact" class="btn">
            <font-awesome-icon icon="fa-solid fa-file-download" />
            resume
          </a>
        </div>
        <div class="home-img">
          <img :src="avatarUrl" alt="" class="avatar" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import avatarUrl from "../assets/img/avatar.jpg";
/*
  import required font-awesome modules & components
*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

library.add(faFileDownload);

export default {
  data() {
    return {
      avatarUrl,
      pText: "I build ambitious User Interfaces with modular pieces of logic.",
      charIndex: 0,
    };
  },
  methods: {
    type() {
      if (this.charIndex < this.pText.length) {
        this.$refs.typeP.innerHTML += this.pText[this.charIndex];
        this.charIndex++; 
        setTimeout(this.type, 100)
      }else{
        this.charIndex
      }
    },
  },
  mounted() {
    /*
      delay typing effect only after animation has finished
    */
    setInterval(this.type, 2000);
  },
};
</script>

<style>
section.home {
  min-height: 100vh;
  display: flex;
  color: var(--text-black-700);
}
.home-details {
  flex: 0 0 60%;
  max-width: 60%;
}
.home-details .greeting {
  font-size: 28px;
  margin: var(--margin-y-15);
}
.home-details .greeting span {
  font-family: "Edu TAS Beginner", cursive;
  color: var(--primary);
}
.home-details .profession {
  font-size: 30px;
  margin: var(--margin-y-15);
}
.home-details .profession span {
  color: var(--primary);
}
.home-details p {
  font-size: 20px;
  margin-bottom: 70px;
  color: var(--text-black-900);
}
.home-details p::after {
  content: "";
  border-left: 2px solid var(--text-black-700);
  margin-left: 5px;
  animation-name: blink;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.home-img {
  flex: 0 0 40%;
  max-width: 40%;
  text-align: right;
}
.home-img::before {
  content: "";
  position: absolute;
  top: -40px;
  height: 80px;
  width: 80px;
  border-top: 10px solid var(--primary);
}
.home-img::after {
  content: "";
  position: absolute;
  right: -20px;
  bottom: -40px;
  height: 80px;
  width: 80px;
  border-bottom: 10px solid var(--primary);
}
.home-img .avatar {
  height: 200px;
  margin: auto;
  border-radius: 50%;
  filter: grayscale();
  animation-name: bounceIn;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-fill-mode: initial;
}
</style>
