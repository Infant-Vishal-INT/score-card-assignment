import React, { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import "../../assets/css/table.css";
import AddStudentForm from "../forms/AddStudentForm";
import axios from "axios";

const StudentsListTable = () => {
  
  useEffect(async () => {
    var options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU4NjA3OWRhLTI1NjktNGQ3MS04MTIzLTU5MWM1YTczZTk4OSIsInVzZXJuYW1lIjoiaW5kdXNuZXQxQGdtYWlsLmNvbSIsImlhdCI6MTY2Njc4MTQ3NSwiZXhwIjoxNjY2Nzg1MDc1fQ.4Y4GbOh-hh4vJD_tMj-T8BGzPv6qYM-Li3egvWZShDM",
      },
    };
    axios
      .get("https://stormy-cod-cloak.cyclic.app/students", options)
      .then((response) => {
        console.log("response", response);
      });
  }, []);
  return (
    <div>
      <table className="table table-bordered" id="student_list_table">
        <thead>
          <tr>
            <th colSpan={7}>
              <div>
                <h5 className="table-name">Students List</h5>
                {/* modal popup */}
                {/*  Button trigger modal  */}

                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#addStudentModal"
                >
                  Add
                </button>

                {/* Attendence Modal */}
                <div
                  class="modal fade"
                  id="addStudentModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="addStudentModal"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Add Student</h5>
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
                        <AddStudentForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th rowSpan={2}>SI.No</th>
            <th rowSpan={2}>Student Name</th>
            <th rowSpan={2}>Standard</th>
            <th rowSpan={2}>Section</th>
            <th rowSpan={2}>Roll Number</th>
            <th colSpan={2}>Action</th>
          </tr>
          <tr>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bharath</td>
            <td>5</td>
            <td>B</td>
            <td>3</td>
            <td>
              <FiEdit className="edit-icon" />
            </td>
            <td>
              <AiOutlineDelete className="delete-icon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentsListTable;
