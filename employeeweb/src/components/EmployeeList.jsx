import React from "react";
import EmployeeItem from "./EmployeeItem";
import "./EmployeeList.css";

export default function EmployeeList({ employees, onDelete }) {
  if (employees.length === 0) {
    return (
      <div className="empty-list">
        <div className="empty-icon">📋</div>
        <p>No employees to display</p>
      </div>
    );
  }

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeItem
          key={employee.id}
          employee={employee}
          employees={employees}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
