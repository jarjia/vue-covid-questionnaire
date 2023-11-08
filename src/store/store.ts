import { defineStore } from "pinia";
import { Identification, Covid, Vaccine } from "./types";

const savedData = JSON.parse(sessionStorage.getItem("form-data") as string);
const savedDataCovid = JSON.parse(
  sessionStorage.getItem("form-data-covid") as string
);
const savedDataVaccine = JSON.parse(
  sessionStorage.getItem("form-data-vaccine") as string
);
const savedFinalData = JSON.parse(sessionStorage.getItem("final") as string);

export const useFormData = defineStore("form", {
  state: () => {
    return {
      name: savedData === null ? "" : savedData.name,
      lastname: savedData === null ? "" : savedData.lastname,
      email: savedData === null ? "" : savedData.email,
      had_covid: savedDataCovid?.had_covid ? savedDataCovid?.had_covid : "",
      had_antibodies: savedDataCovid?.had_antibodies
        ? savedDataCovid?.had_antibodies
        : "",
      antibodies_number: savedDataCovid?.antibodies_number
        ? savedDataCovid?.antibodies_number
        : "",
      antibodies_date: savedDataCovid?.antibodies_date
        ? savedDataCovid?.antibodies_date
        : "",
      had_covid_date: savedDataCovid?.had_covid_date
        ? savedDataCovid?.had_covid_date
        : "",
      is_vaccinated: savedDataVaccine?.is_vaccinated
        ? savedDataVaccine?.is_vaccinated
        : "",
      what_stage: savedDataVaccine?.what_stage
        ? savedDataVaccine?.what_stage
        : "",
      why_wait: savedDataVaccine?.why_wait ? savedDataVaccine?.why_wait : "",
      finalData: savedFinalData === null ? null : savedFinalData,
    };
  },
  actions: {
    setIdentification(identification: Identification) {
      sessionStorage.setItem("form-data", JSON.stringify(identification));
      this.name = identification.name;
      this.lastname = identification.lastname;
      this.email = identification.email;
    },
    setCovidQuestionnaire(covid: Covid) {
      sessionStorage.setItem("form-data-covid", JSON.stringify(covid));
      this.had_covid = covid.had_covid;
      this.had_antibodies = covid.had_antibodies ? covid.had_antibodies : "";
      this.antibodies_number = covid.antibodies_number
        ? covid.antibodies_number
        : "";
      this.antibodies_date = covid.antibodies_date ? covid.antibodies_date : "";
      this.had_covid_date = covid.had_covid_date ? covid.had_covid_date : "";
    },
    setVaccine(vaccine: Vaccine) {
      sessionStorage.setItem("form-data-vaccine", JSON.stringify(vaccine));
      this.is_vaccinated = vaccine.is_vaccinated;
      this.what_stage = vaccine.what_stage ? vaccine.what_stage : "";
      this.why_wait = vaccine.why_wait ? vaccine.why_wait : "";
    },
    setFinalData(data: Vaccine & Covid & Identification) {
      sessionStorage.setItem("final", JSON.stringify(data));
      this.finalData = data;
    },
  },
});
