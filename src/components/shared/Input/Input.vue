<script lang="ts" setup>
import { Field, ErrorMessage } from "vee-validate";

defineProps({
  label: {
    type: String,
    default: true,
  },
  modelValue: {
    type: String,
  },
  id: {
    type: String,
    default: true,
  },
  type: {
    type: String,
  },
});
</script>

<template>
  <div class="flex flex-col mb-8 font-sans">
    <label :for="id" class="font-bold text-lg">{{ label }}</label>
    <Field
      :value="modelValue"
      class="border-2 outline-none pl-1 border-[#232323] bg-transparent py-2 mt-1.5"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :name="id"
      :id="id"
    />
    <div class="relative">
      <ErrorMessage :name="id" class="absolute text-red-500" />
    </div>
  </div>
</template>
