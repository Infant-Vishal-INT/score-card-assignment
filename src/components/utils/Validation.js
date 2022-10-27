import * as yup from "yup";

export const loginValidation = yup.object({
  loginEmail: yup
    .string()
    .email("Please enter the valid email")
    .required("Please enter the valid email"),
  loginPassword: yup.string().required("Please enter the valid password"),
});

export const scholasticAreasValidation = yup.object({
  subject: yup.string().required("Please select the subject"),
  faMark: yup
    .number()
    .min(0, "Minimum must be atleast 0")
    .max(40, "There can be no mark higher than 40")
    .required("Please enter the FA mark"),
  faOralMark: yup
    .number()
    .min(0, "Minimum must be atleast 0")
    .max(10, "There can be no mark higher than 10")
    .required("Please enter the FA Oral mark"),
  saMark: yup
    .number()
    .min(0, "Minimum must be atleast 0")
    .max(40, "There can be no mark higher than 40")
    .required("Please enter the SA mark"),
  saOralMark: yup
    .number()
    .min(0, "Minimum must be atleast 0")
    .max(10, "There can be no mark higher than 10")
    .required("Please enter the SA Oral mark"),
});

export const coScholasticAreasValidation = yup.object({
  coScholasticSkills: yup
    .string()
    .required("Please select the Co-Scholastic Skill")
    .nullable(),
  grade: yup.string().required("Please select the grade").nullable(),
});

export const attendenceFormValidation = yup.object({
  presentDays: yup
    .number()
    .min(0, "Minimum must be atleast 0")
    .max(83, "Entered days is more than total working days")
    .required("Please enter the Present Days")
    .nullable(),
});
