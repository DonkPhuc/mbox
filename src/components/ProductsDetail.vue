<template>
  <div class="container py-5 mt-5 px-xl-5">
    <div class="row text-md-center text-lg-start">
      <div class="col-lg-5 col-12 text-center detail">
        <img class="mt-5" :src="items.img" alt="" />
      </div>
      <div class="col-lg-7 col-12 px-5">
        <div class="px-xl-5">
          <h3 class="name my-5">{{ items.name }}</h3>
          <h4>{{ formatPrice(items.price) }} VND</h4>

          <h5 class="pt-5 pb-3 name">MÔ TẢ SẢN PHẨM</h5>
          <div class="">
            <p>Thành phần : {{ items.thanhphan }}</p>
            <p class="hdsd">Hướng dẫn sử dụng : {{ items.hdsd }}</p>
            <p>Xuất sứ : {{ items.noisx }}</p>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6 text-center">
              <router-link to="/cart" @click="addToCart(), scrollToTop()"
                ><button class="mt-4 btn-1">MUA NGAY</button></router-link
              >
            </div>
            <div class="col-12 col-lg-6 text-center">
              <button class="mt-4 see-more" @click="addToCart()">
                THÊM VÀO GIỎ
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-lg-5">
        <div class="px-lg-5 pt-5">
          <div class="px-lg-5">
            <div class="px-lg-5">
              <!--  -->
              <div class="my-5 text-center pt-5">
                <h1 class="name mt-5">ĐÁNH GIÁ</h1>
                <p>Chưa có đánh giá nào.</p>
                <h4>HÃY LÀ NGƯỜI ĐẦU TIÊN NHẬN XÉT “{{ items.name }}”</h4>
                <p>
                  Email của bạn sẽ không được hiển thị công khai. Các trường bắt
                  buộc được đánh dấu *
                </p>
              </div>
              <div class="row">
                <div class="col-md-6 col-12">
                  <input class="effect-8" type="text" placeholder="Tên" />
                </div>
                <div class="col-md-6 col-12 mt-md-0 mt-4">
                  <input class="effect-8" type="email" placeholder="Email" />
                </div>
                <div class="col-12 mt-4">
                  <textarea
                    class="effect-8 pt-4"
                    rows="7"
                    placeholder="Nhận xét"
                  />
                </div>
                <div class="text-center">
                  <button class="see-more mt-5">GỬI ĐI</button>
                </div>
              </div>
              <!--  -->
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
    };
  },
  created() {
    fetch(
      "https://my-json-server.typicode.com/DonkPhuc/mbox-api/items/" +
        this.$route.params.id
    )
      .then((res) => res.json())
      .then((data) => (this.items = data));
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.items);
    },
    formatPrice(value) {
      // toFIxed(so duoi)
      let val = (value / 1).toFixed(0);
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
.detail img {
  height: 400px;
  width: auto;
}
.see-more {
  border-radius: 0;
  background: #990202;
  color: white;
  padding: 15px;
  font-size: 18px;
  padding-right: 40px;
  padding-left: 40px;
  width: 240px;
}
.see-more:hover {
  background-color: black;
  color: white;
  transition: 700ms;
}
.btn-1 {
  border-radius: 0;
  background: #ffffff;
  color: rgb(0, 0, 0);
  padding: 15px;
  font-size: 18px;
  padding-right: 40px;
  padding-left: 40px;
  width: 240px;
}

.btn-1:hover {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  transition: 700ms;
}
.name {
  color: #800d0d;
  font-weight: 700;
}
.hdsd {
  text-align: justify;
}
.effect-8 {
  border: 1px solid rgb(0, 0, 0);
  padding: 7px 14px 9px;
  border-radius: 0%;
  width: 100%;
}
/*Checkboxes styles*/
input[type="checkbox"] {
  display: none;
}
/* .detail img{
  border: solid 1px black;
} */
</style>