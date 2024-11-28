import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Weekly = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Activity",
        data: [10, 15, 12, 20, 14, 12, 10], // Data for each day
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 250,
      },
      plotOptions: {
        bar: {
          columnWidth: "50%", // Adjust bar width
          distributed: true, // Enables individual coloring for bars
        },
      },
      colors: [
        "#E0E7FF", // Color for Sunday
        "#E0E7FF", // Color for Monday
        "#E0E7FF", // Color for Tuesday
        "#E0E7FF", // Color for Wednesday
        "#A855F7", // Highlighted color for Thursday
        "#E0E7FF", // Color for Friday
        "#E0E7FF", // Color for Saturday
      ],
      dataLabels: {
        enabled: false, // Hides numbers on bars
      },
      xaxis: {
        categories: ["S", "M", "T", "W", "T", "F", "S"], // Days of the week
        labels: {
          style: {
            fontSize: "14px",
            colors: ["#6B7280"], // Text color for x-axis
          },
        },
      },
      yaxis: {
        show: false, // Hides the y-axis
      },
      grid: {
        show: false, // Removes grid lines
      },
      tooltip: {
        enabled: true, // Tooltip to show value on hover
      },
    },
  });

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default Weekly;
