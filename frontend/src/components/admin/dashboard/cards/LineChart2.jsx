import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart2 = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Growth",
        data: [10, 15, 8, 20, 18, 30, 40], // Data points for the growth
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 100, // Adjust chart height
        toolbar: {
          show: false, // Hides extra toolbar
        },
      },
      stroke: {
        curve: "smooth", // Makes the line smooth
        width: 3, // Thickness of the line
        colors: ["#22C55E"], // Green line color
      },
      fill: {
        // type: "gradient", // Adds gradient fill
        gradient: {
          shade: "",
          type: "vertical",
          //   shadeIntensity: 0.7,
          //   opacityFrom: 0.8, // Starting opacity
          //   opacityTo: 0.9, // Fading out
          stops: [0, 100], // Gradient stops
          colorStops: [
            {
              offset: 0,
              color: "green", // Green for the fill gradient
              opacity: 0.4,
            },
            {
              offset: 100,
              color: "green",
              opacity: 0.1,
            },
          ],
        },
      },
      grid: {
        show: false, // Removes gridlines
      },
      xaxis: {
        labels: {
          show: false, // Hides x-axis labels
        },
        axisBorder: {
          show: false, // Removes x-axis border
        },
        axisTicks: {
          show: false, // Removes x-axis ticks
        },
      },
      yaxis: {
        show: false, // Hides y-axis
      },
      tooltip: {
        enabled: false, // Disables tooltips
      },
      markers: {
        size: 0, // Hides data point markers
      },
    },
  });

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={100}
      />
      <div
        style={{ textAlign: "center", marginTop: "-10px", color: "#6B7280" }}
      >
        Total Growth
      </div>
    </div>
  );
};

export default LineChart2;
