const initialState = {
  scholasticMarks: [],
  coScholasticGrade: [],
  attendence: 0,
};
const ScoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SCHOLASTICMARKS":
      return {
        ...state,
        scholasticMarks: [...state.scholasticMarks, action.payload],
      };
    case "COSCHOLASTICGRADE":
      return {
        ...state,
        coScholasticGrade: [...state.coScholasticGrade, action.payload],
      };
    case "ATTENDENCE":
      return {
        ...state,
        attendence: action.payload,
      };
    default:
      return state;
  }
};

export default ScoreReducer;
