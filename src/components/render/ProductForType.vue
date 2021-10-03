<template>
  <div class="container px-lg-5 pt-5">
    <div class="px-lg-5">
      <div class="row">
        <!--  -->
        <div class="warpper pt-5">
          <input class="radio" id="one" name="group" type="radio" checked />
          <input class="radio" id="two" name="group" type="radio" />
          <input class="radio" id="three" name="group" type="radio" />
          <div class="tabs">
            <label class="tab" id="one-tab" for="one">BLISSBERRY</label>
            <label class="tab" id="two-tab" for="two">UNTITLED</label>
          </div>
          <!--  -->
          <div class="panels pt-5 mt-5">
            <div class="panel" id="one-panel">
              <!-- content -->
              <div class="row">
                <div
                  v-for="item in blissberry"
                  :key="item.id"
                  :item="item"
                  class="col-md-4 col-12 mb-5"
                >
                  <div class="text-center" style="height: 100%">
                    <div class="sp_home">
                      <img :src="item.img" class="img-fluid" alt="" />
                      <router-link :to="`/product/${item.id}`">
                        <div class="overlay"></div>
                      </router-link>
                      <!-- <div class="overlay"></div> -->
                      <div class="ver_mas text-center">
                        <p
                          class="go-arrow"
                          @click="addToCart(item.id), callvuex()"
                        >
                          Thêm vào giỏ
                        </p>
                      </div>
                    </div>
                    <div class="card-body">
                      <p class="namesp">{{ item.name }}</p>
                      <h5 class="price">{{ formatPrice(item.price) }} VND</h5>
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->
            </div>
            <div class="panel" id="two-panel">
              <!-- content -->
              <div class="row">
                <div
                  v-for="item in untitled"
                  :key="item.id"
                  :item="item"
                  class="col-md-4 col-12 mb-5"
                >
                  <div class="text-center" style="height: 100%">
                    <div class="sp_home">
                      <img :src="item.img" class="img-fluid" alt="" />
                      <router-link :to="`/product/${item.id}`">
                        <div class="overlay"></div>
                      </router-link>
                      <div class="ver_mas text-center">
                        <p
                          class="go-arrow"
                          @click="addToCart(item.id), callvuex()"
                        >
                          Thêm vào giỏ
                        </p>
                      </div>
                    </div>
                    <div class="card-body">
                      <!-- <router-link :to="`/product/${item.id}`"> </router-link> -->
                      <p class="namesp">{{ item.name }}</p>
                      <h5 class="price">{{ formatPrice(item.price) }} VND</h5>
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->
            </div>
            <!--  -->
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      getsp: [],
    };
  },
  methods: {
    addToCart(value) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].id == value) {
          this.getsp = this.items[i];
        }
      }
    },
    callvuex() {
      this.$store.commit("addToCart", this.getsp);
    },
    formatPrice(value) {
      // toFIxed(so duoi)
      let val = (value / 1).toFixed(0);
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  created() {
   fetch("https://my-json-server.typicode.com/DonkPhuc/mbox-api/items")
      .then((res) => res.json())
      .then((data) => (this.items = data));
  },
  computed: {
    blissberry() {
      let data = this.items.filter(function (e) {
        return e.type == "blissberry";
      });
      return data;
    },
    untitled() {
      let data = this.items.filter(function (e) {
        return e.type == "untitled";
      });
      return data;
    },
  },
};
</script>

<style scoped>
.nav {
  display: inline-block;
}
@import url("https://fonts.googleapis.com/css?family=Arimo:400,700&display=swap");
body {
  background: #cddc39;
  font-family: "Arimo", sans-serif;
}
h2 {
  color: #000;
  text-align: center;
  font-size: 2em;
}
.warpper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tab {
  cursor: pointer;
  padding: 20px 40px;
  margin: 0px 2px;
  background: #000;
  display: inline-block;
  color: #fff;
  border-radius: 3px 3px 0px 0px;
  box-shadow: 0 0.2rem 0.5rem #524e4e80;
  margin-top: 50px;
  text-align: center;
}
.panel {
  display: none;
  animation: fadein 0.8s;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.panel-title {
  font-size: 1.5em;
  font-weight: bold;
}
.radio {
  display: none;
}
#one:checked ~ .panels #one-panel,
#two:checked ~ .panels #two-panel,
#three:checked ~ .panels #three-panel {
  display: block;
}
#one:checked ~ .tabs #one-tab,
#two:checked ~ .tabs #two-tab {
  background: #fffffff6;
  color: #000;
  border-top: 3px solid #000;
  padding: 25px 40px;
}
</style>