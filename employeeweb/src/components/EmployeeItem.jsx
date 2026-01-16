import React from "react";
import "./EmployeeItem.css";

export default function EmployeeItem({ employee, employees, onDelete }) {
  const totalSalary = employees.reduce((sum, emp) => sum + Number(emp.salary || 0), 0);

  return (
    <div className="employee-item">
      <div className="item-content">
        <div className="item-header">
          <h3 className="item-name">{employee.name}</h3>
          <span className="item-id">ID: {employee.id}</span>
        </div>
        <div className="item-details">
          <div className="detail">
            <span className="label">Department:</span>
            <span className="department-badge">{employee.department}</span>
          </div>
          <div className="detail">
            <span className="label">Salary:</span>
            <span className="salary">₹{Number(employee.salary).toLocaleString()}</span>
          </div>
        </div>
      </div>
      <button 
        className="delete-btn" 
        onClick={() => onDelete(employee.id)}
        title="Delete employee"
      >
        🗑️ Delete
      </button>
    </div>
  );
}