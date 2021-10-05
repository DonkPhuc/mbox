<template>
  <!--  -->
  <div class="container mt-5 pt-5">
    <div class="col-md-12 mt-5">
      <div class="invoice">
        <div class="invoice-company text-inverse f-w-600">
          <b>MBOX</b>
        </div>
        <div class="invoice-header">
          <div class="invoice-from">
            <small>NGÂN HÀNG</small>
            <address class="m-t-5 m-b-5">
              <strong class="text-inverse"
                >NGÂN HÀNG QUÂN ĐỘI <br />
                MB BANK</strong
              ><br />
            </address>
          </div>
          <div class="invoice-to">
            <small>Số Tài Khoản</small>
            <address class="m-t-5 m-b-5">
              <strong class="text-inverse"
                >881218042001 <br />
                ĐỖ NGỌC KIM PHÚC</strong
              ><br />
            </address>
          </div>
          <div class="invoice-date">
            <small>Invoice</small>
            <div class="date text-inverse m-t-5">{{ currentDate() }}</div>
            <!-- <div class="invoice-detail">#23DSS</div> -->
          </div>
        </div>
        <!-- end invoice-header -->
        <!-- begin invoice-content -->
        <div class="invoice-content">
          <!-- begin table-responsive -->
          <div class="table-responsive">
            <table class="table table-invoice">
              <thead>
                <tr>
                  <th>SẢN PHẨM</th>
                  <th class="text-center" width="20%">Đơn Giá</th>
                  <th class="text-center" width="20%">Số Lượng</th>
                  <th class="text-right" width="20%">Tổng</th>
                </tr>
              </thead>
              <tbody v-for="i in Cart" :key="i">
                <tr>
                  <td>
                    <span class="text-inverse">{{ i.name }}</span
                    ><br />
                  </td>
                  <td class="text-center">
                    {{ formatPrice(i.price) }} <b>VND</b>
                  </td>
                  <td class="text-center">{{ i.quantity }}</td>
                  <td class="text-right">
                    {{ formatPrice(i.total) }} <b>VND</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- end table-responsive -->
          <!-- begin invoice-price -->
          <div class="invoice-price">
            <div class="invoice-price-right">
              <small>TỔNG CỘNG</small>
              <span class="f-w-600"
                >{{ formatPrice($store.state.tongtienincart )}} <b>VND</b></span
              >
            </div>
          </div>
          <!-- end invoice-price -->
        </div>
        <!-- end invoice-content -->
        <!-- begin invoice-note -->
        <div class="invoice-note">
          * Sản phẩm có thể đổi trả trong vòng 7 ngày<br />
          * Hàng sẽ được giao trong vòng 10 ngày<br />
        </div>
        <!-- end invoice-note -->
        <!-- begin invoice-footer -->
        <div class="invoice-footer">
          <p class="text-center m-b-5 f-w-600">ĐÃ NHẬN ĐƯỢC ĐƠN HÀNG <br> XIN CẢM ƠN QUÝ KHÁCH </p>
          <p class="text-center">
            <span class="m-r-10"
              ><i class="fa fa-fw fa-lg fa-globe"></i>
              phucdongocc@gmail.com</span
            >
          </p>
        </div>
        <!-- end invoice-footer -->
      </div>
    </div>
  </div>
  <div class="container py-5">
    <div class="text-center">
      <router-link to="/products" @click="scrollToTop">
        <button class="see-more invoice-btn" @click="$store.commit('xoaCart')">
          Trở lại cửa hàng
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    Cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`;
      return date;
    },
    formatPrice(value) {
      // toFIxed(so duoi)
      let val = (value / 1).toFixed(0);
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    scrollToTop(){
      window.scrollTo(0, 0);
    }
  },
};
</script>
<style scoped>
.invoice {
  background: #fff;
}

.invoice-company {
  font-size: 20px;
}

.invoice-header {
  margin: 0 ;
  background: #f0f3f4;
  padding: 20px;
}

.invoice-date,
.invoice-from,
.invoice-to {
  display: table-cell;
  width: 1%;
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
</style>