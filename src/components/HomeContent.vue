<template>
  <section class="home">
    <div class="content-container">
      <div class="row">
        <div class="home-details">
          <h3 class="greeting">Hi, i am <span>Albert</span></h3>
          <h3 class="profession">
            I am a <span ref="typing">Front-End Developer</span>
          </h3>
          <p>
            I have expertise in Vue JS and the Vue ecosystem of libraries. I
            build ambitious User Interfaces with modular pieces of logic.
          </p>
          <a href="#contact" class="btn hire-me">
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
    };
  },
  methods: {
    typing() {
      //let typingEl = this.$refs.typing;
    },
  },
  /*
  mounted(){
    this.typing();
  }
  */
};
</script>

<style>
section.home {
  min-height: 100vh;
  display: flex;
  color: var(--text-black-900);
}
.home-details {
  flex: 0 0 60%;
  max-width: 60%;
  padding: var(--padd-x-15);
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
  color: var(--text-black-700);
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
  text-align: center;
  padding: var(--padd-x-15);
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
  border-right: 10px solid var(--primary);
}
.home-img .avatar {
  height: 400px;
  margin: auto;
  border-radius: 5px;
  filter: grayscale();
  animation-name: flip;
  animation-duration: 6s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-fill-mode: initial;
}
</style>
