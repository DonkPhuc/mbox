<template>
  <nav
    :class="{ 'scrolled-nav': scrolledNav }"
    class="px-lg-5 navbar navbar-expand-md navbar-light fixed-top"
  >
    <div class="container px-lg-5">
      <router-link class="navbar-brand abs" to="/">
        <img src="./logo.png" alt="" />
      </router-link>
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="collapseNavbar">
        <ul class="navbar-nav">
          <router-link class="nav-link" to="/about-us">
            <p>VỀ MBOX</p>
          </router-link>
          <router-link class="nav-link" to="/about-products">
            <p>SẢN PHẨM</p>
          </router-link>
          <router-link class="nav-link" to="/products"><p>SHOP</p></router-link>
          <router-link class="nav-link" to="/chinh-sach-bao-mat">
            <p>CHÍNH SÁCH</p>
          </router-link>
        </ul>
        <ul class="navbar-nav ms-auto">
          <router-link class="nav-link" to="/cart">
            <img
              class="cart"
              src="https://img.icons8.com/material-two-tone/24/000000/fast-cart.png"
            />
            <span class="badge text-dark">{{ itemCount }}</span>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrolledNav: null,
    };
  },
  computed: {
    itemCount() {
      var tongsl = 0;
      var its = this.$store.state.cart;

      for (let i = 0; i < its.length; i++) {
        tongsl += its[i].quantity;
      }
      return tongsl;
    },
  },
  methods: {
    updateScroll() {
      const scrollPos = window.scrollY;
      if (scrollPos > 100) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped lange="css">
@media (min-width: 768px) {
  .abs {
    position: absolute;
    width: auto;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
}
nav {
  height: auto;
  /* background: rgba(255, 255, 255, 0); */
  border-bottom: solid 2px rgba(255, 255, 255, 0.548);
}
nav:hover {
  background: rgb(255, 255, 255);
  transition: 0.3s ease all;
  transition-duration: 0.5s;
}
nav img {
  height: 120px;
  padding: 10px 10px 10px 10px;
}
.cart {
  height: 40px;
  margin-right: -15px;
}
/* nav */
.nav-link {
  display: table-cell;
  position: relative;
}
.nav-link p {
  font: bold 14px/1.4 "Open Sans", arial, sans-serif;
  margin-top: 15px;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.nav-link p:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 3px;
  left: 50%;
  position: absolute;
  background: rgb(0, 0, 0);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.nav-link p:hover:after {
  width: 100%;
  left: 0;
}
/*  */
.scrolled-nav {
  background: rgb(255, 255, 255);
  transition: 0.5s ease all;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
</style>
