import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const [chartData, setChartData] = useState({
    series: [50, 20, 15, 15], // Data values for the chart
    options: {
      chart: {
        type: "donut",
        height: 250,
      },
      labels: ["Electronics", "Clothing", "Groceries", "Kids"], // Categories for data
      colors: ["#A855F7", "#8B5CF6", "#E0E7FF", "#C5ABFF"], // Custom colors
      legend: {
        show: false, // Hide legend for a cleaner look
      },
      dataLabels: {
        enabled: false, // Disable value labels on the chart
      },
      plotOptions: {
        pie: {
          donut: {
            size: "60%", // Adjust inner radius
            labels: {
              show: true,
              name: {
                show: false, // Hide category names inside
              },
              value: {
                show: false, // Hide individual values inside
              },
              total: {
                show: true,
                label: "Weekly Sales", // Label under the total
                fontSize: "16px",
                color: "#6B7280", // Gray text color
                formatter: () => "100k", // Total sales value
              },
            },
          },
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (val) => `${val}`, // Show the value on hover
        },
      },
    },
  });

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        height={250}
      />
    </div>
  );
};

export default PieChart;
