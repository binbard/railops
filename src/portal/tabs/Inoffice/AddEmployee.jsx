import React from 'react';
import './AddEmployee.css';
export function AddEmployee() {
  // Dummy employee data
  const employees = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      department: 'HR',
      salary: '$60,000',
      hireDate: '2023-01-15',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      department: 'Engineering',
      salary: '$70,000',
      hireDate: '2022-11-20',
    },
    // Add more employee data as needed
  ];

  const handleAddEmployee = () => {
    // Add your logic for adding an employee here
  };

  return (
    <div className="employee-table">
      <h1>Add Employee</h1>
      <button className="add-employee" onClick={handleAddEmployee}>
        Add Employee
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Hire Date</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.hireDate}</td>
              <td>{employee.salary}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
