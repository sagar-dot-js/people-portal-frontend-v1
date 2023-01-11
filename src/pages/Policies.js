import React, { useState } from "react";
import { Link } from "react-router-dom";
import PolicyCard from "../custom_components/PolicyCard";

let policyCardData = [
  {
    title: "Employee Grievance Policy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae turpis euismod molestie viverra eu, consequat tortor nisl facilisi. A turpis donec senectus",
  },
  {
    title: "Employee Code of Conduct Policy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae turpis euismod molestie viverra eu, consequat tortor nisl facilisi. A turpis donec senectus",
  },
  {
    title: "Flexible Working Hours Policy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae turpis euismod molestie viverra eu, consequat tortor nisl facilisi. A turpis donec senectus",
  },
  {
    title: "Employee Grievance Policy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae turpis euismod molestie viverra eu, consequat tortor nisl facilisi. A turpis donec senectus",
  },
  {
    title: "Employee Grievance Policy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae turpis euismod molestie viverra eu, consequat tortor nisl facilisi. A turpis donec senectus",
  },
  {
    title: "Flexible Working Hours Policy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae turpis euismod molestie viverra eu, consequat tortor nisl facilisi. A turpis donec senectus",
  },
  {
    title: "Employee Grievance Policy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae turpis euismod molestie viverra eu, consequat tortor nisl facilisi. A turpis donec senectus",
  },
  {
    title: "Employee Grievance Policy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae turpis euismod molestie viverra eu, consequat tortor nisl facilisi. A turpis donec senectus",
  },
];

const Policies = () => {
  return (
    <div className=" custom-px mb-[100px] ">
      <div className="flex flex-col justify-between   custom-py ">
        <p className=" text-[32px] text-[#1765DC]">Policies</p>
        <p className="text-[#8CB5F3]">
          Welcome to <span className="text-[#1765DC]">Mirats </span> Employee’s
          Policies
        </p>
      </div>

      <div className="mt-5 grid grid-cols-3 2xl:grid-cols-5 gap-5 ">
        {/* <PolicyCard /> */}
        {policyCardData.map((item) => {
          return (
            <Link to="/employee-grievance-policy">
              {" "}
              <PolicyCard data={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Policies;
