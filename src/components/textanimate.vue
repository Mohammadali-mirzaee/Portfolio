<template>
  <div>
    <section id="main-intro">
      <div class="front-end">
        <h1>Im Mohammadali</h1>
      </div>
      <div>
        <p class="text">
          <span class="vue"> developer </span>
          <span class="react"> <b-icon-code-slash></b-icon-code-slash> </span>
          <span class="react-native">
            <span class="textchange"></span>
          </span>
        </p>
      </div>
    </section>

    <!--  <h1 class="mohammad ">
        <textanimate />
        HI <br />
        Im Mohammadali
        <p class="text">
          Web developer &<br />
          Web desigener
        </p>
      </h1> -->
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.text {
  font-size: 90px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: rgb(255, 255, 255);
}

#main-intro {
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Oswald", sans-serif;
}

.front-end {
  position: relative;
  bottom: 1rem;
  left: 0;
  animation: front-end 2s;
  animation-fill-mode: forwards;
  font-family: "Oswald", sans-serif;
  color: rgb(255, 255, 255);
}
.vue {
  position: relative;
  top: 1rem;
  left: -3rem;
  animation: vue 2s;
  animation-delay: 1.2s;
  animation-fill-mode: forwards;
}

.react {
  position: relative;
  top: 1rem;
  left: 1rem;
  animation: react 2s;
  animation-delay: 2.2s;
  animation-fill-mode: forwards;
}

.react-native {
  position: relative;
  top: 1rem;
  left: 3rem;
  animation: react-native 2s;
  animation-delay: 3.2s;
  animation-fill-mode: forwards;
}
.textchange::before {
  content: "Html & Css ";
  animation: animate infinite 10s;
  border-bottom: 3px solid;
  padding-right: 10px;
  padding-left: 15px;
}
@keyframes animate {
  0% {
    content: "Vue ";
  }

  50% {
    content: "React";
  }

  75% {
    content: "Node js";
  }
}

@keyframes front-end {
  from {
    bottom: 1rem;
  }
  to {
    bottom: 0rem;
    font-weight: bold;
  }
}

@keyframes vue {
  from {
    top: 1rem;
    left: -3rem;
  }
  to {
    top: 0rem;
    left: 0rem;
  }
}

@keyframes react {
  from {
    top: 1rem;
    left: 1rem;
  }
  to {
    top: 0rem;
    left: 0rem;
  }
}

@keyframes react-native {
  from {
    top: 1rem;
    left: 3rem;
  }
  to {
    top: 0rem;
    left: 0rem;
  }
}
@media screen and (max-width: 700px) {
  #main-intro,
  .text {
    width: auto;
    font-size: 50px;
  }
}
</style>
