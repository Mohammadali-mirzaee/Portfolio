<template>
  <div>
    <!--     <div class="main" v-bind:style="{ backgroundColor: color }">
      <div>
        <header>
          <p>change the Theme</p>
          <div class="h2 mb-0">
            <b-icon icon="arrow-down"></b-icon>
          </div>
          <input type="color" v-model="color" class="chng-color" />
          <p class="text">My Projects</p>
        </header>
        <h2>The first Api project</h2>
        <b-button
          variant="outline-primary"
          id="api-process"
          @click="showApi = !showApi"
          >Click Here</b-button
        >
        <div v-if="showApi">
          <another value="Some Api " />
        </div>
      </div>
    </div>
    <div class="bored" v-bind:style="{ backgroundColor: color }">
      <h4>
        Are You Bored
      </h4>
      <h2 v-if="showBored">
        {{ boreds.activity }}
      </h2>
      <h3></h3>
      <div class="row justify-content-center">
        <table class="table" style=" width : 400px">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ boreds.type }}</td>
              <td>{{ boreds.link }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <input
        v-if="showBored"
        v-bind:value="message"
        v-on:click="reload"
        type="button"
      />
    </div> -->
  </div>
</template>

<script>
/* import another from "../components/another.vue";
export default {
  components: { another },
  name: "api-process",
  data() {
    return {
      showApi: false,
      boreds: null,
      showBored: true,
      message: "Refresh",
      color: " rgb(156, 184, 236)",
    };
  },
  methods: {
    reload() {
      this.message = "Update";
      location.reload();
    },
  },

  created() {
    fetch("https://www.boredapi.com/api/activity/", {
      medthod: "GET",
    })
      .then((response) => response.json())
      .then((rsl) => {
        console.log((this.boreds = rsl));
      });
  },
}; */
</script>

<style scoped>
/* .main {
  min-height: 70vh;
  margin: 10px 35px;
  font-family: "Oswald", sans-serif;
}
.bored {
  padding-top: 60px;
  min-height: 50vh;
  margin: 10px 35px;
  font-family: "Oswald", sans-serif;
}
.text {
  font-size: 100px;
  color: aliceblue;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
} */
</style>
*/ */
