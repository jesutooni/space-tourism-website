<template>
  <div class="flex items-center justify-between pl-1/15 sm:pl-1/20 lg:pl-1/25">
    <div class="cursor-pointer">
      <img src="../assets/shared/logo.svg" alt="Space Website Logo" />
    </div>
    <nav
      class="
        hidden
        sm:block
        font-barlow-condensed
        text-white
        uppercase
        bg-white bg-opacity-5
        pl-12
        lg:px-32
        backdrop-filter backdrop-blur-lg
      "
    >
      <ul class="flex">
        <li
          v-for="nav in navs"
          :key="nav.name"
          class="
            py-9
            cursor-pointer
            mr-12
            border-b-4 border-opacity-0
            hover:border-opacity-50
            duration-150
          "
        >
          <span class="font-bold mr-2.5">{{ nav.index }}</span
          >{{ nav.name }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { index: "00", name: "Home" },
        { index: "01", name: "Destination" },
        { index: "02", name: "Crew" },
        { index: "03", name: "Technology" },
      ],
    };
  },
};
</script>
