<template>
  <div class="container-md mt-5 px-md-5 py-5">
    <!-- cart -->
    <div class="px-lg-5 pt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-2">
          <b class="heading">SẢN PHẨM</b>
        </div>
        <div class="col-3 hide"></div>
        <div class="col-7">
          <div class="row text-right">
            <div class="col-6">
              <p class="mt-2 heading">SỐ LƯỢNG</p>
            </div>
            <div class="col-5 heading">
              <p class="mt-2">ĐƠN GIÁ</p>
            </div>
            <div class="col-1">
              <p class="mt-2"></p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row d-flex justify-content-center py-4 border-top border-bottom"
        v-for="i in cart"
        :key="i.id"
      >
        <div class="col-2">
          <div class="d-flex">
            <div class="book">
              <img :src="i.img" class="book-img" />
            </div>
          </div>
        </div>
        <div class="col-3 hide">
          <div class="mt-5 pt-3">
            <h6 class="mob-text">{{ i.name }}</h6>
          </div>
        </div>
        <div class="my-auto col-7">
          <div class="row text-right">
            <div class="col-6">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn-plus" @click="trusp(i.id)">
                  -
                </button>
                <p class="px-1">{{ i.quantity }}</p>
                <button type="button" class="btn-plus" @click="congsp(i.id)">
                  +
                </button>
              </div>
            </div>
            <div class="col-4">
              <p class="mb-0 price">{{ formatPrice(i.price) }} VND</p>
            </div>
            <div class="col-2">
              <!-- <button @click="xoasp(i.id)" class="float-end">x</button> -->
              <button
                type="button"
                class="btn-close float-end"
                aria-label="Close"
                @click="xoasp(i.id)"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- info -->
    <div class="px-lg-5">
      <div class="text-end">
        <h1 class="pt-3 pb-5">{{ formatPrice(tinhtien()) }} VND</h1>
      </div>
      <h1 class="py-5">THÔNG TIN KHÁCH HÀNG</h1>
      <form @submit="onSubmit()"  class="row">
        <div class="col-12">
          <input
            class="effect-8"
            type="text"
            v-model="name"
            placeholder="Họ và Tên"
          />
        </div>
        <div class="col-6 py-3">
          <input
            class="effect-8"
            type="email"
            v-model="email"
            placeholder="Địa chỉ Email"
          />
        </div>
        <div class="col-6 py-3">
          <input
            class="effect-8"
            type="number"
            v-model="phonenumber"
            placeholder="Số Điện Thoại"
          />
        </div>
        <div class="col-12">
          <input
            class="effect-8"
            type="text"
            v-model="address"
            placeholder="Địa Chỉ"
          />
        </div>
        <!-- erorrs -->
        <div class="mt-5 errors pt-3" v-if="errors.length">
          <ul>
            <li v-for="error in errors" :key="error">
              <i>{{ error }}</i>
            </li>
          </ul>
        </div>
        <!-- errors -->
        <h1 class="py-5">THÔNG TIN GIAO HÀNG</h1>
        <div class="col-6">
          <input type="checkbox" id="box-1" checked />
          <label for="box-1">CHUYỂN KHOẢN NGÂN HÀNG</label>
        </div>
        <div class="col-6">
          <input type="checkbox" id="box-2" />
          <label for="box-2">TRẢ TIỀN MẶT KHI NHẬN HÀNG</label>
        </div>
        <div class="col-12 py-4">
          <textarea
            class="text-center pt-4"
            rows="7"
            disabled
            placeholder="Chuyển khoản giá trị đơn hàng bao gồm sản phẩm + phí
