<template>
  <div class="h-screen image bg-cover"></div>
</template>

<script>
export default {
  data() {
    return {
      destinations: [
        {
          image: require("../assets/destination/image-moon.png"),
          name: "Moon",
          description:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          distance: "384,400",
          time: "3 days",
        },
        {
          image: require("../assets/destination/image-mars.png"),
          name: "Mars",
          description:
            "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          distance: "225 MIL.",
          time: "9 months",
        },
        {
          image: require("../assets/destination/image-europa.png"),
          name: "Europa",
          description:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          distance: "628 MIL.",
          time: "3 years",
        },
        {
          image: require("../assets/destination/image-titan.png"),
          name: "Titan",
          description:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          distance: "1.6 BIL.",
          time: "7 years",
        },
      ],
    };
  },
};
</script>

<style scoped>
.image {
  background-image: url("../assets/destination/background-destination-mobile.jpg");
}
@media (min-width: 640px) {
  .image {
    background-image: url("../assets/destination/background-destination-tablet.jpg");
  }
}
@media (min-width: 1024px) {
  .image {
    background-image: url("../assets/destination/background-destination-desktop.jpg");
  }
}
</style>
