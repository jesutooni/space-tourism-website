<template>
  <div class="h-screen image bg-cover bg-bottom"></div>
</template>

<script>
export default {
  data() {
    return {
      crew: [
        {
          role: "Commander",
          name: "Douglas Hurley",
          bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
          picture: require("../assets/crew/image-douglas-hurley.png"),
        },
        {
          role: "Mission Specialist ",
          name: "MARK SHUTTLEWORTH",
          bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
          picture: require("../assets/crew/image-mark-shuttleworth.png"),
        },
        {
          role: "Pilot",
          name: "Victor Glover",
          bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
          picture: require("../assets/crew/image-vicotr-glover.png"),
        },
        {
          role: "Flight Engineer",
          name: "Anousheh Ansari",
          bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
          picture: require("../assets/crew/image-anousheh-ansari.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.image {
  background-image: url("../assets/crew/background-crew-mobile.jpg");
}
@media (min-width: 640px) {
  .image {
    background-image: url("../assets/crew/background-crew-tablet.jpg");
  }
}
@media (min-width: 1024px) {
  .image {
    background-image: url("../assets/crew/background-crew-desktop.jpg");
  }
}
</style>
