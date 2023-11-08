<template>
  <Layout>
    <div class="grid grid-cols-2 gap-2">
      <Form @submit="handleSubmit" class="pl-2 pt-2">
        <div class="mb-3 mt-2">
          <label className="text-lg font-sans text-primary font-bold">
            უკვე აცრილი ხარ?*
          </label>
          <div class="mb-2 mt-2 pl-2">
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                rules="required"
                name="is_vaccinated"
                value="კი"
                v-model="is_vaccinated"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="is_vaccinated_1"
              />კი</label
            >
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                name="is_vaccinated"
                value="არა"
                v-model="is_vaccinated"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="is_vaccinated_2"
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
        <div v-if="is_vaccinated === 'კი'" class="mb-3 mt-2">
          <label className="text-lg font-sans text-primary font-bold">
            აირჩიე რა ეტაპზე ხარ*
          </label>
          <div class="mb-2 mt-2 pl-2">
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                rules="required"
                name="what_stage"
                value="პირველი_დოზა_და_დარეგისტრირებული_ვარ_მეორეზე"
                v-model="what_stage"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="what_stage_1"
              />პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label
            >
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                name="what_stage"
                value="სრულად_აცრილი_ვარ"
                v-model="what_stage"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="what_stage_2"
              />სრულად აცრილი ვარ</label
            >
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                name="what_stage"
                value="პირველი_დოზა_და_არ_დავრეგისტრირებულვარ_მეორეზე"
                v-model="what_stage"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="what_stage_3"
              />პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label
            >
            <div class="relative">
              <ErrorMessage
                name="had_antibodies"
                class="absolute text-red-500"
              />
            </div>
          </div>
        </div>
        <div v-if="is_vaccinated === 'არა'" class="mb-3 mt-2">
          <label className="text-lg font-sans text-primary font-bold">
            რას ელოდები?*
          </label>
          <div class="mb-2 mt-2 pl-2">
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                rules="required"
                name="why_wait"
                value="დარეგისტრირებული_ვარ_და_ველოდები_რიცხვს"
                v-model="why_wait"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="why_wait_1"
              />დარეგისტრირებული ვარ და ველოდები რიცხვს</label
            >
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                name="why_wait"
                value="არ_ვგეგმავ"
                v-model="why_wait"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="why_wait_2"
              />არ ვგეგმავ</label
            >
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                name="why_wait"
                value="გადატანილი_მაქვს_და_ვგეგმავ_აცრას"
                v-model="why_wait"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="why_wait_3"
              />გადატანილი მაქვს და ვგეგმავ აცრას</label
            >
            <div class="relative">
              <ErrorMessage
                name="had_antibodies"
                class="absolute text-red-500"
              />
            </div>
          </div>
        </div>
        <div class="p-12 pt-8">
          <div
            v-if="
              is_vaccinated === 'კი' &&
              what_stage === 'პირველი_დოზა_და_დარეგისტრირებული_ვარ_მეორეზე'
            "
          >
            <p>რომ არ გადადო,</p>
            <p>ბარემ ახლავე დარეგისტრირდი</p>
            <a
              href="https://booking.moh.gov.ge/"
              class="text-[#1289AE] hover:underline"
              target="_blank"
              >https://booking.moh.gov.ge/</a
            >
          </div>
          <div v-else-if="is_vaccinated === 'არა' && why_wait === 'არ_ვგეგმავ'">
            <a
              href="https://booking.moh.gov.ge/"
              class="text-[#1289AE] hover:underline"
              target="_blank"
              >👉 https://booking.moh.gov.ge/</a
            >
          </div>
          <div
            v-else-if="
              is_vaccinated === 'არა' &&
              why_wait === 'გადატანილი_მაქვს_და_ვგეგმავ_აცრას'
            "
          >
            <p class="pb-6">
              ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
              ვაქცინის გაკეთება.
            </p>
            <p>👉 რეგისტრაციის ბმული</p>
            <a
              href="https://booking.moh.gov.ge/"
              class="text-[#1289AE] hover:underline"
              target="_blank"
              >https://booking.moh.gov.ge/</a
            >
          </div>
        </div>
        <PageButtons prev="/covid-questionnaire" />
      </Form>
      <img src="/doctor.png" />
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, PageButtons } from "@/components";
import { Form, Field, ErrorMessage, defineRule } from "vee-validate";
import { ref, onBeforeMount } from "vue";
import { Vaccine } from "../../store/types";
import { useFormData } from "@/store";
import router from "@/routes";

const form = useFormData();

onBeforeMount(() => {
  let allowed = parseFloat(sessionStorage.getItem("allow") as string);
  if (allowed < 3) {
    router.push("/");
  }
});

const is_vaccinated = ref(form.is_vaccinated);
const why_wait = ref(form.why_wait);
const what_stage = ref(form.what_stage);

defineRule("required", (value: string) => {
  let val = String(value);

  if (!val || !val.length) {
    return "გთხოვთ მონიშნოთ ერთერთი პასუხი";
  }
  return true;
});

const handleSubmit = () => {
  let data: Vaccine = {
    is_vaccinated: is_vaccinated.value,
    why_wait: why_wait.value,
    what_stage: what_stage.value,
  };

  form.setVaccine(data);

  sessionStorage.setItem("allow", "4");

  router.push("/tips");
};
</script>
