<template>
  <div class="flex fixed font-sans bottom-0 left-[calc(50%-72px)] mb-4 gap-6">
    <button
      class="capitalize text-2xl"
      :class="isDisabledPrev ? 'text-gray-500' : 'text-black'"
      :disabled="isDisabledPrev"
      @click="goBack"
    >
      prev
    </button>
    <span class="capitalize text-2xl">|</span>
    <button
      class="capitalize text-2xl"
      :class="isDisabledNext ? 'text-gray-500' : 'text-black'"
      :disabled="isDisabledNext"
      type="submit"
    >
      next
    </button>
  </div>
</template>

<script lang="ts" setup>
import router from "@/routes";

const props = defineProps({
  prev: {
    type: String,
    default: true,
  },
});

function goBack() {
  router.push(props.prev);
}

let isDisabledPrev = false;
let isDisabledNext = false;

router.currentRoute.value.fullPath === "/identification"
  ? (isDisabledPrev = true)
  : (isDisabledPrev = false);

router.currentRoute.value.fullPath === "/tips"
  ? (isDisabledNext = true)
  : (isDisabledNext = false);
</script>
