<script lang="ts">
import { Layout } from "./types";

export default {
  data(): Layout {
    return {
      route: "",
      page: 1,
      isDisabled: false,
      name: "/jarja",
    };
  },
  created() {
    this.route = this.$route.name as string;
  },
  beforeMount() {
    if (this.$route.fullPath === "/covid-questionnaire") {
      this.page = 2;
    } else if (this.$route.fullPath === "/vaccine") {
      this.page = 3;
    } else if (this.$route.fullPath === "/tips") {
      this.page = 4;
    } else {
      this.page = 1;
    }
  },
};
</script>

<template>
  <div class="px-36 pb-4 font-sans">
    <nav
      class="flex fixed z-[3] bg-[#ececec] w-[calc(100%-300px)] items-center justify-between px-2 pt-10 pb-2 border-b-2 border-black"
    >
      <h2 class="text-3xl italic capitalize font-[600]">{{ route }}</h2>
      <h3 class="text-3xl italic">{{ page }}/4</h3>
    </nav>
    <div class="font-serif p-1 px-2 pt-[80px]">
      <slot />
    </div>
  </div>
</template>