ship qua tài khoản:
Chủ tài khoản: UNTITLED
Số tài khoản: 060210533535
Công ty TNHH Mỹ phẩm MBB
Sacombank chi nhánh HCM"
          />
        </div>
        <div class="col-12">
          <input type="checkbox" id="box-3" v-model="dkhoan" />
          <label for="box-3"
            >TÔI ĐÃ ĐỌC VÀ ĐỒNG Ý VỚI ĐIỀU KHOẢN VÀ ĐIỀU KIỆN CỦA WEBSITE
            *</label
          >
        </div>
        <div class="text-center pt-4 mt-5">
          <button class="btn-1" @click="checkForm" >ĐẶT HÀNG</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tongtien: 0,
      name: null,
      phonenumber: null,
      email: null,
      address: null,
      dkhoan: false,
      errors: [],
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    congsp(value) {
      for (var i = 0; i < this.$store.state.cart.length; i++) {
        if (this.$store.state.cart[i].id == value) {
          this.$store.state.cart[i].quantity += 1;
        }
      }
    },
    trusp(value) {
      for (var i = 0; i < this.$store.state.cart.length; i++) {
        if (this.$store.state.cart[i].id == value) {
          if (this.$store.state.cart[i].quantity > 1) {
            this.$store.state.cart[i].quantity -= 1;
          } else {
            this.$store.state.cart[i].quantity == 1;
          }
        }
      }
    },
    tinhtien() {
      this.tongtien = 0;
      for (var i = 0; i < this.$store.state.cart.length; i++) {
        this.$store.state.cart[i].total =
          this.$store.state.cart[i].price * this.$store.state.cart[i].quantity;
        this.tongtien += this.$store.state.cart[i].total;
      }
      this.$store.state.tongtienincart = this.tongtien;
      return this.tongtien;
    },
    xoasp(value) {
      for (var i = 0; i < this.$store.state.cart.length; i++) {
        if (this.$store.state.cart[i].id == value) {
          this.$store.state.cart.splice(i, 1);
        }
      }
    },
    checkForm(e) {
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (this.name && this.phonenumber && this.address && this.email && this.dkhoan)
        return true;
      this.errors = [];
      if (!this.name || this.name.length < 2)
        this.errors.push("Vui Lòng Điền Tên Ít Nhất 2 Từ");
      if (!this.phonenumber || this.phonenumber.length < 10)
        this.errors.push("Vui Lòng Điền Số Điện Thoại Có 10 Chữ Số");
      if (!this.address || this.address.length < 10)
        this.errors.push("Vui Lòng Điền Địa Chỉ");
      if (!this.email || this.email.match(!validRegex))
        this.errors.push("Vui Lòng Điền Email Chính Xác");
      if (!this.dkhoan || this.dkhoan != true)
        this.errors.push("Vui Lòng Đọc Điều Khoản!");
      e.preventDefault();
      this.$store.state.invoice.push(this.name, this.address);
    },
    formatPrice(value) {
      // toFIxed(so duoi)
      let val = (value / 1).toFixed(0);
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    onSubmit() {
      this.$router.push("/cart/order-received");
    },
  },
};
</script>

<style scoped>
h1 {
  color: rgb(128, 3, 3);
}
.book-img {
  width: 150px;
  height: 150px;
}
.heading {
  font-size: 12px;
}
.mob-text {
  font-size: 13px;
}
.btn-plus {
  width: 30px;
  margin-bottom: 15px;
  background: rgb(221, 221, 221);
  border: none;
}
.price {
  font-size: 14px;
}
@media screen and (max-width: 768px) {
  .mob-text {
    display: none;
  }
  .book-img {
    width: 110px;
    height: 110px;
  }
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

input[type="checkbox"] + label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 20px;
  color: rgb(0, 0, 0);
  cursor: pointer;
}

input[type="checkbox"] + label:last-child {
  margin-bottom: 0;
}

input[type="checkbox"] + label:before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #4d4d4d;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.6;
  -webkit-transition: all 0.12s, border-color 0.08s;
  transition: all 0.12s, border-color 0.08s;
}

input[type="checkbox"]:checked + label:before {
  width: 10px;
  top: -5px;
  left: 5px;
  border-radius: 0;
  opacity: 1;
  border-top-color: transparent;
  border-left-color: transparent;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
textarea {
  width: 100%;
}
/* modal */
/*Invoice*/
.invoice {
  background: #fff;
  padding: 20px;
}

.invoice-company {
  font-size: 20px;
}

.invoice-header {
  margin: 0 -20px;
  background: #f0f3f4;
  padding: 20px;
}

.invoice-date,
.invoice-from,
.invoice-to {
  display: table-cell;
  width: 1%;
}

.invoice-from,
.invoice-to {
  padding-right: 20px;
}

.invoice-date .date,
.invoice-from strong,
.invoice-to strong {
  font-size: 16px;
  font-weight: 600;
}

.invoice-date {
  text-align: right;
  padding-left: 20px;
}

.invoice-price {
  background: #f0f3f4;
  display: table;
  width: 100%;
}

.invoice-price .invoice-price-left,
.invoice-price .invoice-price-right {
  display: table-cell;
  padding: 20px;
  font-size: 20px;
  font-weight: 600;
  width: 75%;
  position: relative;
  vertical-align: middle;
}

.invoice-price .invoice-price-left .sub-price {
  display: table-cell;
  vertical-align: middle;
  padding: 0 20px;
}

.invoice-price small {
  font-size: 12px;
  font-weight: 400;
  display: block;
}

.invoice-price .invoice-price-row {
  display: table;
  float: left;
}

.invoice-price .invoice-price-right {
  width: 25%;
  background: #2d353c;
  color: #fff;
  font-size: 28px;
  text-align: right;
  vertical-align: bottom;
  font-weight: 300;
}

.invoice-price .invoice-price-right small {
  display: block;
  opacity: 0.6;
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 12px;
}

.invoice-footer {
  border-top: 1px solid #ddd;
  padding-top: 10px;
  font-size: 10px;
}

.invoice-note {
  color: #999;
  margin-top: 80px;
  font-size: 85%;
}

.invoice > div:not(.invoice-footer) {
  margin-bottom: 20px;
}

.btn.btn-white,
.btn.btn-white.disabled,
.btn.btn-white.disabled:focus,
.btn.btn-white.disabled:hover,
.btn.btn-white[disabled],
.btn.btn-white[disabled]:focus,
.btn.btn-white[disabled]:hover {
  color: #2d353c;
  background: #fff;
  border-color: #d9dfe3;
}
.errors {
  background: rgba(255, 15, 15, 0.178);
}
</style>