<template>
  <nav
    :class="{ scrolledNav: scrolledNav }"
    class="px-lg-5 navbar navbar-expand-md navbar-light fixed-top"
  >
    <div class="container-lg px-lg-5">
      <router-link class="navbar-brand abs" to="/" @click="scrollToTop()">
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
          <router-link class="nav-link" to="/about-us" @click="scrollToTop()">
            <p>VỀ MBOX</p>
          </router-link>
          <router-link
            class="nav-link"
            to="/about-products"
            @click="scrollToTop()"
          >
            <p>SẢN PHẨM</p>
          </router-link>
          <router-link class="nav-link" to="/products" @click="scrollToTop()"
            ><p>SHOP</p></router-link
          >
          <router-link
            class="nav-link"
            to="/chinh-sach-bao-mat"
            @click="scrollToTop()"
          >
            <p>CHÍNH SÁCH</p>
          </router-link>
        </ul>
        <div class="navbar-nav ms-auto">
          <!--  -->
          <div class="nav-link searchbar">
            <input
              class="form-label"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="search"
            />
            <button class="btn-outline" @click="searchitem()">
              <img
                class="s-img"
                src="https://cdn-icons-png.flaticon.com/512/118/118177.png"
                alt=""
              />
            </button>
          </div>
          <!--  -->
          <router-link class="nav-link mt-2" to="/user">
            <img
              class="cart"
              src="https://img.icons8.com/material-sharp/452/user.png"
            />
          </router-link>
          <!-- <a class="nav-link mt-2" href="/user/login" @click="scrollToTop()">
            
          </a> -->
          <!--  -->
          <router-link class="nav-link mt-2" to="/cart" @click="scrollToTop()">
            <div class="position-relative">
              <img
                class="cart"
                src="https://img.icons8.com/material-two-tone/24/000000/fast-cart.png"
              />
              <span class="translate-middle badge rounded-pill bg-danger">
                {{ itemCount }}
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrolledNav: null,
      search: null,
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
      if (window.scrollY > 100) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    searchitem() {
      fetch(
        "https://my-json-server.typicode.com/DonkPhuc/mbox-api/items?q=" +
          this.search
      )
        .then((res) => res.json())
        .then((data) => (this.$store.state.search_string = data));

      this.$router.push("/search");
      window.scrollTo(0, 0);
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
.scrolledNav {
  background: rgb(255, 255, 255);
  transition: 0.5s ease all;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
/*  */
.s-img {
  height: 40px;
  width: 40px;
}
/*  */
.form-label {
  background: rgba(255, 255, 255, 0);
  margin-right: -10px;
  border: none;
  border-bottom: 1px solid black;
  width: 120px;
  padding-left: 10px;
}
.searchbar {
  margin: 7px;
}
.btn-outline {
  background: rgba(0, 0, 0, 0);
  border: none;
  padding: 0;
}
@media screen and (min-width: 780px) {
  .cart {
    margin-left: -13px;
  }
}
</style>
