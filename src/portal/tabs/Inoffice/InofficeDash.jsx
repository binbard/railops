import React, { useState, useEffect } from 'react';
import './InofficeAnalytics.css';
import { Bar } from 'react-chartjs-2';

function EmployeeCard({ title, count }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{count}</p>
    </div>
  );
}

function DailyAttendanceGraph() {
  // Sample data for the daily attendance bar graph
  const [dailyAttendanceData, setDailyAttendanceData] = useState({
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Number of Employees Present',
        data: [80, 90, 70, 85, 75], // Replace with your data
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgba(53, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 16, // Increase font size
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          font: {
            size: 16, // Increase font size
          },
        },
      },
    },
  };

  return (
    <div className="daily-attendance-graph">
      <h2>Daily Attendance Trend</h2>
      <Bar data={dailyAttendanceData} options={options} />
    </div>
  );
}

function EmployeeAttendanceGraph() {
  // Sample data for the employee attendance bar graph
  const [employeeAttendanceData, setEmployeeAttendanceData] = useState({
    labels: ['Employee 1', 'Employee 2', 'Employee 3', 'Employee 4'],
    datasets: [
      {
        label: 'Attendance Percentage',
        data: [85, 72, 92, 68], // Replace with your data
        backgroundColor: ['green', 'red', 'green', 'red'], // Color-coding based on attendance percentage
        borderColor: ['green', 'red', 'green', 'red'],
        borderWidth: 1,
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 16, // Increase font size
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          font: {
            size: 16, // Increase font size
          },
        },
      },
    },
  };

  return (
    <div className="employee-attendance-graph">
      <h2>Employee Attendance Percentage</h2>
      <Bar data={employeeAttendanceData} options={options} />
    </div>
  );
}

export default function InofficeDash() {
  return (
    <div className="container">
      <div className="cards">
        <EmployeeCard title="Number of Employees" count={100} />
        <EmployeeCard title="Employees Present Today" count={50} />
        <EmployeeCard title="Number of Interns" count={10} />
        <EmployeeCard title="Working Hours" count={8} />
      </div>
      <div className="main-content">
        <div className="graph-container">
          <DailyAttendanceGraph />
          <EmployeeAttendanceGraph />
        </div>
      </div>
    </div>
  );
}