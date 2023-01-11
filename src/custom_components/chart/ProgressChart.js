import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { RiArrowGoBackFill } from "react-icons/ri";

const ProgressChart = () => {
  return (
    <div className=" w-[200px] h-[200px]">
      <CircularProgressbarWithChildren
        value={75}
        strokeWidth={8}
        styles={buildStyles({
          pathColor: "#1765DC",
          trailColor: "#C5D8F6",
        })}
      >
        <div style={{ width: "83%", position: "absolute" }}>
          <CircularProgressbar
            value={60}
            styles={buildStyles({
              pathColor: "#25D059",
              trailColor: "#C9F3D5",
            })}
          />
        </div>
        <div style={{ width: "68%", position: "absolute" }}>
          <CircularProgressbar
            value={30}
            styles={buildStyles({
              pathColor: "#D63340",
              trailColor: "#F5CCCF",
            })}
          />
        </div>
      </CircularProgressbarWithChildren>
    </div>
    // <div className=" bg-blue-500 w-[200px] h-[200px] rounded-full flex items-center justify-center ">
    //   <div className=" w-[150px] h-[150px] rounded-full bg-[#fff] "></div>
    // </div>
  );
};

export default ProgressChart;
