import React from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import SalarySlipCard from "../custom_components/SalarySlipCard";
import months from "../json-data/months.json";
import years from "../json-data/years.json";

const dropdownData = ["one", "two", "three"];
const newMonths = months.map((item) => {
  return { label: item.name };
});

let invoiceCardData = [
  {
    title: "January 2022",
    totalAmt: "123324",
    Deduction: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Deduction: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Deduction: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Deduction: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Deduction: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Dicution: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Deduction: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Dicution: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Deduction: "44676",
  },
  {
    title: "January 2022",
    totalAmt: "123324",
    Deduction: "44676",
  },
];

const Salary = () => {
  return (
    <div className=" custom-px mb-[100px] ">
      <div className="flex flex-col justify-between   custom-py ">
        <p className=" text-[32px] text-[#1765DC]">Salary</p>
        <p className="text-[#8CB5F3]">
          Welcome to <span className="text-[#1765DC]">Mirats </span> Employee’s
          Dashboard
        </p>
      </div>
      <div className="">
        <div className="flex items-end gap-5">
          <Dropdown dropdownText="Month" options={newMonths} />
          <Dropdown dropdownText="Year" options={years} />
          <a href="#" className="text-[#1765DC] underline">
            Clear Filter
          </a>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-5 2xl:grid-cols-6 gap-8">
        {invoiceCardData.map((item) => {
          return <SalarySlipCard data={item} />;
        })}
      </div>
    </div>
  );
};

export default Salary;
