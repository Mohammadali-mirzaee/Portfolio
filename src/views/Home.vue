<template>
  <div>
    <main>
      <!--       <img src="@/assets/bg.jpg" alt="" />
 -->
      <b-card-text><textanimate /> </b-card-text>
      <img
        class="img-ani"
        src="https://media.giphy.com/media/26DoiqmYcxgFICb3G/giphy.gif"
      />
      <About v-if="show" />
      <Item />
    </main>

    <footer class="footer-area">
      <contact />

      <div class="container">
        <div class="row">
          <div class="col-md-5 order-2 order-md-1">
            <div class="copyright">
              <p>Copyright @ 2021. All Right Reserved</p>
            </div>
          </div>
          <div class="col-md-7 order-1 order-md-2">
            <div class="social">
              <a href="https://www.facebook.com" target="_blank"> facebook </a
              ><a
                href="https://www.instagram.com/mohammadalimirzaeee/"
                target="_blank"
              >
                instagram </a
              ><a
                href="https://www.linkedin.com/in/mohammadali-mirzaee-4223231b5/"
                target="_blank"
              >
                linkedin
              </a>
              <a href="https://github.com/Mohammadali-mirzaee" target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import textanimate from "../components/textanimate.vue";
import About from "../components/About.vue";
import Item from "../components/Item";
import contact from "../components/contact";

export default {
  components: { textanimate, About, Item, contact },
  data() {
    return {
      show: true,
    };
  },
  /*   methods: {
    test() {
      alert("hej");
    },
  },
  mounted() {
    document.addEventListener("scroll", this.test);
  }, */
  name: "Home",
};
</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vh;
  margin: 0;
  padding: 0;
}
img {
  width: 300px;
}
main {
  font-family: sans-serif;
  min-height: 100vh;
  min-width: 100vh;
  background: radial-gradient(circle, rgb(0, 0, 0) 0%, rgb(32, 13, 44) 100%);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

footer {
  background: radial-gradient(circle, rgb(0, 0, 0) 0%, rgb(32, 13, 44) 100%);
  color: aliceblue;
}
/* .copyright {
  height: 100px;
  width: 100%;
  background: radial-gradient(
    circle,
    rgb(252, 197, 197) 0%,
    rgb(100, 11, 155) 100%
  );
  opacity: 0.2;
  padding: 50px;
} */
/* h */
.footer-area {
  color: #bbb;
  font-size: 14px;
  padding: 30px 0;
}
.social {
  text-align: right;
}
.social a {
  color: #bbb;
  line-height: 1;
  text-decoration: none;
  padding: 5px;
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
}
@media (max-width: 768px) {
  main,
  footer {
    flex-direction: column;
    width: auto;
    flex: 50%;
    height: 100%;
  }
}
</style>
