import React from "react";

export default function ReportsPage({ employees }) {
  const totalEmployees = employees.length;
  const totalSalary = employees.reduce((sum, emp) => sum + Number(emp.salary || 0), 0);
  const avgSalary = totalEmployees ? (totalSalary / totalEmployees).toFixed(2) : 0;

  // Count employees by department
  const departmentCounts = employees.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h2>Reports</h2>
      <p>Total Employees: {totalEmployees}</p>
      <p>Total Salary: ₹{totalSalary}</p>
      <p>Average Salary: ₹{avgSalary}</p>

      <h3>Employees by Department</h3>
      <ul>
        {Object.entries(departmentCounts).map(([dept, count]) => (
          <li key={dept}>{dept}: {count}</li>
        ))}
      </ul>
    </div>
  );
}