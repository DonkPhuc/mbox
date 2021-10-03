<template>
  <div class="container px-lg-5">
    <div class="px-lg-5">
      <div class="row">
        <div
          v-for="item in items"
          :key="item.id"
          :item="item"
          class="col-md-4 col-12 mb-5"
        >
          <div class="text-center" style="height: 100%">
            <div class="sp_home">
              <!-- <router-link :to="`/product/${item.id}`">
                <img :src="item.img" class="img-fluid" alt="" />
              </router-link> -->

              <img :src="item.img" class="img-fluid" alt="" />
              <router-link :to="`/product/${item.id}`">
                <div class="overlay"></div>
              </router-link>
              <!-- <div class="overlay"></div> -->
              <div class="ver_mas text-center">
                <p class="go-arrow" @click="addToCart(item.id), callvuex()">
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

};
</script>

<style lang="css">
.namesp {
  color: black;
  display: inherit;
  line-height: 20px;
  font-weight: 500;
}
.price {
  font-weight: 700;
}
</style>