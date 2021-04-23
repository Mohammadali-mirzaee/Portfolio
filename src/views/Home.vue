<template>
  <div>
    <main class="main">
      <!--       <img src="@/assets/bg.jpg" alt="" />
 -->
      <b-card-text><textanimate /> </b-card-text>
      <img src="https://media.giphy.com/media/26DoiqmYcxgFICb3G/giphy.gif" />
    </main>
    <About v-if="show" />
    <Item />
    <footer class="footer">
      <contact />
      <p>Copyright @ 2021. All Right Reserved</p>
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
.main {
  font-family: sans-serif;
  min-height: 100vh;
  min-width: 100vh;
  background: radial-gradient(circle, rgb(0, 0, 0) 0%, rgb(32, 13, 44) 100%);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.footer {
  background: radial-gradient(circle, rgb(0, 0, 0) 0%, rgb(32, 13, 44) 100%);
  color: aliceblue;
}

/* h */
</style>
