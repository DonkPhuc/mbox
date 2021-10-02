<template>
  <div
    id="myCarousel"
    class="carousel slide bg-inverse"
    data-bs-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        style="width: 15px; height: 15px"
        data-bs-target="#myCarousel"
        data-bs-slide-to="0"
        class="active"
      ></li>
      <li
        style="width: 15px; height: 15px"
        data-bs-target="#myCarousel"
        data-bs-slide-to="1"
      ></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <img
          class="d-block w-100"
          src="http://mabellebox.vn/wp-content/uploads/2020/03/banner4.png"
          alt="First slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="http://mabellebox.vn/wp-content/uploads/2020/03/banner3.jpg"
          alt="Second slide"
        />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#myCarousel"
      role="button"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon carousel-control"
        aria-hidden="true"
      ></span>
    </a>
    <a
      class="carousel-control-next"
      href="#myCarousel"
      role="button"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon carousel-control"
        aria-hidden="true"
      ></span>
    </a>
  </div>
  <!-- Main -->
  <main class="container-fluid" id="app">
    <!--  -->
    <div class="text-center my-5">
      <img id="title_img" src="../assets/f-item.png" alt="" />
    </div>
    <!-- prod -->
    <Render />
    <!--  -->
    <div class="text-center my-5">
      <router-link to="/products">
        <button class="see-more mb-5">Xem Thêm</button>
      </router-link>
    </div>
    <!--  -->
    <div id="video-home" class="row py-5 mt-5" style="background-color: black">
      <div style="width: 600px" class="m-auto">
        <img
          id="h-r"
          src="https://mabellebox.vn/wp-content/uploads/2019/11/video-line-1.png"
          alt=""
        />
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D154973342213718&width=500&show_text=false&height=500&appId"
          width="600"
          height="600"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        >
        </iframe>
        <img
          id="h-l"
          src="https://mabellebox.vn/wp-content/uploads/2019/11/video-line-2.png"
          alt=""
        />
      </div>
    </div>
    <!--  -->
    <div class="text-center my-5">
      <img id="title_img" src="../assets/insta.png" alt="" />
    </div>
    <!-- ins -->
    <div class="container px-lg-5">
      <div class="px-lg-5">
        <div class="row">
          <div v-for="item in ins" :key="item" class="col-md-3 col-6">
            <div
              class="hover-zoom"
              onclick="window.location='https://www.instagram.com/accounts/login/'"
            >
              <div class="card-zoom">
                <img :src="item.img" class="img-fluid w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Render from "./render/ProductList.vue";

export default {
  data() {
    return {
      ins: [
        {
          img: "https://mabellebox.vn/wp-content/uploads/2020/03/83904373_653194725432966_6421830729212147754_n.jpg",
        },
        {
          img: "https://mabellebox.vn/wp-content/uploads/2020/03/42004177_1235927403211599_345513201955047184_n-768x768.jpg",
        },
        {
          img: "https://mabellebox.vn/wp-content/uploads/2020/03/38882099_2173261619608467_1907774758636748800_n-768x768.jpg",
        },
        {
          img: "https://mabellebox.vn/wp-content/uploads/2020/03/44395397_352014595550014_6594188254436075959_n-768x768.jpg",
        },
      ],
    };
  },
  components: {
    Render,
  },
  // Fetch data json server
  // mounted() {
  //   fetch("http://localhost:3000/items")
  //     .then((res) => res.json())
  //     .then((data) => (this.items = data))
  //     .catch((err) => console.log(err.message));
  // },
};
</script>

<style>
/* zoom */
.hover-zoom {
  float: left;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}
.card-zoom img {
  -webkit-transition: 0.7s ease;
  transition: 0.7s ease;
}
.hover-zoom:hover .card-zoom img {
  -webkit-transform: scale(1.08);
  transform: scale(1.08);
}
/* prod */
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.4s ease;
  background-image: url(https://mabellebox.vn/wp-content/uploads/2017/06/poison-apple-433x516.png);
    background-size: contain;
    background-repeat: no-repeat;
  transition: all 0.5s ease-in-out;
  /* background: rgb(255, 255, 255); */
}

.sp_home:hover .overlay {
  opacity: 1;
}

.sp_home {
  position: relative;
  overflow: hidden;
}

.ver_mas {
  background-color: #630000;
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  z-index: 1;
  opacity: 0;
  transform: translate(0px, 70px);
  -webkit-transform: translate(0px, 70px);
  -moz-transform: translate(0px, 70px);
  -o-transform: translate(0px, 70px);
  -ms-transform: translate(0px, 70px);
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.ver_mas p {
  font-size: 12px;
  color: #fff;
  position: relative;
  margin: 0 auto;
  width: 100%;
  top: 13px;
  font-weight: bolder;
  text-transform: uppercase;
}

.sp_home:hover {
  cursor: pointer;
}

.sp_home:hover .ver_mas {
  transform: translate(0px, 0px);
  -webkit-transform: translate(0px, 0px);
  -moz-transform: translate(0px, 0px);
  -o-transform: translate(0px, 0px);
  -ms-transform: translate(0px, 0px);
  opacity: 1;
}
/*  */
.see-more {
  border-radius: 0;
  background: #990202;
  color: white;
  padding: 15px;
  font-size: 18px;
  padding-right: 40px;
  padding-left: 40px;
}

.see-more:hover {
  background-color: black;
  color: white;
  transition: 700ms;
}

#h-r {
  position: absolute;
  top: -95px;
  right: 0px;
}

#h-l {
  position: absolute;
  bottom: -80px;
  left: 0px;
}

#video-home {
  position: relative;
}

@media screen and (max-width: 600px) {
  #title_img {
    height: 100px;
  }
}

/* car */
@media screen and (min-width: 600px) and (max-width: 1200px) {
  .carousel-item img {
    height: 300px;
  }
}

@media screen and (min-width: 1200px) {
  .carousel-item img {
    height: 690px;
  }
}

@media screen and (max-width: 600px) {
  .carousel-item img {
    height: 180px;
  }
}
/*  */
@media screen and (min-width: 760px) {
  #video-home {
    display: block;
  }
}

@media screen and (max-width: 760px) {
  #video-home {
    display: none;
  }
}
/*  */
.carousel-control {
  background: #000;
  border-radius: 10%;
}
.carousel-control-next-icon {
  margin-left: 150px;
}
.carousel-control-prev-icon {
  margin-right: 150px;
}
.carousel-indicators li {
  border-radius: 100%;
  border: 1px solid white;
}
</style>
