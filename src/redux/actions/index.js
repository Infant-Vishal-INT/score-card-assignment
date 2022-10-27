export const manageScholasticMarks = (values) => {
  return {
    type: "SCHOLASTICMARKS",
    payload: values,
  };
};

export const manageCoScholasticGrade = (values) => {
  return {
    type: "COSCHOLASTICGRADE",
    payload: values,
  };
};

export const manageAttendence = (values) => {
  return {
    type: "ATTENDENCE",
    payload: values,
  };
};
