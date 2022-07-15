<template>
  <div :class="['main-container', hideAside ? 'no-margin-left' : '']">
    <AsideSection :hide-aside="hideAside" />
    <div class="fixed-icon-container">
      <font-awesome-icon
        icon="fa-solid fa-chevron-circle-left"
        id="close-aside"
        v-show="!hideAside"
        @click="toggleHideAside"
      />
      <font-awesome-icon
        icon="fa-solid fa-chevron-circle-right"
        id="open-aside"
        v-show="hideAside"
        @click="toggleHideAside"
      />
    </div>
    <ContentSection />
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
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronCircleLeft, faChevronCircleRight);

export default {
  components: {
    AsideSection,
    ContentSection,
  },
  data() {
    return {
      hideAside: false,
    };
  },
  methods: {
    toggleHideAside() {
      if (!this.hideAside) {
        this.hideAside = true;
      } else {
        this.hideAside = false;
      }
    },
  },
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
  right: 20px;
  top: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: spin;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
  animation-fill-mode: initial;
}
.fixed-icon-container .svg-inline--fa {
  font-size: 35px;
  background: var(--text-black-700);
  color: var(--bg-black-900);
  border-radius: 50%;
  transition: all 0.25s ease-in;
}
.fixed-icon-container .svg-inline--fa:hover {
  background: var(--primary);
  box-shadow: none;
  opacity: 0.75;
}

@keyframes spin {
  to {
    transform: translateX(-5px);
    box-shadow: 3px 3px 5px 0px rgb(0 0 0 / 20%);
  }
}
</style>
