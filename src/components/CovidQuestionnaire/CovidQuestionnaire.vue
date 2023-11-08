<template>
  <Layout>
    <div class="grid grid-cols-2 gap-2">
      <Form @submit="handleSubmit()" v-slot="{ errors }" class="pl-2 pt-2">
        <div class="mb-3 mt-2">
          <label className="text-lg font-sans text-primary font-bold">
            გაქვს გადატანილი Covid-19?*
          </label>
          <div class="mb-2 mt-2 pl-2" key="had_covid">
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                v-model="had_covid"
                rules="required"
                type="radio"
                name="had_covid"
                value="კი"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="had_covid_1"
              />კი</label
            >
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                name="had_covid"
                value="არა"
                v-model="had_covid"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="had_covid_2"
              />არა</label
            >
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                name="had_covid"
                value="ახლა მაქვს"
                v-model="had_covid"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="had_covid_3"
              />ახლა მაქვს</label
            >
            <div class="relative">
              <ErrorMessage name="had_covid" class="absolute text-red-500" />
            </div>
          </div>
        </div>
        <div v-if="had_covid === 'კი'" class="mb-3 mt-2" key="had_antibodies">
          <label className="text-lg font-sans text-primary font-bold">
            ანტისხეულების ტესტი გაქვს გაკეთებული?*
          </label>
          <div class="mb-2 mt-2 pl-2">
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                rules="required"
                name="had_antibodies"
                value="კი"
                v-model="had_antibodies"
                class="h-[20px] w-[20px] text-black accent-blue-700"
              />კი</label
            >
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                name="had_antibodies"
                value="არა"
                v-model="had_antibodies"
                class="h-[20px] w-[20px] text-black accent-blue-700"
              />არა</label
            >
            <div class="relative">
              <ErrorMessage
                name="had_antibodies"
                class="absolute text-red-500"
              />
            </div>
          </div>
        </div>
        <div
          v-if="had_antibodies === 'კი' && had_covid === 'კი'"
          class="mb-3 mt-2"
          key="antibodies"
        >
          <label className="text-lg text-primary font-bold">
            თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
            რაოდენობა*
          </label>
          <div class="flex flex-col mt-4">
            <Field
              type="date"
              name="antibodies_date"
              rules="required"
              v-model="antibodies_date"
              :max="maxDate"
              class="mb-[4px] border-[1px] font-sans outline-none px-2 h-[40px] bg-transparent border-[#232323]"
              key="antibodies_date"
              :class="
                errors.antibodies_date
                  ? 'border-red-500 anime'
                  : 'border-[#232323] anime-after'
              "
            />
            <Field
              type="number"
              name="antibodies_number"
              rules="required"
              v-model="antibodies_number"
              min="0"
              class="mb-[4px] border-[1px] font-sans outline-none px-2 h-[40px] mt-2 bg-transparent border-[#232323]"
              key="antibodies_number"
              :class="
                errors.antibodies_number
                  ? 'border-red-500 anime'
                  : 'border-[#232323] anime-after'
              "
            />
          </div>
        </div>
        <div
          v-if="had_antibodies === 'არა' && had_covid === 'კი'"
          class="mb-3 mt-2"
          key="had_covid_date"
        >
          <label className="text-lg font-sans text-primary font-bold">
            მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
          </label>
          <div class="flex flex-col mt-4">
            <Field
              type="date"
              name="had_covid_date"
              rules="required"
              v-model="had_covid_date"
              :max="maxDate"
              class="mb-[4px] border-[1px] font-sans outline-none px-2 h-[40px] bg-transparent"
              key="had_covid_date"
              :class="
                errors.had_covid_date
                  ? 'border-red-500 anime'
                  : 'border-[#232323] anime-after'
              "
            />
          </div>
        </div>
        <PageButtons prev="/identification" />
      </Form>
      <img src="/vaccinate.png" />
    </div>
  </Layout>
</template>

<script lang="ts" setup>
import { PageButtons, Layout } from "@/components";
import { Form, Field, ErrorMessage, defineRule } from "vee-validate";
import { ref, onBeforeMount } from "vue";
import router from "@/routes";
import { useFormData } from "@/store";
import { Covid } from "../../store/types";

const form = useFormData();

onBeforeMount(() => {
  let allowed = parseFloat(sessionStorage.getItem("allow") as string);
  if (allowed < 2) {
    router.push("/");
  }
});

const had_covid = ref(form.had_covid);
const had_antibodies = ref(form.had_antibodies);
const antibodies_number = ref(form.antibodies_number);
const antibodies_date = ref(form.antibodies_date);
const had_covid_date = ref(form.had_covid_date);

const maxDate = new Date().toISOString().split("T")[0];

defineRule("required", (value: string) => {
  let val = String(value);

  if (!val || !val.length) {
    return "გთხოვთ მონიშნოთ ერთერთი პასუხი";
  }
  return true;
});

const handleSubmit = () => {
  let data: Covid = {
    had_covid: had_covid.value,
    had_antibodies: had_antibodies.value,
    antibodies_date: antibodies_date.value,
    antibodies_number: antibodies_number.value,
    had_covid_date: had_covid_date.value,
  };

  sessionStorage.setItem("allow", "3");

  form.setCovidQuestionnaire(data);

  router.push("/vaccine");
};
</script>
