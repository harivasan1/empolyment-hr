import React, { useState } from "react";
import "./EmployeeForm.css";

export default function EmployeeForm({ onAdd }) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !department || !salary) {
      setError("Please fill out all fields");
      return;
    }

    if (salary < 0) {
      setError("Salary must be a positive number");
      return;
    }

    onAdd({ name, department, salary });

    setName("");
    setDepartment("");
    setSalary("");
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      {error && <div className="form-error">{error}</div>}
      
      <div className="form-group">
        <label htmlFor="name">Employee Name *</label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="department">Department *</label>
        <select
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select Department</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Engineering">Engineering</option>
          <option value="Sales">Sales</option>
          <option value="Operations">Operations</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="salary">Salary (₹) *</label>
        <input
          id="salary"
          type="number"
          placeholder="50000"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          min="0"
        />
      </div>

      <button type="submit" className="submit-btn">
        ➕ Add Employee
      </button>
    </form>
  );
}