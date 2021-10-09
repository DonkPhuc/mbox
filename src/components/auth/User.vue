<template>
  <div class="container p-5 mt-5">
    <div class="row mt-5 px-lg-5">
      <div class="col-lg-3 col-12">
        <ul class="list-group list-group-flush mt-5 pt-5">
          <li class="list-group-item">
            <router-link to="/user">Tài Khoản</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/user">Đơn Hàng</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/user">Hóa Đơn</router-link>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="col-lg-9 col-12 text-lg-start text-center">
        <p class="mt-5 p-5">
          Hello <b class="text-uppercase">{{ name }}</b> (not
          <span class="text-uppercase">{{ name }}</span> ?
          <a @click="logout"><b class="signout">Sign out</b></a> )
        </p>
        <p class="px-5">
          From your account dashboard you can view your recent orders, manage
          your shipping and billing addresses and edit your password and account
          details.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import "../../configs/firebase";
import { getAuth, signOut } from "firebase/auth";

export default {
  setup() {
    const name = ref("");
    const auth = getAuth();

    onBeforeMount(() => {
      const user = auth.currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });

    const logout = () =>
      signOut(auth).then(() => {
        console.log("dang xuat");
      });

    return {
      logout,
      name,
    };
  },
};
</script>

<style scoped>
.signout:hover {
  cursor: pointer;
}
@media screen and (min-width: 990px) {
  .list-group-flush {
    border-right: 1px solid rgb(128, 128, 128);
    height: 100%;
    padding-right: 50px;
  }
}
</style>