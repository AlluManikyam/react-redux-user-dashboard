import React from "react";
import MaterialTable from "material-table";
let users = require("../../constants/users.json");

function Dashboard() {
  return (
    <div className="dashboard">
      <MaterialTable
        title="Employees Information"
        columns={[
          { title: "Id", field: "id" },
          { title: "Name", field: "name" },
          { title: "Age", field: "age" },
          { title: "Gender", field: "gender" },
          { title: "Email", field: "email" },
          { title: "PhoneNo", field: "phoneNo" },
         
        ]}
        data={users.user}
      />
    </div>
  );
}

export default Dashboard;