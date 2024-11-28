import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Sales",
        data: [
          { x: "Jan", y: 4 },
          { x: "Feb", y: 3 },
          { x: "Mar", y: 10 },
          { x: "Apr", y: 9 },
          { x: "May", y: 29 },
          { x: "Jun", y: 19 },
        ],
      },
    ],
    options: {
      chart: {
        height: 250, // Reduced height of the chart
        type: "line",
      },
      stroke: {
        width: 5,
        curve: "smooth",
      },
      xaxis: {
        type: "category",
        tickAmount: 6,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={250} // Reduced height for the chart component
        />
      </div>
    </div>
  );
};

export default LineChart;
