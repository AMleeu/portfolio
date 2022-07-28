<template>
  <div :class="['main-container', hideAside || innerWidth < 1072 ? 'no-margin-left' : '']">
      <AsideSection
        :hide-aside="hideAside"
        @updateContent="updateContent"
        @shutdown="shutdown"
        :content="content"
      />
    <div :class="['fixed-icon-container', this.innerWidth <= 508 ? 'w-508':'']" @click="toggleHideAside">
      <font-awesome-icon
        icon="fa-solid fa-chevron-circle-left"
        id="close-aside"
        v-show="!hideAside"
      />
    </div>
    <div class="fixed-icon-container" @click="toggleHideAside">
      <font-awesome-icon
        icon="fa-solid fa-bars-staggered"
        id="open-aside"
        v-show="hideAside"
      />
    </div>
    <ContentSection v-if="content == 'home' || content == 'email me'" />
  </div>
</template>
<script>
import AsideSection from "./AsideSection.vue";
import ContentSection from "./ContentSection.vue";

/*
  import required font-awesome modules & components
*/
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronCircleLeft,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronCircleLeft, faBarsStaggered);

export default {
  emits:['shutdown'],
  components: {
    AsideSection,
    ContentSection,
  },
  data() {
    return {
      hideAside: false,
      innerWidth: 2000,
      /*
        will be used to diferrentiate when component is rendered
        onload or when user clicks shutdown
      */
      isShuttingDown:false,
      content: "home",
    };
  },
  methods: {
    toggleHideAside() {
        if (!this.hideAside) {
          this.hideAside = true;
        } else{
          this.hideAside = false;
        }
    },
    /*
      use value emitted from AsideSection
    */
    updateContent(content = "home") {
      this.content = content;
      this.hideAside = true;
    },
    /*
      pass along a value of true to the emited shutdown event 
      such that the parent component rendering it can 
      differentiate when it is rendered onload or when user clcks
      shutdown 
    */
    shutdown(){
      this.$emit('shutdown', 'user');
      this.$destroy();
    }
  },
  mounted(){
    /*
       when mounted
        -> update this.innerWidth 
        and if it is lower than 1072 hide AsideSection
    */
    this.innerWidth = window.innerWidth;
    if(window.innerWidth < 1072){
      this.hideAside = true;
    }
    /*
      on resize 
      -> update this.innerWidth 
    */
    window.addEventListener('resize', ()=>{
      this.innerWidth = window.innerWidth;
    });
  }
};
</script>

<style>
.main-container {
  margin-left: 270px;
  transition: all 0.25s ease-in;
}
.main-container.no-margin-left {
  margin-left: 0px;
}

.fixed-icon-container {
  height: 45px;
  width: 45px;
  cursor: pointer;
  position: fixed;
  z-index:1000;
  right: 15px;
  top: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: left 0.25s ease-in;
  animation-name: tada;
  animation-duration: 1s;
  animation-delay: 12s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
  animation-fill-mode: initial;
}
.fixed-icon-container .svg-inline--fa {
  font-size: 35px;
  background: var(--bg-black-700);
  color: var(--text-black-700);
  border-radius: 50%;
  transition: all 0.25s ease-in;
}
.fixed-icon-container .svg-inline--fa:hover {
  background: var(--primary);
  opacity: 0.75;
  box-shadow: 3px 3px 5px 0px rgb(0 0 0 / 20%);
}
.fixed-icon-container .svg-inline--fa#open-aside{
  font-size: 25px;
  color: var(--bg-black-700);
}
.fixed-icon-container .svg-inline--fa#open-aside:hover{
 color:var(--primary); 
 background: var(--bg-black-700);
}

</style>
