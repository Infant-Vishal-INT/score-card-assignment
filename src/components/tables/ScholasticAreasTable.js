import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ScholasticAreasForm from "../forms/ScholasticAreasForm";
import "../../assets/css/table.css";

const ScholasticAreas = ({ cumulativeData, setCumulativeData }) => {
  const scholasticMarksArr = useSelector(
    (state) => state.scoreReducer.scholasticMarks
  );

  let overallMarkArr = [];

  useEffect(() => {
    setCumulativeData((previousState) => {
      return {
        ...previousState,
        grandTotal: overallMarkArr.reduce((partialSum, a) => partialSum + a, 0),
        percentage:
          (overallMarkArr.reduce((partialSum, a) => partialSum + a, 0) * 100) /
          1000,
      };
    });
  }, [scholasticMarksArr]);

  return (
    <div>
      <table
        className="table table-bordered table-hover"
        id="scholastic_areas_table"
      >
        <thead>
          <tr>
            <th colSpan={7}>
              <div>
                <h5 className="table-name">Part-1: Scholastic Areas</h5>
                {/* modal popup */}
                {/*  Button trigger modal  */}
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#scholasticAreasModal"
                >
                  Add
                </button>

                {/* Scholastic Areas Modal */}
                <div
                  class="modal fade"
                  id="scholasticAreasModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="scholasticAreasModal"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Update Marks</h5>
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
                        <ScholasticAreasForm
                          scholasticMarksArr={scholasticMarksArr}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th rowSpan={2} className="text-center">
              SI.No
            </th>
            <th rowSpan={2} className="text-center">
              SUBJECTS
            </th>
            <th className="text-center">FA</th>
            <th className="text-center">Oral</th>
            <th className="text-center">SA</th>
            <th className="text-center">Oral</th>
            <th className="text-center">Overall Marks</th>
          </tr>
          <tr>
            <th className="text-center">40</th>
            <th className="text-center">10</th>
            <th className="text-center">40</th>
            <th className="text-center">10</th>
            <th className="text-center">100</th>
          </tr>
        </thead>
        <tbody>
          {scholasticMarksArr?.map((scholasticMarks, index) => {
            overallMarkArr.push(scholasticMarks.overallMark);

            return (
              <tr>
                <td>{index + 1}</td>
                <td>{scholasticMarks.subject}</td>
                <td>{scholasticMarks.faMark}</td>
                <td>{scholasticMarks.faOralMark}</td>
                <td>{scholasticMarks.saMark}</td>
                <td>{scholasticMarks.saOralMark}</td>
                <td>{scholasticMarks.overallMark}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="text-right">
          <tr>
            <th colSpan={2}>GRAND TOTAL</th>
            <td colspan={5}>{cumulativeData.grandTotal}</td>
          </tr>
          <tr>
            <th colSpan={2}>PERCENTAGE</th>
            <td colspan={5}>{cumulativeData.percentage}%</td>
          </tr>
          <tr>
            <th colSpan={2}>RANK</th>
            <td colspan={5}>{cumulativeData.rank}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ScholasticAreas;
