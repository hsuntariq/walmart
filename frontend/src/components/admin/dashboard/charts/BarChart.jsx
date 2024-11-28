import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Earning",
        data: [10, 20, 15, 30, 25, 35, 40], // Earning data
      },
      {
        name: "Expense",
        data: [-5, -15, -10, -20, -18, -25, -30], // Expense data (negative values for stacking)
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 250, // Adjust chart height
        stacked: true, // Stacked bars for the grouped look
      },
      colors: ["#00E396", "#999999"], // Green for Earning, Gray for Expense
      plotOptions: {
        bar: {
          columnWidth: "50%", // Adjust bar width
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // X-axis categories
      },
      legend: {
        position: "bottom", // Legend placement
      },
      dataLabels: {
        enabled: false, // Disable values on bars
      },
      //   title: {
      //     text: "Revenue Report",
      //     align: "left",
      //     style: {
      //       fontSize: "16px",
      //     },
      //   },
    },
  });

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={250} // Ensure height matches your design
      />
    </div>
  );
};

export default BarChart;
