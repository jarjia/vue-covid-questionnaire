<template>
  <div
    class="grid grid-cols-2 mx-40 px-4 py-2 shadow-xl bg-gray-200 my-4 gap-6"
  >
    <div>
      <div class="font-sans mb-4 border-[1px] border-b-black pb-4">
        <p class="flex justify-between text-lg capitalize">
          <b>სახელი:</b> {{ finalData.name }}
        </p>
        <p class="flex justify-between text-lg capitalize">
          <b>გვარი:</b> {{ finalData.lastname }}
        </p>
        <p class="flex justify-between text-lg">
          <b>ელ-ფოსტა:</b> {{ finalData.email }}
        </p>
      </div>
      <div class="font-sans mb-4 border-[1px] border-b-black pb-4">
        <p class="flex justify-between text-lg">
          <b>გქონდა კოვიდი:</b> {{ finalData.had_covid }}
        </p>
        <div v-if="finalData.had_covid === 'კი'">
          <p class="flex justify-between text-lg">
            <b>გაკეთებული გაქვს ანტისხეულები:</b> {{ finalData.had_antibodies }}
          </p>
          <div v-if="finalData.had_antibodies === 'კი'" class="pl-8 pt-1">
            <p class="flex justify-between text-lg">
              <b>სატესტო დღე:</b> {{ finalData.antibodies_date }}
            </p>
            <p class="flex justify-between text-lg">
              <b>ანტისხეულების რაოდენობა:</b> {{ finalData.antibodies_number }}
            </p>
          </div>
          <div v-else-if="finalData.had_antibodies === 'არა'" class="pl-8 pt-1">
            <p class="flex justify-between text-lg">
              <b>კოვიდის ინფიცირებით თარიღი:</b> {{ finalData.had_covid_date }}
            </p>
          </div>
        </div>
      </div>
      <div class="font-sans mb-4 border-[1px] border-b-black pb-4">
        <p class="flex justify-between text-lg">
          <b>ვაქცინირებული ხარ:</b> {{ finalData.is_vaccinated }}
        </p>
        <div class="pl-8 pt-1">
          <p
            v-if="finalData.is_vaccinated === 'კი'"
            class="flex justify-between text-lg"
          >
            <b>რა ეტაპი:</b>
            {{ finalData.what_stage.replace(/_/g, " ") }}
          </p>
          <p
            v-if="finalData.is_vaccinated === 'არა'"
            class="flex justify-between text-lg"
          >
            <b>რატომ იცდი:</b>
            {{ finalData.why_wait.replace(/_/g, " ") }}
          </p>
        </div>
      </div>
      <div class="font-sans mb-6">
        <p class="flex flex-col justify-between text-lg">
          <b>არაფორმალური ონლაინ შეხვედრების სიხშირე</b>
          {{ finalData.online_meetings.replace(/_/g, " ") }}
        </p>
        <p class="flex flex-col justify-between text-lg">
          <b>ოფისიდან მუშაობა (კვირაში დღე)</b>
          {{ finalData.work_from_office }}
        </p>
      </div>
    </div>
    <div class="font-sans text-[14px]">
      <div
        v-if="
          finalData.what_about_physical_meetings &&
          finalData.what_about_physical_meetings.length > 0
        "
        class="mb-4 mt-1"
      >
        <h4 class="text-[18px] font-[800]">
          <strong>რას ფიქრობ ფიზიკურ შეკრებებზე?</strong>
        </h4>
        <p class="py-2 break-words">
          {{ finalData.what_about_physical_meetings }}
        </p>
      </div>
      <div
        v-if="finalData.what_to_add && finalData.what_to_add.length > 0"
        class="mb-4 mt-1"
      >
        <h4 class="text-[18px] font-[800]">
          <strong>რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</strong>
        </h4>
        <p class="py-2 break-words">
          {{ finalData.what_to_add }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFormData } from "@/store";

const form = useFormData();
const { finalData } = form.$state;
</script>
