<script lang="ts">
import { RedberryLogoIcon } from "../icons/RedberryLogoIcon/index";
export default {
  components: {
    RedberryLogoIcon,
  },
  data() {
    return {
      hovered: false,
    };
  },
  methods: {
    handleHover() {
      this.hovered = true;
    },
    handleUnHover() {
      this.hovered = false;
    },
  },
  beforeMount() {
    let allowed = sessionStorage.getItem("allow");
    if (allowed === null || allowed === undefined) {
      sessionStorage.setItem("allow", "1");
    }
  },
};
</script>

<template>
  <div
    className="flex justify-center items-center h-screen bg-gray-100 flex-col"
  >
    <div className="mt-24">
      <div class="flex justify-center pb-8 bg-app-background">
        <RedberryLogoIcon />
      </div>
      <div class="text-center w-[170px] flex justify-center pb-16">
        <router-link to="/identification">
          <div
            class="relative text-2xl"
            @mouseenter="handleHover"
            @mouseleave="handleUnHover"
          >
            <p class="init select-none font-bold">კითხვარის დაწყება</p>
            <span v-if="hovered" class="select-none init-hover"
              >კითხვარის დაწყება</span
            >
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.init {
  text-align: center;
  color: #232323;
  z-index: 4;
  position: relative;
}
.init-hover {
  position: absolute;
  top: 0.5px;
  left: 7px;
  z-index: 1;
  -webkit-text-stroke: 0.5px black;
  color: transparent;
}
</style>
