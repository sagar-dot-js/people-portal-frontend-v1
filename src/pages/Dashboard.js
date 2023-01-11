import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
import Chip from "../components/Chips/Chip";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import LinkButton from "../components/LinkButton/LinkButton";
import AttendanceChart from "../custom_components/AttendanceChart";
import { GoPrimitiveDot } from "react-icons/go";
import { FaBeer } from "react-icons/fa";
import UpcommingHolidays from "../custom_components/UpcommingHolidays";
import Modal from "../components/Modal/Modal";
import { ModalContent } from "../components/Modal/Modal.style";
import Button from "../components/Button";
import Avatar from "../components/Avatar/Avatar";

let cardData = [
  {
    title: "Worked this month",
    subTitle: "24 Days",
  },
  {
    title: "Leave this month",
    subTitle: "00 Days",
  },
  {
    title: "Taken leave this year",
    subTitle: "04 Days",
  },
  {
    title: "Joining Date",
    subTitle: "03-12-2022",
  },
  {
    title: "Date of Birth",
    subTitle: "03-12-1999",
  },
];

let attendceCard_tableData = [
  {
    date: "14 Sept 2022",
    leaveType: "Sick Leave",
    status: true,
  },
  {
    date: "16 Sept 2022",
    leaveType: "Sick Leave",
    status: true,
  },
  {
    date: "17 Sept 2022",
    leaveType: "Sick Leave",
    status: true,
  },
  {
    date: "18 Sept 2022",
    leaveType: "Sick Leave",
    status: true,
  },
];

let SalaryCard_data = [
  {
    Date: "Oct 2022",
    InvoiceNo: "MHBP-8934-799",
    Status: true,
  },
  {
    Date: "Sept 2022",
    InvoiceNo: "MHBP-8934-799",
    Status: true,
  },
  {
    Date: "Aug 2022",
    InvoiceNo: "MHBP-8934-799",
    Status: true,
  },
];

const Dashboard = () => {
  return (
    <div className="custom-px ">
      <div className="flex justify-between  custom-py ">
        <div>
          <p className=" text-[32px] text-[#1765DC]">Dashboard</p>
          <p className="text-[#8CB5F3]">
            Welcome to <span className="text-[#1765DC]">Mirats </span>{" "}
            Employee’s Dashboard
          </p>
        </div>
        <div className=" flex gap-5">
          <div className=" cursor-pointer bg-[#1765DC] flex items-center px-[20px]  h-[56px] justify-between  gap-3 font-[600] counter-btn-active ">
            <div>
              {" "}
              <MdOutlineAccessTime className=" text-[40px]" />
            </div>
            <div>
              <p className="text-[16px]">Check In </p>
              <p className="text-[14px]">00:00:00 Hrs</p>
            </div>
          </div>
          <div className="  flex items-center px-[20px] h-[56px] justify-between  gap-3 font-[600] counter-btn-inactive ">
            <div>
              <MdOutlineAccessTime className=" text-[40px]" />
            </div>
            <div className="">
              <p className="text-[16px]">Break Time </p>
              <p className="text-[14px]">00:00:00 Hrs</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="flex justify-between  2xl:w-[70%] ">
          {cardData.map((item) => {
            return (
              <DisplayCard
                customWidth="200px"
                cardHeader={item.title}
                cardBody={item.subTitle}
                className="transition-transform duration-300 hover:scale-105"
              />
            );
          })}
        </div>
      </div>
      <div className="my-[50px] grid grid-cols-2 gap-[40px] ">
        <div className="h-[288px] custom-statCard">
          <div className="border-b flex items-end gap-4 px-10 py-4 h-[20%] ">
            <p className="text-[18px] text-[#333333] font-[600]"> Attendance</p>
            <a href="#" className="text-[12px] text-[#5C96EE]">
              Vilew All {">"}
            </a>
          </div>
          <div className=" h-[80%] flex justify-between">
            <div className="w-[50%]  overflow-hidden flex items-center justify-center ">
              <div>
                {" "}
                <AttendanceChart />
              </div>
            </div>
            <div className="w-[50%]  py-8">
              <div className="border-l pl-8 w-full h-full text-[#666666] ">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-5">
                    <GoPrimitiveDot className="text-2xl text-[#1765DC]" />
                    <p>Check In </p>
                    <p>07:10:07 AM</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <GoPrimitiveDot className="text-2xl text-[#F4C242]" />
                    <p>Check Out </p>
                    <p>07:10:07 AM</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <GoPrimitiveDot className="text-2xl text-[#B20000]" />
                    <p>Breaktime </p>
                    <p>07:10:07 AM</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <GoPrimitiveDot className="text-2xl text-[#1765DC]" />
                    <p>Overtime </p>
                    <p>07:10:07 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Upcomming Holiday */}
        <div className="h-[288px] custom-statCard">
          <div className="border-b flex items-end gap-4 px-10 py-4 h-[20%] ">
            <p className="text-[18px] font-[600] text-[#333333]">
              {" "}
              Upcomming Holiday
            </p>
            <a href="#" className="text-[12px] text-[#5C96EE]">
              Vilew All {">"}
            </a>
          </div>
          <UpcommingHolidays />
        </div>{" "}
        {/*  Leave Approval Status */}
        <div className="h-[288px] custom-statCard">
          <div className="border-b flex items-end gap-4 px-10 py-4">
            <p className="text-[18px] font-[600] text-[#333333]">
              {" "}
              Leave Approval Status{" "}
            </p>
            <a href="#" className="text-[12px] text-[#5C96EE]">
              Vilew All {">"}
            </a>
          </div>
          <div>
            <table id="leave-approval-table">
              <tr>
                <th>Date</th>
                <th></th>
                <th>Leave Type</th>
                <th></th>
                <th>Status</th>
              </tr>
              {attendceCard_tableData.map((item) => {
                return (
                  <tr>
                    <td>{item.date}</td>
                    <td></td>
                    <td> {item.leaveType}</td>
                    <td></td>
                    <td>
                      {" "}
                      <Chip variant="filled" color="success">
                        {item.status ? "Approved" : "Pending"}
                      </Chip>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>{" "}
        {/*  */}
        <div className="h-[288px] custom-statCard">
          <div className="border-b flex items-end gap-4 px-10 py-4">
            <p className="text-[18px] font-[600] text-[#333333]"> Salary</p>
            <a href="#" className="text-[12px] text-[#5C96EE]">
              Vilew All {">"}
            </a>
          </div>
          <div>
            <table id="leave-approval-table" className="">
              <tr>
                <th>Date</th>
                <th>Invoice No</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              {SalaryCard_data.map((item) => {
                return (
                  <tr>
                    <td>{item.Date}</td>
                    <td> {item.InvoiceNo}</td>
                    <td>
                      {" "}
                      <Chip variant="filled" color="success">
                        {item.Status ? "Approved" : "Pending"}
                      </Chip>
                    </td>
                    <td>
                      <LinkButton href="https://scalablecss.com/styled-components-global-styles/">
                        <AiOutlineDownload />
                      </LinkButton>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
