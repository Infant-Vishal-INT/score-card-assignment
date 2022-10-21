import React from "react";
import { useSelector } from "react-redux";
import CoScholasticAreasForm from "../utils/CoScholasticAreasForm";
import "../../assets/css/table.css";

const CoScholasticAreas = () => {
  const coScholasticGradeArr = useSelector(
    (state) => state.scoreReducer.coScholasticGrade
  );
  return (
    <div>
      <table
        className="table table-bordered table-hover"
        id="co_scholastic_areas_table"
      >
        <thead>
          <tr>
            <th colSpan={2}>
              <div>
                <h5 className="table-name">Part-2 : Co-Scholastic Areas</h5>
                {/* modal popup */}
                {/*  Button trigger modal  */}
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#coScholasticAreasModal"
                >
                  Add
                </button>

                {/* Co Scholastic Areas Modal */}
                <div
                  class="modal fade"
                  id="coScholasticAreasModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="coScholasticAreasModal"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Update Co-Scholastic Grades</h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <CoScholasticAreasForm
                          coScholasticGradeArr={coScholasticGradeArr}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th></th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {coScholasticGradeArr?.map((coScholasticGrade) => {
            return (
              <tr>
                <td>{coScholasticGrade.coScholasticSkills}</td>
                <td>{coScholasticGrade.grade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoScholasticAreas;
