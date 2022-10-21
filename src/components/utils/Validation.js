import * as yup from "yup";

const Validate = yup.object({
  subject: yup.string().required("Please select the subject").nullable(),
  faMark: yup
    .number()
    .min(0, "Minimum must be atleast 0")
    .max(40, "There can be no mark higher than 40")
    .required("Please enter the FA mark")
    .nullable(),
  faOralMark: yup
    .number()
    .min(0, "Minimum must be atleast 0")
    .max(10, "There can be no mark higher than 10")
    .required("Please enter the FA Oral mark")
    .nullable(),
  saMark: yup
    .number()
    .min(0, "Minimum must be atleast 0")
    .max(40, "There can be no mark higher than 40")
    .required("Please enter the SA mark")
    .nullable(),
  saOralMark: yup
    .number()
    .min(0, "Minimum must be atleast 0")
    .max(10, "There can be no mark higher than 10")
    .required("Please enter the SA Oral mark")
    .nullable(),
  coScholasticSkills: yup
    .string()
    .required("Please select the Co-Scholastic Skill")
    .nullable(),
  grade: yup.string().required("Please select the grade").nullable(),
  presentDays: yup
    .number()
    .min(0, "Minimum must be atleast 0")
    .max(83, "Entered days is more than total working days")
    .required("Please enter the Present Days")
    .nullable(),
});

export default Validate;
