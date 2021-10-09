<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Navbar from "./components/common/Navbar.vue";
import Footer from "./components/common/Footer.vue";
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import "./configs/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const auth = getAuth();

    onBeforeMount(() => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.replace("/user/login");
        } else if (
          route.path == "/user/login" ||
          route.path == "/user/register"
        ) {
          router.replace("/user");
        }
      });
    });
  },
};
</script>
