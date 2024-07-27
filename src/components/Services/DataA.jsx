// src/AnalyticsPage.jsx
import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./DataA.css"; // Import the CSS file

// Register necessary components
Chart.register(...registerables);

const DataA = () => {
  // Sample data for demonstration
  const fileData = [
    { type: "Document", count: 120, storage: 150 },
    { type: "Image", count: 80, storage: 200 },
    { type: "Video", count: 30, storage: 500 },
    { type: "Audio", count: 50, storage: 100 },
  ];

  // Prepare data for chart
  const chartData = {
    labels: fileData.map((file) => file.type),
    datasets: [
      {
        label: "Number of Files",
        data: fileData.map((file) => file.count),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Storage Used (MB)",
        data: fileData.map((file) => file.storage),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allow more flexibility in size
  };

  // Create a ref to hold the chart instance
  const chartRef = useRef(null);

  useEffect(() => {
    // Capture the current chart instance in a local variable
    const chartInstance = chartRef.current;

    // Cleanup chart instance on component unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []); // The dependency array is empty because we want this effect to run once, similar to componentDidMount.

  return (
    <div className="App">
      <h1>File Storage and Management Analytics</h1>

      <div style={{ margin: "20px 0" }}>
        <h2>Overview</h2>
        <ul>
          <li>
            Total Files: {fileData.reduce((acc, file) => acc + file.count, 0)}
          </li>
          <li>
            Total Storage Used:{" "}
            {fileData.reduce((acc, file) => acc + file.storage, 0)} MB
          </li>
        </ul>
      </div>

      <div className="chart-container">
        <h2>File Type Distribution</h2>
        <Bar ref={chartRef} data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default DataA;
