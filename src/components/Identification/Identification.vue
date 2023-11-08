<script lang="ts" setup>
import { Form } from "vee-validate";
import { Input, PageButtons, Layout } from "@/components";
import { identificationSchema } from "@/schema";
import { ref } from "vue";
import router from "@/routes";
import { useFormData } from "@/store";

const form = useFormData();

const name = ref(form.name);
const lastname = ref(form.lastname);
const email = ref(form.email);

const handleSubmit = () => {
  let data = {
    name: name.value,
    lastname: lastname.value,
    email: email.value,
  };

  form.setIdentification(data);

  sessionStorage.setItem("allow", "2");

  router.push("/covid-questionnaire");
};
</script>

<template>
  <Layout>
    <div class="grid grid-cols-2 gap-2">
      <Form
        :validation-schema="identificationSchema"
        class="p-2 pr-36 pt-4"
        @submit="handleSubmit()"
      >
        <Input
          v-model="name"
          type="text"
          name="name"
          id="name"
          label="სახელი*"
        />
        <Input
          v-model="lastname"
          type="text"
          name="lastname"
          id="lastname"
          label="გვარი*"
        />
        <Input
          v-model="email"
          type="email"
          name="email"
          id="email"
          label="ელ-ფოსტა*"
        />
        <div
          class="border-t-[1px] border-[#232323] w-fit m-1 font-sans text-gray-600 pt-2 mt-10"
        >
          <p>*-ით მონიშნული ველების</p>
          <p>შევსება სავალდებულოა</p>
        </div>
        <PageButtons prev="/" />
      </Form>
      <img src="/scan.png" />
    </div>
  </Layout>
</template>
