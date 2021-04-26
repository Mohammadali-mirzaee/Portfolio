<template>
  <div>
    <div class="projects">
      <h1 class="project">Project</h1>
      <b-container class="bv-example-row">
        <CarouselCard
          :interval="7000"
          height="400px"
          type="card"
          arrow="always"
        >
          <CarouselCardItem class="item">
            <b-col @click="economy" class="item">
              <b-card
                :img-src="myeconomy"
                style="  object-fit: cover; background:transparent;"
                img-alt="Image"
              >
                <section>
                  <h2>MyEconomy</h2>
                  <p>
                    Vue Js
                  </p>
                </section>
              </b-card>
            </b-col>
          </CarouselCardItem>

          <CarouselCardItem>
            <b-col @click="slid" class="item">
              <b-card
                :img-src="slider"
                style="  object-fit: cover; background:transparent;"
                img-alt="Image"
              >
                <section>
                  <h2>Slider</h2>
                  <p>
                    Javascript
                  </p>
                </section>
              </b-card>
            </b-col>
          </CarouselCardItem>
          <CarouselCardItem>
            <b-col @click="bi" class="item">
              <b-card
                :img-src="bio"
                style="  object-fit: cover; background:transparent;"
                img-alt="Image"
              >
                <section>
                  <h2>Cinema</h2>
                  <p>
                    Html & Css
                  </p>
                </section>
              </b-card>
            </b-col></CarouselCardItem
          >
        </CarouselCard>
      </b-container>
    </div>
  </div>
</template>

<script>
import { CarouselCard, CarouselCardItem } from "vue-carousel-card";
import "vue-carousel-card/styles/index.css";
export default {
  data() {
    return {
      myeconomy: require("@/assets/myeconomy.png"),
      slider: require("@/assets/slider1.png"),
      bio: require("@/assets/bio.png"),
    };
  },
  components: {
    CarouselCard,
    CarouselCardItem,
  },
  methods: {
    economy() {
      location.href = "https://myeconomy.netlify.app";
    },
    slid() {
      location.href = "https://hopeful-carson-2313ab.netlify.app/";
    },
    bi() {
      location.href = "https://elastic-mirzakhani-30574d.netlify.app/";
    },
  },
};
</script>
<style scoped>
.item {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: linear-gradient(90deg, rgb(18, 34, 65), rgb(67, 21, 85));
  transition: transform 0.2s;
}
.item:hover {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.5);
}
.projects {
  padding-top: 50px;
  background: radial-gradient(0.25turn, rgb(0, 0, 0) 0%, rgb(32, 13, 44) 100%);
}
.project {
  color: aliceblue;
  text-align: center !important;
  padding: 20px;
}
</style>
