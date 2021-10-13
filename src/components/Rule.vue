<template>
  <main class="bg-img">
    <div class="container-lg mt-5 pt-5">
      <h1 class="mt-5 pt-5">CHÍNH SÁCH KHÁCH HÀNG</h1>
      <!--  -->
      <ul class="list">
        <li class="ul-title">
          <div class="cha">
            <span class="title"> HƯỚNG DẪN </span>
            <div class="img">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUYAAAAgCAYAAABuDdEDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIBElEQVR42u2dbWhkVxnHfwlDCCGMIWaXENfZsokxZrfrWrSgqPjBlwpC9YKyomDB1g9apbWISC1SFinSFimI+EGhFgVfMEotUkQQRJb94EuN42xMc6fxNg0xDGEMaQhLCH44/7P3yexsuy+Z7Lw8fzice2/u3Mmce87/PG/nOX04HI6OxlxpsgCMAeOqR019BBhRGW4oA8BQk0fuqGwB6yqrwD+BMvC3JEt3u7lN+7xbORxtS3j9wFGgBBwDJoA3qx5XOarSiE2gBmyobALbQF2E96rOLRkO6ngQeIOI9SgwBcwABfPs3wNPJVn6ZydGh8NxkMQ3CNxmynHVlggL5iNbwIpKlOL+q3pNpQbUkizda4FU+gHg88BZ86fvJVn6ZSdGh8NxPRLfMeCEyltURyK0kt4ukAHLKivAy6ozYCXJ0s02+V1PAl81l96RZOkL3fTuCt59HY6blqSmTJkU+U2J/AZ0655Ibolgp/utIcFlYPWgpbwW4uVuf68uMToc1yb5lQh2tilJfjOG/Pp1646Ir6ryouolIEuy9FIXtMUw8Hf9doALSZa+u9veuUuMDkc+6IvANDALvE31tEigYFTeJWAR+A3wbx0vSd3t5vYZAH5uSLEGfMYlRoejOwb4hCS+GUOAMwRnR8SqCK8CXNTxoiS/vR5ssyLwS+DDpn0+kmRp2YnR4eicgVwg2PoiAZ40x0XdtidJb0HloohwoV0cHW3SlqdFitO6dB74ZJKlq936m50YHZ0+aIeN+vtW4JTOp436uy3iq0j1reh8sdsDlW+ybfuBB4DHCE6kPeAJ4GEP8HY42mOQDoj8ZoG3qz5NcIpErBsCvBglwSRLM2/B627vM8CPgDt0aRH4XJKlF3rh9zsxOtpRSpluQoBT5N7fdZHfPGGZWgWoJFla9xa86fYfBb4NfEHtvQOcA57oBq+6E6Oj3QcghFCXSHwnVc+Qx/5tEmL+ysC/RITlJEtr3oItkci/CDxCWAoIMAc82IsStxOj4zAG3XgTApwlJDJAUsmCkQDLkgBdBT4cCf1TkhJP6PIF4KEkS8/3ars4MToOcpCNXIUAx3TLLsFWtU8CBKq9GALTBhL7x6Umn9LlBeBhYK6b4zGdGB2tGlQFEd4pgh3wlEjwmLlt2RCftQO6F/jWv7+7CJ7mM7pUFSH+wicoJ0bHtQ2i2wzx3a7ahsLUDAH+Q8eVJEu3vfXakhAfBe40k9ejwE98wnJidDQfNKMiwEYp0NoBy4YAy8B8kqXr3nodoTI/Qh56UwW+Azzdrp5mxacWCJ7xZlJsvZXqvhNj7w2UaAecNQQ4S54Ca08Dp1EKdDtgZ73n6FT5FsHTD8GGeE4q826Lv3+QYFoZY3928SPqa0VCVvGiyrDqwev4mphlfFuaS8w2vkbIABSTeVSvdwLoM9LC+wnhE1uaSVy07uyBUTQEeDu5TdCuB14W+VXInSELSZbueAt27HsfAO4Bvk7uZX5BKvOzBzG5NeSZjEl1j6uOZbThY7sirzWRV50QjrUJ/E91XRNzXI65DVhCGzYmnLhVwxDwRvJs5hP6v4YbvjtGPfyR4FzaeE1iFLO/pAcDPJ9k6Ue9i3XMQBiSRBA9wZEA7YqQFfbHA5ZFgFvegl3TD4YJcYgPmrH8J+CxJEufv4HnFcgzC9kkuzHVms3MtYaS6XJlgt0asH7Ywfdzpckx/f+npRm9R8eXVXGCw+mZZuOgb640mQC/MtfuTrL0We9qbdfxx9mfESYeWwJclfRXkQocPcGeEKF7+8UY8JBIMSbHeE6EeP4aPt8s1VrMNWnzTFZpnmdyuVNWxOi3fhC4m2B3je1VAT5NsJlfJsangK+Yzx/xlQW37MXFWdomRYg5AW1GmCr7M8Is4Evieq2vlICvAfcS7HJ7wM9EiOWr9K0ZI0GdVrGmlRp5go2L5jjrtrhGacpnZXKINthLwCeA3xWkq9MgYjpa+1JGDOGdNER4wszSW4b8fm2Ol3ppzarjir4zDXwD+KzU2R3gB8DjSZZWjRR5B3mI1Rn1r4IZ4/OEJX9Rs1h4PbtbN0F29KfnSpPPAPcDT2piuA9Y7psrTZ4Dvmk+875u3RLxFth84j4g07LRxG0ox8ytK02kv4VuznXnuGFCPEfwNMeJ8/vAjwnOjncC71J9zGgX0ekQowvmkyxd8Ra9on37rWOqb640OaUBGWeTPwAf6vUlQdfYmKPku75Z8ptm/w5wdfJ0+EuEnIAxH6A7QByv1ceKwONSmfuNyneefLdBCJ7XMvAX4K+q5127uDHEcJ0HgO+a6z8EvtTrjarQhxOG/CYbzovm9g2RXiwvRjLsJRXFceB98CVDfjgJHiIx6gV8jLDRzZAuVQiGyee6VXqULaZkyvGG83Fz+yVC3F9VdUrupVt2x4ejRX30TuC9khZXyUOtnAQPgxijng3cRdjfIRLkIvBTwo5o5U5Y/aDYvgkRW6zfZI4j8dko+y1C3FUs/yHY/yIRrrh5weHoQWJsIJcJgrH3HmPbqMu2EQOFF0Uea61aKaMwgxFCJP2YqccIEe/2PBLhcMNjNghBqCuqV0V8l4nQY/0cDsfrEqMhJggOhbPkqeZtdhUI3q8NlbjUZ5srl/Q0Q1HPiuslh1RGVDfb+3pX31UzZYOw1OgVQ36rIm1XOxwOx8ER41XIsl+SWVRJoyR3RAQ3REhPXzTSJuQ7jVnpsk6IxdoWoW4Br+q8bq5fJkKX7hwORyvxf5Wj38+TKfHeAAAAAElFTkSuQmCC"
                alt=""
              />
            </div>
          </div>
          <ul class="mt-4">
            <li>
              Bước 1: Thêm sản phẩm vào giỏ hàng
              <p class="qk">
                Quý khách vui lòng chọn sản phẩm và số lượng cần mua. Click vào
                ô “THÊM VÀO GIỎ” hoặc “MUA NGAY”.
              </p>
            </li>
            <li>
              Bước 2: Kiểm tra số lượng + sản phẩm
              <p class="qk">
                Quý khách vui lòng kiểm tra chính xác số lượng, sản phẩm và tổng
                giá trị đơn hàng có trong giỏ hàng.
              </p>
            </li>
            <li>
              Bước 3: Điền thông tin nhận hàng và hình thức thanh toán
              <p class="qk">
                Quý khách vui lòng điền đầy đủ thông tin đặt hàng cần thiết. Lưu
                ý: điền đúng và chính xác các thông tin để việc xử lý đơn hàng
                được nhanh chóng hơn.
              </p>
            </li>
          </ul>
          <p>Ví dụ: Họ và tên, Email, Địa chỉ, Số điện thoại …</p>
          <p>
            Sau đó tiến hành đi đến bước “ĐẶT HÀNG” để đơn hàng được ghi nhận.
          </p>
          <p>
            Quý khách vui lòng chuyển khoản giá trị đơn hàng trong thời gian 24h
            – 48h sau khi đặt hàng thành công (không tính thứ 7, CN).
          </p>

          <p class="font-weight-bolder">Thông tin chuyển khoản:</p>
          <p class="font-weight-bolder">
            Chủ tài khoản: Công Ty TNHH Mỹ Phẩm MBB
          </p>
          <p class="font-weight-bolder">Số tài khoản: 060210533535</p>
          <p class="font-weight-bolder">Ngân hàng: Sacombank chi nhánh HCM</p>
          <p class="font-weight-bolder">
            Nội dung chuyển khoản: Họ và Tên + Số điện thoại
          </p>
          <p>
            (* Nếu quý khách chuyển khoản thông qua ATM, vui lòng chụp lại biên
            lai và gửi inbox về Fanpage Ma Belle Box:
            https://www.facebook.com/MaBelleBox/)
          </p>
        </li>

        <li class="ul-title">
          <div class="cha">
            <span class="title"> THỜI GIAN GIAO HÀNG </span>
            <div class="img">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>

          <p class="mt-4">
            Sau khi đặt hàng thành công, đơn hàng sẽ được xử lý và được giao đến
            quý khách trong vòng 2-6 ngày làm việc.
          </p>
          <p class="mb-4">
            Nếu sau thời gian đó quý khách vẫn chưa nhận được hàng, xin vui lòng
            liên hệ lại với Ma Belle Box qua inbox về Fanpage Ma Belle Box:
            https://www.facebook.com/MaBelleBox
          </p>
        </li>
        <li class="ul-title">
          <div class="cha">
            <span class="title">CHÍNH SÁCH BẢO MẬT</span>
            <div class="img">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>

          <p class="mt-4">
            Tất cả các thông tin của người dùng truy cập vào website
            mabellebox.vn sẽ được bảo mật hoàn toàn, trừ trường hợp có yêu cầu
            cung cấp bởi luật pháp.
          </p>
          <p class="mb-4">
            Ma Belle Box có quyền liên hệ khách hàng và sử dụng các thông tin
            này cho mục đích quảng bá và phát triển sản phẩm.
          </p>
        </li>
        <li class="ul-title">
          <div class="cha">
            <span class="title">ĐIỀU KIỆN ĐỔI TRẢ</span>
            <div class="img"><img
                src="data:image/png;base64,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"
                alt=""
              /></div>
          </div>
          <p class="mt-4">
            Khách hàng vui lòng kiểm tra kỹ sản phẩm khi nhận hàng. Chính sách
            đổi trả được áp dụng trong các điều kiện sau:
          </p>
          <ol>
            <li>
              Hàng nhận được không đúng chủng loại, màu sắc so với đơn đặt hàng
            </li>
            <li>
              Bao bì bị móp méo hoặc bị rách; sản phẩm bị hư hỏng khi nhận hàng
            </li>
            <li>Hàng được mua từ Website mabellebox.vn</li>
          </ol>
          <p class="mt-4">
            Khách hàng cần cung cấp các thông tin cần thiết liên quan đến xác
            nhận đơn hàng để được hỗ trợ đổi trả nhanh chóng.
          </p>
          <p class="mt-4">
            Trong thời hạn 48 giờ kể từ lúc nhận sản phẩm, nếu sản phẩm có bất
            kì lỗi nào phát sinh từ phía sản xuất, quý khách phản hồi trực tiếp
            về inbox Fanpage Ma Belle Box: https://www.facebook.com/MaBelleBox
          </p>
        </li>
        <li class="ul-title">
          <div class="cha">
            <span class="title">QUY TRÌNH ĐỔI TRẢ</span>
            <div class="img">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>
          <p class="mt-4">
            Sau khi được xác nhận trường hợp nằm trong diện đổi trả, quý khách
            vui lòng làm theo các bước sau:
          </p>
          <ul>
            <li>
              Bước 1: Đóng gói sản phẩm lỗi nguyên kiện gửi về địa chỉ đã được
              Ma Belle Box cung cấp.
            </li>
            <li>
              Bước 2: Sau khi Ma Belle Box kiểm tra và xác minh sản phẩm, Team
              sẽ tiến hành đổi sản phẩm mới tương ứng về địa chỉ quý khách đã
              cung cấp.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </main>
</template>

<style>
main h1 {
  color: brown;
}

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

.page-header {
  /* position: sticky;
            top: 0;
            left: 0;
            width: 100%; */
  position: sticky;
  top: 0;
  width: 100%;
  background: rgb(255, 255, 255);
  z-index: 9999;
}

.ul-title {
  list-style: none;
  padding-left: 50px;
  position: relative;
  font-size: 30px;
  font-weight: 900;
  margin-top: 40px;
  color: rgb(0, 0, 0);
}

.ul-title:before {
  content: "";
  position: absolute;
  top: 10px;
  left: 0px;
  display: inline-block;
  height: 30px;
  width: 30px;
  background-size: contain;
  background-image: url("https://mistermissparty.com/wp-content/uploads/2018/11/Mister-Miss-Party-Plato-Estrella-Rojo.jpg");
}

.ul-title p,
.ul-title li {
  font-size: 15px;
  font-weight: 500;
  list-style: disc;
}
main p {
  font-family: "Montserrat", sans-serif;
}

.font-weight-bolder {
  font-family: "Nunito Sans", sans-serif;
  color: rgb(51, 51, 51);
}

.qk {
  margin-left: -34px;
  margin-top: 10px;
  margin-bottom: 30px;
}

/*  */
@media screen and (min-width: 1280px) {
  .cha {
    position: relative;
  }
  .img {
    position: absolute;
    bottom: -15px;
    left: 100px;
  }
}
@media screen and (max-width: 1290px) {
  .img {
    display: none;
  }
}
</style>