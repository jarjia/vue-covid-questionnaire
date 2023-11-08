<template>
  <Layout>
    <div class="grid grid-cols-2 gap-2">
      <Form @submit="handleSubmit" class="pl-2 pt-2 pb-8">
        <TipsParagraph />
        <div class="mb-3 mt-6">
          <label className="text-lg font-sans text-primary font-bold">
            რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
            სადაც ყველა სურვილისამებრ ჩაერთვება?*
          </label>
          <div class="mb-3 mt-4 pl-4">
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                rules="required"
                name="online_meetings"
                value="კვირაში_ორჯერ"
                v-model="online_meetings"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="online_meetings_1"
              />კვირაში ორჯერ</label
            >
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                name="online_meetings"
                value="კვირაში_ერთხელ"
                v-model="online_meetings"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="online_meetings_2"
              />კვირაში ერთხელ</label
            >
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                name="online_meetings"
                value="ორ_კვირაში_ერთხელ"
                v-model="online_meetings"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="online_meetings_3"
              />ორ კვირაში ერთხელ</label
            >
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                name="online_meetings"
                value="თვეში_ერთხელ"
                v-model="online_meetings"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="online_meetings_4"
              />თვეში ერთხელ</label
            >
            <div class="relative pb-2">
              <ErrorMessage
                name="online_meetings"
                class="absolute text-red-500 z-1"
              />
            </div>
          </div>
        </div>
        <div class="mb-3 mt-6">
          <label className="text-lg font-sans text-primary font-bold">
            კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
          </label>
          <div class="mb-2 mt-4 pl-4">
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                rules="required"
                name="work_from_office"
                value="0"
                v-model="work_from_office"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="work_form_office_0"
              />0</label
            >
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                name="work_from_office"
                value="1"
                v-model="work_from_office"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="work_form_office_1"
              />1</label
            >
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                name="work_from_office"
                value="2"
                v-model="work_from_office"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="is_vaccinated_2"
              />2</label
            >
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                name="work_from_office"
                value="3"
                v-model="work_from_office"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="work_form_office_3"
              />3</label
            >
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                name="work_from_office"
                value="4"
                v-model="work_from_office"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="work_form_office_4"
              />4</label
            >
            <label
              class="flex items-center text-primary font-normal gap-[15px] mb-2"
            >
              <Field
                type="radio"
                name="work_from_office"
                value="5"
                v-model="work_from_office"
                class="h-[20px] w-[20px] text-black accent-blue-700"
                key="work_form_office_5"
              />5</label
            >
            <div class="relative pb-2">
              <ErrorMessage
                name="work_from_office"
                class="absolute text-red-500"
                z-1
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col mb-3 mt-6">
          <label className="text-lg font-sans text-primary font-bold">
            რას ფიქრობ ფიზიკურ შეკრებებზე?
          </label>
          <Field
            as="textarea"
            name="what_about_physical_meetings"
            v-model="what_about_physical_meetings"
            class="border-[1px] mt-2 p-1 h-[184px] max-h-[184px] min-h-[90px] outline-none border-[#232323] bg-transparent"
          />
        </div>
        <div class="flex flex-col mb-3 mt-6">
          <label className="text-lg font-sans text-primary font-bold">
            რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
            შეცვლიდი?
          </label>
          <Field
            as="textarea"
            name="what_to_add"
            v-model="what_to_add"
            class="border-[1px] mt-2 p-1 h-[184px] max-h-[184px] min-h-[90px] outline-none border-[#232323] bg-transparent"
          />
        </div>
        <div className="float-right mb-12">
          <button
            type="submit"
            class="bg-[#208298] mt-4 text-white rounded-full px-5 py-3"
          >
            დასრულება
          </button>
        </div>

        <PageButtons prev="/vaccine" />
      </Form>
      <div class="fixed right-20">
        <div class="relative">
          <img src="/bike.png" class="w-[540px] h-[540px]" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, PageButtons, TipsParagraph } from "@/components";
import router from "@/routes";
import { Form, Field, ErrorMessage, defineRule } from "vee-validate";
import { ref, onBeforeMount } from "vue";
import { useFormData } from "@/store";

const form = useFormData();

let savedTips = JSON.parse(sessionStorage.getItem("form-tips") as string);

const online_meetings = ref(
  savedTips?.online_meetings === null ? "" : savedTips?.online_meetings
);
const work_from_office = ref(
  savedTips?.work_from_office === null ? "" : savedTips?.work_from_office
);
const what_to_add = ref(
  savedTips?.what_to_add === null ? "" : savedTips?.what_to_add
);
const what_about_physical_meetings = ref(
  savedTips?.what_about_physical_meetings === null
    ? ""
    : savedTips?.what_about_physical_meetings
);

onBeforeMount(() => {
  let allowed = parseFloat(sessionStorage.getItem("allow") as string);
  if (allowed < 4) {
    router.push("/");
  }
});

defineRule("required", (value: string) => {
  let val = String(value);

  if (!val || !val.length) {
    return "გთხოვთ მონიშნოთ ერთერთი პასუხი";
  }
  return true;
});

const handleSubmit = () => {
  const state = form.$state;
  delete state.finalData;
  let tipsData: any = {
    online_meetings: online_meetings.value,
    work_from_office: work_from_office.value,
  };
  if (what_about_physical_meetings.value.length > 0) {
    tipsData.what_about_physical_meetings = what_about_physical_meetings.value;
  }
  if (what_to_add.value.length > 0) {
    tipsData.what_to_add = what_to_add.value;
  }
  let filterData = Object.entries(form.$state).filter(
    (item) => item[1].length !== 0
  );

  sessionStorage.setItem("form-tips", JSON.stringify(tipsData));

  let finalData = Object.assign(Object.fromEntries(filterData), tipsData);

  form.setFinalData(finalData);

  router.push("/final");
};
</script>
