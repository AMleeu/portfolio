<template>
  <div class="content-row">
    <div class="home-details">
      <h3 class="greeting">Hi, i am <span>Albert</span></h3>
      <h3 class="profession">I am a <span>Front-End Developer</span></h3>
      <p>
        I build ambitious User Interfaces with peices of
        <span ref="typedWords"></span>
      </p>
      <a :href="`${publicPath}CV.pdf`" class="btn" download>
        <font-awesome-icon icon="fa-solid fa-file-download" />
        download CV
      </a>
    </div>
    <div class="home-img">
      <img :src="avatarUrl" alt="" class="avatar" />
    </div>
  </div>
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
      publicPath: process.env.BASE_URL,
      /*
        for typing effect
      */
      words: ["modular code.", "reusable logic.", "composable units."],
      wordIndex: 0,
      charIndex: 0,
      typeSpeed: 200,
      eraseSpeed: 100,
      betweenWords: 500,
      /*
        for storing Timeout IDs
        so they can be cleared whe component is detroyed
      */
      timeOutID_type1: null,
      timeOutID_type2: null,
      timeOutID_type3: null,
      timeOutID_erase1: null,
      timeOutID_erase2: null,
    };
  },
  methods: {
    type() {
      /*
        if we're still not at the end of the current word
          - continue updating span.typedWords innerHTML with it's characters
          - increment this.charIndex at each iteration
        else
          - invoke this.erase() to erase the current word from span.typedWords innerHTML 
      */
      if (this.charIndex < this.words[this.wordIndex].length) {
        this.$refs.typedWords.innerHTML += this.words[this.wordIndex].charAt(
          this.charIndex
        );
        this.charIndex++;
        this.timeOutID_type1 = setTimeout(this.type, this.typeSpeed);
      } else {
        this.timeOutID_erase1 = setTimeout(this.erase, this.betweenWords);
      }
    },
    erase() {
      /*
        if we srill havent erased all the charaters of the current words
          - continueremoving them from span.typedWords innerHTML 
          - decrement this.charIndex at each iteration
        else
          - move on to the next word
            if we're at the end of this.words 
              - reset this.wordIndex to 0
          - invoke this.type() to type the next word as per the current value of this.wordIndex   
      */
      if (this.charIndex > 0) {
        this.$refs.typedWords.innerHTML = this.words[this.wordIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex--;
        this.timeOutID_erase2 = setTimeout(this.erase, this.eraseSpeed);
      } else {
        this.wordIndex++;
        if (this.wordIndex == this.words.length) {
          this.wordIndex = 0;
        }
        this.timeOutID_type2 = setTimeout(this.type, this.typeSpeed);
      }
    },
  },
  mounted() {
    this.timeOutID_type3 = setTimeout(this.type, this.betweenWords);
  },
  destroyed() {
    /*
      clear timeouts before component is unmounted
    */
    clearTimeout(this.timeOutID_type1);
    clearTimeout(this.timeOutID_type2);
    clearTimeout(this.timeOutID_type3);
    clearTimeout(this.timeOutID_erase1);
    clearTimeout(this.timeOutID_erase2);
  },
};
</script>

<style>
#content-section section{
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
.btn {
  font-size: 15px;
  font-weight: 600;
  padding: 12px 35px;
  background: var(--primary);
  color: #fff;
  letter-spacing: 1.12px;
  font-weight: 500;
  border-radius: 40px;
  display: inline-block;
  white-space: nowrap;
  border: none;
  box-shadow: 3px 3px 5px 0px rgb(0 0 0 / 20%);
  transition: all 0.25s ease-in;
  animation-name: jello;
  animation-duration: 2s;
  animation-delay: 8s;
  animation-iteration-count: 3;
  animation-timing-function: ease-out;
  animation-fill-mode: initial;
}
.btn:hover {
  transform: scale(1.05);
  box-shadow: none;
  font-weight: 600;
}
</style>
