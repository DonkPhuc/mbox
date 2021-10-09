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
                placeholder="Email"
                autocomplete="off"
                v-model="email"
              />
              <input
                type="password"
                autocomplete="off"
                placeholder="Password"
                v-model="password"
              />
              <button class="see-more">ĐĂNG NHẬP</button>
              <p class="pt-5 fst-italic error">
                {{ error }}
              </p>
              <p class="message mt-5">
                Chưa có tài khoản?
                <router-link to="/user/register"> Tạo ngay</router-link>
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
import { useSignIn } from "../../configs/useLogin";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const { error, signin } = useSignIn();
    const router = useRouter();

    async function onSubmit() {
      await signin(email.value, password.value);
      if (!error.value) router.push({ path: `/user` });
      window.scrollTo(0, 0);
    }

    return { email, password, error, onSubmit };
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
    height: 300px;
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