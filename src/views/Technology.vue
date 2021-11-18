<template>
  <div class="h-screen image bg-cover bg-bottom"></div>
</template>

<script>
export default {
  data() {
    return {
      terms: [
        {
          name: "LAUNCH VEHICLE",
          definition:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
          image1: require("../assets/technology/image-launch-vehicle-portrait.jpg"),
          image2: require("../assets/technology/image-launch-vehicle-landscape.jpg"),
        },
        {
          name: "SPACEPORT",
          definition:
            "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
          image1: require("../assets/technology/image-spacesport-portrait.jpg"),
          image2: require("../assets/technology/image-spacesport-landscape.jpg"),
        },
        {
          name: "SPACE CAPSULE",
          definition:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
          image1: require("../assets/technology/image-space-capsule-portrait.jpg"),
          image2: require("../assets/technology/image-space-capsule-landscape.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.image {
  background-image: url("../assets/technology/background-technology-mobile.jpg");
}
@media (min-width: 640px) {
  .image {
    background-image: url("../assets/technology/background-technology-tablet.jpg");
  }
}
@media (min-width: 1024px) {
  .image {
    background-image: url("../assets/technology/background-technology-desktop.jpg");
  }
}
</style>
