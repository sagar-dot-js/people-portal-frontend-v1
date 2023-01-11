import React from "react";

const UpcommingHolidays = () => {
  return (
    <div className="w-full">
      <div className=" h-[80%]  flex flex-col px-10 py-5 gap-5">
        <div className="w-full h-[50px] flex">
          <div className="bg-[#FFFFFF] h-[50px] w-[60px] scale-125 rounded-full mr-5 flex flex-col items-center text-[#1765DC] text-[12px] border-2 border-[#1765DC] justify-center">
            <p>2</p>
            <p>Sat</p>
          </div>
          <div className="border scale-y-110 h-full w-full rounded-[8px] flex items-center p-2 gap-2">
            <div className="h-full w-1 bg-blue-500 rounded-lg custom-box-shadow1"></div>
            <p className="text-[20px] font-[500] ">Ganesh Chaturthi</p>
          </div>
        </div>

        {/*  */}
        <div className="w-full h-[50px] flex">
          <div className="bg-[#1765DC] h-[50px] w-[60px] rounded-full mr-5 flex flex-col items-center text-[#fff] text-[12px] justify-center">
            <p>2</p>
            <p>Sat</p>
          </div>
          <div className="border h-full w-full rounded-[8px] flex items-center p-2 gap-2">
            <div className="h-full w-1 bg-blue-500 rounded-lg"></div>{" "}
            <p className="">Ganesh Chaturthi</p>
          </div>
        </div>
        {/*  */}
        <div className="w-full h-[50px] flex">
          <div className="bg-[#1765DC] h-[50px] w-[60px] rounded-full mr-5 flex flex-col items-center text-[#fff] text-[12px]  justify-center">
            <p>2</p>
            <p>Sat</p>
          </div>
          <div className="border h-full w-full rounded-[8px] flex items-center p-2 gap-2">
            <div className="h-full w-1 bg-blue-500 rounded-lg"></div>{" "}
            <p className="">Ganesh Chaturthi</p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default UpcommingHolidays;
