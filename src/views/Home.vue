<template>
  <div class="h-screen image bg-cover bg-bottom"></div>
</template>

<script>
export default {
  name: "Home",
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
