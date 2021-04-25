<template>
  <div>
    <main>
      <div class="container">
        <h1 class="about">
          About Me
        </h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum
        </p>
        <p class="signatur">
          Mohammadali
        </p>

        <div class="social-link">
          <a href="https://www.facebook.com/" target="_blank">
            <b-icon-instagram></b-icon-instagram> </a
          ><a href="https://www.twitter.com/" target="_blank"
            ><b-icon-facebook></b-icon-facebook></a
          ><a href="https://www.linked-in.com/" target="_blank"
            ><b-icon-linkedin></b-icon-linkedin></a
          ><a href="https://www.instagram.com/" target="_blank"
            ><b-icon-github></b-icon-github
          ></a>
        </div>
      </div>

      <a class="resume" :href="resume" download="download">
        <span> Download <span style="color:#be73ff">Resume</span> </span>
      </a>
      <h1 class="about">skills</h1>

      <div class="row">
        <b-row>
          <b-col>
            <vue-ellipse-progress
              :data="circles"
              :progress="70"
              :angle="-90"
              :color="gradient"
              :colorFill="colorFillGradient"
              emptyColor="aliceblue"
              :emptyColorFill="emptyColorFillGradient"
              :size="200"
              :thickness="4"
              emptyThickness="1%"
              lineMode="in 10"
              :legend="true"
              :legendValue="70"
              legendClass="legend-custom-style"
              dash="20 0.9"
              animation="reverse 700 400"
              :noData="false"
              :loading="false"
              fontColor="white"
              :half="false"
              :gap="5"
              dot="10 blue"
              fontSize="2rem"
            >
              <span slot="legend-value">%</span>
              <p slot="legend-caption">JavaScript</p> </vue-ellipse-progress
            ><img src="https://img.icons8.com/color/96/000000/javascript.png"
          /></b-col>
          <b-col>
            <vue-ellipse-progress
              :data="circles"
              :progress="60"
              :angle="-90"
              :color="gradient"
              :colorFill="colorFillGradient"
              emptyColor="aliceblue"
              :emptyColorFill="emptyColorFillGradient"
              :size="200"
              :thickness="4"
              emptyThickness="1%"
              lineMode="in 10"
              :legend="true"
              :legendValue="60"
              legendClass="legend-custom-style"
              dash="20 0.9"
              animation="reverse 700 400"
              :noData="false"
              :loading="false"
              fontColor="white"
              :half="false"
              :gap="5"
              dot="10 blue"
              fontSize="2rem"
            >
              <span slot="legend-value">%</span>
              <p slot="legend-caption">Vue Js</p>
            </vue-ellipse-progress>
            <img src="https://img.icons8.com/color/96/000000/vue-js.png" />
          </b-col>
          <b-col>
            <vue-ellipse-progress
              :data="circles"
              :progress="30"
              :angle="-90"
              :color="gradient"
              :colorFill="colorFillGradient"
              emptyColor="aliceblue"
              :emptyColorFill="emptyColorFillGradient"
              :size="200"
              :thickness="4"
              emptyThickness="1%"
              lineMode="in 10"
              :legend="true"
              :legendValue="30"
              legendClass="legend-custom-style"
              dash="20 0.9"
              animation="reverse 700 400"
              :noData="false"
              :loading="false"
              fontColor="white"
              :half="false"
              :gap="5"
              dot="10 blue"
              fontSize="2rem"
            >
              <span slot="legend-value">%</span>

              <p slot="legend-caption">Node Js</p>
            </vue-ellipse-progress>
            <img src="https://img.icons8.com/color/96/000000/nodejs.png" />
          </b-col>
          <b-col>
            <vue-ellipse-progress
              :data="circles"
              :progress="80"
              :angle="-90"
              :color="gradient"
              :colorFill="colorFillGradient"
              emptyColor="aliceblue"
              :emptyColorFill="emptyColorFillGradient"
              :size="200"
              :thickness="4"
              emptyThickness="1%"
              lineMode="in 10"
              :legend="true"
              :legendValue="80"
              legendClass="legend-custom-style"
              dash="20 0.9"
              animation="reverse 700 400"
              :noData="false"
              :loading="false"
              fontColor="white"
              :half="false"
              :gap="5"
              dot="10 blue"
              fontSize="2rem"
            >
              <span slot="legend-value">%</span>
              <p slot="legend-caption">Html & Css</p>
            </vue-ellipse-progress>
            <b-col>
              <img
                src="https://img.icons8.com/color/70/000000/html-5--v1.png"
              />
              <img src="https://img.icons8.com/color/70/000000/css3.png" />
            </b-col>
          </b-col>
        </b-row>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gradient: {
        radial: false,
        colors: [
          {
            color: "#be73ff",
            offset: "0",
            opacity: "1",
          },
          {
            color: "blue",
            offset: "100",
            opacity: "0.6",
          },
        ],
      },
      resume: require("@/assets/mohammadali.pdf"),
    };
  },
  components: {},
  methods: {
    test() {},
  },
  mounted() {},
};
</script>
i

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap");
body {
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vh;
}
main {
  background: radial-gradient(circle, rgb(7, 7, 7) 0%, rgb(26, 7, 37) 100%);
  color: aliceblue;
  min-width: 100vh;
  min-height: 100vh;
  animation: fadebackground 6s infinite;
}
/* .text {
  font-size: 100px;
  padding-top: 40px;
  color: aliceblue;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
} */
.about {
  color: rgb(247, 251, 255);
  font-family: "Oswald", sans-serif;
}
.about,
p {
  color: aliceblue;
  text-align: center !important;
  padding: 20px;
}
.signatur {
  font-family: "Nothing You Could Do", cursive;
  font-size: 30px;
  padding: 0;
}

.social-link,
a {
  display: inline-block;
  position: relative;
  padding: 0 20px;
  font-size: 20px;
  color: #fefeff;
}
.resume {
  display: block;
  font-size: 18px;
  margin: auto;
  margin-top: auto;
  margin-top: 20px;
  line-height: 1;
  color: #fefeff;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

.container {
  font-family: "Oswald", sans-serif;
  padding-top: 150px;
  position: relative;
  display: inline-block;
  width: 100%;
}
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}
/*  @media (max-width: 768px) {
  b-row {
    width: auto;
  }
} */
@media (max-width: 576px) {
  main,
  .row,
  .container {
    flex-direction: column;
  }
}
@media screen and (max-width: 700px) {
  main,
  .row,
  .container {
    flex-direction: column;
  }
}
</style>
