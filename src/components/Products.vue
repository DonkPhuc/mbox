<template>
  <div class="">
    <div class="hover-zoom">
      <div class="card-zoom">
        <img
          src="//mabellebox.vn/wp-content/uploads/2020/03/banner3.jpg"
          class="d-block w-100 img-car"
        />
      </div>
    </div>
  </div>
  <main class="container py-5 mt-5">
    <RenderForType />
  </main>
</template>

<script>
import RenderForType from "./render/ProductForType.vue";

export default {
  data() {
    return {};
  },
  components: {
    RenderForType,
  },
};
</script>
<style scoped>
.hover-zoom{
  margin-top: -50px;
}
</style>