import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import "../../assets/css/table.css";
import AddStudentForm from "../forms/AddStudentForm";
import axios from "axios";
import EditStudentForm from "../forms/edit_forms/EditStudentForm";
import { toast } from "react-toastify";

const StudentsListTable = () => {
  const jwtToken = localStorage.getItem("jwtToken");
  const [showEditStudentModal, setShowEditStudentModal] = useState(false);
  const [studentsListArr, setStudentsListArr] = useState([
    {
      id: "7810ac56-b02d-4503-9a77-4a0f094d84b8",
      student_name: "Bharath",
      standard: 5,
      section: "B",
      rollno: 27,
    },
    {
      id: "7810ac56-b02d-4503-9a77-4a0f094d84b8",
      student_name: "Vishal",
      standard: 5,
      section: "B",
      rollno: 27,
    },
  ]);

  useEffect(() => {
    const headers = {
      Authorization: jwtToken,
    };
    axios
      .get("https://bright-cyan-rabbit.cyclic.app/students", { headers })
      .then((response) => setStudentsListArr(response.data.data))
      .catch((error) => console.error("Error:", error.message));
  }, []);

  const handleEditStudent = (e) => {
    e.preventDefault();
    setShowEditStudentModal(true);
  };

  const handleDelete = (student) => {
    try {
      axios
        .put("https://bright-cyan-rabbit.cyclic.app/updateStudent", student)
        .then((response) => console.log("Response", response))
        .catch((e) => console.log("Error:", e.message));
      toast.success("Student Deleted successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.log("Delete Error:", err);
    }
  };

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
          {studentsListArr?.map((student, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{student.student_name}</td>
                <td>{student.standard}</td>
                <td>{student.section}</td>
                <td>{student.rollno}</td>
                <td>
                  <FiEdit
                    className="edit-icon"
                    onClick={(e) => handleEditStudent(e, student)}
                    data-toggle="modal"
                    data-target="#editStudentModal"
                  />
                  {/* Edit Scholastic Areas Modal */}
                  {showEditStudentModal ? (
                    <EditStudentForm editStudent={student} />
                  ) : null}
                </td>
                <td>
                  <AiOutlineDelete
                    className="delete-icon"
                    onClick={() => handleDelete(student)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsListTable;
