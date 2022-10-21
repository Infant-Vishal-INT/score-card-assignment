import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { manageScholasticMarks } from "../../redux/actions";

const ScholasticAreasForm = ({ scholasticMarksArr }) => {
  const dispatch = useDispatch();

  const subjectsArr = [
    "English",
    "Hindi",
    "Sanscrit / Urdu",
    "Maths",
    "EVS",
    "Social Study",
    "Computer",
    "Moral",
    "G.K.",
    "Conversation",
  ];

  const selectedSubject = scholasticMarksArr.map((e) => e.subject);

  const formik = useFormik({
    initialValues: {
      subject: "",
      faMark: "",
      faOralMark: "",
      saMark: "",
      saOralMark: "",
      overallMark: "",
    },
    validationSchema: yup.object({
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
    }),
    onSubmit: (values) => {
      values.overallMark =
        values.faMark + values.faOralMark + values.saMark + values.saOralMark;
      dispatch(manageScholasticMarks(values));
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div class="form-group text-left mt-3">
        <label for="subject" className="text-left modal-text">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          placeholder="Select the subject"
          onChange={formik.handleChange}
          value={formik.values.subject}
          class="form-control"
        >
          <option value="" disabled selected>
            Select the subject
          </option>
          <>
            {subjectsArr.map((subject, index) => {
              return (
                !selectedSubject.includes(subject) && (
                  <option key={index} value={subject}>{subject}</option>
                )
              );
            })}
          </>
        </select>
        {formik.errors.subject && formik.touched.subject ? (
          <div className="modal-text text-danger">{formik.errors.subject}</div>
        ) : null}
      </div>

      <div class="form-group text-left mt-3">
        <label for="faMark" className="text-left modal-text">
          FA marks
        </label>
        <input
          type="number"
          id="faMark"
          name="faMark"
          placeholder="FA Mark"
          onChange={formik.handleChange}
          value={formik.values.faMark}
          class="form-control"
        />
        {formik.errors.faMark && formik.touched.faMark ? (
          <div className="modal-text text-danger">{formik.errors.faMark}</div>
        ) : null}
      </div>

      <div class="form-group text-left mt-3">
        <label for="faOralMark" className="text-left modal-text">
          FA Oral
        </label>
        <input
          type="number"
          id="faOralMark"
          name="faOralMark"
          placeholder="FA Oral Mark"
          onChange={formik.handleChange}
          value={formik.values.faOralMark}
          class="form-control"
        />
        {formik.errors.faOralMark && formik.touched.faOralMark ? (
          <div className="modal-text text-danger">
            {formik.errors.faOralMark}
          </div>
        ) : null}
      </div>

      <div class="form-group text-left mt-3">
        <label for="saMark" className="text-left modal-text">
          SA marks
        </label>
        <input
          type="number"
          id="saMark"
          name="saMark"
          placeholder="SA Mark"
          onChange={formik.handleChange}
          value={formik.values.saMark}
          class="form-control"
        />
        {formik.errors.saMark && formik.touched.saMark ? (
          <div className="modal-text text-danger">{formik.errors.saMark}</div>
        ) : null}
      </div>

      <div class="form-group text-left mt-3">
        <label for="saOralMark" className="text-left modal-text">
          SA Oral
        </label>
        <input
          type="number"
          id="saOralMark"
          name="saOralMark"
          placeholder="SA Oral Mark"
          onChange={formik.handleChange}
          value={formik.values.saOralMark}
          class="form-control"
        />
        {formik.errors.saOralMark && formik.touched.saMark ? (
          <div className="modal-text text-danger">
            {formik.errors.saOralMark}
          </div>
        ) : null}
      </div>
      <div className="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Close
        </button>
        <button type="submit" class="btn btn-primary ml-3">
          Add to Table
        </button>
      </div>
    </form>
  );
};

export default ScholasticAreasForm;
