<template>
  <footer class="p-md-5 p-3 mt-5">
    <div class="container-md pt-5">
      <div class="row px-lg-5">
        <div class="col-md-6 col-12">
          <h3>ĐĂNG KÝ NHẬN THÔNG TIN EMAIL SỚM NHẤT</h3>
          <div class="input-group my-4">
            <input
              type="input"
              class="form-control input-home"
              placeholder="YOUR EMAIL ADDRES"
            />
            <button type="button" class="btn text-white btn-input-home">
              Đăng Ký
            </button>
          </div>
          <h3>SOCIAL NETWORK</h3>
          <div>
            <a
              href="https://www.facebook.com/MaBelleBox/"
              class="mr-3 text-white"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png"
              />
            </a>
            <a
              class="text-white"
              href="https://www.instagram.com/p/B88ZQhlFBqf/"
              ><img
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
            /></a>
          </div>
        </div>
        <!--  -->
        <div class="col-md-6 col-12 mt-5 mt-md-0">
          <div class="text-md-end">
            <h3>CÔNG TY TNHH MỸ PHẨM MBOX</h3>
            <h5>ĐỊA CHỈ</h5>
            <h5>
              Tầng 46, Tòa tháp tài chính Bitexco, Số 2 Hải Triều, Phường Bến
              Nghé, Quận 1 TP.HCM
            </h5>
            <h5>HOTLINE</h5>
            <h5>0327200650</h5>
            <h5>EMAIL</h5>
            <h5>phucdongocc@gmail.com</h5>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
 
 <style scoped>
footer {
  background-color: rgba(146, 0, 0, 0.85);
  color: white;
}

.input-home {
  background: rgba(0, 0, 0, 0);
  border-radius: 0;
  margin-right: 2px;
}

.btn-input-home {
  background: rgb(0, 0, 0);
  border-radius: 0;
}

.input-home::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: pink;
  size: 9px;
}
.input-home:focus{
  background: rgba(0, 0, 0, 0);
}
.see-more {
  border-radius: 0;
  background: #630000;
  color: white;
  padding: 15px;
  font-size: 18px;
  padding-right: 40px;
  padding-left: 40px;
}

.see-more:hover {
  background-color: black;
  color: white;
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
</style>