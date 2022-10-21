import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { manageAttendence } from "../../redux/actions";

const AttendenceForm = () => {
  const dispatch = useDispatch();
  const attendence = useSelector((state) => state.scoreReducer.attendence);


  const formik = useFormik({
    initialValues: {
      presentDays: "",
    },
    validationSchema: yup.object({
      presentDays: yup
        .number()
        .min(0, "Minimum must be atleast 0")
        .max(83, "Entered days is more than total working days")
        .required("Please enter the Present Days")
        .nullable(),
    }),
    onSubmit: (values) => {
      dispatch(manageAttendence(values));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div class="form-group text-left mt-3">
          <label for="" className="text-left modal-text">
            No.of Days Present
          </label>
          <input
            type="number"
            id="present_days"
            name="presentDays"
            placeholder="Present Days"
            onChange={formik.handleChange}
            value={formik.values.presentDays}
            class="form-control"
          />
          {formik.errors.presentDays ? (
            <div className="modal-text text-danger">
              {formik.errors.presentDays}
            </div>
          ) : null}
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="submit" class="btn btn-success">
            Add to Table
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendenceForm;
