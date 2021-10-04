<template>
  <div class="container p-5 mt-5">
    <div v-if="search != null" class="pt-5 mt-5 row">
      <div v-for="item in search" :key="item.name" class="col-md-4 col-12 mb-5">
        <div class="text-center" style="height: 100%">
          <div class="sp_home">
            <img :src="item.img" class="img-fluid" alt="" />
            <router-link :to="`/product/${item.id}`">
              <div class="overlay"></div>
            </router-link>
            <div class="ver_mas text-center">
              <p class="go-arrow" @click="addToCart(item.id), callvuex()">
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
    <div v-else class="mt-5 pt-5">
      <p class="text-center">KHÔNG TÌM THẤY SẢN PHẨM</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        getsp:[]
    };
  },
  computed: {
    search() {
      return this.$store.state.search_string;
    },
  },
  methods: {
    addToCart(value) {
      for (let i = 0; i < this.$store.state.search_string.length; i++) {
        if (this.$store.state.search_string[i].id == value) {
          this.getsp = this.$store.state.search_string[i];
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
};
</script>