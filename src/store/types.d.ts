export type Identification = {
  name: string;
  lastname: string;
  email: string;
};
type Radio = {
  value: string;
};
export type Covid = {
  had_covid: string;
  had_antibodies?: string;
  antibodies_number?: string;
  antibodies_date?: string;
  had_covid_date?: string;
};
export type Vaccine = {
  is_vaccinated: string;
  why_wait?: string;
  what_stage?: string;
};
