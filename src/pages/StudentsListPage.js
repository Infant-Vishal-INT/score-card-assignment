import React from "react";
import StudentsListTable from "../components/tables/StudentsListTable";

const StudentsListPage = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-12 mt-5">
          <StudentsListTable />
        </div>
      </div>
    </div>
  );
};

export default StudentsListPage;
