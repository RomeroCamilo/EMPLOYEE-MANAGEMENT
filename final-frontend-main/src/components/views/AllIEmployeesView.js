import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllEmployeesView = (props) => {
  const { allEmployees, deleteEmployee } = props;

  if (!allEmployees.length) {
    return <div>There are no employees.</div>;
  }

  const handleDelete = (employeeId) => {
    deleteEmployee(employeeId);
  };

  return (
    <div>
      <Link to={`/`}>
        <h1>HOME</h1>
      </Link>
      {allEmployees.map((employee) => {
        let name = employee.firstname + " " + employee.lastname;
        return (
          <div key={employee.id}>
            <Link to={`/employee/${employee.id}`}>
              <h1>{name}</h1>
            </Link>
            <p>{employee.department}</p>
            <button onClick={() => handleDelete(employee.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

export default AllEmployeesView;