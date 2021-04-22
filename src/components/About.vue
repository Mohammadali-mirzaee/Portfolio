<template>
  <div>
    <main class="main">
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

      <a class="resume" href="/images/myw3schoolsimage.jpg" download="w3logo">
        <span> Download <span style="color:#be73ff">Resume</span> </span>
      </a>

      <!--    <div class="skills">
        <h1>My skills</h1>
        <b-container class="bv-example-row">
          <b-row>
            <b-col class="vue">
              <h2>Vue Developer</h2>
              <p>
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </b-col>
            <b-col>
              <h2>PRODUCT DESIGN</h2>
              <p>
                and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMak
              </p>
            </b-col>
          </b-row>
        </b-container>
      </div> -->
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
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
.main {
  background: radial-gradient(circle, rgb(7, 7, 7) 0%, rgb(26, 7, 37) 100%);

  min-width: 100vh;
  min-height: 80vh;
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

.skills {
  font-family: "Oswald", sans-serif;
}
.vue {
  background-color: rgb(188, 189, 255);
}
</style>
