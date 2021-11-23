<template>
  <div class="h-screen image bg-cover lg:pt-10">
    <top-header />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "Home",
  components: {
    "top-header": Header,
  },
};
</script>

<style scoped>
.image {
  background-image: url("../assets/home/background-home-mobile.jpg");
}
@media (min-width: 640px) {
  .image {
    background-image: url("../assets/home/background-home-tablet.jpg");
  }
}
@media (min-width: 1024px) {
  .image {
    background-image: url("../assets/home/background-home-desktop.jpg");
  }
}
</style>
