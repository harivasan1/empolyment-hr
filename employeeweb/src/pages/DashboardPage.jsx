import React, { useState, useEffect } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import "./DashboardPage.css";

export default function DashboardPage() {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, id: Date.now() }]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const filteredEmployees = filter
    ? employees.filter(emp => emp.department === filter)
    : employees;

  const totalSalary = employees.reduce((sum, emp) => sum + Number(emp.salary || 0), 0);
  const avgSalary = employees.length ? (totalSalary / employees.length).toFixed(2) : 0;

  const departmentCounts = employees.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>👥 Dashboard</h1>
        <p>Manage your employee database efficiently</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Employees</div>
          <div className="stat-value">{employees.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Salary</div>
          <div className="stat-value">₹{totalSalary.toLocaleString()}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Average Salary</div>
          <div className="stat-value">₹{Number(avgSalary).toLocaleString()}</div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="form-section">
          <h2>Add New Employee</h2>
          <EmployeeForm onAdd={addEmployee} />
        </div>

        <div className="list-section">
          <div className="list-header">
            <h2>Employee List</h2>
            <div className="filter-group">
              <label htmlFor="department-filter">Filter by Department:</label>
              <select
                id="department-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="filter-select"
              >
                <option value="">All Departments</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Engineering">Engineering</option>
                <option value="Sales">Sales</option>
                <option value="Operations">Operations</option>
              </select>
            </div>
          </div>

          {employees.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon"></div>
              <p>No employees yet. Add your first employee above!</p>
            </div>
          ) : (
            <EmployeeList employees={filteredEmployees} onDelete={deleteEmployee} />
          )}
        </div>
      </div>
    </div>
  );
}