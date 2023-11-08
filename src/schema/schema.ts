import zod from "zod";
import { toTypedSchema } from "@vee-validate/zod";

export const identificationSchema = toTypedSchema(
  zod.object({
    name: zod.string().min(1, { message: "სახელის ველი სავალდებულოა" }),
    lastname: zod.string().min(1, { message: "გვარის ველი სავალდებულოა" }),
    email: zod
      .string()
      .min(1, { message: "ელ-ფოსტის ველი სავალდებულოა" })
      .email({ message: "უნდა იყოს სწორი მეილი" }),
  })
);
