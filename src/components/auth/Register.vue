<template>
  <div class="mt-5 pt-5 container-lg px-lg-5">
    <div class="login-page mt-5">
      <div class="form p-5 text-center">
        <div class="row">
          <div class="col-lg-6 col-12">
            <img
              src="https://cf.shopee.vn/file/b8132d35fccd95b48611f7221eedd24b_tn"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-lg-6 col-12">
            <form class="login-form" @submit.prevent="onSubmit">
              <input
                type="email"
                autocomplete="off"
                placeholder="Email"
                v-model="email"
              />
              <input
                type="password"
                autocomplete="off"
                placeholder="Password"
                v-model="password"
              />
              <input
                type="password"
                autocomplete="off"
                placeholder="Comfirm Password"
                v-model="comfirmPassword"
              />

              <button class="see-more">ĐĂNG KÝ</button>

              <button
                v-show="this.successfull == true"
                class="see-more"
                type="button"
              >
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
              <p class="pt-5 fst-italic error">
                {{ error }}
              </p>
              <p class="message mt-5">
                Trở về
                <router-link to="/user/login"> Đăng Nhập</router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRegister } from "../../configs/useRegister";

export default {
  data() {
    return {
      successfull: false,
    };
  },

  setup() {
    const { error, signup } = useRegister();
    const email = ref("");
    const password = ref("");
    const comfirmPassword = ref("");

    async function onSubmit() {
      if (error.length < 1) {
        this.successfull = true;
        console.log('ok')
      }
      if (password.value == comfirmPassword.value) {
        await signup(email.value, password.value);
      } else {
        error.value = "comfirm password is wrong";
      }
    }
    return { email, password, comfirmPassword, error, onSubmit };
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);
.form input {
  font-family: "Roboto", sans-serif;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  width: 100%;
}
@media screen and (min-width: 990px) {
  .img-fluid {
    border-right: 1px solid black;
    width: 500px;
    height: 350px;
    padding-right: 40px;
    margin-left: 25px;
  }
  .form {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  .login-form {
    padding: 20px 20px 0px 50px;
  }
}
@media screen and (min-width: 1400px) {
  .img-fluid {
    border-right: 1px solid black;
    width: 500px;
    height: 300px;
    padding-right: 40px;
    margin-left: 77px;
  }
  .form {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  .login-form {
    padding: 20px 20px 0px 50px;
  }
}
@media screen and (max-width: 990px) {
  .img-fluid {
    display: none;
  }
}
</style>

<style lang="css">
.error {
  color: rgb(219, 46, 46);
}
</style>