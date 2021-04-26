<template>
  <div id="app">
    <router-view />
    <Slide right width="600">
      <router-link to="/"><p class="router">Home</p></router-link>
      <router-link to="/about"
        ><p :state="false" @click="click" class="router">About</p></router-link
      >
      <!--       <router-link to="/project"><p class="router">Project</p></router-link>
 -->
    </Slide>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu"; // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
  components: {
    Slide,
    // Register your component
  },
  methods: {
    click() {},
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  min-width: 100vh;
  padding: 0;
  margin: 0;
}

.router {
  text-decoration: none;
  font-size: 50px;
  color: #e0dfdf;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

/* Slide */
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
  cursor: pointer;
}
.bm-burger-bars {
  background-color: #ffffff;
}
.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: #fff7f7;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background: radial-gradient(circle, rgb(0, 0, 0) 0%, rgb(32, 13, 44) 100%);
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(135, 152, 248, 0.3);
}

/* Slide */
</style>
