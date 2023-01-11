import React from "react";
import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";

import { Doughnut } from "react-chartjs-2";
import ProgressChart from "./chart/ProgressChart";

const data = {
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      borderWidth: "1",
      cutout: "110",
      radius: "100",

      backgroundColor: ["#1765DC", "#B20000", "#F4C242"],
      hoverOffset: 4,
    },
  ],
};

const AttendanceChart = () => {
  return (
    <div className=" h-full w-full ">
      <div className="flex items-center justify-center relative">
        {/* <div className="flex flex-col items-center absolute ">
          <p className="'text-[14px]">07 Jan 2022</p>
          <p className="text-[20px] font-[700]">00:00:00 HRS</p>
          <p className="text-[#44C900] text-[12px]">Late By 00:00:00</p>
        </div> */}
        <div className="w-full h-full">
          {" "}
          {/* <Doughnut data={data} /> */}
          <ProgressChart />
        </div>
      </div>
    </div>
  );
};

export default AttendanceChart;
