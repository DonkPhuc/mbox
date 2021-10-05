<template>
  <main class="container mt-5 pt-5">
    <img class="py-5 mt-5" src="../assets/about-us.png" alt="" />
    <!--  -->
    <div class="mx-auto re-w p-lg-5">
      <b>MBox là ai? </b>
      <p>
        Ra mắt từ 2015, chúng mình được biết đến là chiếc hộp làm đẹp đầu tiên
        tại Việt Nam với mô hình mang đến cho khách hàng cơ hội trải nghiệm các
        sản phẩm làm đẹp mới và nổi bật của các thương hiệu trên thị trường từ
        đó đi đến quyết định mua hàng lâu dài.
      </p>
      <p>
        Mô hình này đã được giới yêu làm đẹp đón nhận, giúp Ma Belle Box trở
        thành một “chuyên gia làm đẹp” và xây dựng được cộng đồng riêng với
        50,000 khách hàng.
      </p>
      <p>
        Theo thời gian, xu hướng làm đẹp phát triển đòi hỏi thương hiệu có sự
        thay đổi để thích nghi và chúng mình cũng không nằm ngoài xu hướng đó.
      </p>

      <b> Trong tương lai… </b>
      <p>
        Vẫn giữ vai trò như một “chuyên gia làm đẹp”, Ma Belle Box giờ đây sở
        hữu những dòng làm đẹp của riêng mình, mang đến cho bạn những trải
        nghiệm sản phẩm hoàn toàn mới, bắt nhịp xu hướng và chất lượng bởi các
        chuyên gia và công nghệ sản xuất hàng đầu tại Hàn Quốc, đã từng hợp tác
        với các thương hiệu mỹ phẩm nổi tiếng trên Thế giới.
      </p>
      <ul>
        <li>
          Untitled: dòng sản phẩm trang điểm trẻ trung dành cho các cô nàng mang
          tâm hồn tự do.
        </li>
        <li>
          Bliss Berry: ra đời với mục tiêu mang đến sản phẩm làm đẹp an toàn,
          chất lượng cho phụ nữ mang thai.
        </li>
      </ul>
      <p>
        Cùng Ma Belle Box để mỗi ngày càng trở nên xinh đẹp và tự tin toả sáng!
      </p>
      <p>From Ma Belle Box with love,</p>
    </div>
    <div class="re-i hover-zoom bg-image">
      <img
        src="https://mabellebox.vn/wp-content/uploads/2020/03/aboutus1.jpg"
        class="img-fluid"
        alt=""
      />
    </div>
    <!--  -->
    <div class="text-center">
      <img src="../assets/f-item.png" class="w-auto py-5" alt="" />
    </div>
    <!-- prod -->
    <Render />
    <!--  -->
    <div class="text-center my-5">
      <router-link to="/products" @click="scrollToTop">
        <button class="see-more mb-5">Xem Thêm</button>
      </router-link>
    </div>
  </main>
</template>

<script>
import Render from "./render/ProductList.vue";
export default {
  components: {
    Render,
  },
  methods:{
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  }
};
</script>
<style scoped>
.re-w {
  width: 100%;
}

@media screen and (min-width: 768px) {
  .re-w {
    width: 75%;
  }
}

@media screen and (max-width: 768px) {
  .re-i {
    display: none;
  }
}
</style>