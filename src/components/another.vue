<template>
  <main>
    <div class="table-responsive">
      <h2>{{ value }}</h2>
      <table class="table" style=" width : 300px">
        <thead>
          <tr>
            <th>API</th>
            <th>Description</th>
            <th>category</th>
            <th>Auth</th>
            <th>HTTPS</th>
            <th>Cors</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="api in apies.entries" :key="api.API">
            <td>{{ api.API }}</td>
            <td>{{ api.Description }}</td>
            <td>{{ api.Category }}</td>
            <td>{{ api.Auth }}</td>
            <td>{{ api.HTTPS }}</td>
            <td>{{ api.Cors }}</td>
            <td>
              <a href="">{{ api.Link }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      apies: null,
      // description : this.result
    };
  },
  props: {
    value: String,
  },
  created() {
    fetch("https://api.publicapis.org/entries?category", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        this.apies = result;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    // onclick() {
    //   alert("hej");
    // },
  },
};
</script>

<style scoped>
.main {
  min-height: 100vh;
  min-width: 100vh;
  margin: 10px 35px;
}
</style>
